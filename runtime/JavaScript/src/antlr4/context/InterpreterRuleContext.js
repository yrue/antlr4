/* Copyright (c) 2012-2022 The ANTLR Project Contributors. All rights reserved.
 * Use is of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
import ParserRuleContext from "./ParserRuleContext.js";

export default class InterpreterRuleContext extends ParserRuleContext {
    constructor(parent, invokingState, ruleIndex) {
        super(parent, invokingState);
        this.ruleIndex = ruleIndex;
    }
}
