import sourceMapSupport from "source-map-support";
import { Application } from "./Application";
import { Label, Button } from "./components";
import { defaultStyles } from "./config/styles";
import { MotorController } from "./lib/MotorController";

sourceMapSupport.install();

function main(): void {
    console.log("[DEBUG] Application starting...");
    console.log("hello world test1");

    // Initialize motor controller directly
    const motor = new MotorController();

    // Execute motor control commands
    motor.stepLeft(3);
    motor.stepRight(5);
    motor.stepUp(2);
    motor.stepDown(1);

    const position = motor.getPosition();
    console.log("Current motor position:", position);

    motor.moveTo(10, 15);
    motor.setStepSize(2);
    motor.stepLeft(2);

    const status = motor.getStatus();
    console.log("Motor status:", status);

    // Create the counter application
    const app = new Application({
        title: "Counter App",
        styles: defaultStyles,
    });

    // Initialize counter state
    let counter = 0;
    console.log(`[DEBUG] Initial counter value: ${counter}`);

    // Create counter label
    const counterLabel = new Label(`Counter: ${counter}`)
        .setObjectName("mylabel")
        .setInlineStyle(`
      font-size: 24px;
      font-weight: bold;
      padding: 10px;
      color: #333;
    `);

    // Create increment button
    const incrementButton = new Button("+")
        .setInlineStyle(`
      font-size: 20px;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border-radius: 5px;
    `)
        .onClick(() => {
            counter++;
            counterLabel.setText(`Counter: ${counter}`);
            console.log(`[DEBUG] Counter incremented to: ${counter}`);

            // Execute motor commands on increment
            motor.stepRight(1);
            const pos = motor.getPosition();
            console.log("Motor moved right. Position:", pos);

            if (counter % 3 === 0) {
                console.log(`Counter is divisible by 3!`);
                motor.stepUp(1);
            }

            if (counter % 5 === 0) {
                console.log(`Counter hit ${counter}!`);
                motor.home();
            }
        });

    // Create decrement button
    const decrementButton = new Button("-")
        .setInlineStyle(`
      font-size: 20px;
      padding: 10px 20px;
      background-color: #f44336;
      color: white;
      border-radius: 5px;
    `)
        .onClick(() => {
            counter--;
            counterLabel.setText(`Counter: ${counter}`);
            console.log(`[DEBUG] Counter decremented to: ${counter}`);

            // Execute motor commands on decrement
            motor.stepLeft(1);
            const pos = motor.getPosition();
            console.log("Motor moved left. Position:", pos);
        });

    // Create reset button
    const resetButton = new Button("Reset")
        .setInlineStyle(`
      font-size: 16px;
      padding: 10px 20px;
      background-color: #2196F3;
      color: white;
      border-radius: 5px;
    `)
        .onClick(() => {
            const oldValue = counter;
            counter = 0;
            counterLabel.setText(`Counter: ${counter}`);
            console.log("[DEBUG] Counter reset to 0");
            console.log(`Reset from ${oldValue}`);

            // Home the motor on reset
            motor.home();
            console.log("Motor returned to home position");
        });

    // Info label
    const infoLabel = new Label(
        "Click + to increment, - to decrement",
    ).setInlineStyle(`
      color: #666;
      font-size: 12px;
      padding: 10px;
    `);

    // Add all components to the application
    app.addComponents(
        counterLabel,
        incrementButton,
        decrementButton,
        resetButton,
        infoLabel,
    ).show();

    console.log("[DEBUG] Counter app initialized successfully!");
    console.log("Motor controller ready");
}

main();
