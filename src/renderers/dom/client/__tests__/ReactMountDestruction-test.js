/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails react-core
 */

'use strict';

var React = require('React');
var ReactDOM = require('ReactDOM');

describe('ReactMount', function() {
  it('should destroy a react root upon request', function() {
    var mainContainerDiv = document.createElement('div');
    document.body.appendChild(mainContainerDiv);

    var instanceOne = (
      <div className="firstReactDiv">
      </div>
    );
    var firstRootDiv = document.createElement('div');
    mainContainerDiv.appendChild(firstRootDiv);
    ReactDOM.render(instanceOne, firstRootDiv);

    var instanceTwo = (
      <div className="secondReactDiv">
      </div>
    );
    var secondRootDiv = document.createElement('div');
    mainContainerDiv.appendChild(secondRootDiv);
    ReactDOM.render(instanceTwo, secondRootDiv);

    // Test that two react roots are rendered in isolation
    expect(firstRootDiv.firstChild.className).toBe('firstReactDiv');
    expect(secondRootDiv.firstChild.className).toBe('secondReactDiv');

    // Test that after unmounting each, they are no longer in the document.
    ReactDOM.unmountComponentAtNode(firstRootDiv);
    expect(firstRootDiv.firstChild).toBeNull();
    ReactDOM.unmountComponentAtNode(secondRootDiv);
    expect(secondRootDiv.firstChild).toBeNull();
  });
});
