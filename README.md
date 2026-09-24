# Mini Programming Project

## 1. Group Information

**Class:** C

**Group:** 7

### Group Members

| No. | Name | Student ID | Role |
|---|---|---|---|
| 1 | Fathan Akbar Hadiyansyah | 2610312084 | Project Coordinator |
| 2 | 'Isyta Kamiliyah | 2610312079 | Algorithm |
| 3 | Zaky Muhammad Abdan Syakuuron | 2610312092 | Flowchart |
| 4 | Nafisa Anzani Putri Thahir | 2510312027 | JavaScript |
| 5 | Mutiara Fatimah Hanryani | 2610312090 | Testing & Documentation |

---

## 2. Project Title

Ticket Price Calculator

---

## 3. Project Description

This program is a simple game in which the player must guess a number determined by the computer.

---

## 4. Objectives

This project is designed to apply the following programming concepts:

- Variables
- Data types
- Operators
- Conditional statements
- Loops
- Algorithms
- JavaScript

---

## 5. Input

The program receives:

- Visitor name 
- Visitor age
- Arrival day
- Number of tickets
- Promo code (optional)

---

## 6. Process

The program calculates the ticket price based on the visitor's age.

If the purchase is:

- On Saturday or Sunday → the program adds a 20% surcharge
- 5 or more tickets → the program applies a 10% discount
- Using promo code "HEMAT7" → the program applies a Rp10,000 discount

---

## 7. Output

The program displays:

- The total number of tickets purchased
- The total payment amount

---

## 8. Algorithm

The algorithm used in the program is described in:

`pseudocode.txt`

---

## 9. Flowchart

The flowchart is created using Flowgorithm.

File:

`flowchart.fprg`

---

## 10. JavaScript Implementation

The JavaScript implementation of the program is available in:

`program.js`

---

## 11. Testing

The program is tested using several test scenarios.

Testing documentation:

`test-cases.md`
TEST 1 : Usia <5 (harga Rp0)
- INPUT = Usia 4tahun, harga Rp0, hari = senin, kode promo = -
- EXPECTED OUTPUT = Total = Rp0
- ACTUAL OUTPUT = Correct

TEST 2 = Usia <12 (harga Rp20000)
- INPUT = Usia 10tahun, harga Rp20000, hari = senin, kode promo = -
- EXPECTED OUTPUT = Total = Rp20000
- ACTUAL OUTPUT = Correct

TEST 3 = Usia <59 (harga Rp50000 dan weekend)
- INPUT = Usia 35tahun, harga Rp50000, hari = sabtu, kode promo = -
- EXPECTED OUTPUT = Total = Rp60000 (totaldasar+totaldasar*0,2)
- ACTUAL OUTPUT = Correct

TEST 4 = Usia >60 (harga Rp35000 dan weekend)
- INPUT = Usia 62tahun, harga = Rp35000, hari = minggu, kode promo = -
- EXPECTED OUTPUT = Total = Rp42000 (totaldasar+totaldasar*0,2)
- ACTUAL OUTPUT = Correct

TEST 5 = PENGGUNAAN KODEPROMO
- INPUT = Usia <59 berjumlah 7orang, harga = 50000, hari = senin, kode promo = HEMAT7
- EXPECTED OUTPUT = Total = Rp3050000 (totaldasar+totaldasar*0,1) lalu (totalakhir = totalakhir - 10000)
- ACTUAL OUTPUT = Correct

