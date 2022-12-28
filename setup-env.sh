#!/bin/sh
#
# Setup environment before build layer
touch ~/.bashrc
yum update -y
yum groupinstall "Development Tools" -y
yum install gcc-c++ cairo-devel pango-devel libjpeg-turbo-devel giflib-devel librsvg2-devel pango-devel bzip2-devel jq python3 -y
#
# Setting Up Node.js, refer https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html for details
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
. ~/.nvm/nvm.sh
nvm install v16.19.0
source ~/.bashrc