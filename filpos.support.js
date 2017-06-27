"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "filpos",
              			"path": "filpos/filpos.js",
              			"file": "filpos.js",
              			"module": "filpos",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/filpos.git",
              			"test": "filpos-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Fill array like a pad right.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"falzy": "falzy",
              			"protype": "protype"
              		}
              	@end-include
              */

var doubt = require("doubt");
var falzy = require("falzy");
var protype = require("protype");

var filpos = function filpos(array, length, defer) {
	/*;
                                                    	@meta-configuration:
                                                    		{
                                                    			"array:required": Array,
                                                    			"length:required": "number",
                                                    			"defer:required": "*"
                                                    		}
                                                    	@end-meta-configuration
                                                    */

	if (!doubt(array, ARRAY)) {
		throw new Error("invalid array");
	}

	if (falzy(length) || !protype(length, NUMBER) || length < 1) {
		throw new Error("invalid length");
	}

	if (arguments.length != 3) {
		throw new Error("empty default value");
	}

	for (var index = 0; index < length; index++) {
		if (falzy(array[index])) {
			array[index] = defer;
		}
	}

	return array;
};

module.exports = filpos;

//# sourceMappingURL=filpos.support.js.map