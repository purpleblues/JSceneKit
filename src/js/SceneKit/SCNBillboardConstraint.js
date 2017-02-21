'use strict'

import SCNConstraint from './SCNConstraint'
import SCNBillboardAxis from './SCNBillboardAxis'


/**
 * A constraint that orients a node to always point toward the current camera.
 * @access public
 * @extends {SCNConstraint}
 * @see https://developer.apple.com/reference/scenekit/scnbillboardconstraint
 */
export default class SCNBillboardConstraint extends SCNConstraint {

  /**
   * constructor
   * @access public
   * @returns {void}
   */
  init() {

    // Working with a Constraint’s Degrees of Freedom

    /**
     * An option that specifies which degrees of freedom the constraint affects.
     * @type {SCNBillboardAxis}
     * @see https://developer.apple.com/reference/scenekit/scnbillboardconstraint/1468685-freeaxes
     */
    this.freeAxes = null

  }
}