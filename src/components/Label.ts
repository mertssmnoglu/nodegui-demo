import { QLabel } from "@nodegui/nodegui";
import { BaseComponent } from "./BaseComponent";

/**
 * Label component with fluent API
 */
export class Label extends BaseComponent<QLabel> {
    constructor(text: string = "") {
        super(new QLabel());
        if (text) {
            this.setText(text);
        }
    }

    /**
     * Set the label text
     */
    public setText(text: string): this {
        this.widget.setText(text);
        return this;
    }

    /**
     * Get the label text
     */
    public getText(): string {
        return this.widget.text();
    }
}
