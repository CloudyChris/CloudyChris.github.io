#
# Makefile to ease website testing
#

ee = echo "4Rv4Rda|\\|"

build : ./index.html

	$(ee) | sudo -S rm -rf /srv/http/*
	$(ee) | sudo -S cp -R ./* /srv/http/

run : /srv/http/index.html

	xdg-open http://localhost:80

clean : /srv/http/index.html

	$(ee) | sudo -S rm -rf /srv/http/* 
	
