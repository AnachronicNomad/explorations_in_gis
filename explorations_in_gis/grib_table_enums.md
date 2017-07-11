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

___
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
  | Code Figure | Meaning |
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

___
### Table 3.1 - Grid Definition Template Number
  | Code Figure | Meaning |
  | ----------- | ------: |
  | 0 | Latitude/Longitude (See Template 3.0) Also called Equidistant Cylindrical or Plate Caree |
  | 1 | Rotated Latitude/Longitude (See Template 3.1) |
  | 2 | Stretched Latitude/Longitude (See Template 3.2) |
  | 3 | Rotated and Stretched Latitude/Longitude (See Template 3.3) |
  | 4 | Variable Resolution Latitude/longitude (See Template 3.4) |
  | 5 | Variable Resolution Rotated Latitude/longitude (See Template 3.5) |
  | 6-9 | Reserved |
  | 10 | Mercator (See Template 3.10) |
  | 11 | Reserved |
  | 12 | Transverse Mercator (See Template 3.12) |
  | 13-19 | Reserved |
  | 20 | Polar Stereographic Projection (Can be North or South) (See Template 3.20) |
  | 21-29 | Reserved |
  | 30 | Lambert Conformal (Can be Secant, Tangent, Conical, or Bipolar) (See Template 3.30) |
  | 31 | Albers Equal Area (See Template 3.31) |
  | 32-39 | Reserved |
  | 40 | Gaussian Latitude/Longitude (See Template 3.40) |
  | 41 | Rotated Gaussian Latitude/Longitude (See Template 3.41) |
  | 42 | Stretched Gaussian Latitude/Longitude (See Template 3.42) |
  | 43 | Rotated and Stretched Gaussian Latitude/Longitude (See Template 3.43) |
  | 44-49 | Reserved |
  | 50 | Spherical Harmonic Coefficients (See Template 3.50) |
  | 51 | Rotated Spherical Harmonic Coefficients (See Template 3.51) |
  | 52 | Stretched Spherical Harmonic Coefficients (See Template 3.52) |
  | 53 | Rotated and Stretched Spherical Harmonic Coefficients (See Template 3.53) |
  | 54-89 | Reserved |
  | 90 | Space View Perspective or Orthographic (See Template 3.90) |
  | 91-99 | Reserved |
  | 100 | Triangular Grid Based on an Icosahedron (See Template 3.100) |
  | 101 | General Unstructured Grid (see Template 3.101) |
  | 102-109 | Reserved |
  | 110 | Equatorial Azimuthal Equidistant Projection (See Template 3.110) |
  | 111-119 | Reserved |
  | 120 | Azimuth-Range Projection (See Template 3.120) |
  | 121-139 | Reserved |
  | 140 | Lambert Azimuthal Equal Area Projection (See Template 3.140) |
  | 141-203 | Reserved |
  | 204 | Curvilinear Orthogonal Grids (See Template 3.204) |
  | 205-999 | Reserved |
  | 1000 | Cross Section Grid with Points Equally Spaced on the Horizontal (See Template 3.1000) |
  | 1001-1099 | Reserved |
  | 1100 | Hovmoller Diagram with Points Equally Spaced on the Horizontal (See Template 3.1100) |
  | 1101-1199 | Reserved |
  | 1200 | Time Section Grid (See Template 3.1200) |
  | 1201-32767 | Reserved |
  | 32768-65534 | Reserved for Local Use |
  | 32768 | Rotated Latitude/Longitude (Arakawa Staggered E-Grid) (See Template 3.32768) |
  | 32769 | Rotated Latitude/Longitude (Arakawa Non-E Staggered Grid) (See Template 3.32769) |
  | 65535 | Missing |
---

### Table 3.2 - Shape of the Reference System
  | Code Figure | Meaning |
  | ----------- | ------: |
  | 0 | Earth assumed spherical with radius = 6,367,470.0 m
  | 1 | Earth assumed spherical with radius specified (in m) by data producer
  | 2 | Earth assumed oblate spheriod with size as determined by IAU in 1965 (major axis = 6,378,160.0 m, minor axis = 6,356,775.0 m, f = 1/297.0) |
  | 3 | Earth assumed oblate spheriod with major and minor axes specified (in km) by data producer |
  | 4 | Earth assumed oblate spheriod as defined in IAG-GRS80 model (major axis = 6,378,137.0 m, minor axis = 6,356,752.314 m, f = 1/298.257222101) |
  | 5 | Earth assumed represented by WGS84 (as used by ICAO since 1998) (Uses IAG-GRS80 as a basis) |
  | 6 | Earth assumed spherical with radius = 6,371,229.0 m |
  | 7 | Earth assumed oblate spheroid with major and minor axes specified (in m) by data producer |
  | 8 | Earth model assumed spherical with radius 6,371,200 m, but the horizontal datum of the resulting Latitude/Longitude field is the WGS84 reference frame |
  | 9 | Earth represented by the OSGB 1936 Datum, using the Airy_1830 Spheroid, the Greenwich meridian as 0 Longitude, the Newlyn datum as mean sea level, 0 height. |
  | 10-191 | Reserved |
  | 192-254 | Reserved for Local Use |
  | 255 | Missing |
