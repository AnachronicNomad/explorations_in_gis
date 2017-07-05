grib_table_enums.md
=====
I wanted to keep track of the different enumeration codes for table entries in
the GRIB format.
-----

For reference, I have tried to copy and compile the values from [an unofficial NCEP document](http://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc.shtml#disclaimer), just to have them all in one place. However, there are numerous other acronyms and definitions I've found elsewhere; I'll try to edit this to include those as I find need of them. I've also skipped over some of the enum codes for the sake of time.

### TABLE 0.0 - Discipline of Processed Data
  | Code Figure | Meaning |
  | ----------- | ------: |
  | 0       | Meterological Products |
  | 1       | Hydrological Products |
  | 2       | Land Surface Products |
  | 3-4     | Space Products |
  | 5-9     | Reserved |
  | 10      | Oceanographic Products |
  | 11-191  | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255     | Missing |
***

### TABLE 1.2 - Significance of Reference Time
  | Code Figure | Meaning |
  | ----------- | ------: |
  | 0 | Analysis |
  | 1 | Start of Forecast |
  | 2 | Verifying Time of Forecast |
  | 3 | Observation Time |
  | 4-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
---

### Table 1.3 - Production Status of Data
  | Code Figure | Meaning |
  | ----------- | ------: |
  | 0 | Operational Products |
  | 1 | Operational Test Products |
  | 2 | Research Products |
  | 3 | Re-Analysis Products |
  | 4 | THORPEX Interactive Grand Global Ensemble (TIGGE) |
  | 5 | THORPEX Interactive Grand Global Ensemble (TIGGE) test |
  | 6 | S2S Operational Products |
  | 7 | S2S Test Products |
  | 8 | Uncertainties in ensembles of regional reanalysis project (UERRA) |
  | 9 | Uncertainties in ensembles of regional reanalysis project (UERRA) Test |
  | 10-191 | Reserved | 
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
---

### Table 1.4 - Type of Data
  | Code Figure | Meaning |
  | ----------- | ------: |
  | 0 | Analysis Products |
  | 1 | Forecast Products |
  | 2 | Analysis and Forecast Products |
  | 3 | Control Forecast Products |
  | 4 | Perturbed Forecast Products | 
  | 5 | Control and Perturbed Forecast Products |
  | 6 | Processed Satellite Observations |
  | 7 | Processed Radar Observations |
  | 8 | Event Probability |
  | 9-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 192 | Experimental Products |
  | 255 | Missing |
---

### Table 1.5 - Identification Template Number
  | Code Figure | Meaning |
  | ----------- | ------: |
  | 0 | Calendar Definition |
  | 1 | Paleontological Offset |
  | 2 | Calendar Definition and Paleontological Offset |
  | 3-32767 | Reserved |
  | 32768-65534 | Reserved for Local Use |
  | 65535 | Missing |
---

### Table 1.6 - Type of Calendar
  | ----------- | ------: |
  | 0 | Gregorian |
  | 1 | 360-day |
  | 2 | 365-day (see Note 1) |
  | 3 | Proleptic Gregorian (see Note 2) |
  | 4-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |

  1. Essentially a non-leap year
  2. Extends the Gregorian calendar indefinitely in the past
---

***
### Table 3.1 - Grid Definition Template Number
| ----------- | ------: |
