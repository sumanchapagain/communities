// ==========================================
// SINGLE METADATA FILE
// Contains Communities, Grading, T0 Scores, Activities, Knowledge Products
// ==========================================

// 1. COMMUNITIES DEMOGRAPHIC DATA (communities_static.js)
const communitiesDataStaticRaw = {
  "header": "Id,Name,Country,Province,District,Lat,Lng,Flood_T0,Flood_T1,Heat_T0,Heat_T1,Generic_T0,Generic_T1,TotalPop,Male,Female,Children,Elderly,Disabilities,HHs,ExtentN,ExtentS,ExtentE,ExtentW,Description,F01_t0,F01_t1,F02_t0,F02_t1,F03_t0,F03_t1,F04_t0,F04_t1,F05_t0,F05_t1,F06_t0,F06_t1,F07_t0,F07_t1,F08_t0,F08_t1,F09_t0,F09_t1,F10_t0,F10_t1,F11_t0,F11_t1,F12_t0,F12_t1,F13_t0,F13_t1,F14_t0,F14_t1,F15_t0,F15_t1,H01_t0,H01_t1,H02_t0,H02_t1,H03_t0,H03_t1,H04_t0,H04_t1,H05_t0,H05_t1,H06_t0,H06_t1,H07_t0,H07_t1,H08_t0,H08_t1,H09_t0,H09_t1,H10_t0,H10_t1,H11_t0,H11_t1,H12_t0,H12_t1,H13_t0,H13_t1,H14_t0,H14_t1,N01_t0,N01_t1,N02_t0,N02_t1,N03_t0,N03_t1,N04_t0,N04_t1,N05_t0,N05_t1,N06_t0,N06_t1,N07_t0,N07_t1,P01_t0,P01_t1,P02_t0,P02_t1,P03_t0,P03_t1,P04_t0,P04_t1,P05_t0,P05_t1,P06_t0,P06_t1,P07_t0,P07_t1,P08_t0,P08_t1,P09_t0,P09_t1,P10_t0,P10_t1,P11_t0,P11_t1,P12_t0,P12_t1,P13_t0,P13_t1,P14_t0,P14_t1,P15_t0,P15_t1,P16_t0,P16_t1,P17_t0,P17_t1,P18_t0,P18_t1,P19_t0,P19_t1,S01_t0,S01_t1,S02_t0,S02_t1,S03_t0,S03_t1,S04_t0,S04_t1,S05_t0,S05_t1,S06_t0,S06_t1,S07_t0,S07_t1,S08_t0,S08_t1,S09_t0,S09_t1,S10_t0,S10_t1,S11_t0,S11_t1,S12_t0,S12_t1,S13_t0,S13_t1,S14_t0,S14_t1,S15_t0,S15_t1,S16_t0,S16_t1,S17_t0,S17_t1,S18_t0,S18_t1,S19_t0,S19_t1,S20_t0,S20_t1,S21_t0,S21_t1",
  "data": [
    "c_01,Badhupuruwa,Nepal,Lumbini,Bardiya,28.228113,81.37092,51.0,,61.0,,56.0,,1055,367,328,61,60,13,100,28.5,28.1,81.5,81.1,Palika: Gulariya Municipality,B,A,B,B,B,B,B,C,C,B,B,B,C,C,B,B,B,B,C,B,B,B,C,B,B,A,B,B,B,B,C,B,B,B,B,B,B,B,C,C,B,B,B,A,B,B,B,B,B,B,B,A,B,B,B,B,C,C,C,B,B,B,B,B,C,C,B,B,C,B,B,A,B,B,C,C,B,B,B,A,B,C,B,A,B,A,C,C,B,B,B,B,B,B,B,B,B,B,B,A,B,A,B,B,B,B,B,B,C,C,B,B,B,A,B,B,C,B,B,B,B,B,C,C,C,C,B,B,B,B,B,B,B,A,C,C,C,B,C,B,C,C,B,B,B,B,C,C,B,B,B,B",
    "c_02,Bagphanta (Shuktaraj Tole),Nepal,Sudur Paschim,Kanchanpur,28.839874,80.410031,51.9,,61.9,,56.9,,767,353,414,44,63,7,131,,,,Palika: Bhimdutta Municipality,B,B,B,B,B,B,B,B,B,B,C,C,B,B,B,B,B,A,B,A,B,B,C,B,B,A,B,A,B,B,B,B,B,B,B,B,B,B,C,B,B,A,B,B,B,B,B,B,B,A,B,A,C,B,B,B,B,B,B,B,B,B,B,A,B,B,C,C,C,C,C,C,B,B,B,B,B,B,C,B,C,B,C,C,C,C,B,B,B,B,B,A,B,C,C,B,C,B,B,A,B,B,B,B,B,A,B,B,B,A,C,C,B,B,B,B,B,A,C,B,B,B,C,C,B,B,B,A,B,A,C,C,B,A,B,B,B,B,B,B,C,B,B,B,B,B,B,B,C,B,C,C,",
    "c_03,Baidi,Nepal,Sudur Paschim,Kailali,28.454515,81.02861,48.4,,58.4,,53.4,,750,394,356,56,39,16,132,,,,Palika: Tikapur Municipality,B,B,B,B,B,A,B,B,C,B,C,B,C,C,B,A,B,B,B,A,B,A,B,B,B,B,B,B,C,B,C,B,B,B,B,B,B,C,B,B,C,C,C,B,C,C,B,B,C,C,C,B,C,B,B,A,B,B,C,C,B,B,C,C,B,B,C,C,B,A,B,B,C,B,C,B,B,B,B,B,C,C,B,B,B,B,B,B,B,B,C,B,B,B,B,B,C,C,B,A,B,A,B,B,B,B,C,C,C,B,B,B,B,B,C,C,B,A,B,A,C,C,C,B,C,B,C,C,C,B,B,B,C,B,B,A,B,A,B,A,B,B,C,B,C,B,C,C,C,C,B,B,",
    "c_04,Balapur,Nepal,Lumbini,Bardiya,28.228113,81.37092,47.9,,57.9,,52.9,,1327,679,648,77,102,61,259,,,,Palika: Gulariya Municipality,B,B,C,B,B,B,C,B,B,A,C,B,B,B,C,B,C,C,B,B,C,B,B,B,B,B,C,C,B,B,B,A,B,B,B,B,C,B,B,B,C,C,C,C,C,B,C,C,B,A,B,B,C,B,C,C,C,C,C,B,B,A,C,B,C,B,C,B,C,B,C,C,B,A,B,B,C,C,B,A,B,A,B,B,B,B,B,A,B,B,B,B,C,B,C,C,B,B,B,B,C,C,C,C,C,C,B,B,B,A,C,C,B,B,C,C,C,C,B,B,C,C,C,B,B,B,C,B,B,B,C,B,B,B,C,B,B,B,C,B,B,A,B,A,B,B,B,B,B,B,B,B,",
    "c_05,Balmi,Nepal,Sudur Paschim,Kanchanpur,28.750839,80.374917,49.9,,59.9,,54.9,,1055,540,515,63,55,78,179,,,,Palika: Laljhadi Rural Municipality,C,C,C,C,B,B,B,B,B,A,B,A,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,B,B,B,C,B,A,B,B,B,B,B,B,B,A,B,B,B,B,B,B,B,B,B,B,B,A,C,B,B,B,C,B,C,C,C,C,B,B,C,C,B,A,B,A,B,A,C,C,C,C,C,C,B,A,C,B,B,B,C,B,B,B,C,B,B,B,C,B,B,B,B,B,C,C,B,B,B,A,C,C,B,B,C,B,C,B,B,B,C,C,B,B,C,C,B,B,B,B,B,B,C,C,B,B,B,B,C,C,B,A,C,B,B,B,B,B,",
    "c_06,Bangalipur,Nepal,Lumbini,Bardiya,28.389807,81.242667,49.9,,59.9,,54.9,,553,276,277,46,279,12,109,,,,Palika: Madhuwan Municipality,C,C,B,B,B,B,B,A,C,C,B,B,C,C,C,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,C,C,B,A,B,B,C,B,B,A,C,B,B,B,B,A,C,C,B,B,C,B,B,A,B,B,C,B,B,C,B,A,C,B,C,B,B,A,B,B,B,A,B,B,C,B,B,A,C,C,C,C,B,B,B,B,B,B,C,B,C,B,B,C,B,B,B,B,B,A,B,B,B,B,B,B,B,B,C,B,B,B,C,B,C,C,B,B,B,B,B,C,C,C,B,B,C,B,C,B,B,B,B,B,C,B,B,B,C,C,C,B,C,B,C,B,B,B,B,B,C,B,",
    "c_07,Banghushra,Nepal,Lumbini,Bardiya,28.53871,81.19048,49.8,,59.8,,54.8,,455,221,234,31,230,20,93,,,,Palika: Geruwa Rural Municipality,B,B,C,C,B,B,C,C,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,B,A,B,B,C,B,B,B,B,B,C,C,C,C,B,A,C,B,B,B,C,B,B,B,B,A,B,B,B,B,C,C,C,C,B,A,B,B,C,C,C,B,B,A,C,C,C,C,B,B,B,B,B,B,B,A,C,B,B,B,B,B,C,B,C,C,C,B,B,B,C,C,B,A,B,C,B,C,B,A,B,B,C,B,B,B,C,C,C,B,C,C,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,C,C,C,C,C,B,B,B,B,B,",
    "c_08,Bankatti,Nepal,Lumbini,Bardiya,28.499176,81.169296,48.7,,58.7,,53.7,,1722,844,878,130,878,56,308,,,,Palika: Geruwa Rural Municipality,B,B,B,B,B,A,C,C,C,B,B,B,B,B,C,C,C,B,C,B,B,B,C,B,C,B,B,B,C,C,B,A,C,B,B,A,C,B,C,B,C,B,C,C,C,B,C,B,C,C,B,B,B,B,B,B,B,A,C,B,B,B,B,B,B,B,C,C,B,B,B,B,B,B,B,B,B,B,B,A,B,B,C,C,B,A,C,C,C,C,B,B,C,C,C,C,C,C,B,B,B,B,C,C,C,B,B,B,B,B,C,C,B,B,B,B,C,B,B,B,B,B,B,A,C,C,B,B,B,B,B,B,C,B,B,B,B,B,B,B,B,A,C,C,B,B,B,B,B,B,C,C,",
    "c_09,Belpur,Nepal,Sudur Paschim,Kailali,28.547969,81.070286,49.9,,59.9,,54.9,,893,436,457,79,33,16,138,,,,Palika: Janaki Rural Municipality,B,B,B,B,C,C,C,B,B,C,C,B,B,B,C,B,C,B,B,B,B,B,C,B,B,B,B,B,C,B,B,B,B,A,C,B,B,A,C,C,B,A,C,B,C,C,C,B,B,B,B,A,C,C,C,C,C,C,B,A,C,B,B,B,B,A,C,C,B,B,B,B,B,B,C,C,C,B,B,B,B,B,C,B,B,B,C,B,B,B,B,B,C,B,B,B,B,B,B,B,C,B,B,A,C,C,B,B,B,B,C,C,B,B,C,B,B,A,B,C,B,A,B,A,B,B,B,A,B,B,C,B,B,B,C,B,B,B,B,A,B,B,B,B,B,A,C,C,B,A,C,C,",
    "c_10,Bhagatpur,Nepal,Lumbini,Bardiya,28.359733,81.23673,50.8,,60.8,,55.8,,402,201,201,116,190,5,83,,,,Palika: Madhuwan Municipality,B,A,B,B,C,B,C,B,C,B,B,A,C,C,B,A,B,B,C,C,B,A,B,B,B,B,B,B,C,B,C,C,B,B,B,B,C,C,B,B,B,B,B,A,B,B,C,C,B,B,C,C,C,B,B,A,C,C,B,B,B,A,B,B,B,B,B,B,B,A,B,B,C,B,C,C,B,A,B,B,B,B,C,B,B,B,B,B,B,B,B,B,C,C,C,C,C,C,C,C,C,C,C,C,C,B,C,B,B,B,C,B,B,B,B,A,B,B,B,A,C,B,B,B,B,A,B,B,B,B,B,A,B,A,B,B,C,C,B,B,B,A,B,B,B,A,C,C,B,B,B,A,",
    "c_11,Bhagrahiya,Nepal,Lumbini,Bardiya,28.353272,81.221068,51.3,,61.3,,56.3,,300,150,150,94,144,7,60,,,,Palika: Madhuwan Municipality,C,B,B,B,C,B,B,A,C,B,B,B,C,B,C,B,C,B,C,C,C,C,B,B,B,A,B,A,B,B,B,B,C,C,C,B,B,B,B,B,B,B,B,B,C,C,B,A,B,B,B,B,B,A,B,B,B,B,C,B,B,A,C,C,B,C,B,B,C,B,B,B,B,B,C,B,B,B,B,A,C,C,B,A,B,C,C,C,B,B,B,A,B,A,B,A,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,B,A,B,B,B,B,B,B,B,B,B,B,B,A,B,B,B,B,B,B,B,B,C,C,B,B,B,A,B,A,B,B,C,B,B,B,B,B,C,B,",
    "c_12,Bhaishakhani,Nepal,Lumbini,Bardiya,28.317743,81.315117,48.7,,58.7,,53.7,,1157,564,593,91,48,26,185,,,,Palika: Barbardiya Municipality,C,B,B,B,B,B,C,C,C,B,B,B,B,A,C,B,B,B,C,B,B,B,B,B,B,B,C,C,B,B,B,B,B,B,C,B,B,B,C,B,B,A,B,B,C,C,B,A,B,B,B,B,B,B,C,B,B,A,B,B,C,C,C,C,C,C,B,A,B,A,B,B,C,C,B,A,B,B,B,C,C,B,B,B,B,B,C,B,C,B,C,B,B,B,C,C,C,B,C,C,C,B,C,B,B,B,C,B,C,B,B,B,C,C,C,B,B,B,B,A,C,B,B,B,C,B,B,A,B,B,B,B,B,B,C,C,B,A,C,C,C,C,B,A,B,B,B,B,C,B,C,C,",
    "c_13,\"Bhanubhakta Tole (Saraswati, Bhumiraj)\",Nepal,Sudur Paschim,Kanchanpur,28.937671,75.203787,70.203787,,80.203787,,75.203787,,309,158,151,22,30,6,,,,,45,Palika: Bhimdutta Municipality,C,B,B,A,B,B,B,B,B,B,B,B,B,B,B,A,C,B,C,C,B,A,B,B,B,B,B,B,B,B,B,B,B,B,C,C,C,B,B,B,B,B,B,B,B,B,B,B,B,C,B,C,C,B,A,C,B,B,B,C,B,B,B,B,B,B,B,B,B,C,B,B,B,B,A,B,B,C,C,C,B,B,B,B,A,C,C,C,B,B,B,C,B,B,A,C,B,C,B,C,B,B,A,B,B,C,B,B,B,C,C,B,A,B,A,C,C,B,B,B,A,B,B,C,B,B,B,B,A,C,B,C,C,B,B,B,A,B,B,B,B,B,B,B,A,B,A,B,B,C,B,",
    "c_14,Bhartapur,Nepal,Sudur Paschim,Kailali,28.500233,81.045265,48.8,,58.8,,53.8,,331,167,164,19,17,6,62,,,,Palika: Tikapur Municipality,C,C,B,A,C,C,B,A,B,B,C,B,B,B,C,C,B,A,B,B,C,C,C,B,B,B,C,C,B,A,C,B,B,B,B,A,B,B,B,B,B,B,C,B,B,B,C,B,C,C,C,B,B,A,B,B,B,B,B,B,B,B,C,B,B,A,B,B,B,B,B,B,B,B,B,A,B,B,C,C,B,B,C,C,B,B,C,B,B,B,C,B,C,C,B,B,B,B,B,B,C,B,B,B,B,B,B,B,B,A,B,A,B,B,C,C,C,C,C,C,B,B,C,C,C,C,B,B,B,B,B,B,C,B,B,B,C,C,B,A,C,B,B,A,C,C,C,B,C,C,B,B,",
    "c_15,Binbari,Nepal,Sudur Paschim,Kanchanpur,28.709553,80.444424,50.6,,60.6,,55.6,,1220,646,574,92,56,33,199,,,,Palika: Laljhadi Rural Municipality,B,B,B,B,C,B,B,B,B,A,B,B,B,B,C,C,B,A,C,B,C,C,B,B,C,C,B,B,B,B,C,B,C,B,B,B,B,B,B,B,B,B,B,A,B,B,C,C,C,C,B,B,B,B,B,A,B,B,B,C,B,B,B,B,B,B,C,C,C,B,B,C,B,B,B,B,C,C,B,B,B,B,B,A,B,B,C,B,B,A,C,B,B,B,B,B,B,B,B,A,B,A,B,A,B,B,B,B,C,C,B,A,B,B,B,B,C,C,B,A,B,B,C,B,C,C,B,A,B,B,B,B,B,A,B,A,B,A,B,B,C,B,B,B,C,C,C,B,C,C,B,B,",
    "c_16,Chanaura,Nepal,Lumbini,Bardiya,28.477451,81.13579,49.1,,59.1,,54.1,,187,92,95,14,28,7,44,,,,Palika: Rajapur Municipality,C,B,B,B,C,B,C,B,C,C,C,B,B,B,B,B,B,B,C,B,B,B,C,B,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,C,C,B,B,B,B,B,B,A,B,B,B,A,C,B,C,C,C,B,B,B,B,A,B,A,B,B,B,B,B,A,C,C,B,B,C,C,C,C,B,B,C,C,C,B,B,B,C,B,C,B,B,C,B,B,C,B,C,B,B,B,B,B,B,A,B,B,B,B,B,B,B,B,B,B,C,B,C,B,B,A,B,B,C,B,B,B,B,B,B,B,C,B,B,B,C,B,B,B,C,B,B,B,C,C,B,A,B,B,B,B,C,B,",
    "c_17,Dangpur,Nepal,Lumbini,Bardiya,28.386933,81.328622,49.0,,59.0,,54.0,,1537,780,757,102,48,19,291,,,,Palika: Barbardiya Municipality,C,B,C,B,B,A,B,B,B,C,B,A,B,B,B,A,B,B,B,B,B,A,B,B,C,C,C,B,C,C,B,B,B,B,B,B,C,C,B,B,C,C,C,B,C,B,C,C,B,B,B,A,C,C,B,B,C,B,C,C,C,C,C,B,C,C,B,B,C,B,C,C,C,B,B,A,B,A,B,A,C,C,C,C,B,A,B,B,B,A,C,B,C,C,B,B,B,B,B,A,B,B,B,A,C,B,C,B,B,B,B,B,C,C,B,B,C,B,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,C,C,B,B,B,B,B,B,B,B,C,B,B,B,B,B,",
    "c_18,Dashrathbasti,Nepal,Sudur Paschim,Kanchanpur,28.668303,80.473036,49.1,,59.1,,54.1,,256,113,143,22,11,5,39,,,,Palika: Punarbas Municipality,B,B,C,C,B,A,C,C,C,C,B,A,C,B,B,B,B,A,C,C,B,B,B,A,B,B,B,B,C,C,C,B,B,B,C,B,B,A,B,B,B,B,B,A,C,B,C,C,B,B,B,B,B,B,B,B,B,A,B,B,C,C,B,B,B,B,B,B,C,C,B,C,B,B,C,B,C,B,B,C,B,B,C,B,B,B,C,B,B,A,C,C,C,B,C,B,B,B,C,C,B,B,B,B,C,B,B,B,B,B,C,B,B,B,B,B,B,B,C,B,B,B,B,A,B,B,C,C,B,B,B,B,C,B,C,B,B,A,C,C,B,A,C,C,C,C,C,B,C,B,C,B,",
    "c_19,Dakshinshahipur,Nepal,Sudur Paschim,Kailali,28.467608,81.103213,49.5,,59.5,,54.5,,443,234,209,54,18,10,82,,,,Palika: Tikapur Municipality,B,A,B,B,C,C,B,B,C,C,B,A,C,C,C,B,C,C,B,B,C,C,C,B,B,B,C,B,C,B,B,B,B,A,C,B,B,B,C,C,B,A,B,B,B,C,B,B,C,B,B,B,B,B,B,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,C,C,C,B,B,A,C,C,B,B,B,A,B,B,B,B,B,B,B,A,B,B,B,B,C,C,C,B,B,B,C,C,C,C,B,B,B,B,C,C,C,B,C,B,B,B,C,B,B,B,B,B,C,C,B,B,B,B,B,B,C,C,C,B,B,C,B,B,C,B,B,B,B,B,B,B,",
    "c_20,Dekhatbhuli (Deuwa Tole),Nepal,Sudur Paschim,Kanchanpur,28.841248,80.411581,49.8,,59.8,,54.8,,2112,1064,1048,161,119,23,376,,,,Palika: Laljhadi Rural Municipality,B,B,C,B,C,B,B,B,B,A,C,C,B,B,B,B,C,C,B,B,B,B,B,B,B,B,B,A,B,B,B,B,C,C,C,C,C,C,B,A,B,B,C,B,B,B,B,A,C,B,B,B,C,B,B,B,C,B,B,A,B,B,B,A,B,B,C,B,B,A,B,B,B,A,B,B,C,B,C,B,C,B,C,B,B,B,C,C,B,B,B,B,B,B,B,B,C,C,C,B,B,B,C,B,B,B,C,C,B,A,B,B,B,B,B,B,B,B,C,B,B,B,B,B,C,C,B,A,C,C,B,B,B,B,C,C,B,B,C,B,B,B,B,B,C,B,B,B,C,B,C,C,",
    "c_21,Dhungrahi,Nepal,Lumbini,Bardiya,28.21036,81.19037,49.5,,59.5,,54.5,,1291,659,632,81,63,18,281,,,,Palika: Barbardiya Municipality,B,B,B,B,B,B,B,C,B,B,C,B,C,B,B,B,B,A,B,A,C,C,C,C,B,A,C,C,C,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,B,A,C,B,B,B,C,C,B,B,C,C,B,B,C,B,B,B,B,B,B,B,B,A,B,A,B,B,B,B,B,B,B,A,C,B,B,B,B,B,C,B,C,B,B,B,C,C,B,B,C,C,B,B,C,C,B,A,C,C,C,C,B,B,B,B,B,A,C,C,B,B,B,B,B,A,B,B,B,B,B,B,B,B,B,B,C,C,B,B,C,B,C,C,B,B,B,B,",
    "c_22,Dunga,Nepal,Sudur Paschim,Kanchanpur,28.762218,80.366296,49.2,,59.2,,54.2,,714,351,363,62,24,9,120,,,,Palika: Laljhadi Rural Municipality,B,B,C,B,B,B,C,B,C,B,C,B,C,C,B,B,B,B,B,B,B,B,B,A,C,B,B,A,B,B,B,B,C,C,B,A,B,B,B,B,C,B,C,C,B,B,B,A,B,A,B,B,B,B,B,B,B,A,B,B,B,B,B,B,B,B,C,C,B,A,C,C,C,C,B,B,B,B,C,B,C,B,C,C,B,A,B,B,B,B,C,C,B,B,B,B,C,C,C,B,C,B,B,B,B,A,C,B,B,B,B,B,C,C,B,B,C,B,B,C,C,C,B,A,B,B,C,C,C,B,C,C,C,B,C,B,C,B,C,B,B,B,B,B,B,B,C,B,B,B,B,B,",
    "c_23,Farela,Nepal,Sudur Paschim,Kailali,28.54289,81.05724,51.3,,61.3,,56.3,,175,92,83,12,10,1,31,,,,Palika: Janaki Rural Municipality,B,B,C,C,B,B,B,B,B,B,C,B,B,B,C,B,B,A,C,B,B,B,B,B,B,B,B,B,C,B,B,A,B,B,B,A,B,A,B,A,B,B,B,B,B,B,B,B,B,A,B,B,B,B,B,B,B,B,C,B,B,B,B,B,C,C,C,C,B,A,B,B,B,A,B,B,C,C,B,B,B,B,B,B,C,C,B,B,B,A,B,A,B,B,B,B,B,B,B,A,B,B,B,A,B,B,C,B,B,B,C,B,B,B,B,B,B,A,C,B,C,C,B,B,B,B,B,B,B,B,B,A,C,C,B,B,C,C,B,B,B,B,C,B,B,B,B,B,B,B,B,B,",
    "c_24,Ghorpitta,Nepal,Lumbini,Bardiya,28.306044,81.318685,50.5,,60.5,,55.5,,1702,851,851,108,77,188,335,,,,Palika: Barbardiya Municipality,B,B,B,A,B,B,B,B,C,C,C,B,B,A,B,A,B,B,C,C,C,C,C,B,B,B,B,B,B,B,B,A,C,C,C,B,B,A,C,B,B,B,B,A,B,B,B,B,B,B,B,A,B,B,B,A,B,A,B,B,C,C,B,B,B,B,B,B,C,B,B,B,B,B,B,C,B,B,C,B,B,A,B,B,B,B,B,B,C,B,B,B,C,B,B,B,C,B,B,B,B,B,B,B,B,A,B,B,C,C,B,B,B,B,B,B,B,B,C,B,C,C,B,B,B,B,C,B,B,B,B,B,C,B,C,B,C,B,C,C,B,B,C,B,C,B,B,B,C,C,B,B,",
    "c_25,Girdharpur,Nepal,Sudur Paschim,Kailali,28.54957,81.057885,50.9,,60.9,,55.9,,114,60,54,6,2,9,31,,,,Palika: Janaki Rural Municipality,B,B,B,B,C,C,C,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,B,B,B,B,C,C,C,B,B,B,B,B,B,A,B,A,C,B,B,B,B,B,C,C,C,B,B,B,B,B,B,B,B,B,C,B,B,B,B,A,B,B,B,B,B,A,B,B,B,B,C,C,B,B,C,B,B,B,B,B,C,B,B,B,C,B,B,B,C,B,B,B,B,A,B,B,B,B,B,B,B,B,C,B,B,B,C,C,B,B,B,A,C,B,B,B,B,B,B,B,C,B,C,C,B,B,B,A,C,C,B,B,C,C,B,A,B,A,C,B,B,B,",
    "c_26,Guruwa Gau,Nepal,Lumbini,Bardiya,28.287795,81.322657,50.4,,60.4,,55.4,,823,415,408,52,32,90,174,,,,Palika: Barbardiya Municipality,B,A,C,B,B,B,B,A,C,C,C,C,B,A,B,B,B,B,B,A,B,B,B,B,C,C,B,B,B,B,B,B,C,C,C,C,B,B,B,B,B,A,B,A,B,A,C,B,C,B,C,B,B,B,B,C,B,A,B,B,B,A,B,B,B,B,B,B,B,A,B,A,C,C,B,B,B,B,C,C,C,C,B,A,B,B,B,B,B,B,B,B,C,B,B,B,B,B,C,C,B,B,C,C,B,A,B,B,C,B,C,B,C,C,B,B,C,C,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,C,C,C,B,B,B,C,C,B,B,B,B,B,B,C,B,",
    "c_27,Jabdi,Nepal,Lumbini,Bardiya,28.273911,81.375248,50.8,,60.8,,55.8,,1652,831,821,125,75,77,341,,,,Palika: Barbardiya Municipality,C,C,B,B,B,A,C,B,B,B,C,B,B,B,C,C,B,B,C,B,B,B,B,B,B,B,B,A,C,B,B,B,B,B,B,B,C,B,B,A,C,B,B,A,C,B,C,C,B,B,B,A,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,A,B,B,C,B,C,B,C,B,C,B,B,A,C,C,B,B,B,B,C,C,B,A,B,A,B,B,C,C,B,B,B,B,B,A,B,A,C,C,B,B,B,A,C,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,B,A,B,B,B,C,B,B,B,A,B,B,B,B,C,C,C,B,B,A,B,B,C,B,",
    "c_28,Kanj,Nepal,Sudur Paschim,Kanchanpur,28.729091,80.407821,48.2,,58.2,,53.2,,1028,501,527,70,58,54,153,,,,Palika: Laljhadi Rural Municipality,B,C,B,B,B,B,B,B,C,B,B,B,C,B,C,B,B,A,B,A,B,B,B,A,C,B,B,B,B,B,B,B,B,B,C,C,C,C,B,B,C,C,B,B,B,A,C,C,C,C,B,B,C,C,B,A,B,B,C,B,C,B,C,C,C,B,B,B,B,B,B,C,B,B,C,B,B,B,B,B,B,B,C,C,B,B,B,B,B,B,B,B,C,B,C,B,B,B,B,B,C,C,B,B,B,A,B,B,C,C,B,A,B,B,B,B,C,B,C,C,B,B,C,C,B,B,B,B,C,B,C,B,C,C,B,A,B,A,C,C,B,B,B,A,B,B,C,C,B,B,C,B,",
    "c_29,Kasba,Nepal,Sudur Paschim,Kanchanpur,28.742809,80.413177,48.8,,58.8,,53.8,,1275,663,612,95,97,58,218,,,,Palika: Laljhadi Rural Municipality,B,B,C,B,B,A,B,B,C,C,C,B,B,A,C,B,C,B,B,A,C,C,B,B,C,B,B,A,C,C,B,B,B,B,B,B,B,B,B,B,B,A,B,B,B,A,B,A,C,B,C,C,C,C,B,B,B,B,C,C,C,B,B,B,B,B,B,B,C,B,B,B,C,C,C,C,C,B,C,B,C,C,B,A,B,B,C,B,C,C,B,B,B,B,B,B,B,B,B,A,B,B,C,B,B,B,C,B,B,B,C,B,B,B,B,B,B,B,B,B,C,B,C,C,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,A,C,B,C,B,B,B,C,B,B,A,B,A,",
    "c_30,Khall Jain,Nepal,Sudur Paschim,Kanchanpur,28.788641,80.373018,50.6,,60.6,,55.6,,338,188,150,30,31,11,52,,,,Palika: Laljhadi Rural Municipality,B,B,B,B,B,B,C,B,B,B,C,B,C,B,B,B,B,B,C,B,C,C,B,B,B,B,C,B,B,B,B,B,B,A,B,B,B,A,B,B,B,B,B,B,B,B,B,B,B,A,B,B,C,B,C,C,B,B,C,B,B,B,C,B,B,B,B,A,B,B,C,C,B,B,B,A,B,A,C,B,B,B,B,B,B,B,B,B,C,B,C,B,C,B,B,B,C,C,C,C,B,A,B,A,C,C,B,B,B,B,C,C,B,B,C,B,B,A,C,B,B,A,C,C,C,B,B,A,B,C,B,B,B,B,B,B,B,B,B,B,B,A,B,B,B,A,C,B,B,B,B,B,",
    "c_31,Khallabichawa,Nepal,Sudur Paschim,Kanchanpur,28.696053,80.478088,49.7,,59.7,,54.7,,692,363,329,45,32,15,116,,,,Palika: Laljhadi Rural Municipality,C,C,C,B,B,B,B,B,B,B,B,B,C,C,C,C,C,C,B,B,B,B,B,B,C,B,B,B,B,A,B,A,C,C,B,B,C,C,B,B,C,B,B,B,B,B,C,B,C,B,B,B,C,B,C,C,B,B,B,B,B,B,B,B,C,C,B,B,C,C,B,C,C,B,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,A,B,B,B,B,B,B,B,B,B,A,B,B,C,C,C,B,C,C,C,B,C,B,B,B,B,B,C,C,C,C,B,A,B,B,B,B,B,A,B,B,B,A,B,B,C,B,C,B,B,A,B,B,B,B,C,B,B,B,B,A,",
    "c_32,Khutiya Tole,Nepal,Sudur Paschim,Kailali,28.643845,80.664437,50.1,,60.1,,55.1,,331,177,154,26,27,11,53,,,,Palika: Dhangadhi Sub-Metropolitan City,B,B,B,B,C,B,B,B,C,B,C,B,B,B,B,B,B,B,B,B,B,A,B,B,C,B,B,B,C,C,B,B,C,B,B,B,B,B,B,A,C,C,C,C,B,B,C,C,C,C,C,B,C,B,B,B,C,C,B,B,C,B,B,B,C,B,B,B,C,B,B,B,B,A,B,B,B,B,B,A,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,A,B,A,C,B,B,B,B,B,C,B,B,B,C,B,B,B,B,A,C,B,B,B,C,C,B,B,C,C,C,C,B,B,C,C,B,B,C,B,B,B,B,B,B,B,C,C,B,B,B,B,B,B,B,A,",
    "c_33,Kumra Gau,Nepal,Lumbini,Bardiya,28.351652,81.316787,51.2,,61.2,,56.2,,1044,516,528,66,32,33,213,,,,Palika: Barbardiya Municipality,B,B,B,B,C,B,B,B,B,B,C,B,B,A,B,B,B,B,C,B,B,C,B,B,B,A,C,B,B,B,B,B,C,B,C,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,A,B,B,B,B,C,C,B,B,C,B,C,C,B,B,C,C,B,B,B,B,C,B,B,B,B,B,B,B,B,B,C,C,B,B,C,B,B,B,B,B,C,C,C,B,C,B,B,A,C,C,B,B,B,B,C,C,B,A,C,B,B,B,C,C,B,A,B,B,B,B,B,A,B,B,B,B,B,B,B,A,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,",
    "c_34,Lamkipuruwa,Nepal,Sudur Paschim,Kailali,28.556301,81.176932,50.5,,60.5,,55.5,,1334,667,667,105,74,16,208,,,,Palika: Janaki Rural Municipality,B,A,B,B,C,B,B,A,C,B,B,B,B,B,C,C,B,A,B,B,C,C,B,B,C,B,B,B,B,A,B,B,B,B,B,B,B,B,C,B,B,B,B,A,C,B,B,A,B,B,C,B,C,C,B,B,B,B,B,B,C,B,B,B,C,B,C,B,C,C,B,B,B,B,B,C,B,A,C,C,B,B,B,B,B,A,B,B,B,B,B,B,B,A,C,C,B,A,B,B,C,B,C,C,C,B,B,B,C,C,B,B,B,A,B,B,B,B,C,B,C,C,C,B,B,B,C,C,B,A,C,B,B,A,C,B,B,B,C,B,B,B,B,B,B,B,C,B,B,B,B,B,",
    "c_35,\"Lauthuwa, Jogipur\",Nepal,Lumbini,Bardiya,28.332717,76.313242,71.313242,,81.313242,,76.313242,,817,430,387,50,53,23,,,,155,Palika: Barbardiya Municipality,B,C,B,A,B,A,C,B,B,B,B,A,B,B,B,A,C,B,B,B,B,B,C,C,C,B,C,B,C,B,B,B,C,B,B,A,B,B,B,B,B,B,C,B,B,B,C,B,C,B,C,C,B,B,B,B,C,C,C,B,B,B,B,B,B,B,B,B,B,B,C,B,C,C,C,B,B,B,B,B,B,B,B,B,B,B,B,A,B,B,C,C,B,B,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,C,B,B,A,B,B,B,A,B,B,C,B,C,B,B,A,B,B,B,B,B,B,C,B,B,B,C,C,B,B,B,B,C,C,B,B,C,C,",
    "c_36,Nand Gau,Nepal,Sudur Paschim,Kanchanpur,28.757242,80.404834,48.6,,58.6,,53.6,,759,380,379,55,30,11,144,,,,Palika: Laljhadi Rural Municipality,C,B,C,C,B,B,C,B,C,B,B,B,C,B,C,B,C,C,C,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,B,B,C,B,B,B,C,C,C,B,B,B,B,B,B,A,C,C,C,C,C,B,C,C,B,A,B,B,B,B,C,B,B,B,B,B,B,B,C,B,B,B,B,B,C,C,B,B,C,C,C,C,B,B,B,B,B,B,B,B,B,A,B,C,B,B,C,B,C,C,B,B,B,B,C,C,C,B,B,A,B,B,B,B,C,B,B,B,C,B,B,B,C,C,B,B,C,B,C,B,B,B,B,B,B,A,C,B,B,B,B,A,C,B,B,B,",
    "c_37,Naya Likepur Shiber,Nepal,Sudur Paschim,Kailali,28.546375,81.139792,50.4,,60.4,,55.4,,680,350,330,42,20,20,135,,,,Palika: Janaki Rural Municipality,C,B,B,C,B,B,B,B,C,B,C,B,B,B,C,C,B,A,B,B,B,C,B,A,C,C,C,B,C,B,C,C,C,B,C,C,C,C,B,B,C,C,C,C,C,B,B,B,B,C,B,B,B,A,C,C,B,B,B,B,C,B,B,B,B,B,B,B,B,A,B,A,B,B,C,C,C,B,B,A,B,A,B,B,B,A,B,A,C,C,B,B,B,B,C,B,B,B,B,B,B,A,B,B,C,B,C,B,B,C,C,C,B,A,C,B,B,B,B,B,B,A,B,A,B,B,B,B,B,A,B,B,C,B,B,B,C,C,B,B,B,A,C,B,B,B,C,B,B,A,B,B,",
    "c_38,Nuklipur,Nepal,Sudur Paschim,Kailali,28.61353,80.688754,52.2,,62.2,,57.2,,462,234,228,42,49,16,91,,,,Palika: Dhangadhi Sub-Metropolitan City,C,B,C,B,C,B,B,B,B,B,C,B,B,A,C,B,B,A,B,B,B,B,C,C,B,B,B,B,C,B,B,A,B,A,C,C,B,A,C,C,B,B,B,B,C,B,B,A,B,B,C,B,B,B,B,A,C,B,B,B,C,B,B,A,B,A,B,B,B,B,B,B,C,B,B,A,B,A,B,B,C,B,B,B,B,B,B,B,B,A,B,A,C,B,B,B,B,A,B,B,B,B,B,B,C,C,B,B,B,A,B,B,B,B,B,B,B,B,C,B,C,B,C,B,B,B,B,B,B,B,B,B,C,C,B,B,B,B,C,C,C,B,C,C,C,B,B,B,B,B,B,B,",
    "c_39,Patharbojhi,Nepal,Lumbini,Bardiya,28.3744,81.2174,50.8,,60.8,,55.8,,771,389,382,151,366,18,131,,,,Palika: Madhuwan Municipality,B,B,C,C,B,B,B,A,B,A,B,A,B,B,B,B,B,B,B,A,B,B,B,C,B,A,B,A,C,C,B,B,B,B,C,B,C,B,B,B,C,C,B,B,B,A,B,A,B,B,B,B,B,B,B,B,B,B,B,B,C,C,C,B,B,B,B,B,B,B,B,B,C,B,B,B,C,B,B,C,B,B,C,B,C,C,B,B,B,B,B,B,C,C,C,C,B,B,B,B,B,B,C,B,B,A,C,B,B,B,B,B,B,A,B,A,C,B,C,C,B,B,C,C,B,B,B,A,B,B,B,A,B,B,C,B,B,B,C,C,B,A,C,C,C,B,C,B,B,B,B,B,",
    "c_40,Payal,Nepal,Sudur Paschim,Kailali,28.437032,81.038959,49.3,,59.3,,54.3,,592,288,304,47,54,11,94,,,,Palika: Tikapur Municipality,C,B,B,B,B,B,B,A,B,B,C,B,B,B,C,C,C,C,B,B,B,A,B,B,C,B,B,B,C,B,B,A,C,C,C,B,C,C,B,B,C,B,B,A,C,B,B,B,B,B,B,A,C,C,B,B,C,B,C,C,B,B,B,A,B,B,B,A,C,B,B,A,C,C,B,B,B,B,B,A,C,C,C,B,B,A,B,B,B,A,B,B,C,B,B,B,B,A,C,C,B,A,C,C,C,B,C,C,B,B,C,C,B,A,B,C,C,B,B,B,B,B,C,C,B,B,B,A,B,B,B,B,B,B,C,B,B,B,B,B,B,B,C,B,C,C,B,B,C,C,C,B,",
    "c_41,Purba Lalitpur,Nepal,Sudur Paschim,Kailali,28.582142,80.742748,51.0,,61.0,,56.0,,287,148,139,32,29,13,40,,,,Palika: Dhangadhi Sub-Metropolitan City,C,B,B,B,C,B,B,B,B,B,B,B,C,B,B,A,B,B,B,B,C,B,B,B,B,B,C,B,C,B,B,B,C,C,B,A,B,B,B,B,B,B,B,A,B,B,B,B,B,B,B,A,B,B,B,A,C,C,C,B,C,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,C,B,B,A,B,B,C,B,B,B,C,B,C,C,B,B,B,A,B,B,B,B,B,B,B,B,B,B,B,B,C,C,B,A,C,C,C,C,B,A,B,B,B,B,C,B,B,B,B,B,B,B,C,C,C,B,B,B,B,B,B,B,B,A,B,B,C,C,B,B,B,B,B,B,B,C,",
    "c_42,Rajipur,Nepal,Lumbini,Bardiya,28.547136,81.202066,50.5,,60.5,,55.5,,859,432,427,63,427,45,167,,,,Palika: Geruwa Rural Municipality,C,B,B,A,B,B,B,B,C,C,C,B,B,B,C,C,B,B,C,C,B,A,B,B,B,A,B,A,B,B,B,B,C,B,B,A,B,B,C,C,C,C,B,A,B,A,B,B,B,B,B,B,C,B,B,B,C,B,C,B,B,B,C,B,B,B,B,B,C,C,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,C,C,B,B,B,B,B,B,B,B,B,A,B,A,B,A,C,C,B,B,C,C,B,A,B,B,B,B,B,B,B,B,B,B,B,A,B,A,C,B,C,B,B,B,B,B,C,C,B,B,C,B,C,B,B,B,C,B,",
    "c_43,Ramnagar,Nepal,Sudur Paschim,Kanchanpur,28.736011,80.387101,50.6,,60.6,,55.6,,1226,625,601,72,46,42,193,,,,Palika: Belauri Municipality,C,C,C,C,C,B,B,A,B,B,B,B,B,B,B,B,C,C,B,B,B,B,B,B,C,C,B,B,C,B,B,B,B,B,C,B,C,C,C,B,B,A,B,A,B,B,B,B,B,B,B,B,C,C,C,C,B,C,B,B,B,B,B,B,B,B,C,B,C,B,C,B,C,C,B,A,B,B,B,A,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,C,B,B,B,B,A,B,B,B,A,C,B,B,A,C,B,B,B,C,B,B,B,C,B,B,B,B,C,B,B,C,C,B,A,C,C,B,B,B,A,B,B,B,B,B,A,B,B,C,B,B,B,B,B,",
    "c_44,Rautela Khola (Bishnu Tole),Nepal,Sudur Paschim,Kanchanpur,29.002987,80.20382,49.9,,59.9,,54.9,,615,309,306,48,36,8,97,,,,Palika: Bhimdutta Municipality,B,B,C,B,C,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,A,C,B,C,C,C,B,B,B,B,B,C,C,B,B,B,A,B,B,B,B,B,B,C,C,B,A,B,B,C,B,B,B,C,B,B,B,B,B,B,B,B,B,B,A,C,B,B,A,C,B,B,B,B,B,C,C,C,B,B,A,C,B,C,B,B,B,B,C,B,A,C,C,C,B,B,B,B,B,B,B,C,B,B,B,B,B,B,B,B,B,C,C,B,B,C,B,B,A,C,C,B,B,B,B,C,B,C,B,B,B,B,B,B,B,B,A,B,B,C,B,",
    "c_45,Sangharshanagar,Nepal,Lumbini,Bardiya,28.41975,81.08146,49.1,,59.1,,54.1,,2121,1078,1043,144,334,56,484,,,,Palika: Rajapur Municipality,B,A,B,A,C,B,C,B,C,C,C,B,C,B,B,A,B,B,C,C,B,B,C,B,C,B,C,B,B,B,B,B,C,B,C,B,C,B,B,A,C,C,B,A,C,B,B,B,B,B,B,A,B,B,C,B,B,B,B,B,C,B,B,B,B,B,C,C,B,B,C,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,C,C,B,A,C,C,C,B,B,B,B,B,C,B,C,C,C,B,B,B,B,B,B,B,B,B,C,C,C,B,C,B,B,A,B,C,B,B,C,B,B,B,C,C,C,C,B,B,C,B,B,B,B,B,C,C,B,B,C,B,B,C,",
    "c_46,Sankatti,Nepal,Lumbini,Bardiya,28.50825,81.17159,49.2,,59.2,,54.2,,395,207,188,23,185,12,78,,,,Palika: Geruwa Rural Municipality,B,B,B,A,C,B,C,B,B,C,B,A,B,B,B,B,C,B,C,C,B,B,B,B,C,B,B,A,B,B,B,A,B,B,C,C,B,B,B,A,B,B,C,C,C,C,B,A,B,A,B,B,B,A,C,C,C,B,B,B,B,B,C,C,C,B,B,B,C,B,C,B,B,A,C,C,B,B,C,B,C,B,B,B,B,A,B,B,C,B,B,B,B,A,C,C,B,B,C,C,B,B,C,C,B,A,B,B,B,B,C,B,B,B,C,C,C,C,C,C,B,B,B,B,B,B,B,B,B,A,C,B,C,B,C,B,B,B,C,C,B,B,C,B,B,B,B,B,C,B,C,B,",
    "c_47,Sano Bikree,Nepal,Lumbini,Bardiya,28.227893,81.381563,49.6,,59.6,,54.6,,645,337,308,50,36,33,125,,,,Palika: Gulariya Municipality,C,B,C,B,B,B,C,C,C,C,B,A,B,B,B,B,C,B,B,A,C,C,B,B,B,B,C,B,C,C,B,B,B,B,B,B,B,B,B,B,B,B,C,C,C,B,B,B,B,B,B,B,C,C,B,B,B,C,B,B,B,B,C,C,B,C,C,C,B,B,B,B,B,B,B,B,C,C,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,C,C,B,C,C,C,B,B,B,B,C,B,B,B,B,A,C,B,C,B,C,C,B,B,B,B,B,B,B,B,B,C,B,B,B,B,C,C,B,A,B,A,B,A,C,B,C,C,B,B,B,B,C,B,C,C,B,A,",
    "c_48,Shonaha Gau,Nepal,Lumbini,Bardiya,28.51255,81.17036,50.1,,60.1,,55.1,,926,454,472,63,471,19,173,,,,Palika: Geruwa Rural Municipality,B,B,C,B,B,B,C,B,B,B,C,B,B,B,B,B,B,B,B,B,C,B,B,A,B,B,B,B,B,A,C,C,B,C,B,B,B,B,B,B,C,C,C,C,C,C,B,B,B,B,C,C,B,B,B,B,C,B,B,B,C,C,B,B,C,B,B,B,B,B,C,B,C,C,C,B,C,B,C,B,C,B,B,B,C,B,B,B,C,B,B,B,B,A,B,A,B,B,B,A,B,A,B,B,C,C,B,B,B,B,B,A,B,B,B,B,C,C,B,B,B,B,B,A,B,B,B,B,C,B,B,B,B,A,B,B,B,B,B,B,C,B,B,B,B,B,B,B,C,B,C,B,",
    "c_49,Shreelanka,Nepal,Sudur Paschim,Kailali,28.406212,81.057813,50.1,,60.1,,55.1,,383,191,192,60,17,5,63,,,,Palika: Tikapur Municipality,B,B,B,B,C,B,B,B,B,B,C,C,B,B,C,B,B,B,C,C,C,C,C,B,B,B,B,B,B,A,B,B,C,C,B,A,C,B,B,B,C,C,B,B,C,C,B,A,B,B,B,B,B,A,B,B,C,B,B,B,C,B,B,B,C,C,C,B,B,B,C,B,B,B,B,B,C,C,C,B,B,B,B,B,B,B,B,A,B,B,B,C,B,B,B,B,C,B,B,B,C,C,B,B,B,B,B,B,C,B,B,B,B,B,B,B,C,C,C,B,B,B,B,B,C,B,C,B,B,A,C,B,B,A,B,B,B,B,B,A,B,B,B,B,B,B,C,B,B,B,B,B,",
    "c_50,Simari,Nepal,Sudur Paschim,Kanchanpur,28.666939,80.474528,48.9,,58.9,,53.9,,906,464,442,84,38,21,134,,,,Palika: Punarbas Municipality,B,B,B,B,B,A,B,A,C,C,C,C,C,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,C,B,C,B,B,B,B,B,B,B,C,B,C,B,B,B,B,B,C,B,B,B,C,B,B,B,B,B,B,A,B,A,B,B,B,B,C,B,B,B,C,C,B,B,C,C,C,C,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,C,C,B,B,C,C,B,A,C,C,B,B,B,B,B,B,C,C,B,B,C,C,B,B,C,B,B,A,B,B,B,B,C,B,C,C,C,C,B,B,C,C,C,B,C,C,B,B,B,B,C,B,B,B,C,B,",
    "c_51,Sonaha,Nepal,Lumbini,Bardiya,28.3792,81.2356,51.0,,61.0,,56.0,,476,246,230,34,228,9,97,,,,Palika: Madhuwan Municipality,B,A,C,B,B,A,B,B,B,B,C,C,B,B,B,A,B,B,B,B,B,C,B,B,B,B,C,B,B,B,C,B,B,A,B,B,B,B,C,C,C,C,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,A,B,B,C,B,C,C,B,B,C,C,C,C,B,B,B,B,B,A,C,C,B,B,B,B,B,B,C,C,C,B,C,C,C,C,B,B,B,B,C,C,B,B,C,B,C,C,B,B,B,B,C,C,B,B,C,B,B,A,C,C,C,B,B,A,B,B,B,B,B,B,B,B,B,B,B,A,B,B,B,B,B,B,C,C,B,B,B,B,C,B,B,B,",
    "c_52,Tediya,Nepal,Lumbini,Bardiya,28.439003,81.099602,49.8,,59.8,,54.8,,1062,529,533,74,529,15,222,,,,Palika: Rajapur Municipality,C,B,B,B,B,A,B,B,B,A,B,B,B,C,B,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,B,A,C,C,C,B,C,B,C,C,C,C,C,C,B,B,B,B,C,C,B,B,C,B,C,C,B,B,B,B,B,B,C,C,B,A,C,B,B,B,B,B,C,B,C,C,C,C,C,B,C,C,C,C,B,B,B,B,C,C,B,B,C,C,B,B,B,B,C,B,C,C,B,B,C,B,B,B,B,B,C,B,B,B,C,B,B,B,B,B,B,B,C,B,B,B,B,B,B,C,B,B,B,A,C,C,B,A,B,A,B,B,B,B,B,B,C,C,B,B,B,B,",
    "c_53,Thapuwa,Nepal,Lumbini,Bardiya,28.176566,81.363441,51.0,,61.0,,56.0,,946,477,469,80,53,20,176,,,,Palika: Gulariya Municipality,B,B,C,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,C,C,C,B,B,B,B,B,B,A,C,C,C,B,B,B,B,B,C,B,B,A,C,C,B,B,B,B,B,C,C,C,C,C,B,A,C,B,B,A,B,A,B,B,B,B,B,B,B,B,B,A,C,C,B,B,B,B,C,C,C,B,B,B,C,B,B,C,B,B,C,B,C,C,B,B,C,B,C,B,B,A,C,B,B,A,B,B,B,B,B,B,B,B,B,C,B,B,B,B,B,A,C,B,B,A,B,B,C,C,C,B,B,A,B,A,B,C,B,A,B,A,B,A,C,C,",
    "c_54,Tigra,Nepal,Lumbini,Bardiya,28.45094,81.10612,51.4,,61.4,,56.4,,899,458,441,72,229,20,193,,,,Palika: Rajapur Municipality,B,B,B,B,B,B,C,B,C,C,B,B,B,B,B,A,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,A,B,A,B,B,B,B,B,B,B,B,B,A,C,B,C,C,C,C,C,B,B,A,B,B,C,B,B,B,B,A,B,B,C,B,B,B,B,B,B,B,B,C,C,B,B,B,B,B,B,B,B,B,B,B,B,A,B,B,C,B,C,B,C,B,B,B,B,B,B,B,B,B,B,A,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,B,B,C,C,B,B,B,B,C,B,B,B,C,B,C,C,C,B,B,B,C,B,C,B,",
    "c_55,Tihuni,Nepal,Lumbini,Bardiya,28.493009,81.162267,50.0,,60.0,,55.0,,470,227,243,27,74,9,101,,,,Palika: Rajapur Municipality,B,B,B,B,C,B,C,C,C,B,B,B,B,B,C,C,B,B,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,A,C,C,B,B,B,B,B,A,B,B,B,B,C,B,B,B,B,B,B,B,B,B,C,C,B,B,B,B,B,C,C,B,B,B,B,B,C,B,B,B,C,B,C,B,B,B,B,A,B,B,B,B,B,B,C,B,B,B,B,B,C,B,C,C,C,C,B,B,B,B,C,B,B,B,B,B,C,B,B,A,C,B,B,B,B,B,B,B,B,B,B,B,B,B,C,B,B,B,C,C,B,B,B,B,B,B,B,B,B,B,C,C,",
    "c_56,Tilki,Nepal,Sudur Paschim,Kanchanpur,28.815299,80.374074,49.3,,59.3,,54.3,,517,261,256,47,22,16,86,,,,Palika: Shuklaphanta Municipality,C,B,B,B,C,C,B,B,C,B,B,A,C,C,B,B,B,B,B,B,C,B,B,B,B,A,B,B,C,B,B,C,B,B,B,B,B,B,B,B,C,C,C,B,B,A,C,C,C,C,C,C,B,B,C,B,C,B,B,B,C,B,B,B,C,C,B,B,B,B,C,B,C,C,B,B,B,B,B,B,B,A,C,C,B,B,B,B,B,B,C,B,B,A,B,A,C,C,B,B,C,B,B,B,B,B,B,A,B,B,C,B,C,B,B,B,C,B,C,B,B,B,C,B,C,B,C,B,B,B,B,B,C,B,B,B,B,B,B,B,B,B,B,B,B,A,B,B,B,B,B,B,",
    "c_57,Udayapur,Nepal,Sudur Paschim,Kanchanpur,28.733555,80.38804,50.7,,60.7,,55.7,,359,196,163,21,13,19,53,,,,Palika: Belauri Municipality,B,B,B,B,C,B,B,B,C,B,B,A,B,B,C,B,B,B,C,B,B,B,B,B,C,C,B,B,B,B,C,B,B,B,B,B,B,A,C,C,B,A,B,B,B,A,B,B,B,B,C,C,B,B,B,A,C,C,C,C,C,C,B,B,B,B,B,B,B,B,B,B,B,B,B,B,C,C,B,B,B,B,B,B,B,B,C,B,B,B,C,C,C,C,B,B,B,B,B,B,C,C,B,B,C,C,C,B,C,B,B,B,B,B,C,C,B,A,B,A,B,B,C,C,B,B,C,C,C,B,B,B,B,A,B,B,C,B,C,B,B,B,B,B,C,C,C,B,B,B,C,B,"
  ]
};

