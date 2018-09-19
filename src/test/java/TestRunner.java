

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="FeaturesTest",
		glue="com.learnAutomation.Cucumber",
		format = {"pretty", "html:target/Destination"},
		tags = "@sanity")
public class TestRunner
{

}
