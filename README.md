# another-demo-app
A http endpoint implemented using nodejs , written using typescript ,  docker for containerization and kubernetes for deploying containers

How to run this app in local cluster

Install nodejs, Docker desktop , enable Kubernetes in docker desktop , setup minikube , install kubectl 

1 . git clone https://github.com/sachinkumar579/another-demo-app.git <br />
2 . cd another-demo-app  <br />
3 . docker pull sachinramuk/app <br />
4 . minikube start <br />
5 . kubectl apply -f ./deployment.yaml <br />
6 . minikube service app <br /> 

This is gonna launch the endpoint in your browser 

