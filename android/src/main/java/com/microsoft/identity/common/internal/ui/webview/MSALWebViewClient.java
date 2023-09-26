package com.microsoft.identity.common.internal.ui.webview;

import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.util.Log;
import android.webkit.WebResourceRequest;
import android.webkit.WebView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;

import com.microsoft.identity.common.WarningType;
import com.microsoft.identity.common.internal.ui.webview.challengehandlers.IAuthorizationCompletionCallback;
import com.microsoft.identity.common.internal.util.StringUtil;
import com.reactnativemsal.RNMSALModule;

public class MSALWebViewClient extends AzureActiveDirectoryWebViewClient {
    public AzureActiveDirectoryWebViewClient originalAzureActiveDirectoryWebViewClient;

    public MSALWebViewClient(@NonNull Activity activity, @NonNull IAuthorizationCompletionCallback completionCallback, @NonNull OnPageLoadedCallback pageLoadedCallback, @NonNull String redirectUrl) {
        super(activity, completionCallback, pageLoadedCallback, redirectUrl);
    }

    public MSALWebViewClient(@NonNull Activity activity, @NonNull IAuthorizationCompletionCallback completionCallback, @NonNull OnPageLoadedCallback pageLoadedCallback, @Nullable OnPageCommitVisibleCallback pageCommitVisibleCallback, @NonNull String redirectUrl, AzureActiveDirectoryWebViewClient original) {
        super(activity, completionCallback, pageLoadedCallback, pageCommitVisibleCallback, redirectUrl);
        originalAzureActiveDirectoryWebViewClient = original;

    }

    @Override
    public void onPageCommitVisible(final WebView view, final String url) {
        originalAzureActiveDirectoryWebViewClient.onPageCommitVisible(view, url);
    }

    @SuppressWarnings(WarningType.deprecation_warning)
    @Override
    public boolean shouldOverrideUrlLoading(final WebView view, final String requestUrl) {
        if (StringUtil.isEmpty(requestUrl)) {
            throw new IllegalArgumentException("Redirect to empty url in web view.");
        }
        if(isRecognizedPolicyUrl(requestUrl))
        {
            return false;
        }
        return super.shouldOverrideUrlLoading(view, requestUrl);
    }

    @Override
    @TargetApi(Build.VERSION_CODES.N)
    @RequiresApi(Build.VERSION_CODES.N)
    public boolean shouldOverrideUrlLoading(final WebView view, final WebResourceRequest request) {
        final Uri requestUrl = request.getUrl();
        if(isRecognizedPolicyUrl(requestUrl.toString()))
        {
            return false;
        }
        return super.shouldOverrideUrlLoading(view, request);
    }

    private boolean isRecognizedPolicyUrl(String requestUrl) {
        for (String recognizedPolicy : RNMSALModule.recognizedPolicies) {
            if (requestUrl.toLowerCase().contains(recognizedPolicy.toLowerCase())) {
                Intent intent = new Intent(Intent.ACTION_VIEW);
                intent.setData(Uri.parse(RNMSALModule.POLICY_CHANGE_DATA));
                intent.putExtra(RNMSALModule.URL_KEY, requestUrl);
                getActivity().startActivity(intent);
                return true;
            }
        }
        return false;
    }
}
