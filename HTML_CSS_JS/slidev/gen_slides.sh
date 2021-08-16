#!/bin/bash

# Generates empty slides for slidev
# $1: number of slides to generate

for i in `seq 1 $1`; do 
   echo 
   echo "--- #slide $i";
   echo "";
   echo "# Titolo $i";
   echo "";
   echo "Sottotitolo $i";
   echo "";
   echo "- contenuto $i";
   echo "";  
done

