import React from 'react';
import AbstractTester from './AbstractTest';
import { Span } from './TestSwitch';


class Test extends AbstractTester {
  content = <Span at="test" frm="abstr" />
}

class Test1 extends AbstractTester {
  content = <Span frm="abstr" at="test1" />
}

class Test2 extends AbstractTester {
  content = <Span frm="abstr" at="test2" />
}

class Test3 extends AbstractTester {
  content = <Span frm="abstr" at="test3" />
}

export { Test, Test1, Test2, Test3 };
