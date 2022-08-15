/**
 * OIDC prompt parameter that specifies whether the Authorization Server prompts the
 * End-User for reauthentication and consent.
 */
export var MSALPromptType;
(function (MSALPromptType) {
    /**
     * If no user is specified the authentication webview will present a list of users
     * currently signed in for the user to select among.
     */
    MSALPromptType[MSALPromptType["SELECT_ACCOUNT"] = 0] = "SELECT_ACCOUNT";
    /**
     * Require the user to authenticate in the webview.
     */
    MSALPromptType[MSALPromptType["LOGIN"] = 1] = "LOGIN";
    /**
     * Require the user to consent to the current set of scopes for the request.
     */
    MSALPromptType[MSALPromptType["CONSENT"] = 2] = "CONSENT";
    /**
     * The SSO experience will be determined by the presence of cookies in the webview and
     * account type. User won’t be prompted unless necessary. If multiple users are signed in,
     * select account experience will be presented.
     */
    MSALPromptType[MSALPromptType["WHEN_REQUIRED"] = 3] = "WHEN_REQUIRED";
    /**
     * Default is MSALPromptType.WHEN_REQUIRED.
     */
    MSALPromptType[MSALPromptType["DEFAULT"] = 3] = "DEFAULT";
})(MSALPromptType || (MSALPromptType = {}));
/**
 * See https://developer.apple.com/documentation/uikit/uimodalpresentationstyle
 */
export var Ios_ModalPresentationStyle;
(function (Ios_ModalPresentationStyle) {
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["fullScreen"] = 0] = "fullScreen";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["pageSheet"] = 1] = "pageSheet";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["formSheet"] = 2] = "formSheet";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["currentContext"] = 3] = "currentContext";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["custom"] = 4] = "custom";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["overFullScreen"] = 5] = "overFullScreen";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["overCurrentContext"] = 6] = "overCurrentContext";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["popover"] = 7] = "popover";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["blurOverFullScreen"] = 8] = "blurOverFullScreen";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["none"] = -1] = "none";
    Ios_ModalPresentationStyle[Ios_ModalPresentationStyle["automatic"] = -2] = "automatic";
})(Ios_ModalPresentationStyle || (Ios_ModalPresentationStyle = {}));
/**
 * See https://azuread.github.io/microsoft-authentication-library-for-objc/Enums/MSALWebviewType.html
 */
export var Ios_MSALWebviewType;
(function (Ios_MSALWebviewType) {
    Ios_MSALWebviewType[Ios_MSALWebviewType["DEFAULT"] = 0] = "DEFAULT";
    Ios_MSALWebviewType[Ios_MSALWebviewType["AUTHENTICATION_SESSION"] = 1] = "AUTHENTICATION_SESSION";
    Ios_MSALWebviewType[Ios_MSALWebviewType["SAFARI_VIEW_CONTROLLER"] = 2] = "SAFARI_VIEW_CONTROLLER";
    Ios_MSALWebviewType[Ios_MSALWebviewType["WK_WEB_VIEW"] = 3] = "WK_WEB_VIEW";
})(Ios_MSALWebviewType || (Ios_MSALWebviewType = {}));
//# sourceMappingURL=types.js.map