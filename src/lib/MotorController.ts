/**
 * Motor control library simulation
 * This represents commands that would come from an external motor control library
 */

import { MotorPosition } from "src/types";

export class MotorController {
  private position: MotorPosition = { x: 0, y: 0, direction: 'idle' };
  private stepSize: number = 1;
  private isRunning: boolean = false;

  /**
   * Step motor to the left
   */
  public stepLeft(steps: number = 1): MotorPosition {
    console.log(`[MOTOR] Stepping LEFT ${steps} step(s)`);
    this.position.x -= steps * this.stepSize;
    this.position.direction = 'left';
    return { ...this.position };
  }

  /**
   * Step motor to the right
   */
  public stepRight(steps: number = 1): MotorPosition {
    console.log(`[MOTOR] Stepping RIGHT ${steps} step(s)`);
    this.position.x += steps * this.stepSize;
    this.position.direction = 'right';
    return { ...this.position };
  }

  /**
   * Step motor up
   */
  public stepUp(steps: number = 1): MotorPosition {
    console.log(`[MOTOR] Stepping UP ${steps} step(s)`);
    this.position.y += steps * this.stepSize;
    this.position.direction = 'up';
    return { ...this.position };
  }

  /**
   * Step motor down
   */
  public stepDown(steps: number = 1): MotorPosition {
    console.log(`[MOTOR] Stepping DOWN ${steps} step(s)`);
    this.position.y -= steps * this.stepSize;
    this.position.direction = 'down';
    return { ...this.position };
  }

  /**
   * Stop motor
   */
  public stop(): void {
    console.log('[MOTOR] STOPPED');
    this.position.direction = 'idle';
    this.isRunning = false;
  }

  /**
   * Home the motor (return to origin)
   */
  public home(): MotorPosition {
    console.log('[MOTOR] Homing to (0, 0)');
    this.position = { x: 0, y: 0, direction: 'idle' };
    return { ...this.position };
  }

  /**
   * Get current position
   */
  public getPosition(): MotorPosition {
    return { ...this.position };
  }

  /**
   * Move to absolute position
   */
  public moveTo(x: number, y: number): MotorPosition {
    console.log(`[MOTOR] Moving to position (${x}, ${y})`);
    const deltaX = x - this.position.x;
    const deltaY = y - this.position.y;
    
    console.log(`[MOTOR] Delta: X=${deltaX}, Y=${deltaY}`);
    
    this.position.x = x;
    this.position.y = y;
    this.position.direction = 'idle';
    
    return { ...this.position };
  }

  /**
   * Set step size
   */
  public setStepSize(size: number): void {
    console.log(`[MOTOR] Step size set to ${size}`);
    this.stepSize = size;
  }

  /**
   * Start continuous motion
   */
  public startMotion(direction: 'left' | 'right' | 'up' | 'down'): void {
    console.log(`[MOTOR] Starting continuous motion: ${direction.toUpperCase()}`);
    this.isRunning = true;
    this.position.direction = direction;
  }

  /**
   * Get motor status
   */
  public getStatus(): { position: MotorPosition; stepSize: number; isRunning: boolean } {
    return {
      position: { ...this.position },
      stepSize: this.stepSize,
      isRunning: this.isRunning,
    };
  }
}
