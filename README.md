                         +---------------------+
                         |       DOCTOR        |
                         +---------------------+
                         | Doctor_ID (PK)      |
                         | Name                |
                         | Specialization      |
                         | Experience          |
                         | Contact             |
                         +----------+----------+
                                    |
                                    | treats (1 : N)
                                    |
                         +----------v----------+
                         |       PATIENT       |
                         +---------------------+
                         | Patient_ID (PK)     |
                         | Name                |
                         | Age                 |
                         | Address             |
                         | Contact             |
                         | Disease / Problem   |
                         +----------+----------+
                                    |
                                    | consumes (M : N)
                                    |
                         +----------v----------+
                         |      MEDICINE       |
                         +---------------------+
                         | Medicine_ID (PK)    |
                         | Name                |
                         | Type / Category     |
                         | Price               |
                         | Stock               |
                         +----------+----------+
                                    ^
                                    | prescribes (M : N)
                                    |
                         +----------+----------+
                         |       DOCTOR        |
                         +---------------------+


                         +---------------------+
                         |        STAFF        |
                         +---------------------+
                         | Staff_ID (PK)       |
                         | Name                |
                         | Position            |
                         | Contact             |
                         +----------+----------+
                                    |
                                    | manages (1 : N)
                                    |
                         +----------v----------+
                         |       PATIENT       |
                         +---------------------+
