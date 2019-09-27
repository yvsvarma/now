package Selenium.MyProject;

import org.apache.logging.log4j.*;

public class Sample {
	
	static Logger log = LogManager.getLogger(Sample.class.getName());
	public static void main(String[] args) {
		System.out.println("hi");
		log.info("Info");
		log.debug("Debug");
		log.error("Error");
		log.fatal("Fatal");

	}

}
