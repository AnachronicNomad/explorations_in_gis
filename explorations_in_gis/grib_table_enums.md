grib_table_enums.md
=====
I wanted to keep track of the different enumeration codes for table entries in
the GRIB format.
-----

For reference, I have tried to copy and compile the values from [an
unofficial NCEP document]
(http://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc.shtml#disclaimer), just
to have them all in one place. However, there are numerous other acronyms and
definitions I've found elsewhere; I'll try to edit this to include those as
I find need of them. I've also skipped over some of the enum codes for the
sake of time. 

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


