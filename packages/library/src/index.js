import React from "react";
import { render } from "react-dom";
import {App} from '/packages/library/src/components/App';

render(<App />, document.getElementById("root"));

const a = 'b';

a = 'c';
