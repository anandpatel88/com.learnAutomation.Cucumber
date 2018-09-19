$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber.feature");
formatter.feature({
  "line": 1,
  "name": "Test login Functionality of Demo Automation",
  "description": "",
  "id": "test-login-functionality-of-demo-automation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "login Functionality with valid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open \"\u003cbrowser\u003e\" and launch URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "provide  \"\u003cuserName\u003e\" and  \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "browser"
      ],
      "line": 10,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;;1"
    },
    {
      "cells": [
        "anand123",
        "pass123",
        "ie"
      ],
      "line": 11,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;;2"
    },
    {
      "cells": [
        "anand456",
        "pass123",
        "ie"
      ],
      "line": 12,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;;3"
    },
    {
      "cells": [
        "anand123",
        "pass123",
        "chrome"
      ],
      "line": 13,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;;4"
    },
    {
      "cells": [
        "anand456",
        "pass123",
        "chrome"
      ],
      "line": 14,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "login Functionality with valid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open \"ie\" and launch URL",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "provide  \"anand123\" and  \"pass123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 6
    }
  ],
  "location": "StepDef.open_and_launch_URL(String)"
});
formatter.result({
  "duration": 5086582174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand123",
      "offset": 10
    },
    {
      "val": "pass123",
      "offset": 26
    }
  ],
  "location": "StepDef.provide_and(String,String)"
});
formatter.result({
  "duration": 1328703200,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_access()"
});
formatter.result({
  "duration": 2864778811,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "login Functionality with valid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open \"ie\" and launch URL",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "provide  \"anand456\" and  \"pass123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 6
    }
  ],
  "location": "StepDef.open_and_launch_URL(String)"
});
formatter.result({
  "duration": 2952415782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand456",
      "offset": 10
    },
    {
      "val": "pass123",
      "offset": 26
    }
  ],
  "location": "StepDef.provide_and(String,String)"
});
formatter.result({
  "duration": 1286705747,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_access()"
});
formatter.result({
  "duration": 2868839843,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login Functionality with valid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open \"chrome\" and launch URL",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "provide  \"anand123\" and  \"pass123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 6
    }
  ],
  "location": "StepDef.open_and_launch_URL(String)"
});
formatter.result({
  "duration": 10331872081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand123",
      "offset": 10
    },
    {
      "val": "pass123",
      "offset": 26
    }
  ],
  "location": "StepDef.provide_and(String,String)"
});
formatter.result({
  "duration": 312480571,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_access()"
});
formatter.result({
  "duration": 2237224307,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login Functionality with valid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-valid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open \"chrome\" and launch URL",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "provide  \"anand456\" and  \"pass123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 6
    }
  ],
  "location": "StepDef.open_and_launch_URL(String)"
});
formatter.result({
  "duration": 9842080797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand456",
      "offset": 10
    },
    {
      "val": "pass123",
      "offset": 26
    }
  ],
  "location": "StepDef.provide_and(String,String)"
});
formatter.result({
  "duration": 196841449,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_access()"
});
formatter.result({
  "duration": 2250936982,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "login Functionality with invalid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@smoke"
    },
    {
      "line": 29,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Open \"\u003cbrowser\u003e\" and launch URL",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "provide  \"\u003cuserName\u003e\" and  \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "browser"
      ],
      "line": 36,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;;1"
    },
    {
      "cells": [
        "anand123",
        "pass123",
        "ie"
      ],
      "line": 37,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;;2"
    },
    {
      "cells": [
        "anand456",
        "pass123",
        "ie"
      ],
      "line": 38,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;;3"
    },
    {
      "cells": [
        "anand123",
        "pass123",
        "chrome"
      ],
      "line": 39,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;;4"
    },
    {
      "cells": [
        "anand456",
        "pass123",
        "chrome"
      ],
      "line": 40,
      "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "login Functionality with invalid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@smoke"
    },
    {
      "line": 29,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Open \"ie\" and launch URL",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "provide  \"anand123\" and  \"pass123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 6
    }
  ],
  "location": "StepDef.open_and_launch_URL(String)"
});
formatter.result({
  "duration": 2993564073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand123",
      "offset": 10
    },
    {
      "val": "pass123",
      "offset": 26
    }
  ],
  "location": "StepDef.provide_and(String,String)"
});
formatter.result({
  "duration": 1309173746,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_access()"
});
formatter.result({
  "duration": 2863498492,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "login Functionality with invalid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@smoke"
    },
    {
      "line": 29,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Open \"ie\" and launch URL",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "provide  \"anand456\" and  \"pass123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ie",
      "offset": 6
    }
  ],
  "location": "StepDef.open_and_launch_URL(String)"
});
formatter.result({
  "duration": 2882625340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand456",
      "offset": 10
    },
    {
      "val": "pass123",
      "offset": 26
    }
  ],
  "location": "StepDef.provide_and(String,String)"
});
formatter.result({
  "duration": 1239205579,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_access()"
});
formatter.result({
  "duration": 2854555819,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "login Functionality with invalid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@smoke"
    },
    {
      "line": 29,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Open \"chrome\" and launch URL",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "provide  \"anand123\" and  \"pass123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 6
    }
  ],
  "location": "StepDef.open_and_launch_URL(String)"
});
formatter.result({
  "duration": 11491452716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand123",
      "offset": 10
    },
    {
      "val": "pass123",
      "offset": 26
    }
  ],
  "location": "StepDef.provide_and(String,String)"
});
formatter.result({
  "duration": 298014653,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_access()"
});
formatter.result({
  "duration": 2204194549,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "login Functionality with invalid credential",
  "description": "",
  "id": "test-login-functionality-of-demo-automation;login-functionality-with-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@smoke"
    },
    {
      "line": 29,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "Open \"chrome\" and launch URL",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "provide  \"anand456\" and  \"pass123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user should be able to access",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 6
    }
  ],
  "location": "StepDef.open_and_launch_URL(String)"
});
formatter.result({
  "duration": 13353523961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand456",
      "offset": 10
    },
    {
      "val": "pass123",
      "offset": 26
    }
  ],
  "location": "StepDef.provide_and(String,String)"
});
formatter.result({
  "duration": 367722330,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.user_should_be_able_to_access()"
});
formatter.result({
  "duration": 2828500613,
  "status": "passed"
});
});