---

___
### Table 4.0 - Product Definition Template Number
  | Code Figure | Meaning |
  | ----------- | ------: |
  | 0 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.0) |
  | 1 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.1) |
  | 2 | Derived forecasts based on all ensemble members at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.2) |
  | 3 | Derived forecasts based on a cluster of ensemble members over a rectangular area at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.3) |
  | 4 | Derived forecasts based on a cluster of ensemble members over a circular area at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.4) |
  | 5 | Probability forecasts at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.5) |
  | 6 | Percentile forecasts at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.6) |
  | 7 | Analysis or forecast error at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.7) |
  | 8 | Average, accumulation, extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.  (see Template 4.8) |
  | 9 | Probability forecasts at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.  (see Template 4.9) |
  | 10 | Percentile forecasts at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.  (see Template 4.10) |
  | 11 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.  (see Template 4.11) |
  | 12 | Derived forecasts based on all ensemble members at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.  (see Template 4.12) |
  | 13 | Derived forecasts based on a cluster of ensemble members over a rectangular area at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.  (see Template 4.13) |
  | 14 | Derived forecasts based on a cluster of ensemble members over a circular area at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval.  (see Template 4.14) |
  | 15 | Average, accumulation, extreme values or other statistically-processed values over a spatial area at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.15) |
  | 16-19 | Reserved | 
  | 20 | Radar product  (see Template 4.20) |
  | 21-29 | Reserved |
  | 30 | Satellite product  (see Template 4.30) NOTE: This template is deprecated. Template 4.31 should be used instead. |
  | 31 | Satellite product  (see Template 4.31) |
  | 32 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for simulate (synthetic) staellite data (see Template 4.32) |
  | 33 | Individual Ensemble Forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for simulated (synthetic) satellite data (see Template 4.33) |
  | 34 | Individual Ensemble Forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous interval for simulated (synthetic) satellite data(see Template 4.34) |
  | 35-39 | Reserved |
  | 40 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for atmospheric chemical constituents.  (see Template 4.40) |
  | 41 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for atmospheric chemical constituents.  (see Template 4.41) |
  | 42 | Average, accumulation, and/or extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for atmospheric chemical constituents.  (see Template 4.42) |
  | 43 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval for atmospheric chemical constituents.  (see Template 4.43) |
  | 44 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for aerosol.  (see Template 4.44) |
  | 45 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval for aerosol.  (see Template 4.45) |
  | 46 | Average, accumulation, and/or extreme values or other statistically processed values at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval for aerosol.  (see Template 4.46) |
  | 47 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval for aerosol.  (see Template 4.47) |
  | 48 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for aerosol.  (see Template 4.48) |
  | 49-50 | Reserved |
  | 51 | Categorical forecast at a horizontal level or in a horizontal layer at a point in time.  (see Template 4.51) |
  | 52 | Reserved |
  | 53 | Partitioned parameters at a horizontal level or horizontal layer at a point in time.  (see Template 4.53) |
  | 54 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for partitioned parameters.   (see Template 4.54) |
  | 55 | Spatio-temporal changing tiles at a horizontal level or horizontal layer at a point in time (see Template 4.55) |
  | 56 | Individual ensemble forecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time for spatio-temporal changing tile parameters.   (see Template 4.56) |
  | 57 | Analysis or forecast at a horizontal level or in a horizontal layer at a point in time for atmospheric chemical constituents based on a distribution function (see Template 4.57) |
  | 58-59 | Reserved |
  | 60 | Individual Ensemble Reforecast, control and perturbed, at a horizontal level or in a horizontal layer at a point in time (see Template 4.60) |
  | 61 | Individual Ensemble Reforecast, control and perturbed, at a horizontal level or in a horizontal layer, in a continuous or non-continuous time interval (see Template 4.61) |
  | 62-90 | Reserved |
  | 91 | Categorical forecast at a horizontal level or in a horizontal layer in a continuous or non-continuous time interval.  (see Template 4.91) |
  | 92-253 | Reserved |
  | 254 | CCITT IA5 character string  (see Template 4.254) |
  | 255-999 | Reserved |
  | 1000 | Cross-section of analysis and forecast at a point in time.  (see Template 4.1000) |
  | 1001 | Cross-section of averaged or otherwise statistically processed analysis or forecast over a range of time.  (see Template 4.1001) |
  | 1002 | Cross-section of analysis and forecast, averaged or otherwise statistically-processed over latitude or longitude.  (see Template 4.1002) |
  | 1003-1099 | Reserved |
  | 1100 | Hovmoller-type grid with no averaging or other statistical processing  (see Template 4.1100) |
  | 1101 | Hovmoller-type grid with averaging or other statistical processing  (see Template 4.1101) |
  | 1102-32767 | Reserved |
  | 32768-65534 | Reserved for Local Use |
  | 65535 | Missing |
