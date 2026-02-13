## 📚 Project Documentation (/docs)

This folder contains detailed technical and product documentation for the **University Admissions Chatbot**. Each file focuses on a core subsystem and can be split into individual Markdown files in the `/docs` directory.

---

### System Architecture Overview

The University Admissions Chatbot is built as a modular, scalable system designed to handle high query volume while maintaining policy accuracy.

**Core Layers:**

1. Presentation Layer (Web / Chat UI)
2. Application Layer (Chatbot, Tracker, Recommender)
3. Intelligence Layer (LLM + ScaleDown)
4. Data & Integration Layer (Databases, CRM)

**Flow:**

* User interacts via chat or dashboard
* Chatbot queries ScaleDown-compressed knowledge base
* Recommendation engine evaluates eligibility and fit
* Application tracker updates progress
* CRM logs lead activity and engagement

---

## scaledown.md

### ScaleDown Knowledge Compression

**Purpose:**
University catalogs and admissions policies are large, repetitive, and expensive to query directly. ScaleDown compresses this information while preserving decision-critical details.

**Inputs:**

* Program catalogs
* Admissions requirements
* Policy documents

**Outputs:**

* 75% smaller knowledge representation
* Fast, consistent retrieval
* Policy-safe responses

**Use Cases:**

* GPA and prerequisite checks
* Deadline and intake rules
* Transfer and international policies

---

### Program Recommendation Engine

**Goal:**
Match students to programs they are eligible for, likely to be admitted to, and aligned with their goals.

**Inputs:**

* Academic history (GPA, tests)
* Interests and career goals
* Budget and scholarship needs
* Location and modality preferences

**Logic:**

1. Hard filters (eligibility rules)
2. Soft ranking (interest alignment)
3. Admission likelihood scoring

**Outputs:**

* Ranked program list
* Alternative or pathway suggestions
* Improvement recommendations

---

### Application Tracker & Checklist System

**Features:**

* Program-specific checklists
* Dynamic deadline reminders
* Status indicators (Not Started / In Progress / Submitted)
* Counselor escalation for exceptions

**Benefits:**

* Reduced incomplete applications
* Higher on-time submission rate
* Better applicant experience

---

---

**This documentation is designed to be clear for reviewers, recruiters, and collaborators while remaining implementation-ready for developers.**

