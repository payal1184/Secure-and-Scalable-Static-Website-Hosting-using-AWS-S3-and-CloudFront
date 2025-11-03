Secure and Scalable Static Website Hosting using AWS S3 and CloudFront
Project Overview

This project demonstrates how to host a secure and scalable static website using Amazon S3 and Amazon CloudFront.
The goal is to serve a static website (HTML, CSS, images, etc.) over HTTPS, with high speed and global availability using AWS services.

Architecture

Amazon S3 – Stores static website files (HTML, CSS, JS, images)

Amazon CloudFront – Distributes content globally with low latency and HTTPS

IAM – Controls secure access between CloudFront and S3

Route 53 (Optional) – Can be used to add a custom domain name

Steps to Build the Project
Step 1: Create S3 Bucket

Open AWS Management Console → Go to S3

Click Create bucket

Name your bucket (example: my-static-website)

Uncheck “Block all public access” only if hosting directly from S3

Keep it checked if using CloudFront

Upload index.html and style.css

Step 2: Enable Static Website Hosting

Go to Properties → Static website hosting

Enable hosting → Select Host a static website

Note the Bucket website endpoint

Step 3: Set Permissions

Add a Bucket Policy to allow CloudFront access

Use CloudFront Origin Access Control (OAC) for secure access

Step 4: Create CloudFront Distribution

Open CloudFront Console → Create Distribution

Choose your S3 bucket as Origin

Enable Redirect HTTP to HTTPS

Save and deploy → Copy Distribution Domain Name

Step 5: Test Your Website

Open the CloudFront URL in browser

Your static website will now load securely over HTTPS

Features

Secure HTTPS hosting via CloudFront

Fast global delivery using CDN

Scalable and cost-effective

No backend required

Fully managed by AWS