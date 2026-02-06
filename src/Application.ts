import { QMainWindow, QWidget, QBoxLayout, Direction } from "@nodegui/nodegui";
import { defaultStyles, generateStyleSheet } from "./config/styles";
import { BaseComponent } from "./components";
import { IApplicationConfig } from "./types";

/**
 * Main application class that manages the window and layout
 */
export class Application {
    private window: QMainWindow;
    private centralWidget: QWidget;
    private layout: QBoxLayout;
    private config: IApplicationConfig;

    constructor(config: IApplicationConfig = {}) {
        this.config = {
            title: config.title || "NodeGUI Application",
            styles: config.styles || defaultStyles,
        };

        this.window = new QMainWindow();
        this.centralWidget = new QWidget();
        this.layout = new QBoxLayout(Direction.TopToBottom);

        this.initialize();
    }

    /**
     * Initialize the application window
     */
    private initialize(): void {
        this.window.setWindowTitle(this.config.title!);
        this.centralWidget.setObjectName("myroot");
        this.centralWidget.setLayout(this.layout);
        this.window.setCentralWidget(this.centralWidget);
        this.window.setStyleSheet(generateStyleSheet(this.config.styles!));
    }

    /**
     * Add a component to the layout
     */
    public addComponent(component: BaseComponent): this {
        this.layout.addWidget(component.getWidget());
        return this;
    }

    /**
     * Add multiple components at once
     */
    public addComponents(...components: BaseComponent[]): this {
        components.forEach((component) => this.addComponent(component));
        return this;
    }

    /**
     * Set the layout direction
     */
    public setLayoutDirection(direction: Direction): this {
        this.layout.setDirection(direction);
        return this;
    }

    /**
     * Get the main window instance
     */
    public getWindow(): QMainWindow {
        return this.window;
    }

    /**
     * Show the application window
     */
    public show(): this {
        this.window.show();
        // Keep reference to prevent garbage collection
        (global as any).win = this.window;
        return this;
    }

    /**
     * Set window title
     */
    public setTitle(title: string): this {
        this.window.setWindowTitle(title);
        return this;
    }

    /**
     * Apply custom stylesheet
     */
    public setStyleSheet(stylesheet: string): this {
        this.window.setStyleSheet(stylesheet);
        return this;
    }
}
