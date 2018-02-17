#
# Makefile to ease website testing
#

ee = echo "4Rv4Rda|\\|"

make : ./index.html

	$(ee) | sudo -S rm -rf /srv/http/*
	$(ee) | sudo -S cp -R ./* /srv/http/

clean : /srv/http/index.html

	$(ee) | sudo -S rm -rf /srv/http/* 
	
