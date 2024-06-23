import { c as clerkClient } from "./chunk-HL5AUPGI__e4qPoPY.mjs";
import "@clerk/backend";
import { createClerkRequest, constants, AuthStatus, createRedirect, signedOutAuthObject, signedInAuthObject } from "@clerk/backend/internal";
import { decodeJwt } from "@clerk/backend/jwt";
import { handleValueOrFn, isHttpOrHttps, isDevelopmentFromSecretKey, DEV_BROWSER_JWT_KEY, setDevBrowserJWTInURL } from "@clerk/shared";
import { createDevOrStagingUrlCache } from "@clerk/shared/keys";
import "@clerk/shared/proxy";
import "@clerk/shared/url";
import { pathToRegexp } from "path-to-regexp";
import { serialize, parse } from "cookie";
import { A as AstroError, R as ResponseSentError } from "./astro/assets-service_C9ni2zx6.mjs";
async function createAsyncLocalStorage() {
  if (typeof window === "undefined") {
    const { AsyncLocalStorage } = await import("node:async_hooks");
    return new AsyncLocalStorage();
  }
  return {};
}
var authAsyncStorage = await createAsyncLocalStorage();
function getAuthKeyFromRequest(req, key) {
  return getHeader(req, constants.Headers[key]);
}
function getHeader(req, name) {
  return req.headers.get(name);
}
var isRedirect = (res) => {
  return [300, 301, 302, 303, 304, 307, 308].includes(res.status) || res.headers.get(constants.Headers.ClerkRedirectTo) === "true";
};
var setHeader = (res, name, val) => {
  res.headers.set(name, val);
  return res;
};
function getContextEnvVar(envVarName, contextOrLocals) {
  const locals = "locals" in contextOrLocals ? contextOrLocals.locals : contextOrLocals;
  if (locals?.runtime?.env) {
    return locals.runtime.env[envVarName];
  }
  return Object.assign({ "PUBLIC_SUPABASE_URL": "https://gvcpyhkcnsqchooabnez.supabase.co", "PUBLIC_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2Y3B5aGtjbnNxY2hvb2FibmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MTc0MDksImV4cCI6MjAzMzM5MzQwOX0.5wgArzHHIsCnsf8dzroOjTLzIeMASUaTmyt5pHGvNGQ", "PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY": "pk_test_aW1tdW5lLWVsZXBoYW50LTc2LmNsZXJrLmFjY291bnRzLmRldiQ", "PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL": "/sign-in", "PUBLIC_ASTRO_APP_CLERK_SIGN_UP_URL": "/sign-up", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://skyfusion.dev", "ASSETS_PREFIX": void 0 }, { CLERK_SECRET_KEY: "sk_test_p0o1YVmaNUCSs2nPei3FeaE1rw8L6BsM7ozF40u8gF", PUBLIC: process.env.PUBLIC, Path: process.env.Path })[envVarName];
}
function getSafeEnv(context) {
  const envVars = {
    domain: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_DOMAIN", context),
    isSatellite: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_IS_SATELLITE", context) === "true",
    proxyUrl: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_PROXY_URL", context),
    pk: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY", context),
    sk: getContextEnvVar("CLERK_SECRET_KEY", context),
    signInUrl: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL", context),
    clerkJsUrl: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_JS_URL", context),
    clerkJsVariant: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_JS_VARIANT", context),
    clerkJsVersion: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_JS_VERSION", context),
    apiVersion: getContextEnvVar("CLERK_API_VERSION", context),
    apiUrl: getContextEnvVar("CLERK_API_URL", context)
  };
  return envVars;
}
function getClientSafeEnv(context) {
  const envVars = {
    domain: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_DOMAIN", context),
    isSatellite: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_IS_SATELLITE", context) === "true",
    proxyUrl: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_PROXY_URL", context),
    publishableKey: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_PUBLISHABLE_KEY", context),
    signInUrl: getContextEnvVar("PUBLIC_ASTRO_APP_CLERK_SIGN_IN_URL", context)
  };
  return envVars;
}
var createGetAuth = ({ noAuthStatusMessage }) => {
  return (req, locals, opts) => {
    const authToken = locals.authToken || getAuthKeyFromRequest(req, "AuthToken");
    const authStatus = locals.authStatus || getAuthKeyFromRequest(req, "AuthStatus");
    const authMessage = locals.authMessage || getAuthKeyFromRequest(req, "AuthMessage");
    const authReason = locals.authReason || getAuthKeyFromRequest(req, "AuthReason");
    if (!authStatus) {
      throw new Error(noAuthStatusMessage);
    }
    const options = {
      authStatus,
      apiUrl: getSafeEnv(locals).apiUrl,
      apiVersion: getSafeEnv(locals).apiVersion,
      authMessage,
      secretKey: opts?.secretKey || getSafeEnv(locals).sk,
      authReason
    };
    if (authStatus !== AuthStatus.SignedIn) {
      return signedOutAuthObject(options);
    }
    const jwt = decodeJwt(authToken);
    return signedInAuthObject({ ...options, sessionToken: jwt.raw.text }, jwt.payload);
  };
};
var authAuthHeaderMissing = (helperName = "auth") => `Clerk: ${helperName}() was called but Clerk can't detect usage of authMiddleware(). Please ensure the following:
    - authMiddleware() is used in your Next.js Middleware.
    - Your Middleware matcher is configured to match this route or page.
    - If you are using the src directory, make sure the Middleware file is inside of it.
    
    For more details, see https://clerk.com/docs/quickstarts/get-started-with-nextjs
    `;
var getAuth = createGetAuth({
  noAuthStatusMessage: authAuthHeaderMissing("getAuth")
});
var createCurrentUser = (req, locals) => {
  return async () => {
    const { userId } = getAuth(req, locals);
    if (!userId)
      return null;
    return clerkClient.users.getUser(userId);
  };
};
var serverRedirectWithAuth = (context, clerkRequest, res, opts) => {
  const location = res.headers.get("location");
  const shouldAppendDevBrowser = res.headers.get(constants.Headers.ClerkRedirectTo) === "true";
  if (shouldAppendDevBrowser && !!location && isDevelopmentFromSecretKey(opts.secretKey || getSafeEnv(context).sk) && clerkRequest.clerkUrl.isCrossOrigin(location)) {
    const dbJwt = clerkRequest.cookies.get(DEV_BROWSER_JWT_KEY) || "";
    const url = new URL(location);
    const urlWithDevBrowser = setDevBrowserJWTInURL(url, dbJwt);
    return context.redirect(urlWithDevBrowser.href, 307);
  }
  return res;
};
createDevOrStagingUrlCache();
var CONTROL_FLOW_ERROR = {
  REDIRECT_TO_SIGN_IN: "CLERK_PROTECT_REDIRECT_TO_SIGN_IN"
};
var clerkMiddleware = (...args) => {
  const [handler, options] = parseHandlerAndOptions(args);
  const astroMiddleware = async (context, next) => {
    const clerkRequest = createClerkRequest(context.request);
    const requestState = await clerkClient.authenticateRequest(
      clerkRequest,
      createAuthenticateRequestOptions(clerkRequest, options, context)
    );
    const locationHeader = requestState.headers.get(constants.Headers.Location);
    if (locationHeader) {
      const res = new Response(null, { status: 307, headers: requestState.headers });
      return decorateResponseWithObservabilityHeaders(res, requestState);
    } else if (requestState.status === AuthStatus.Handshake) {
      throw new Error("Clerk: handshake status without redirect");
    }
    const authObject = requestState.toAuth();
    const redirectToSignIn = createMiddlewareRedirectToSignIn(clerkRequest);
    const authObjWithMethods = Object.assign(authObject, { redirectToSignIn });
    decorateAstroLocal(context.request, context.locals, requestState);
    return authAsyncStorage.run(context.locals.auth(), async () => {
      let handlerResult;
      try {
        handlerResult = await handler?.(() => authObjWithMethods, context, next) || await next();
      } catch (e) {
        handlerResult = handleControlFlowErrors(e, clerkRequest, requestState, context);
      }
      if (isRedirect(handlerResult)) {
        return serverRedirectWithAuth(context, clerkRequest, handlerResult, options);
      }
      const response = await decorateRequest(context.locals, handlerResult, requestState);
      if (requestState.headers) {
        requestState.headers.forEach((value, key) => {
          response.headers.append(key, value);
        });
      }
      return response;
    });
  };
  return astroMiddleware;
};
var parseHandlerAndOptions = (args) => {
  return [
    typeof args[0] === "function" ? args[0] : void 0,
    (args.length === 2 ? args[1] : typeof args[0] === "function" ? {} : args[0]) || {}
  ];
};
var createAuthenticateRequestOptions = (clerkRequest, options, context) => {
  return {
    ...options,
    secretKey: options.secretKey || getSafeEnv(context).sk,
    publishableKey: options.publishableKey || getSafeEnv(context).pk,
    ...handleMultiDomainAndProxy(clerkRequest, options, context)
  };
};
var decorateResponseWithObservabilityHeaders = (res, requestState) => {
  requestState.message && res.headers.set(constants.Headers.AuthMessage, encodeURIComponent(requestState.message));
  requestState.reason && res.headers.set(constants.Headers.AuthReason, encodeURIComponent(requestState.reason));
  requestState.status && res.headers.set(constants.Headers.AuthStatus, encodeURIComponent(requestState.status));
  return res;
};
var handleMultiDomainAndProxy = (clerkRequest, opts, context) => {
  const relativeOrAbsoluteProxyUrl = handleValueOrFn(
    opts?.proxyUrl,
    clerkRequest.clerkUrl,
    getSafeEnv(context).proxyUrl
  );
  let proxyUrl;
  if (!!relativeOrAbsoluteProxyUrl && !isHttpOrHttps(relativeOrAbsoluteProxyUrl)) {
    proxyUrl = new URL(relativeOrAbsoluteProxyUrl, clerkRequest.clerkUrl).toString();
  } else {
    proxyUrl = relativeOrAbsoluteProxyUrl;
  }
  const isSatellite = handleValueOrFn(opts.isSatellite, new URL(clerkRequest.url), getSafeEnv(context).isSatellite);
  const domain = handleValueOrFn(opts.domain, new URL(clerkRequest.url), getSafeEnv(context).domain);
  const signInUrl = opts?.signInUrl || getSafeEnv(context).signInUrl;
  if (isSatellite && !proxyUrl && !domain) {
    throw new Error(missingDomainAndProxy);
  }
  if (isSatellite && !isHttpOrHttps(signInUrl) && isDevelopmentFromSecretKey(opts.secretKey || getSafeEnv(context).sk)) {
    throw new Error(missingSignInUrlInDev);
  }
  return {
    proxyUrl,
    isSatellite,
    domain,
    signInUrl
  };
};
var missingDomainAndProxy = `
Missing domain and proxyUrl. A satellite application needs to specify a domain or a proxyUrl.

1) With middleware
   e.g. export default authMiddleware({domain:'YOUR_DOMAIN',isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_DOMAIN='YOUR_DOMAIN'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'
   `;
var missingSignInUrlInDev = `
Invalid signInUrl. A satellite application requires a signInUrl for development instances.
Check if signInUrl is missing from your configuration or if it is not an absolute URL

1) With middleware
   e.g. export default authMiddleware({signInUrl:'SOME_URL', isSatellite:true});
2) With environment variables e.g.
   NEXT_PUBLIC_CLERK_SIGN_IN_URL='SOME_URL'
   NEXT_PUBLIC_CLERK_IS_SATELLITE='true'`;
function decorateAstroLocal(req, locals, requestState) {
  const { reason, message, status, token } = requestState;
  locals.authToken = token;
  locals.authStatus = status;
  locals.authMessage = message;
  locals.authReason = reason;
  locals.auth = () => getAuth(req, locals);
  locals.currentUser = createCurrentUser(req, locals);
}
async function decorateRequest(locals, res, requestState) {
  const { reason, message, status, token } = requestState;
  res.headers.set(constants.Headers.AuthToken, token || "");
  res.headers.set(constants.Headers.AuthStatus, status);
  res.headers.set(constants.Headers.AuthMessage, message || "");
  res.headers.set(constants.Headers.AuthReason, reason || "");
  if (res.headers.get("content-type") === "text/html") {
    const reader = res.body?.getReader();
    const stream = new ReadableStream({
      async start(controller) {
        let { value, done } = await reader.read();
        const encoder = new TextEncoder();
        const decoder = new TextDecoder();
        while (!done) {
          const decodedValue = decoder.decode(value);
          if (decodedValue.includes("</head>")) {
            const [p1, p2] = decodedValue.split("</head>");
            controller.enqueue(encoder.encode(p1));
            controller.enqueue(
              encoder.encode(
                `<script id="__CLERK_ASTRO_DATA__" type="application/json">${JSON.stringify(locals.auth())}<\/script>
`
              )
            );
            controller.enqueue(
              encoder.encode(
                `<script id="__CLERK_ASTRO_SAFE_VARS__" type="application/json">${JSON.stringify(getClientSafeEnv(locals))}<\/script>
`
              )
            );
            controller.enqueue(encoder.encode("</head>"));
            controller.enqueue(encoder.encode(p2));
          } else {
            controller.enqueue(value);
          }
          ({ value, done } = await reader.read());
        }
        controller.close();
      }
    });
    const modifiedResponse = new Response(stream, {
      status: res.status,
      statusText: res.statusText,
      headers: res.headers
    });
    return modifiedResponse;
  }
  return res;
}
var redirectAdapter = (url) => {
  const res = new Response(null, {
    status: 307
  });
  setHeader(res, constants.Headers.ClerkRedirectTo, "true");
  return setHeader(res, "Location", url instanceof URL ? url.href : url);
};
var createMiddlewareRedirectToSignIn = (clerkRequest) => {
  return (opts = {}) => {
    const err = new Error(CONTROL_FLOW_ERROR.REDIRECT_TO_SIGN_IN);
    err.returnBackUrl = opts.returnBackUrl === null ? "" : opts.returnBackUrl || clerkRequest.clerkUrl.toString();
    throw err;
  };
};
var handleControlFlowErrors = (e, clerkRequest, requestState, context) => {
  switch (e.message) {
    case CONTROL_FLOW_ERROR.REDIRECT_TO_SIGN_IN:
      return createRedirect({
        redirectAdapter,
        baseUrl: clerkRequest.clerkUrl,
        signInUrl: requestState.signInUrl,
        signUpUrl: requestState.signUpUrl,
        publishableKey: getSafeEnv(context).pk
      }).redirectToSignIn({ returnBackUrl: e.returnBackUrl });
    default:
      throw e;
  }
};
var createRouteMatcher = (routes) => {
  const routePatterns = [routes || ""].flat().filter(Boolean);
  const matchers = precomputePathRegex(routePatterns);
  return (req) => matchers.some((matcher) => matcher.test(new URL(req.url).pathname));
};
var precomputePathRegex = (patterns) => {
  return patterns.map((pattern) => pattern instanceof RegExp ? pattern : paths.toRegexp(pattern));
};
var paths = {
  toRegexp: (path) => {
    try {
      return pathToRegexp(path);
    } catch (e) {
      throw new Error(
        `Invalid path: ${path}.
Consult the documentation of path-to-regexp here: https://github.com/pillarjs/path-to-regexp
${e.message}`
      );
    }
  }
};
const isProtectedPage = createRouteMatcher(["/user(.*)", "/dashboard(.*)"]);
const isPublicRoute = createRouteMatcher(["/training(.*)"]);
const onRequest$1 = clerkMiddleware((auth, context, next) => {
  if (isPublicRoute(context.request)) {
    return next();
  }
  if (isProtectedPage(context.request) && !auth().userId) {
    return auth().redirectToSignIn();
  }
  return next();
});
const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol = Symbol.for("astro.responseSent");
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false") return false;
    if (this.value === "0") return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  #request;
  #requestValues;
  #outgoing;
  #consumed;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
    this.#consumed = false;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const {
      // @ts-expect-error
      maxAge: _ignoredMaxAge,
      // @ts-expect-error
      expires: _ignoredExpires,
      ...sanitizedOptions
    } = options || {};
    const serializeOptions = {
      expires: DELETED_EXPIRATION,
      ...sanitizedOptions
    };
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      serialize(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key, options = void 0) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return void 0;
      }
    }
    const values = this.#ensureParsed(options);
    if (key in values) {
      const value = values[key];
      return new AstroCookie(value);
    }
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @returns
   */
  has(key, options = void 0) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed(options);
    return !!values[key];
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    if (this.#consumed) {
      const warning = new Error(
        "Astro.cookies.set() was called after the cookies had already been sent to the browser.\nThis may have happened if this method was called in an imported component.\nPlease make sure that Astro.cookies.set() is only called in the frontmatter of the main page."
      );
      warning.name = "Warning";
      console.warn(warning);
    }
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      serialize(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null) return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  /**
   * Behaves the same as AstroCookies.prototype.headers(),
   * but allows a warning when cookies are set after the instance is consumed.
   */
  static consume(cookies) {
    cookies.#consumed = true;
    return cookies.headers();
  }
  #ensureParsed(options = void 0) {
    if (!this.#requestValues) {
      this.#parse(options);
    }
    if (!this.#requestValues) {
      this.#requestValues = {};
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse(options = void 0) {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = parse(raw, options);
  }
}
function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    return defineMiddleware((_context, next) => {
      return next();
    });
  }
  return defineMiddleware((context, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async (payload) => {
        if (i < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request) {
              newRequest = payload;
            } else if (payload instanceof URL) {
              newRequest = new Request(payload, handleContext.request);
            } else {
              newRequest = new Request(
                new URL(payload, handleContext.url.origin),
                handleContext.request
              );
            }
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.cookies = new AstroCookies(newRequest);
          }
          return applyHandle(i + 1, handleContext);
        } else {
          return next(payload ?? carriedPayload);
        }
      });
      return result;
    }
  });
}
function defineMiddleware(fn) {
  return fn;
}
const onRequest = sequence(
  onRequest$1
);
export {
  AstroCookies as A,
  defineMiddleware as d,
  onRequest as o,
  sequence as s
};