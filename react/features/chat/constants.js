// @flow

export const CHAT_VIEW_MODAL_ID = 'chatView';

/**
 * The size of the chat.
 */
export const CHAT_SIZE_WIDTH = 375;
export const CHAT_SIZE_HEIGHT = 500;

/**
 * The audio ID of the audio element for which the {@link playAudio} action is
 * triggered when new chat message is received.
 *
 * @type {string}
 */
export const INCOMING_MSG_SOUND_ID = 'INCOMING_MSG_SOUND';

/**
 * The {@code messageType} of error (system) messages.
 */
export const MESSAGE_TYPE_ERROR = 'error';

/**
 * The {@code messageType} of local messages.
 */
export const MESSAGE_TYPE_LOCAL = 'local';

/**
 * The {@code messageType} of remote messages.
 */
export const MESSAGE_TYPE_REMOTE = 'remote';
