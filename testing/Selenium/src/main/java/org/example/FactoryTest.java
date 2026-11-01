package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class FactoryTest {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        try {
            driver.manage().window().maximize();

            // Test Case 1: Dashboard / Home Page Load Test (React code eke h1 text eka check kirima)
            driver.get("http://localhost:3000/");
            WebElement dashboardHeader = wait.until(
                    ExpectedConditions.presenceOfElementLocated(By.xpath("//h1[contains(text(), 'Clothes Factory Management System')]"))
            );
            if (dashboardHeader.isDisplayed()) {
                System.out.println("✅ Test Case 1 (Dashboard/Home Page Load): PASSED");
            }

            // Test Case 2: Dashboard Content & Boxes Verification Test
            driver.get("http://localhost:3000/");
            WebElement dashboardGrid = wait.until(
                    ExpectedConditions.presenceOfElementLocated(By.className("dashboard-grid"))
            );
            if (dashboardGrid.isDisplayed()) {
                System.out.println("✅ Test Case 2 (Dashboard Content Verification): PASSED");
            }

            // Test Case 3: Orders Page Navigation Test
            driver.get("http://localhost:3000/");
            WebElement ordersLink = wait.until(
                    ExpectedConditions.elementToBeClickable(By.linkText("Orders"))
            );
            ordersLink.click();
            System.out.println("✅ Test Case 3 (Orders Page Navigation): PASSED");

            // Test Case 4: Production Page Navigation Test
            driver.get("http://localhost:3000/");
            WebElement productionLink = wait.until(
                    ExpectedConditions.elementToBeClickable(By.linkText("Production"))
            );
            productionLink.click();
            System.out.println("✅ Test Case 4 (Production Page Navigation): PASSED");

            // Test Case 5: Workers Page Navigation Test
            driver.get("http://localhost:3000/");
            WebElement workersLink = wait.until(
                    ExpectedConditions.elementToBeClickable(By.linkText("Workers"))
            );
            workersLink.click();
            System.out.println("✅ Test Case 5 (Workers Page Navigation): PASSED");

            System.out.println("\n🎉 All 5 Test Cases Executed Successfully!");

        } catch (Exception e) {
            System.out.println("❌ Test Failed due to an exception: " + e.getMessage());
        } finally {
            if (driver != null) {
                driver.quit();
            }
        }
    }
}