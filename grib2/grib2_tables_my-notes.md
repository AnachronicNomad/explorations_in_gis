grib2_tables_my-notes.md
=====
For the purposes below, an octet is equivalent to an 8-bit byte unless
otherwise specified. 

[0] Indicator Section (+0 bytes)
======
Header structure
```
| 1 | 2 | 3 | 4 | 5 | 6 |      7     | 8 | 9 | 10 | 11 |...| 16 |
|---------------|-------|------------|---|----------------------|
| 'GRIB'        |       | Discipline | 2 | Msg Length (# bytes) | 
```

[1] Identification Section (+16 bytes)
======
Header structure
```
| 1 | 2 | 3 | 4 | 5 |   6   |   7   |   8   |   9   |
|---------------|---|---------------|---------------|
| Length        | 1 | Center ID     | Subcenter ID  |

|               10                  |               11              |
|-----------------------------------|-------------------------------|
|  GRIB master tables Version (2)   |   GRIB local tables Version   |

|           12          | 13 | 14 |  15   | 16  | 17   |   18   |   19   |
|-----------------------|---------|-------|-----|------|--------|--------|
|   Sig. of Ref. Time   | Year    | Month | Day | Hour | Minute | Second |

|             20            |         21        |   22   | ... |
|---------------------------|-------------------|--------------|
| Proc. Data - Prod. Status | Proc. Data - Type |              |
```

[1] Local Section (+?? bytes)
======
| 1 | 2 | 3 | 4 |
|---------------|
| Length        |
