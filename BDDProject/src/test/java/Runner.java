import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features= {"/Users/bittechconsulting/eclipse-workspace/BDDProject/hello.Feature"},tags= {"@regresion,@smoke"}
,format={"pretty", "html:target/report1/file1.html", "json:target/report"})
public class Runner {

}
