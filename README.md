# [nightwatch-appium-android](https://nightwatchjs.org/guide/mobile-app-testing/installation.html)
Example of a nightwatch project to run test automation for mobile android

# install [java JDK](https://openjdk.org/install/)

```bash
sudo apt install openjdk-17-jdk
sudo ln -sfn /usr/lib/jvm/java-1.17.0-openjdk-amd64 /usr/lib/jvm/java-in-use
nano ~/.bashrc
export JAVA_HOME=/usr/lib/jvm/java-in-use
export PATH=$PATH:$JAVA_HOME/bin
source ~/.bashrc
```
# install [android studio](https://developer.android.com/codelabs/basic-android-kotlin-compose-install-android-studio)

```bash
./opt/android-studio/bin/studio.sh
nano ~/.bashrc
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator
alias android='/opt/local/android-studio/bin/studio.sh'
alias emu="$ANDROID_HOME/tools/emulator"
source ~/.bashrc
adb devices
emu -list-avds
emu @nightwatch-android-11
```
# install [node.js and npm](https://nodejs.org)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install node
nvm use node
nvm install-latest-npm
```
# install [appium v2](https://appium.io/docs/en/2.0/intro/)

```bash
npm i -g appium
appium driver install uiautomator2
appium server -p 4723 -a localhost -pa /
```

# install [appium inspector](https://github.com/appium/appium-inspector/releases)

```bash
wget https://github.com/appium/appium-inspector/releases/download/v2023.7.1/Appium-Inspector-linux-2023.7.1.AppImage
chmod +x Appium-Inspector-linux-*.AppImage
./Appium-Inspector-linux-*.AppImage
```

#  [~/.bashrc](./../../.bashrc)
```bash
# variables
export JAVA_HOME=/usr/lib/jvm/java-in-use # JAVA_HOME
export M2_HOME=/opt/maven
export MAVEN_HOME=/opt/maven
export GRADLE_HOME=/opt/gradle
export ANDROID_HOME=~/Android/Sdk # ANDROID_HOME
export PATH=$GRADLE_HOME/bin:/bin:$MAVEN_HOME/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:$JAVA_HOME/bin:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator
alias android='/opt/android-studio/bin/studio.sh' # Android Studio Alias
alias emu="$ANDROID_HOME/tools/emulator" # Abdroid Emulator Alias
export NVM_DIR=~/.nvm # Node Version Manager
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

# to run test cases
```bash
nightwatch -c ./nightwatch.conf.js --tag login --env app.android.emulator.swaglabsmobileapp
OR
npm run test
OR
npm run debug
```

# APKS / IPAS
[Sauce Labs - my-demo-app-rn](https://github.com/saucelabs/my-demo-app-rn/releases)
```bash
wget https://github.com/saucelabs/my-demo-app-rn/releases/download/v1.3.0/Android-MyDemoAppRN.1.3.0.build-244.apk
wget https://github.com/saucelabs/my-demo-app-rn/releases/download/v1.3.0/iOS-Real-Device-MyRNDemoApp.1.3.0-162.ipa
```

[Saucelabs - sample-app-mobile](https://github.com/saucelabs/sample-app-mobile/releases)
```bash
wget https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk
wget https://github.com/saucelabs/sample-app-mobile/releases/download/2.7.1/iOS.RealDevice.SauceLabs.Mobile.Sample.app.2.7.1.ipa
```

[Webdriverio - native-demo-app](https://github.com/webdriverio/native-demo-app/releases)
```bash
wget https://github.com/webdriverio/native-demo-app/releases/download/v0.4.0/Android-NativeDemoApp-0.4.0.apk
```

# How to setup and guide about this material

- This project: https://github.com/maioni/nightwatch-appium-android

- Medium: https://medium.com/@dmaioni

- Presentation : https://tome.app/qa-609/automating-android-testing-with-appium-and-nightwatch-on-linux-clk92hkht00r4mw5rkf59tvu6

- Java: https://medium.com/@dmaioni/java-installing-it-8c10f361f4c8

- Android: https://medium.com/@dmaioni/android-studio-62ab2f54911c

- Node: https://medium.com/@dmaioni/nodejs-install-c4460b1083d3

- Nightwatch: https://medium.com/@dmaioni/nightwatchjs-9a526ea984ad

- Appium: https://medium.com/@dmaioni/appium-server-and-appium-inspector-ff44e25d804    

- Mobile Automation: https://medium.com/@dmaioni/mobile-test-automation-with-nightwatch-and-appium-df95085b041e

- Native Application Automation: https://medium.com/@dmaioni/nightwatchjs-9a526ea984ad

- Mobile Browser Automation: https://medium.com/@dmaioni/nightwatchjs-for-browser-mobile-testing-54676158de64

- Desktop Browser Automation: https://medium.com/@dmaioni/nightwatchjs-for-browser-desktop-testing-1b350fb8ff23

- Other Documentations:

     - https://appium.io/docs/en/2.0/quickstart/
 
     - https://nightwatchjs.org/guide/reference/settings.html

     - https://nightwatchjs.org/guide/nightwatch-cli/command-line-options.html

     - https://github.com/appium/appium-uiautomator2-driver

     - https://appium.github.io/appium-xcuitest-driver/lastest/

# Thank you!