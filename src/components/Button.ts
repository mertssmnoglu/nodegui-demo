import { QPushButton, QIcon } from '@nodegui/nodegui';
import { BaseComponent } from './BaseComponent';

/**
 * Button component with fluent API
 */
export class Button extends BaseComponent<QPushButton> {
  constructor(text: string = '') {
    super(new QPushButton());
    if (text) {
      this.setText(text);
    }
  }

  /**
   * Set button text
   */
  public setText(text: string): this {
    this.widget.setText(text);
    return this;
  }

  /**
   * Set button icon
   */
  public setIcon(iconPath: string): this {
    this.widget.setIcon(new QIcon(iconPath));
    return this;
  }

  /**
   * Add click event listener
   */
  public onClick(callback: () => void): this {
    this.widget.addEventListener('clicked', callback);
    return this;
  }
}
