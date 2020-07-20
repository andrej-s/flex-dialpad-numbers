import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

const numbers = require('./numberConfig.json').numbers;

const PLUGIN_NAME = 'DialerNumberpickerPlugin';

export default class DialerNumberpickerPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.Actions.replaceAction('StartOutboundCall', (payload, original) => {
      return new Promise((resolve, reject) => {
        let prefixMatch = numbers.find(element => {
          let prefixRegex = new RegExp(element.prefixRegex);
          return prefixRegex.test(payload.destination);
        })
        resolve(prefixMatch.callerId);
      }).then((callerId) => {
        original({...payload, callerId: callerId})
      });
    });

  }


}
