# another-demo-app
A http endpoint implemented using nodejs , written using typescript ,  docker for containerization and kubernetes for deploying container to local kubernetes cluster

How to run this app in local cluster

Install nodejs, Docker desktop , enable Kuberneted in docker desktop , setup minikube , install kubectl 

1 . git clone https://github.com/sachinkumar579/another-demo-app.git
2 . cd another-demo-app 
3 . docker pull sachinramuk/app // downloads the image to your local
4 . minikube start
5 . kubectl apply -f ./deployment.yaml
6 . minikube service app 