---

### Table 4.1 - Parameter Catory by Product Discipline

### Table 4.2 - Parameter Number by Product Discipline and Parameter Category

### Table 4.3 - Type of Generating Process

### Table 4.4 - Indicator of Unit of Time Range

### Table 4.5 - Fixed Surface Types and Units

### Table 4.6 - Type of Ensemble Forecast

### Table 4.7 - Derived Forecast

### Table 4.8 - Clustering Method

### Table 4.9 - Probability Type

### Table 4.10 - Type of Statistical Processing

### Table 4.11 - Type of Time Intervals

### Table 4.12 - Operating Mode

###  Table 4.13 - Quality Control Indicator
###  Table 4.14 - Clutter Filter Indicator
###  Table 4.15 - Type of Spatial Processing used to arrive at given data value from the source data
###  Table 4.91 - Type of Interval
###  Table 4.201 - Precipitation Type
###  Table 4.202 - Precipitable Water Category
###  Table 4.203 - Cloud Type
###  Table 4.204 - Thunderstorm Coverage
###  Table 4.205 - Presence of Aerosol
###  Table 4.206 - Volcanic Ash
###  Table 4.207 - Icing
###  Table 4.208 - Turbulence
###  Table 4.209 - Planetary Boundary-Layer Regime
###  Table 4.210 - Contrail Intensity
###  Table 4.211 - Contrail Engine Type
###  Table 4.212 - Land Use
###  Table 4.213 - Soil Type
###  Table 4.215 - Remotely Sensed Snow Coverage
###  Table 4.216 - Elevation of Snow Covered Terrain
###  Table 4.217 - Cloud Mask Type
###  Table 4.218 - Pixel Scene Type
###  Table 4.219 - Cloud Top Height Quality Indicator
###  Table 4.220 - Horizontal Dimension Processed
###  Table 4.221 - Treatment of Missing Data 
###  Table 4.222 - Categorical Result 
###  Table 4.223 - Fire Detection Indicator 
###  Table 4.224 - Categorical Outlook
###  Table 4.225 - Weather
###  Table 4.227 - Icing Scenario (Weather/Cloud Classification)
###  Table 4.230 - Atmospheric Chemical or Physical Type
###  Table 4.233 - Aerosol Type
###  Table 4.234 - Canopy Cover Fraction
###  Table 4.235 - Wave-Generated Wave Spectral Description
###  Table 4.236 - Soil Texture Cover Fraction
###  Table 4.240 - Type of Distribution Function
###  Table 4.241 - Coverage Attributes
###  Table 4.242 - Tile Classification
###  Table 4.243 - Tile Class
###  Table 4.244 - Quality Indicator

## Data Representation Section
###  Table 5.0 - Data Representation Template Number 
###  Table 5.1 - Type of Original Field Values
###  Table 5.2 - Matrix Coordinate Value Function Definition 
###  Table 5.3 - Matrix Coordinate Parameter
###  Table 5.4 - Group Splitting Method
###  Table 5.5 - Missing Value Management for Complex Packing
###  Table 5.6 - Order of Spatial Differencing
###  Table 5.7 - Precision of Floating Point Numbers 
###  Table 5.40 - Type of Compression

## Bit Map Section
### Table 6.0 - Bit Map Indicator

## Data Section
### Table 7.0 - Data Template Number

## 

