# Secure & Scalable Static Website Hosting using AWS S3 and CloudFront

This project demonstrates how to host a secure, scalable static portfolio website using **Amazon S3** as the origin and **Amazon CloudFront** as the Content Delivery Network (CDN).  
The website is stored in a private S3 bucket and delivered securely through a CloudFront distribution.

---

## 🏗 Architecture Overview

- **Amazon S3** – Stores static website files (`index.html`, `style.css`, etc.).
- **Amazon CloudFront** – Distributes the content globally with low latency.
- **S3 Bucket Policy** – Restricts direct public access and only allows CloudFront to read objects.
- **Default Encryption** – All objects in the S3 bucket are encrypted at rest.
- **Static Website Hosting** – Enabled on the S3 bucket for website endpoint (used as CloudFront origin).

---

## 📁 S3 Configuration

### 1️⃣ S3 Bucket – Static Website Files

The S3 bucket `payal-portfolio-site` stores all the static assets of the portfolio website.

Example files:
- `index.html`
- `style.css`
- `README.md`

---

### 2️⃣ Default Encryption (SSE-S3)

![S3 Default Encryption](image/default-encryption.png)

The S3 bucket is configured with **default server-side encryption (SSE-S3)**.  
All new objects uploaded to this bucket are automatically encrypted using Amazon S3 managed keys.

**Key points:**
- **Encryption type:** SSE-S3  
- **Bucket Key:** Enabled  

This ensures that all data stored in the bucket is **encrypted at rest**, improving security and following best practices.

---

### 3️⃣ Static Website Hosting

![S3 Static Website Hosting](image/Screenshot%20(328).png)

The S3 bucket is configured for **static website hosting**.

**Configuration details:**
- **Static website hosting:** Enabled  
- **Hosting type:** Bucket hosting  
- **Bucket website endpoint:**  
  `http://payal-portfolio-site.s3-website-ap-southeast-1.amazonaws.com`

This endpoint is used as the **origin** for the CloudFront distribution.

---

### 4️⃣ Bucket Policy & Permissions

![S3 Bucket Policy](image/Screenshot%20(329).png)

The bucket policy is configured so that:

- **Public access is blocked** using S3 Block Public Access settings.
- Only the **CloudFront distribution** is allowed to access the bucket objects.

Example policy logic (conceptual):

- Principal: `cloudfront.amazonaws.com`
- Action: `s3:GetObject`
- Resource: `arn:aws:s3:::payal-portfolio-site/*`
- Condition: Allow only when the request comes from a specific CloudFront distribution ARN.

This configuration ensures:
- The S3 bucket is **not publicly accessible directly**.
- Content is delivered securely only through **CloudFront**.

---

## 🌍 CloudFront Configuration

### 5️⃣ CloudFront Distribution – General Details

![CloudFront General](image/Screenshot%20(323).png)

A CloudFront distribution is created to serve the static website globally.

**Highlights:**
- **Origin:** S3 bucket `payal-portfolio-site`
- **Distribution domain name:**  
  `d1m6el92zo8940.cloudfront.net`
- **Description:** Static website on S3 with CloudFront
- **Price class:** All edge locations (best performance)
- **Supported HTTP versions:** HTTP/2, HTTP/1.1, HTTP/1.0

This allows the website to be accessed with **low latency** from multiple regions.

---

### 6️⃣ CloudFront Origin – S3 Integration

![CloudFront Origins](image/Screenshot%20(332).png)

The **Origins** tab shows that the CloudFront distribution uses the S3 bucket as its origin.

**Key points:**
- Origin domain: `payal-portfolio-site.s3-website-ap-southeast-1.amazonaws.com`
- Origin type: S3 static website endpoint

This confirms that **all content is fetched from the S3 static website hosting endpoint** and then cached and delivered by CloudFront.

---

### 7️⃣ CloudFront Cache Behavior & Security

![CloudFront Behaviors](image/Screenshot%20(336).png)

The **Behaviors** tab defines how CloudFront handles requests.

**Configuration details:**
- **Default cache behavior:** Enabled  
- **Viewer protocol policy:** Redirect HTTP to HTTPS  
- **Allowed HTTP methods:** Limited to required methods for static content (e.g., GET, HEAD)

This ensures:
- All users are **automatically redirected to HTTPS**, improving security.
- Only necessary HTTP methods are allowed, keeping the configuration **simple and secure**.

---

### 8️⃣ CloudFront Invalidation – Cache Refresh

![CloudFront Invalidation](image/Screenshot%20(331).png)

To make sure that content updates in S3 are reflected quickly to users, **CloudFront invalidations** are used.

**Example invalidation:**
- **Object paths:** `/*`
- **Status:** Completed

Invalidating `/*` ensures that the entire cache is refreshed, and users see the **latest version** of the website without waiting for cache expiry.

---

## 🌐 Final Website – Browser Output (via CloudFront)

## 🌐 Live Website

![Static Website via CloudFront](image/d1m6el92zo8940.cloudfront.net_.png)

Access the website via CloudFront HTTPS URL:

`https://d1m6el92zo8940.cloudfront.net`

This demonstrates:
- Website hosted on **Amazon S3**
- Delivered securely via **CloudFront** with **HTTPS**
- **Origin Access Control (OAC)** keeps S3 private
- Low latency delivery via CloudFront CDN



---

## ✅ Features Demonstrated

- Static website hosting using **Amazon S3**
- Secure content delivery using **Amazon CloudFront**
- **Bucket encryption (SSE-S3)** for data at rest
- **Restricted S3 access** using bucket policy + CloudFront origin access
- Global content delivery with **low latency**
- Cache invalidation using **CloudFront invalidations**

---

## 🚀 How to Use This Setup for Your Own Projects

1. Create an S3 bucket and upload static website files.
2. Enable **static website hosting** on the S3 bucket.
3. Configure **default encryption** (SSE-S3) for the bucket.
4. Create a **CloudFront distribution** with the S3 website endpoint as the origin.
5. Update the **bucket policy** to only allow CloudFront to access the content.
6. Use CloudFront domain (HTTPS) as the main URL for your website.
7. When you update files in S3, create **CloudFront invalidations** to refresh the cache.

---

## 🧾 Summary

This repository is a practical example of **secure static website hosting on AWS** using:

- **Amazon S3** for storing static website files in a private, encrypted bucket  
- **S3 Static Website Hosting** as the origin for CloudFront  
- **Amazon CloudFront** for global, low-latency, HTTPS content delivery  
- **Bucket policies** to block direct public access and allow only CloudFront  
- **CloudFront invalidations** to quickly push new content to users  

Together, this setup delivers a **fast, secure, and scalable static portfolio website** following real-world AWS best practices.
