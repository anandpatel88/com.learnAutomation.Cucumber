package com.learnAutomation.Cucumber;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef 
{
	WebDriver driver;
	@Given("^Open \"([^\"]*)\" and launch URL$")
	public void open_and_launch_URL(String browser)
	{
		if(browser.equalsIgnoreCase("chrome"))
		{
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\anand.mohan.patel\\Documents\\Anand\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		}
		else if(browser.equalsIgnoreCase("ie"))
		{
			System.setProperty("webdriver.ie.driver", "C:\\Users\\anand.mohan.patel\\Documents\\Anand\\IEDriverServer_Win32_3.14.0\\IEDriverServer.exe");
			 driver= new InternetExplorerDriver();
		}
		driver.manage().window().maximize();
		driver.get("http://demo.automationtesting.in/SignIn.html");
	}


	@When("^provide  \"([^\"]*)\" and  \"([^\"]*)\"$")
	public void provide_and(String AnanduserName, String Anandpassword)   
	{
		driver.findElement(By.xpath("/html/body/div/div/div[2]/input")).sendKeys(AnanduserName);
		driver.findElement(By.xpath("/html/body/div/div/div[3]/input")).sendKeys(Anandpassword);
	}

	@Then("^user should be able to access$")
	public void user_should_be_able_to_access()
	{
		driver.findElement(By.id("enterbtn")).click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String error=driver.findElement(By.id("errormsg")).getText();
		Assert.assertEquals("Verify that ", "Invalid User Name or PassWord", error);
		driver.close();

	}


}
