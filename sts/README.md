# Thinktecture {Hacks} Security Token System

## Create a self-signed certificate

To create a self-signed certificate which is used for development purposes, use the following commands:

`openssl req -x509 -newkey rsa:2048 -keyout pem.key -out cert.pem -days XXX`

In case of the certificate in this repository, take a look at the following list for the answers of the openssl questions:

* Enter PEM pass phrase: `hacks`
* Country Name (2 letter code) [AU]: `DE`
* State or Province Name (full name) [Some-State]: `Germany`
* Locality Name (eg, city) []:
* Organization Name (eg, company) [Internet Widgits Pty Ltd]: `Thinktecture AG`
* Organizational Unit Name (eg, section) []:
* Common Name (e.g. server FQDN or YOUR name) []: `localhost`
* Email Address []:

Then use the following command to combine the both files created by the previous command:

`openssl pkcs12 -inkey cert-private.pem -in cert.pem -export -out hacks.pfx`

In case of the certificate in this repository, take a look at the following list for the answers of the openssl questions:

* Enter pass phrase for cert-private.pem: `hacks`
* Enter Export Password: `hacks`

## Interesting Links:

* https://github.com/2020IP/TwentyTwenty.IdentityServer4.EntityFrameworkCore