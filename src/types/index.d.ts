export interface IStyleConfig {
    root: {
        backgroundColor: string;
        height: string;
        alignItems: string;
        justifyContent: string;
    };
    label: {
        fontSize: string;
        fontWeight: string;
        padding: string;
    };
    labelAlt: {
        color: string;
    };
}

export interface IApplicationConfig {
    title?: string;
    styles?: IStyleConfig;
}

export interface MotorPosition {
    x: number;
    y: number;
    direction: "left" | "right" | "up" | "down" | "idle";
}
