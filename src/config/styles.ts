/**
 * Application style configuration
 * Centralized styles for easy customization and maintenance
 */

import { IStyleConfig } from 'src/types'

/**
 * Default style configuration
 */
export const defaultStyles: IStyleConfig = {
  root: {
    backgroundColor: '#009688',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '1',
  },
  labelAlt: {
    color: 'red',
  },
};

/**
 * Generate stylesheet from config
 */
export function generateStyleSheet(config: IStyleConfig): string {
  return `
    #myroot {
      background-color: ${config.root.backgroundColor};
      height: '${config.root.height}';
      align-items: '${config.root.alignItems}';
      justify-content: '${config.root.justifyContent}';
    }
    #mylabel {
      font-size: ${config.label.fontSize};
      font-weight: ${config.label.fontWeight};
      padding: ${config.label.padding};
    }
  `;
}
