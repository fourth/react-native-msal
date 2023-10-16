package com.microsoft.identity.common.internal.ui.webview;

import android.content.Context;
import android.util.AttributeSet;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.reactnativemsal.RNMSALModule;

public class MSALWebView extends WebView {
    public MSALWebView(Context context) {
        super(context);
    }

    public MSALWebView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public MSALWebView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public MSALWebView(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
    }

    public MSALWebView(Context context, AttributeSet attrs, int defStyleAttr, boolean privateBrowsing) {
        super(context, attrs, defStyleAttr, privateBrowsing);
    }

    @Override
    public void setWebViewClient(WebViewClient client) {
        AzureActiveDirectoryWebViewClient azureClient=((AzureActiveDirectoryWebViewClient)client);
        super.setWebViewClient(new MSALWebViewClient(azureClient.getActivity(), azureClient.getCompletionCallback(), new OnPageLoadedCallback() {
            @Override
            public void onPageLoaded() {
            }
        }, new OnPageCommitVisibleCallback() {
            @Override
            public void onPageCommitVisible() {
            }
        }, RNMSALModule.redirectUrl, azureClient));
    }

}
