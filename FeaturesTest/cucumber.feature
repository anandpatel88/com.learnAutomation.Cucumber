Feature: Test login Functionality of Demo Automation

@sanity
  Scenario Outline: login Functionality with valid credential
    Given Open "<browser>" and launch URL
    When provide  "<userName>" and  "<password>"
    Then user should be able to access
    
    Examples: 
      | userName | password | browser |
      | anand123 | pass123  | ie      |
      | anand456 | pass123  | ie      |
      | anand123 | pass123  | chrome  |
      | anand456 | pass123  | chrome  |
    
    @smoke
  Scenario Outline: login Functionality with invalid credential
    Given Open "<browser>" and launch URL
    When provide  "<userName>" and  "<password>"
    Then user should be able to access

    Examples: 
      | userName | password | browser |
      | anand123 | pass123  | ie      |
      | anand456 | pass123  | ie      |
      | anand123 | pass123  | chrome  |
      | anand456 | pass123  | chrome  |

      @smoke @sanity
  Scenario Outline: login Functionality with invalid credential
    Given Open "<browser>" and launch URL
    When provide  "<userName>" and  "<password>"
    Then user should be able to access

    Examples: 
      | userName | password | browser |
      | anand123 | pass123  | ie      |
      | anand456 | pass123  | ie      |
      | anand123 | pass123  | chrome  |
      | anand456 | pass123  | chrome  |