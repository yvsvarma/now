package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	static WebDriver driver;
	@Before("@smokeTest")
	public void beforeSmoke() {
		System.out.println("Before Smoke");
		
		System.setProperty("webdriver.chrome.driver","./drivers/chromedriver2");
		driver=new ChromeDriver();
		System.out.println("Chrome opened");
    	driver.get("https://demoqa.com");
    	System.out.println("Url launched");


    	String header=driver.findElement(By.xpath("//h1")).getText();

    	if(header.contains("Home"))
        	System.out.println("ToolsQA Home page displayed");
        else
        	System.out.println("ToolsQA Home page NOT displayed");
	}
	
	
	@After("@smokeTest")
	public void afterSmoke() {
		System.out.println("After Smoke");

	}
	
	@Before("@functionalTest")
	public void beforeFunc() {
		System.out.println("Before Functional");
		
System.out.println("Before Smoke");
		
		System.setProperty("webdriver.chrome.driver","/Users/vinaysimha.varma/Desktop/chromedriver");
		driver=new ChromeDriver();
		System.out.println("Chrome opened");
    	driver.get("https://demoqa.com");
    	System.out.println("Url launched");


    	String header=driver.findElement(By.xpath("//h1")).getText();

    	if(header.contains("Home"))
        	System.out.println("ToolsQA Home page displayed");
        else
        	System.out.println("ToolsQA Home page NOT displayed");

	}
	
	
	@After("@functionalTest")
	public void afterFunc() {
		System.out.println("After Functional");

	}
	

}
