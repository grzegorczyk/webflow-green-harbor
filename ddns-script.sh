##!/usr/bin/env bash

## you can run this script from **ix bases device to update (different) Records

USER="wghuser"
PASS="7@6sEy50GoK9"
DOMAIN="https://wghddns.appstaging.de"
SCRIPT="https://wghddns.appstaging.de/update.phpp"
FORCE=0
MODE="both" # can be undefined, "@", "*" or "both"

IPV4=$(curl -4 -q v4.ident.me)
IPV6=$(curl -6 -q v6.ident.me)

echo ${IPV4}
echo ${IPV6}

## PAYLOAD_IPV4="force=${FORCE}&user=${USER}&password=${PASS}&ipv4=${IPV4}&domain=${DOMAIN}&mode=${MODE}"
## curl -X POST --data "${PAYLOAD_IPV4}" ${SCRIPT}

## PAYLOAD_IPV6="force=${FORCE}&user=${USER}&password=${PASS}&ipv6=${IPV6}&domain=${DOMAIN}&mode=${MODE"}
## curl -X POST --data "${PAYLOAD_IPV6}" ${SCRIPT}

PAYLOAD_BOTH="force=${FORCE}&user=${USER}&password=${PASS}&ipv4=${IPV4}&ipv6=${IPV6}&domain=${DOMAIN}&mode=${MODE}"
curl -X POST --data "${PAYLOAD_BOTH}" ${SCRIPT}