// 2. GRADING DATA (gradingData.js)
// Auto-generated from Scores&Grading.csv
const PREBUILT_COMMUNITIES = ["Tilki","Ramnagar","Udayapur","Dashrathbasti","Simari","Khallabichawa","Binbari","Kanj","Kasba","Nand Gau","Balmi","Dunga","Khall Jain","Dekhatbhuli (Deuwa Tole)","Bhanubhakta Tole (Saraswati, Bhumiraj)","Bagphanta (Shuktaraj Tole)","Rautela Khola (Bishnu Tole)","Khutiya Tole","Nuklipur","Purba Lalitpur","Sano Bikree","Badhupuruwa","Thapuwa","Balapur","Bhartapur","Payal","Baidi","Shreelanka","Dakshinshahipur","Belpur","Girdharpur","Farela","Lamkipuruwa","Naya Likepur Shiber","Tihuni","Chanaura","Sangharshanagar","Tediya","Tigra","Bankatti","Banghushra","Rajipur","Sankatti","Shonaha Gau","Bangalipur","Bhagrahiya","Bhagatpur","Patharbojhi","Sonaha","Dangpur","Dhungrahi","Kumra Gau","Lauthuwa Jogipur","Bhaishakhani","Ghorpitta","Guruwa Gau","Jabdi"];
const PREBUILT_INDICATORS = ["F01","F02","F03","F04","F05","F06","F07","F08","F09","F10","F11","F12","F13","F14","F15","H01","H02","H03","H04","H05","H06","H07","H08","H09","H10","H11","H12","H13","H14","N01","N02","N03","N04","N05","N06","N07","P01","P02","P03","P04","P05","P06","P07","P08","P09","P10","P11","P12","P13","P14","P15","P16","P17","P18","P19","S01","S02","S03","S04","S05","S06","S07","S08","S09","S10","S11","S12","S13","S14","S15","S16","S17","S18","S19","S20","S21"];
const PREBUILT_DATA = {"Tilki":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"C","H04":"B","H05":"B","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"B","N05":"C","N06":"B","N07":null,"P01":"C","P02":"D","P03":"C","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"C","S07":"B","S08":"B","S09":"C","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"B","S19":null,"S20":"C","S21":null},"Ramnagar":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"C","H04":"B","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"B","H12":"C","H13":null,"H14":null,"N01":"B","N02":"B","N03":"B","N04":"B","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"C","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"B","S03":"C","S04":"C","S05":"C","S06":"C","S07":"C","S08":"C","S09":"C","S10":"B","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"B","S17":null,"S18":"C","S19":null,"S20":"C","S21":null},"Udayapur":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"C","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"C","N02":"B","N03":"B","N04":"B","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"C","S07":"B","S08":"B","S09":"C","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"A","S19":null,"S20":"C","S21":null},"Dashrathbasti":{"F01":"D","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"C","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"C","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"D","P03":"C","P04":"B","P05":null,"P06":"D","P07":null,"P08":"C","P09":null,"P10":"D","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"B","S03":"D","S04":"B","S05":"C","S06":"D","S07":"C","S08":"B","S09":"B","S10":"B","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"C","S19":null,"S20":"C","S21":null},"Simari":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"C","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"D","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"D","P03":"C","P04":"B","P05":null,"P06":"D","P07":null,"P08":"C","P09":null,"P10":"D","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"D","P17":null,"P18":"D","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"D","S07":"B","S08":"B","S09":"B","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"A","S19":null,"S20":"C","S21":null},"Khallabichawa":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"D","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"C","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"C","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"D","N06":"C","N07":null,"P01":"B","P02":"C","P03":"C","P04":"B","P05":null,"P06":"B","P07":null,"P08":"B","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"C","S05":"C","S06":"B","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"C","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"C","S19":null,"S20":"C","S21":null},"Binbari":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"D","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"C","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"C","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"D","N06":"C","N07":null,"P01":"B","P02":"C","P03":"C","P04":"B","P05":null,"P06":"B","P07":null,"P08":"B","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"C","S05":"C","S06":"B","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"C","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"C","S19":null,"S20":"C","S21":null},"Kanj":{"F01":"B","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"C","H03":"C","H04":"B","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"B","N05":"C","N06":"B","N07":null,"P01":"B","P02":"C","P03":"C","P04":"B","P05":null,"P06":"C","P07":null,"P08":"A","P09":null,"P10":"D","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"B","S04":"B","S05":"C","S06":"C","S07":"B","S08":"B","S09":"B","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"A","S19":null,"S20":"A","S21":null},"Kasba":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"C","H04":"B","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"A","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"B","P02":"B","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"B","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"A","S05":"C","S06":"C","S07":"B","S08":"B","S09":"C","S10":"C","S11":null,"S12":"C","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"B","S19":null,"S20":"C","S21":null},"Nand Gau":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"C","H04":"B","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"B","N05":"C","N06":"B","N07":null,"P01":"B","P02":"B","P03":"C","P04":"B","P05":null,"P06":"B","P07":null,"P08":"B","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"C","S07":"C","S08":"C","S09":"C","S10":"B","S11":null,"S12":"B","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"B","S19":null,"S20":"C","S21":null},"Balmi":{"F01":"B","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"C","H04":"B","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"B","P02":"C","P03":"C","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"B","S07":"C","S08":"C","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"C","S19":null,"S20":"C","S21":null},"Dunga":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"C","H03":"C","H04":"B","H05":"B","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"B","N05":"C","N06":"C","N07":null,"P01":"B","P02":"B","P03":"C","P04":"B","P05":null,"P06":"B","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"C","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Khall Jain":{"F01":"D","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"B","H04":"B","H05":"B","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"C","P04":"B","P05":null,"P06":"B","P07":null,"P08":"B","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"B","S04":"C","S05":"C","S06":"C","S07":"B","S08":"B","S09":"C","S10":"B","S11":null,"S12":"C","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"C","S19":null,"S20":"C","S21":null},"Dekhatbhuli (Deuwa Tole)":{"F01":"D","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"C","H03":"C","H04":"C","H05":"C","H06":null,"H07":"B","H08":null,"H09":"B","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"C","S03":"C","S04":"C","S05":"C","S06":"B","S07":"C","S08":"C","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Bhanubhakta Tole (Saraswati, Bhumiraj)":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"A","H02":"C","H03":"C","H04":"B","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"C","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"C","P04":"C","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"B","S03":"B","S04":"B","S05":"C","S06":"B","S07":"C","S08":"C","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Bagphanta (Shuktaraj Tole)":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":"C","F08":"D","F09":"C","F10":"D","F11":"C","F12":"D","F13":"C","F14":"C","F15":"D","H01":"B","H02":"C","H03":"D","H04":"A","H05":"A","H06":"B","H07":"B","H08":"A","H09":"A","H10":"B","H11":"B","H12":"B","H13":"B","H14":"C","N01":"C","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":"B","P01":"B","P02":"C","P03":"C","P04":"B","P05":"D","P06":"C","P07":"C","P08":"C","P09":"C","P10":"C","P11":"B","P12":"B","P13":"C","P14":"B","P15":"B","P16":"B","P17":"B","P18":"D","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"C","S07":"C","S08":"B","S09":"C","S10":"D","S11":"D","S12":"C","S13":"D","S14":"C","S15":"D","S16":"C","S17":"D","S18":"D","S19":"D","S20":"C","S21":"D"},"Rautela Khola (Bishnu Tole)":{"F01":"D","F02":"D","F03":"C","F04":"C","F05":"B","F06":"D","F07":"C","F08":"D","F09":"D","F10":"C","F11":"C","F12":"D","F13":"C","F14":"C","F15":"D","H01":"B","H02":"C","H03":"C","H04":"A","H05":"A","H06":"B","H07":"B","H08":"A","H09":"A","H10":"B","H11":"B","H12":"B","H13":"C","H14":"C","N01":"C","N02":"B","N03":"B","N04":"C","N05":"C","N06":"C","N07":"B","P01":"C","P02":"C","P03":"C","P04":"B","P05":"C","P06":"C","P07":"C","P08":"C","P09":"C","P10":"C","P11":"B","P12":"B","P13":"C","P14":"B","P15":"C","P16":"C","P17":"C","P18":"D","P19":"C","S01":"B","S02":"C","S03":"C","S04":"C","S05":"D","S06":"B","S07":"C","S08":"C","S09":"C","S10":"C","S11":"D","S12":"C","S13":"D","S14":"C","S15":"D","S16":"C","S17":"D","S18":"D","S19":"D","S20":"C","S21":"D"},"Khutiya Tole":{"F01":"B","F02":"B","F03":"B","F04":"C","F05":"B","F06":"C","F07":"C","F08":"D","F09":"C","F10":"C","F11":"B","F12":"D","F13":"B","F14":"C","F15":"C","H01":"C","H02":"B","H03":"B","H04":"B","H05":"B","H06":"B","H07":"B","H08":"B","H09":"A","H10":"B","H11":"B","H12":"B","H13":"B","H14":"D","N01":"B","N02":"C","N03":"D","N04":"A","N05":"C","N06":"B","N07":"B","P01":"D","P02":"C","P03":"B","P04":"B","P05":"C","P06":"C","P07":"D","P08":"B","P09":"B","P10":"C","P11":"B","P12":"A","P13":"B","P14":"B","P15":"B","P16":"D","P17":"D","P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"C","S05":"C","S06":"C","S07":"B","S08":"C","S09":"C","S10":"C","S11":"D","S12":"C","S13":"D","S14":"C","S15":"D","S16":"B","S17":"C","S18":"D","S19":"D","S20":"C","S21":"C"},"Nuklipur":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"C","F07":"C","F08":"C","F09":"D","F10":"B","F11":"C","F12":"D","F13":"C","F14":"D","F15":"D","H01":"A","H02":"B","H03":"A","H04":"B","H05":"B","H06":"B","H07":"B","H08":"B","H09":"A","H10":"B","H11":"B","H12":"B","H13":"B","H14":"C","N01":"C","N02":"C","N03":"D","N04":"D","N05":"C","N06":"C","N07":"B","P01":"C","P02":"C","P03":"B","P04":"B","P05":"C","P06":"D","P07":"D","P08":"B","P09":"C","P10":"C","P11":"B","P12":"B","P13":"C","P14":"B","P15":"B","P16":"C","P17":"D","P18":"B","P19":"C","S01":"A","S02":"C","S03":"B","S04":"B","S05":"C","S06":"B","S07":"C","S08":"C","S09":"C","S10":"D","S11":"D","S12":"D","S13":"D","S14":"C","S15":"C","S16":"B","S17":"B","S18":"D","S19":"D","S20":"B","S21":"B"},"Purba Lalitpur":{"F01":"C","F02":"B","F03":"B","F04":"C","F05":"B","F06":"C","F07":"D","F08":"D","F09":"D","F10":"B","F11":"D","F12":"D","F13":"B","F14":"B","F15":"D","H01":"B","H02":"B","H03":"C","H04":"B","H05":"B","H06":"B","H07":"B","H08":"B","H09":"A","H10":"B","H11":"B","H12":"B","H13":"B","H14":"C","N01":"B","N02":"B","N03":"C","N04":"C","N05":"B","N06":"C","N07":"C","P01":"C","P02":"C","P03":"B","P04":"C","P05":"C","P06":"D","P07":"D","P08":"C","P09":"C","P10":"C","P11":"B","P12":"A","P13":"B","P14":"B","P15":"B","P16":"D","P17":"D","P18":"C","P19":"C","S01":"B","S02":"D","S03":"B","S04":"B","S05":"B","S06":"C","S07":"B","S08":"C","S09":"D","S10":"C","S11":"D","S12":"C","S13":"D","S14":"C","S15":"C","S16":"C","S17":"C","S18":"C","S19":"D","S20":"B","S21":"B"},"Sano Bikree":{"F01":"D","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":"D","F08":"D","F09":"D","F10":"C","F11":"C","F12":"D","F13":"C","F14":"D","F15":"D","H01":"B","H02":"B","H03":"D","H04":"B","H05":"B","H06":"B","H07":"B","H08":"B","H09":"B","H10":"B","H11":"B","H12":"C","H13":"B","H14":"C","N01":"C","N02":"C","N03":"D","N04":"C","N05":"C","N06":"C","N07":"C","P01":"B","P02":"C","P03":"B","P04":"C","P05":"D","P06":"D","P07":"D","P08":"C","P09":"C","P10":"C","P11":"C","P12":"B","P13":"C","P14":"B","P15":"A","P16":"D","P17":"D","P18":"C","P19":"D","S01":"A","S02":"C","S03":"C","S04":"D","S05":"C","S06":"B","S07":"C","S08":"B","S09":"C","S10":"C","S11":"C","S12":"B","S13":"D","S14":"C","S15":"D","S16":"C","S17":"C","S18":"D","S19":"D","S20":"B","S21":"D"},"Badhupuruwa":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":"D","F08":"D","F09":"D","F10":"B","F11":"D","F12":"D","F13":"C","F14":"D","F15":"C","H01":"B","H02":"D","H03":"D","H04":"B","H05":"B","H06":"B","H07":"B","H08":"B","H09":"A","H10":"C","H11":"C","H12":"C","H13":"C","H14":"D","N01":"C","N02":"C","N03":"C","N04":"C","N05":"C","N06":"D","N07":"D","P01":"B","P02":"D","P03":"B","P04":"B","P05":"C","P06":"C","P07":"C","P08":"C","P09":"C","P10":"C","P11":"B","P12":"B","P13":"B","P14":"C","P15":"C","P16":"D","P17":"D","P18":"C","P19":"C","S01":"B","S02":"D","S03":"C","S04":"D","S05":"D","S06":"B","S07":"D","S08":"D","S09":"C","S10":"C","S11":"D","S12":"C","S13":"D","S14":"D","S15":"D","S16":"B","S17":"C","S18":"D","S19":"D","S20":"A","S21":"D"},"Thapuwa":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":"B","F08":"D","F09":"C","F10":"B","F11":"C","F12":"D","F13":"C","F14":"C","F15":"D","H01":"B","H02":"B","H03":"C","H04":"A","H05":"B","H06":"A","H07":"B","H08":"A","H09":"A","H10":"C","H11":"C","H12":"B","H13":"C","H14":"C","N01":"C","N02":"C","N03":"C","N04":"C","N05":"C","N06":"C","N07":"C","P01":"B","P02":"B","P03":"A","P04":"B","P05":"D","P06":"C","P07":"B","P08":"C","P09":"C","P10":"B","P11":"B","P12":"B","P13":"C","P14":"B","P15":"B","P16":"D","P17":"B","P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"C","S05":"C","S06":"B","S07":"C","S08":"C","S09":"C","S10":"C","S11":"D","S12":"C","S13":"D","S14":"C","S15":"D","S16":"C","S17":"D","S18":"C","S19":"D","S20":"C","S21":"D"},"Balapur":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"D","H03":"C","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"B","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"B","N06":"B","N07":null,"P01":"C","P02":"C","P03":"C","P04":"C","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"D","P17":null,"P18":"D","P19":"D","S01":"B","S02":"D","S03":"C","S04":"B","S05":"C","S06":"B","S07":"C","S08":"C","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"C","S19":null,"S20":"C","S21":null},"Bhartapur":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"D","H04":"B","H05":"B","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"C","N02":"C","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"B","P02":"D","P03":"C","P04":"C","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"D","S03":"C","S04":"C","S05":"C","S06":"C","S07":"C","S08":"C","S09":"B","S10":"D","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Payal":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"C","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"D","H03":"D","H04":"B","H05":"B","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"D","N02":"C","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"D","P03":"C","P04":"C","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"C","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"D","S03":"C","S04":"C","S05":"C","S06":"C","S07":"C","S08":"D","S09":"C","S10":"D","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"C","S19":null,"S20":"B","S21":null},"Baidi":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"B","F06":"C","F07":null,"F08":"C","F09":null,"F10":"B","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"B","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"A","H13":null,"H14":null,"N01":"C","N02":"B","N03":"B","N04":"C","N05":"C","N06":"B","N07":null,"P01":"B","P02":"C","P03":"B","P04":"A","P05":null,"P06":"C","P07":null,"P08":"B","P09":null,"P10":"C","P11":null,"P12":"A","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"B","S01":"B","S02":"B","S03":"C","S04":"A","S05":"B","S06":"B","S07":"B","S08":"B","S09":"B","S10":"B","S11":null,"S12":"A","S13":null,"S14":"B","S15":null,"S16":"B","S17":null,"S18":"A","S19":null,"S20":"B","S21":null},"Shreelanka":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"D","H04":"B","H05":"B","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"C","N02":"B","N03":"B","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"D","P03":"C","P04":"C","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"D","S03":"C","S04":"C","S05":"C","S06":"C","S07":"C","S08":"C","S09":"C","S10":"D","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Dakshinshahipur":{"F01":"C","F02":"B","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"D","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"C","N02":"B","N03":"B","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"C","S03":"C","S04":"A","S05":"C","S06":"B","S07":"C","S08":"C","S09":"C","S10":"D","S11":null,"S12":"D","S13":null,"S14":"C","S15":null,"S16":"D","S17":null,"S18":"D","S19":null,"S20":"D","S21":null},"Belpur":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"C","F06":"D","F07":null,"F08":"C","F09":null,"F10":"C","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"D","H03":"C","H04":"B","H05":"B","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"C","N02":"C","N03":"D","N04":"C","N05":"D","N06":"C","N07":null,"P01":"C","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"D","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"C","S07":"C","S08":"D","S09":"C","S10":"D","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Girdharpur":{"F01":"B","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"C","F09":null,"F10":"B","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"B","H04":"B","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"B","H13":null,"H14":null,"N01":"C","N02":"B","N03":"C","N04":"C","N05":"B","N06":"B","N07":null,"P01":"B","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"B","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"C","S07":"B","S08":"B","S09":"C","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"B","S19":null,"S20":"C","S21":null},"Farela":{"F01":"B","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"C","F09":null,"F10":"B","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"B","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"B","H13":null,"H14":null,"N01":"C","N02":"B","N03":"C","N04":"C","N05":"B","N06":"B","N07":null,"P01":"B","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"B","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"B","S07":"B","S08":"C","S09":"C","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"B","S19":null,"S20":"C","S21":null},"Lamkipuruwa":{"F01":"C","F02":"C","F03":"B","F04":"B","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"B","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"D","H04":"B","H05":"B","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"C","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"D","S03":"C","S04":"C","S05":"C","S06":"B","S07":"B","S08":"B","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Naya Likepur Shiber":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"C","H03":"C","H04":"B","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"D","H12":"C","H13":null,"H14":null,"N01":"C","N02":"B","N03":"C","N04":"C","N05":"D","N06":"C","N07":null,"P01":"C","P02":"D","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"D","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"D","S03":"B","S04":"B","S05":"C","S06":"C","S07":"B","S08":"C","S09":"C","S10":"D","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Tihuni":{"F01":"C","F02":"C","F03":"B","F04":"B","F05":"B","F06":"C","F07":null,"F08":"C","F09":null,"F10":"C","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"C","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"C","N02":"C","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"B","P02":"B","P03":"B","P04":"A","P05":null,"P06":"C","P07":null,"P08":"B","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"C","S05":"C","S06":"B","S07":"C","S08":"B","S09":"B","S10":"C","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"C","S19":null,"S20":"C","S21":null},"Chanaura":{"F01":"C","F02":"C","F03":"B","F04":"B","F05":"B","F06":"C","F07":null,"F08":"C","F09":null,"F10":"C","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"C","H04":"B","H05":"B","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"C","N02":"C","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"B","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"C","S05":"C","S06":"C","S07":"C","S08":"C","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Sangharshanagar":{"F01":"C","F02":"C","F03":"B","F04":"B","F05":"B","F06":"C","F07":null,"F08":"C","F09":null,"F10":"C","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"B","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"A","H13":null,"H14":null,"N01":"C","N02":"B","N03":"B","N04":"C","N05":"B","N06":"C","N07":null,"P01":"B","P02":"B","P03":"B","P04":"A","P05":null,"P06":"B","P07":null,"P08":"B","P09":null,"P10":"C","P11":null,"P12":"A","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"B","S04":"B","S05":"C","S06":"B","S07":"B","S08":"B","S09":"B","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"B","S19":null,"S20":"B","S21":null},"Tediya":{"F01":"C","F02":"B","F03":"B","F04":"C","F05":"B","F06":"C","F07":null,"F08":"D","F09":null,"F10":"B","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"C","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"B","H12":"B","H13":null,"H14":null,"N01":"D","N02":"B","N03":"B","N04":"C","N05":"C","N06":"B","N07":null,"P01":"B","P02":"B","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"B","S04":"B","S05":"C","S06":"B","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"C","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Tigra":{"F01":"C","F02":"B","F03":"B","F04":"B","F05":"B","F06":"C","F07":null,"F08":"C","F09":null,"F10":"B","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"C","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"B","H13":null,"H14":null,"N01":"C","N02":"B","N03":"B","N04":"C","N05":"B","N06":"B","N07":null,"P01":"B","P02":"B","P03":"B","P04":"A","P05":null,"P06":"C","P07":null,"P08":"B","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"C","P19":"C","S01":"A","S02":"B","S03":"B","S04":"B","S05":"C","S06":"B","S07":"B","S08":"C","S09":"C","S10":"B","S11":null,"S12":"B","S13":null,"S14":"B","S15":null,"S16":"B","S17":null,"S18":"B","S19":null,"S20":"C","S21":null},"Bankatti":{"F01":"B","F02":"B","F03":"B","F04":"B","F05":"A","F06":"C","F07":null,"F08":"D","F09":null,"F10":"B","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"D","H02":"C","H03":"C","H04":"B","H05":"B","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"C","N02":"C","N03":"D","N04":"B","N05":"B","N06":"C","N07":null,"P01":"B","P02":"D","P03":"B","P04":"B","P05":null,"P06":"A","P07":null,"P08":"B","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"D","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"C","S07":"C","S08":"C","S09":"D","S10":"D","S11":null,"S12":"D","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Banghushra":{"F01":"B","F02":"C","F03":"B","F04":"B","F05":"B","F06":"C","F07":null,"F08":"C","F09":null,"F10":"C","F11":null,"F12":"B","F13":"B","F14":null,"F15":null,"H01":"C","H02":"B","H03":"C","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"B","H13":null,"H14":null,"N01":"C","N02":"B","N03":"C","N04":"C","N05":"B","N06":"B","N07":null,"P01":"B","P02":"B","P03":"B","P04":"A","P05":null,"P06":"B","P07":null,"P08":"B","P09":null,"P10":"B","P11":null,"P12":"A","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"A","S02":"B","S03":"C","S04":"B","S05":"C","S06":"C","S07":"B","S08":"B","S09":"C","S10":"A","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"A","S19":null,"S20":"B","S21":null},"Rajipur":{"F01":"B","F02":"C","F03":"B","F04":"B","F05":"B","F06":"C","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"B","F13":"B","F14":null,"F15":null,"H01":"B","H02":"B","H03":"C","H04":"C","H05":"B","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"A","H13":null,"H14":null,"N01":"B","N02":"C","N03":"B","N04":"C","N05":"C","N06":"C","N07":null,"P01":"B","P02":"B","P03":"B","P04":"B","P05":null,"P06":"B","P07":null,"P08":"B","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"B","S07":"B","S08":"B","S09":"B","S10":"C","S11":null,"S12":"D","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Sankatti":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"B","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"B","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"B","H13":null,"H14":null,"N01":"C","N02":"B","N03":"C","N04":"C","N05":"C","N06":"B","N07":null,"P01":"B","P02":"B","P03":"B","P04":"A","P05":null,"P06":"C","P07":null,"P08":"B","P09":null,"P10":"C","P11":null,"P12":"A","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"B","S07":"B","S08":"B","S09":"C","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"A","S19":null,"S20":"C","S21":null},"Shonaha Gau":{"F01":"B","F02":"C","F03":"B","F04":"C","F05":"B","F06":"C","F07":null,"F08":"C","F09":null,"F10":"B","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"B","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"B","H13":null,"H14":null,"N01":"C","N02":"B","N03":"C","N04":"C","N05":"B","N06":"C","N07":null,"P01":"B","P02":"B","P03":"B","P04":"A","P05":null,"P06":"B","P07":null,"P08":"B","P09":null,"P10":"C","P11":null,"P12":"A","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"C","S07":"B","S08":"B","S09":"C","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"A","S19":null,"S20":"C","S21":null},"Bangalipur":{"F01":"C","F02":"B","F03":"B","F04":"C","F05":"B","F06":"C","F07":null,"F08":"C","F09":null,"F10":"B","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"B","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"B","H12":"A","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"B","N05":"C","N06":"B","N07":null,"P01":"B","P02":"B","P03":"B","P04":"A","P05":null,"P06":"C","P07":null,"P08":"B","P09":null,"P10":"B","P11":null,"P12":"A","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"B","S07":"B","S08":"B","S09":"B","S10":"B","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"B","S19":null,"S20":"C","S21":null},"Bhagrahiya":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"C","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"C","H02":"C","H03":"C","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"B","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"C","S03":"D","S04":"B","S05":"C","S06":"C","S07":"B","S08":"B","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Bhagatpur":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"C","H02":"C","H03":"C","H04":"A","H05":"B","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"B","N05":"B","N06":"C","N07":null,"P01":"C","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"B","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"D","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"C","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"D","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Patharbojhi":{"F01":"C","F02":"B","F03":"B","F04":"C","F05":"B","F06":"C","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"B","H04":"A","H05":"A","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"C","N06":"B","N07":null,"P01":"B","P02":"B","P03":"B","P04":"A","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"A","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"B","S07":"B","S08":"B","S09":"B","S10":"B","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"B","S19":null,"S20":"C","S21":null},"Sonaha":{"F01":"C","F02":"C","F03":"B","F04":"C","F05":"B","F06":"C","F07":null,"F08":"D","F09":null,"F10":"B","F11":null,"F12":"C","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"B","H04":"A","H05":"B","H06":null,"H07":"A","H08":null,"H09":"A","H10":null,"H11":"A","H12":"A","H13":null,"H14":null,"N01":"B","N02":"B","N03":"B","N04":"C","N05":"B","N06":"B","N07":null,"P01":"B","P02":"B","P03":"B","P04":"A","P05":null,"P06":"B","P07":null,"P08":"C","P09":null,"P10":"B","P11":null,"P12":"A","P13":null,"P14":"B","P15":null,"P16":"B","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"B","S07":"B","S08":"B","S09":"B","S10":"B","S11":null,"S12":"B","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"B","S19":null,"S20":"C","S21":null},"Dangpur":{"F01":"D","F02":"C","F03":"C","F04":"C","F05":"B","F06":"C","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"D","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"B","S07":"C","S08":"B","S09":"B","S10":"C","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Dhungrahi":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"C","H03":"D","H04":"B","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"D","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"C","P04":"C","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"D","P17":null,"P18":"D","P19":"C","S01":"B","S02":"B","S03":"B","S04":"B","S05":"C","S06":"B","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"D","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Kumra Gau":{"F01":"D","F02":"C","F03":"C","F04":"C","F05":"B","F06":"C","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"B","H03":"D","H04":"B","H05":"B","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"B","N05":"B","N06":"D","N07":null,"P01":"C","P02":"C","P03":"C","P04":"C","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"B","S03":"C","S04":"B","S05":"C","S06":"B","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Lauthuwa Jogipur":{"F01":"D","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"D","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"C","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"B","S04":"B","S05":"B","S06":"B","S07":"C","S08":"B","S09":"B","S10":"C","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Bhaishakhani":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"C","H03":"D","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"D","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"C","S07":"C","S08":"B","S09":"B","S10":"C","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Ghorpitta":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"D","H04":"A","H05":"B","H06":null,"H07":"B","H08":null,"H09":"B","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"B","N05":"B","N06":"D","N07":null,"P01":"C","P02":"C","P03":"C","P04":"C","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"C","S04":"B","S05":"C","S06":"B","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Guruwa Gau":{"F01":"C","F02":"C","F03":"C","F04":"C","F05":"C","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"B","H02":"B","H03":"D","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"C","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"B","N06":"C","N07":null,"P01":"C","P02":"C","P03":"C","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"C","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"B","S04":"C","S05":"B","S06":"B","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"C","S17":null,"S18":"D","S19":null,"S20":"C","S21":null},"Jabdi":{"F01":"D","F02":"C","F03":"C","F04":"C","F05":"B","F06":"D","F07":null,"F08":"D","F09":null,"F10":"C","F11":null,"F12":"D","F13":"C","F14":null,"F15":null,"H01":"C","H02":"C","H03":"D","H04":"A","H05":"A","H06":null,"H07":"B","H08":null,"H09":"A","H10":null,"H11":"C","H12":"B","H13":null,"H14":null,"N01":"B","N02":"B","N03":"C","N04":"C","N05":"C","N06":"C","N07":null,"P01":"C","P02":"C","P03":"B","P04":"B","P05":null,"P06":"C","P07":null,"P08":"C","P09":null,"P10":"C","P11":null,"P12":"B","P13":null,"P14":"B","P15":null,"P16":"C","P17":null,"P18":"C","P19":"C","S01":"B","S02":"C","S03":"B","S04":"B","S05":"C","S06":"C","S07":"C","S08":"B","S09":"C","S10":"C","S11":null,"S12":"C","S13":null,"S14":"C","S15":null,"S16":"B","S17":null,"S18":"D","S19":null,"S20":"C","S21":null}};


// 3. T0 SCORES DATA (scores_data.js)
window.SCORES_DATA = [
    { name: "Tilki", code: "c_56", flood: 49, heat: null, generic: 48 },
    { name: "Ramnagar", code: "c_43", flood: 45, heat: null, generic: 46 },
    { name: "Udayapur", code: "c_57", flood: 51, heat: null, generic: 52 },
    { name: "Dashrathbasti", code: "c_18", flood: 42, heat: null, generic: 42 },
    { name: "Simari", code: "c_50", flood: 43, heat: null, generic: 43 },
    { name: "Khallabichawa", code: "c_31", flood: 48, heat: null, generic: 50 },
    { name: "Binbari", code: "c_15", flood: 44, heat: null, generic: 42 },
    { name: "Kanj", code: "c_28", flood: 51, heat: null, generic: 48 },
    { name: "Kasba", code: "c_29", flood: 47, heat: null, generic: 48 },
    { name: "Nand Gau", code: "c_36", flood: 48, heat: null, generic: 44 },
    { name: "Balmi", code: "c_05", flood: 44, heat: null, generic: 44 },
    { name: "Dunga", code: "c_22", flood: 42, heat: null, generic: 46 },
    { name: "Khall Jain", code: "c_30", flood: 44, heat: null, generic: 43 },
    { name: "Dekhatbhuli (Deuwa Tole)", code: "c_20", flood: 35, heat: null, generic: 38 },
    { name: "Bhanubhakta Tole (Saraswati, Bhumiraj)", code: "c_13", flood: 41, heat: null, generic: 46 },
    { name: "Bagphanta (Shuktaraj Tole)", code: "c_02", flood: 43, heat: 42, generic: 44 },
    { name: "Rautela Khola (Bishnu Tole)", code: "c_44", flood: 41, heat: 38, generic: 39 },
    { name: "Khutiya Tole", code: "c_32", flood: 48, heat: 45, generic: 48 },
    { name: "Nuklipur", code: "c_38", flood: 46, heat: 42, generic: 48 },
    { name: "Purba Lalitpur", code: "c_41", flood: 48, heat: 43, generic: 50 },
    { name: "Sano Bikree", code: "c_47", flood: 37, heat: 35, generic: 42 },
    { name: "Badhupuruwa", code: "c_01", flood: 35, heat: 29, generic: 33 },
    { name: "Thapuwa", code: "c_53", flood: 44, heat: 43, generic: 48 },
    { name: "Balapur", code: "c_04", flood: 42, heat: null, generic: 44 },
    { name: "Bhartapur", code: "c_14", flood: 36, heat: null, generic: 39 },
    { name: "Payal", code: "c_40", flood: 34, heat: null, generic: 30 },
    { name: "Baidi", code: "c_03", flood: 61, heat: null, generic: 57 },
    { name: "Shreelanka", code: "c_49", flood: 38, heat: null, generic: 38 },
    { name: "Dakshinshahipur", code: "c_19", flood: 41, heat: null, generic: 47 },
    { name: "Belpur", code: "c_09", flood: 34, heat: null, generic: 36 },
    { name: "Girdharpur", code: "c_25", flood: 54, heat: null, generic: 52 },
    { name: "Farela", code: "c_23", flood: 55, heat: null, generic: 53 },
    { name: "Lamkipuruwa", code: "c_34", flood: 38, heat: null, generic: 39 },
    { name: "Naya Likepur Shiber", code: "c_37", flood: 36, heat: null, generic: 39 },
    { name: "Tihuni", code: "c_55", flood: 51, heat: null, generic: 52 },
    { name: "Chanaura", code: "c_16", flood: 44, heat: null, generic: 44 },
    { name: "Sangharshanagar", code: "c_45", flood: 60, heat: null, generic: 60 },
    { name: "Tediya", code: "c_52", flood: 50, heat: null, generic: 52 },
    { name: "Tigra", code: "c_54", flood: 60, heat: null, generic: 58 },
    { name: "Bankatti", code: "c_08", flood: 46, heat: null, generic: 47 },
    { name: "Banghushra", code: "c_07", flood: 61, heat: null, generic: 56 },
    { name: "Rajipur", code: "c_42", flood: 54, heat: null, generic: 56 },
    { name: "Sankatti", code: "c_46", flood: 57, heat: null, generic: 55 },
    { name: "Shonaha Gau", code: "c_48", flood: 59, heat: null, generic: 56 },
    { name: "Bangalipur", code: "c_06", flood: 61, heat: null, generic: 60 },
    { name: "Bhagrahiya", code: "c_11", flood: 44, heat: null, generic: 47 },
    { name: "Bhagatpur", code: "c_10", flood: 45, heat: null, generic: 47 },
    { name: "Patharbojhi", code: "c_39", flood: 57, heat: null, generic: 57 },
    { name: "Sonaha", code: "c_51", flood: 60, heat: null, generic: 58 },
    { name: "Dangpur", code: "c_17", flood: 44, heat: null, generic: 47 },
    { name: "Dhungrahi", code: "c_21", flood: 38, heat: null, generic: 42 },
    { name: "Kumra Gau", code: "c_33", flood: 41, heat: null, generic: 46 },
    { name: "Lauthuwa Jogipur", code: "c_35", flood: 43, heat: null, generic: 47 },
    { name: "Bhaishakhani", code: "c_12", flood: 42, heat: null, generic: 44 },
    { name: "Ghorpitta", code: "c_24", flood: 41, heat: null, generic: 47 },
    { name: "Guruwa Gau", code: "c_26", flood: 43, heat: null, generic: 47 },
    { name: "Jabdi", code: "c_27", flood: 42, heat: null, generic: 43 }
];


// 4. INDICATORS METADATA (from script_v2.js)
const indicatorMetadata = {
    "F01": { label: "Household access to discretionary funds", capital: "Financial", hazard: "Generic" },
    "F02": { label: "Community financial health", capital: "Financial", hazard: "Generic" },
    "F03": { label: "Local government financial capacity", capital: "Financial", hazard: "Generic" },
    "F04": { label: "Public infrastructure maintenance budget", capital: "Financial", hazard: "Generic" },
    "F05": { label: "Climate change adaptation planning and investment", capital: "Financial", hazard: "Generic" },
    "F06": { label: "Business continuity during floods", capital: "Financial", hazard: "Flood" },
    "F07": { label: "Business continuity during heatwave", capital: "Financial", hazard: "Heatwave" },
    "F08": { label: "Household income continuity during flood", capital: "Financial", hazard: "Flood" },
    "F09": { label: "Household income continuity during heatwave", capital: "Financial", hazard: "Heatwave" },
    "F10": { label: "Flood risk reduction investment", capital: "Financial", hazard: "Flood" },
    "F11": { label: "Heatwave risk reduction investment", capital: "Financial", hazard: "Heatwave" },
    "F12": { label: "Disaster insurance", capital: "Financial", hazard: "Flood" },
    "F13": { label: "Disaster recovery budget", capital: "Financial", hazard: "Flood" },
    "F14": { label: "Energy affordibility", capital: "Financial", hazard: "Heatwave" },
    "F15": { label: "Heatwave action-plan budget", capital: "Financial", hazard: "Heatwave" },
    "H01": { label: "Secondary school attendance", capital: "Human", hazard: "Generic" },
    "H02": { label: "Food availability", capital: "Human", hazard: "Generic" },
    "H03": { label: "First aid knowledge", capital: "Human", hazard: "Generic" },
    "H04": { label: "Awareness of the need for climate change action", capital: "Human", hazard: "Generic" },
    "H05": { label: "Awarenss of climate change risk on floods", capital: "Human", hazard: "Flood" },
    "H06": { label: "Awarenss of climate change risk on heatwaves", capital: "Human", hazard: "Heatwave" },
    "H07": { label: "Awareness of how nature mitigates risk during floods", capital: "Human", hazard: "Flood" },
    "H08": { label: "Awareness of how nature mitigates risk during heatwaves", capital: "Human", hazard: "Heatwave" },
    "H09": { label: "Hazard exposure awareness", capital: "Human", hazard: "Flood" },
    "H10": { label: "Hazard vulnerability awareness", capital: "Human", hazard: "Heatwave" },
    "H11": { label: "Evacuation and safety knowledge", capital: "Human", hazard: "Flood" },
    "H12": { label: "Unsafe water awareness", capital: "Human", hazard: "Flood" },
    "H13": { label: "Heatwave protection knowledge", capital: "Human", hazard: "Heatwave" },
    "H14": { label: "Worker protection for heatwaves", capital: "Human", hazard: "Heatwave" },
    "N01": { label: "Tree cover", capital: "Natural", hazard: "Generic" },
    "N02": { label: "Permeable surfaces", capital: "Natural", hazard: "Generic" },
    "N03": { label: "Land use planning", capital: "Natural", hazard: "Generic" },
    "N04": { label: "Resource management", capital: "Natural", hazard: "Generic" },
    "N05": { label: "Land/water interface health", capital: "Natural", hazard: "Generic" },
    "N06": { label: "Ecological management for flood disaster risk reduction", capital: "Natural", hazard: "Flood" },
    "N07": { label: "Ecological management for heatwave disaster risk reduction", capital: "Natural", hazard: "Heatwave" },
    "P01": { label: "Energy supply continuity", capital: "Physical", hazard: "Generic" },
    "P02": { label: "Transportation system continuity", capital: "Physical", hazard: "Generic" },
    "P03": { label: "Communication systems continuity", capital: "Physical", hazard: "Generic" },
    "P04": { label: "Flood early warning", capital: "Physical", hazard: "Flood" },
    "P05": { label: "Heatwave early warning", capital: "Physical", hazard: "Heatwave" },
    "P06": { label: "Continuity of education during floods", capital: "Physical", hazard: "Flood" },
    "P07": { label: "Continuity of education during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P08": { label: "Emergency infrastructure and supplies during floods", capital: "Physical", hazard: "Flood" },
    "P09": { label: "Emergency infrastructure and supplies during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P10": { label: "Continuity of healthcare during disaster during floods", capital: "Physical", hazard: "Flood" },
    "P11": { label: "Continuity of healthcare during disaster during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P12": { label: "Forecasting for floods", capital: "Physical", hazard: "Flood" },
    "P13": { label: "Forecasting for heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P14": { label: "Household protection and adaptation on floods", capital: "Physical", hazard: "Flood" },
    "P15": { label: "Household protection and adaptation on heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P16": { label: "Availability of clean, safe water during floods", capital: "Physical", hazard: "Flood" },
    "P17": { label: "Availability of clean, safe water during heatwaves", capital: "Physical", hazard: "Heatwave" },
    "P18": { label: "Waste management and risk", capital: "Physical", hazard: "Flood" },
    "P19": { label: "Large scale flood protection", capital: "Physical", hazard: "Flood" },
    "S01": { label: "Mutual support", capital: "Social", hazard: "Generic" },
    "S02": { label: "Social inclusiveness of disaster risk management", capital: "Social", hazard: "Generic" },
    "S03": { label: "Community safety", capital: "Social", hazard: "Generic" },
    "S04": { label: "Local leadership", capital: "Social", hazard: "Generic" },
    "S05": { label: "Disaster response personnel", capital: "Social", hazard: "Generic" },
    "S06": { label: "Healthcare accessibility", capital: "Social", hazard: "Generic" },
    "S07": { label: "Trust in local authorities", capital: "Social", hazard: "Generic" },
    "S08": { label: "Intra-community equity", capital: "Social", hazard: "Generic" },
    "S09": { label: "Inter-community equity", capital: "Social", hazard: "Generic" },
    "S10": { label: "Risk reduction planning for floods", capital: "Social", hazard: "Flood" },
    "S11": { label: "Risk reduction planning for heatwaves", capital: "Social", hazard: "Heatwave" },
    "S12": { label: "Response planning for floods", capital: "Social", hazard: "Flood" },
    "S13": { label: "Response planning for heatwaves", capital: "Social", hazard: "Heatwave" },
    "S14": { label: "Family violence and response planning during floods", capital: "Social", hazard: "Flood" },
    "S15": { label: "Family violence and response planning during heatwaves", capital: "Social", hazard: "Heatwave" },
    "S16": { label: "Stakeholder engagement in risk management for floods", capital: "Social", hazard: "Flood" },
    "S17": { label: "Stakeholder engagement in risk management for heatwaves", capital: "Social", hazard: "Heatwave" },
    "S18": { label: "Flood risk mapping", capital: "Social", hazard: "Flood" },
    "S19": { label: "Heatwave risk mapping", capital: "Social", hazard: "Heatwave" },
    "S20": { label: "Flood disaster impact data collection and use", capital: "Social", hazard: "Flood" },
    "S21": { label: "Heatwave disaster impact data collection and use", capital: "Social", hazard: "Heatwave" }
};


// 5. ACTIVITIES & KNOWLEDGE DATA (from script_v2.js)
const SAMPLE_ACTIVITIES = [
    {
        "name": "Community-Led Flood Drill",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "F01",
            "F05"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Tilki",
            "Ramnagar"
        ],
        "capitals": [
            "Social",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Tilki"
                ],
                "oldMen": 7,
                "oldWomen": 2,
                "newMen": 10,
                "newWomen": 30
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Ramnagar"
                ],
                "oldMen": 10,
                "oldWomen": 2,
                "newMen": 9,
                "newWomen": 52
            }
        ]
    },
    {
        "name": "Urban Heat Island Temperature Mapping",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "H01",
            "H03"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Belpur",
            "Dashrathbasti"
        ],
        "capitals": [
            "Natural",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Belpur"
                ],
                "oldMen": 13,
                "oldWomen": 13,
                "newMen": 13,
                "newWomen": 54
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Dashrathbasti"
                ],
                "oldMen": 4,
                "oldWomen": 17,
                "newMen": 27,
                "newWomen": 21
            }
        ]
    },
    {
        "name": "Multi-Hazard Early Warning System Installation",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "F02",
            "H02"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Jabdi",
            "Tilki",
            "Simari"
        ],
        "capitals": [
            "Physical",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Jabdi"
                ],
                "oldMen": 16,
                "oldWomen": 19,
                "newMen": 23,
                "newWomen": 17
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Tilki",
                    "Simari"
                ],
                "oldMen": 10,
                "oldWomen": 5,
                "newMen": 17,
                "newWomen": 13
            }
        ]
    },
    {
        "name": "Resilient Roof Insulation Program",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "H05",
            "H06"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Udayapur",
            "Binbari"
        ],
        "capitals": [
            "Physical",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Udayapur"
                ],
                "oldMen": 14,
                "oldWomen": 16,
                "newMen": 36,
                "newWomen": 64
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Binbari"
                ],
                "oldMen": 8,
                "oldWomen": 3,
                "newMen": 35,
                "newWomen": 13
            }
        ]
    },
    {
        "name": "Drainage Infrastructure Micro-Grant",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "F08",
            "F12"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Khallabichawa",
            "Kanj"
        ],
        "capitals": [
            "Financial",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Khallabichawa"
                ],
                "oldMen": 11,
                "oldWomen": 8,
                "newMen": 18,
                "newWomen": 23
            },
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Kanj"
                ],
                "oldMen": 7,
                "oldWomen": 8,
                "newMen": 34,
                "newWomen": 31
            }
        ]
    },
    {
        "name": "Heat-Resilient Urban Farming Workshop",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "N03",
            "H10"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Kasba",
            "Nand Gau"
        ],
        "capitals": [
            "Natural",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Kasba"
                ],
                "oldMen": 2,
                "oldWomen": 13,
                "newMen": 44,
                "newWomen": 21
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Nand Gau"
                ],
                "oldMen": 11,
                "oldWomen": 19,
                "newMen": 26,
                "newWomen": 32
            }
        ]
    },
    {
        "name": "Emergency Response Volunteer Training",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "S05",
            "S06"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Balmi",
            "Dunga"
        ],
        "capitals": [
            "Human",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Balmi"
                ],
                "oldMen": 16,
                "oldWomen": 18,
                "newMen": 35,
                "newWomen": 50
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Dunga"
                ],
                "oldMen": 1,
                "oldWomen": 11,
                "newMen": 10,
                "newWomen": 53
            }
        ]
    },
    {
        "name": "Flood Risk Awareness School Program",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "F14",
            "F15"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Khall Jain",
            "Balapur"
        ],
        "capitals": [
            "Human",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Khall Jain"
                ],
                "oldMen": 2,
                "oldWomen": 16,
                "newMen": 36,
                "newWomen": 22
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Balapur"
                ],
                "oldMen": 9,
                "oldWomen": 3,
                "newMen": 11,
                "newWomen": 18
            }
        ]
    },
    {
        "name": "Green Canopy Reforestation Initiative",
        "year": "2023",
        "date": "2023-Q2",
        "indicators": [
            "N01",
            "H12"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Bhartapur",
            "Payal"
        ],
        "capitals": [
            "Natural",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q2",
                "communities": [
                    "Bhartapur"
                ],
                "oldMen": 13,
                "oldWomen": 7,
                "newMen": 33,
                "newWomen": 52
            },
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Payal"
                ],
                "oldMen": 4,
                "oldWomen": 2,
                "newMen": 14,
                "newWomen": 27
            }
        ]
    },
    {
        "name": "Resilience Budgeting Technical Paper",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "F10",
            "F11"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Baidi",
            "Shreelanka"
        ],
        "capitals": [
            "Financial",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Baidi"
                ],
                "oldMen": 5,
                "oldWomen": 21,
                "newMen": 58,
                "newWomen": 30
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Shreelanka"
                ],
                "oldMen": 9,
                "oldWomen": 14,
                "newMen": 28,
                "newWomen": 22
            }
        ]
    },
    {
        "name": "Community Water Reservoir Restoration",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "N05",
            "F07"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Dakshinshahipur",
            "Girdharpur"
        ],
        "capitals": [
            "Natural",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Dakshinshahipur"
                ],
                "oldMen": 18,
                "oldWomen": 6,
                "newMen": 38,
                "newWomen": 30
            },
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Girdharpur"
                ],
                "oldMen": 12,
                "oldWomen": 17,
                "newMen": 41,
                "newWomen": 29
            }
        ]
    },
    {
        "name": "Public Health Heat Management Manual",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "H14",
            "S02"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Farela",
            "Tihuni"
        ],
        "capitals": [
            "Human",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Farela"
                ],
                "oldMen": 16,
                "oldWomen": 17,
                "newMen": 47,
                "newWomen": 20
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Tihuni"
                ],
                "oldMen": 2,
                "oldWomen": 2,
                "newMen": 29,
                "newWomen": 13
            }
        ]
    },
    {
        "name": "Climate-Resilient Building Code Advocacy",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "P04",
            "P05"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Chanaura",
            "Sangharshanagar"
        ],
        "capitals": [
            "Social",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Chanaura"
                ],
                "oldMen": 18,
                "oldWomen": 12,
                "newMen": 51,
                "newWomen": 67
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Sangharshanagar"
                ],
                "oldMen": 5,
                "oldWomen": 6,
                "newMen": 7,
                "newWomen": 42
            }
        ]
    },
    {
        "name": "Small Business Flood Insurance Literacy",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "F03",
            "F04"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Tediya",
            "Tigra"
        ],
        "capitals": [
            "Financial",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Tediya"
                ],
                "oldMen": 0,
                "oldWomen": 18,
                "newMen": 42,
                "newWomen": 44
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Tigra"
                ],
                "oldMen": 5,
                "oldWomen": 11,
                "newMen": 17,
                "newWomen": 28
            }
        ]
    },
    {
        "name": "Integrated Hazard Mapping Dashboards",
        "year": "2023",
        "date": "2023-Q2",
        "indicators": [
            "S15",
            "H13"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Bankatti",
            "Banghushra"
        ],
        "capitals": [
            "Physical",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q2",
                "communities": [
                    "Bankatti"
                ],
                "oldMen": 19,
                "oldWomen": 6,
                "newMen": 44,
                "newWomen": 50
            },
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Banghushra"
                ],
                "oldMen": 1,
                "oldWomen": 15,
                "newMen": 34,
                "newWomen": 34
            }
        ]
    },
    {
        "name": "Livestock Heat Protection Shelters",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "N07",
            "H08"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Rajipur",
            "Sankatti"
        ],
        "capitals": [
            "Physical",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Rajipur"
                ],
                "oldMen": 7,
                "oldWomen": 7,
                "newMen": 57,
                "newWomen": 31
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Sankatti"
                ],
                "oldMen": 5,
                "oldWomen": 19,
                "newMen": 42,
                "newWomen": 48
            }
        ]
    },
    {
        "name": "Rainwater Harvesting System Pilots",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "F13",
            "N04"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Shonaha Gau",
            "Bangalipur"
        ],
        "capitals": [
            "Natural",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Shonaha Gau"
                ],
                "oldMen": 16,
                "oldWomen": 22,
                "newMen": 31,
                "newWomen": 66
            },
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Bangalipur"
                ],
                "oldMen": 1,
                "oldWomen": 17,
                "newMen": 9,
                "newWomen": 11
            }
        ]
    },
    {
        "name": "Psychosocial Support for Disaster Recovery",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "S20",
            "S21"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Bhagrahiya",
            "Bhagatpur"
        ],
        "capitals": [
            "Human",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Bhagrahiya"
                ],
                "oldMen": 10,
                "oldWomen": 14,
                "newMen": 59,
                "newWomen": 53
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Bhagatpur"
                ],
                "oldMen": 6,
                "oldWomen": 3,
                "newMen": 20,
                "newWomen": 46
            }
        ]
    },
    {
        "name": "Micro-Credit for Agricultural Adaptation",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "F06",
            "F07"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Patharbojhi",
            "Sonaha"
        ],
        "capitals": [
            "Financial",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Patharbojhi"
                ],
                "oldMen": 13,
                "oldWomen": 8,
                "newMen": 11,
                "newWomen": 57
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Sonaha"
                ],
                "oldMen": 3,
                "oldWomen": 5,
                "newMen": 22,
                "newWomen": 11
            }
        ]
    },
    {
        "name": "Local Government Resilience Network",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "S10",
            "S11"
        ],
        "hazards": [
            "Flood",
            "Heat"
        ],
        "communities": [
            "Dangpur",
            "Dhungrahi"
        ],
        "capitals": [
            "Social",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Dangpur"
                ],
                "oldMen": 5,
                "oldWomen": 7,
                "newMen": 33,
                "newWomen": 39
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Dhungrahi"
                ],
                "oldMen": 1,
                "oldWomen": 5,
                "newMen": 17,
                "newWomen": 28
            }
        ]
    },
    {
        "name": "Solar-Powered Drip Irrigation Expansion",
        "year": "2024",
        "date": "2024-Q3",
        "indicators": [
            "N04",
            "P16"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Kasba",
            "Bangalipur"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Natural",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Kasba"
                ],
                "oldMen": 7,
                "oldWomen": 0,
                "newMen": 53,
                "newWomen": 68
            },
            {
                "quarter": "2024-Q4",
                "communities": [
                    "Bangalipur"
                ],
                "oldMen": 8,
                "oldWomen": 1,
                "newMen": 27,
                "newWomen": 52
            }
        ]
    },
    {
        "name": "Multimodal Early Warning System Drill",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "F02",
            "H02",
            "S15"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Balmi",
            "Tilki"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Balmi"
                ],
                "oldMen": 19,
                "oldWomen": 0,
                "newMen": 34,
                "newWomen": 40
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Tilki"
                ],
                "oldMen": 12,
                "oldWomen": 16,
                "newMen": 33,
                "newWomen": 47
            }
        ]
    },
    {
        "name": "Mangrove Bio-Shield Resilience Audit",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "N05",
            "N06"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Udayapur",
            "Baidi"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Natural",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Udayapur"
                ],
                "oldMen": 13,
                "oldWomen": 4,
                "newMen": 25,
                "newWomen": 29
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Baidi"
                ],
                "oldMen": 11,
                "oldWomen": 16,
                "newMen": 25,
                "newWomen": 43
            }
        ]
    },
    {
        "name": "Community Health Resilience Supply Kit",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "H12",
            "S06"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Kasba"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Human",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Kasba"
                ],
                "oldMen": 1,
                "oldWomen": 17,
                "newMen": 22,
                "newWomen": 26
            }
        ]
    },
    {
        "name": "Flood-Resilient Bridge Reinforcement",
        "year": "2024",
        "date": "2024-Q3",
        "indicators": [
            "P08",
            "P18"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Kumra Gau"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Physical",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Kumra Gau"
                ],
                "oldMen": 4,
                "oldWomen": 12,
                "newMen": 41,
                "newWomen": 36
            }
        ]
    },
    {
        "name": "Micro-Financing for Disaster Recovery",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "F06",
            "F10"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Tediya",
            "Tigra"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Financial",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Tediya"
                ],
                "oldMen": 3,
                "oldWomen": 14,
                "newMen": 31,
                "newWomen": 40
            },
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Tigra"
                ],
                "oldMen": 14,
                "oldWomen": 10,
                "newMen": 29,
                "newWomen": 33
            }
        ]
    },
    {
        "name": "Solar-Powered Public Cooling Centers",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "P01",
            "H06"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Patharbojhi",
            "Sonaha"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Patharbojhi"
                ],
                "oldMen": 8,
                "oldWomen": 10,
                "newMen": 43,
                "newWomen": 46
            },
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Sonaha"
                ],
                "oldMen": 6,
                "oldWomen": 18,
                "newMen": 31,
                "newWomen": 18
            }
        ]
    },
    {
        "name": "Adaptive Farming Practices Field Day",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "N03",
            "N07"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Shonaha Gau"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Natural",
            "Financial"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Shonaha Gau"
                ],
                "oldMen": 7,
                "oldWomen": 19,
                "newMen": 29,
                "newWomen": 30
            }
        ]
    },
    {
        "name": "Disaster Risk Reduction Youth Training",
        "year": "2023",
        "date": "2023-Q2",
        "indicators": [
            "S05",
            "S10"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Rajipur"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Human",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q2",
                "communities": [
                    "Rajipur"
                ],
                "oldMen": 7,
                "oldWomen": 1,
                "newMen": 34,
                "newWomen": 59
            }
        ]
    },
    {
        "name": "Sustainable Tourism Policy Master Plan",
        "year": "2024",
        "date": "2024-Q4",
        "indicators": [
            "S04",
            "S11"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Girdharpur"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Social",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q4",
                "communities": [
                    "Girdharpur"
                ],
                "oldMen": 2,
                "oldWomen": 10,
                "newMen": 10,
                "newWomen": 23
            }
        ]
    },
    {
        "name": "Riverbank Bio-Engineering Annual Audit",
        "year": "2024",
        "date": "2024-Q3",
        "indicators": [
            "N05",
            "P19"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Banghushra"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Natural",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Banghushra"
                ],
                "oldMen": 18,
                "oldWomen": 9,
                "newMen": 14,
                "newWomen": 54
            }
        ]
    },
    {
        "name": "Public Infrastructure Vulnerability Map",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "P14",
            "S20"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Bhaishakhani",
            "Guruwa Gau"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Bhaishakhani"
                ],
                "oldMen": 8,
                "oldWomen": 24,
                "newMen": 11,
                "newWomen": 73
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Guruwa Gau"
                ],
                "oldMen": 2,
                "oldWomen": 4,
                "newMen": 30,
                "newWomen": 46
            }
        ]
    },
    {
        "name": "Women-Led Quick Response Resilience Units",
        "year": "2024",
        "date": "2024-Q1",
        "indicators": [
            "S01",
            "S02"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Dangpur",
            "Dhungrahi"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Social",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Dangpur"
                ],
                "oldMen": 17,
                "oldWomen": 4,
                "newMen": 23,
                "newWomen": 17
            },
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Dhungrahi"
                ],
                "oldMen": 10,
                "oldWomen": 9,
                "newMen": 24,
                "newWomen": 21
            }
        ]
    },
    {
        "name": "Rainwater Harvesting System Technical Camp",
        "year": "2023",
        "date": "2023-Q3",
        "indicators": [
            "F13",
            "N04"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Bhagrahiya"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Natural",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q3",
                "communities": [
                    "Bhagrahiya"
                ],
                "oldMen": 17,
                "oldWomen": 2,
                "newMen": 24,
                "newWomen": 30
            }
        ]
    },
    {
        "name": "Psychosocial First Aid Practitioner Course",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "S20",
            "S21"
        ],
        "hazards": [
            "Multi"
        ],
        "communities": [
            "Bhagatpur"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Human",
            "Physical"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Bhagatpur"
                ],
                "oldMen": 13,
                "oldWomen": 22,
                "newMen": 10,
                "newWomen": 29
            }
        ]
    },
    {
        "name": "Agricultural Crop Insurance Policy Review",
        "year": "2024",
        "date": "2024-Q4",
        "indicators": [
            "F12",
            "F04"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Nand Gau"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Financial",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q4",
                "communities": [
                    "Nand Gau"
                ],
                "oldMen": 9,
                "oldWomen": 22,
                "newMen": 45,
                "newWomen": 61
            }
        ]
    },
    {
        "name": "Cool-Roof Reflective Coating Network Pilot",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "P15",
            "H05"
        ],
        "hazards": [
            "Heat"
        ],
        "communities": [
            "Purba Lalitpur"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Natural"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Purba Lalitpur"
                ],
                "oldMen": 10,
                "oldWomen": 19,
                "newMen": 19,
                "newWomen": 59
            }
        ]
    },
    {
        "name": "Resilient Urban Design Framework Launch",
        "year": "2024",
        "date": "2024-Q2",
        "indicators": [
            "P04",
            "P05"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Sano Bikree"
        ],
        "hasKnowledge": true,
        "capitals": [
            "Physical",
            "Social"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q2",
                "communities": [
                    "Sano Bikree"
                ],
                "oldMen": 0,
                "oldWomen": 11,
                "newMen": 13,
                "newWomen": 31
            }
        ]
    },
    {
        "name": "Community Emergency Alert Radio Servicing",
        "year": "2023",
        "date": "2023-Q4",
        "indicators": [
            "S16",
            "P03"
        ],
        "hazards": [
            "Others"
        ],
        "communities": [
            "Tilki",
            "Jabdi"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Social",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2023-Q4",
                "communities": [
                    "Tilki"
                ],
                "oldMen": 4,
                "oldWomen": 15,
                "newMen": 53,
                "newWomen": 47
            },
            {
                "quarter": "2024-Q1",
                "communities": [
                    "Jabdi"
                ],
                "oldMen": 14,
                "oldWomen": 8,
                "newMen": 28,
                "newWomen": 46
            }
        ]
    },
    {
        "name": "Post-Flood Silt Clearance Community Drive",
        "year": "2024",
        "date": "2024-Q3",
        "indicators": [
            "P18",
            "N02"
        ],
        "hazards": [
            "Flood"
        ],
        "communities": [
            "Balmi",
            "Dunga"
        ],
        "hasKnowledge": false,
        "capitals": [
            "Physical",
            "Human"
        ],
        "breakdown": [
            {
                "quarter": "2024-Q3",
                "communities": [
                    "Balmi"
                ],
                "oldMen": 7,
                "oldWomen": 21,
                "newMen": 49,
                "newWomen": 21
            },
            {
                "quarter": "2024-Q4",
                "communities": [
                    "Dunga"
                ],
                "oldMen": 3,
                "oldWomen": 7,
                "newMen": 6,
                "newWomen": 47
            }
        ]
    }
];

