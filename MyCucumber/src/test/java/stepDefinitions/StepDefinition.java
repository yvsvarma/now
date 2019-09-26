package stepDefinitions;

import java.util.List;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

public class StepDefinition {
	
	
	
	static WebDriver driver;
	
	@Given("^opened selected browser$")
    public void opened_selected_browser() throws Throwable {
		//System.setProperty(“chromedriver”,”Path of the GeckoDriver file”);
		System.setProperty("webdriver.chrome.driver","/drivers/chromedriver");
		driver=new ChromeDriver();
		System.out.println("Chrome opened");
    }

    @When("^launch url$")
    public void launch_url() throws Throwable {
    	driver.get("https://demoqa.com");
    	System.out.println("Url launched");
    }

    @Then("^ToolsQA Page displayed$")
    public void toolsqa_page_displayed() throws Throwable {
    	
    	String header=driver.findElement(By.xpath("//h1")).getText();

    	if(header.contains("Home"))
        	System.out.println("ToolsQA Home page displayed");
        else
        	System.out.println("ToolsQA Home page NOT displayed");
    }



    @Given("^User is on HTML Contact form$")
    public void user_is_on_html_contact_form() throws Throwable {
    	driver.findElement(By.xpath("//a[text()='HTML contact form']")).click();
    	System.out.println("Clicked on link - HTML Contact form");

    	
    	String header=driver.findElement(By.xpath("//h1")).getText();

    	if(header.contains("HTML contact form"))
        	System.out.println("HTML form already opened");
        else
        	System.out.println("HTML form NOT opened");
        	
    }

    @When("^User enters text \"([^\"]*)\" in \"([^\"]*)\"$")
    
    public void user_enters_text_something_in_something(String strArg1, String strArg2) throws Throwable {
    System.out.println("strArg1 - "+strArg1);
    System.out.println("strArg2 - "+strArg2);

    	By field = By.xpath("//label[text()='"+strArg2+"']/following::input[1]");
  
    driver.findElement(field).sendKeys(strArg1);
    
    }

    @Then("^Click button \"([^\"]*)\"$")
    public void click_button_something(String strArg1) throws Throwable {
    	
    	driver.findElement(By.xpath("//input[@type='"+strArg1+"']")).click();
    	
    }

    @And("^Target page found$")
    public void target_page_found() throws Throwable {

    	 String header=driver.findElement(By.xpath("//h1")).getText();

     	if(header.contains("Oops"))
         	System.out.println("Target page found");
         else
         	System.out.println("Target page not found");
         	
    }
    @When("^User enters form with following details$")
    public void user_enters_form_with_following_details(DataTable data) throws Throwable {
    	List<List<String>>  obj=data.raw();
        
    	String fname=obj.get(0).get(0);
    	String lname=obj.get(0).get(1);
    	String country=obj.get(0).get(2);

    	By fnameloc = By.xpath("//label[text()='First Name']/following::input[1]");
    	By lnameloc = By.xpath("//label[text()='Last Name']/following::input[1]");
    	By countryloc = By.xpath("//label[text()='Country']/following::input[1]");
    	
    	System.out.println(fname);
    	System.out.println(lname);
    	System.out.println(country);
    	
    	
    	driver.findElement(fnameloc).sendKeys(fname);
    	driver.findElement(lnameloc).sendKeys(lname);
    	driver.findElement(countryloc).sendKeys(country);

    
    }
    
    
    
    @When("^User enters form with (.+) and (.+) and (.+) details$")
    public void user_enters_form_with_and_and_details(String fname, String lname, String country) throws Throwable {
    	System.out.println(fname);
    	System.out.println(lname);
    	System.out.println(country);

    	By fnameloc = By.xpath("//label[text()='First Name']/following::input[1]");
    	By lnameloc = By.xpath("//label[text()='Last Name']/following::input[1]");
    	By countryloc = By.xpath("//label[text()='Country']/following::input[1]");
    	
    	driver.findElement(fnameloc).sendKeys(fname);
    	driver.findElement(lnameloc).sendKeys(lname);
    	driver.findElement(countryloc).sendKeys(country);

    
    }
   
    @When("^User enters form with (.+), (.+) and (.+)$")
    public void user_enters_form_with_(String fname, String lname, String country) throws Throwable {
       	
    	System.out.println(fname);
    	System.out.println(lname);
    	System.out.println(country);

    	By fnameloc = By.xpath("//label[text()='First Name']/following::input[1]");
    	By lnameloc = By.xpath("//label[text()='Last Name']/following::input[1]");
    	By countryloc = By.xpath("//label[text()='Country']/following::input[1]");
    	
    	driver.findElement(fnameloc).sendKeys(fname);
    	driver.findElement(lnameloc).sendKeys(lname);
    	driver.findElement(countryloc).sendKeys(country);

    }



}
