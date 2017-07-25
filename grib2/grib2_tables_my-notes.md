grib2_tables_my-notes.md
=====
For the purposes below, an octet is equivalent to an 8-bit byte unless
otherwise specified. 

[0] Indicator Section
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :-----: |
| 0       | ASCII     | 'GRIB'  |
| 6 | uint8 | Discipline |
| 7 | uint8 | GRIB Edition |
| 8 | uint64 | Message Length |

[1] Identification Section
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :-----: |
| 
