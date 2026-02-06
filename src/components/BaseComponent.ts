import { QWidget } from "@nodegui/nodegui";

/**
 * Base component class that provides common functionality for all UI components
 */
export abstract class BaseComponent<T extends QWidget = QWidget> {
    protected widget: T;

    constructor(widget: T) {
        this.widget = widget;
    }

    /**
     * Get the underlying QWidget
     */
    public getWidget(): T {
        return this.widget;
    }

    /**
     * Set object name for styling
     */
    public setObjectName(name: string): this {
        this.widget.setObjectName(name);
        return this;
    }

    /**
     * Set inline styles
     */
    public setInlineStyle(style: string): this {
        this.widget.setInlineStyle(style);
        return this;
    }

    /**
     * Show the widget
     */
    public show(): this {
        this.widget.show();
        return this;
    }

    /**
     * Hide the widget
     */
    public hide(): this {
        this.widget.hide();
        return this;
    }
}
