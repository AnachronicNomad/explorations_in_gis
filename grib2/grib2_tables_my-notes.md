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
| 0 | uint32 | Length |
| 4 | uint8 | Section Number |
| 5 | uint16 | Orig. Centre ID |
| 7 | uint16 | Orig. Sub-Center ID |
| 9 | uint8 | Master Tables Version |
| 10 | uint8 | Local Tables Version |
| 11 | uint8 | Significance of Reference Time |
| 12 | uint16 | Year |
| 14 | uint8 | Month |
| 15 | uint8 | Day |
| 16 | uint8 | Hour |
| 17 | uint8 | Minute |
| 18 | uint8 | Second |
| 19 | uint8 | Production Status of Processed Data |
| 20 | uint8 | Type of Processed Data |

[3] Grid Definition Section
======
| Offset  | Data Type | Content |
| :-----: | :-------: | :-----: |
| 0 | uint32 | Length |
| 4 | uint8 | Section Number |
| 5 | uint8 | Source of Grid Defn. |
| 6 | uint32 | Number of Data Points |
| 10 | uint8 | Length of optional list of numbers (defining # of points) |
| 11 | uint8 | Interpretation of opt. list of numbers (def. # of points ) |
| 12 | uint16 | Grid Defn. Template Number |
| 14 | ??? | Grid Defn. Template |
| ?? | ??? | Optional list of numbers defining number of points |


