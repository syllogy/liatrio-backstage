pipeline {
  agent { label "minimal" }

  environment {
    DOCKER_TAG  = "0.1.0-${GIT_COMMIT[0..7]}"
  }

  stages {
    stage('Build') {
      agent {
        label "lead-toolchain-skaffold"
      }
      steps {
        container('skaffold') {
            sh "DOCKER_BUILDKIT=1 docker build --progress=plain -t ${DOCKER_DEFAULT_REPO}/liatrio-backstage:${DOCKER_TAG} ."
        }
      }
    }

    stage('Publish Image') {
      agent {
        label "lead-toolchain-skaffold"
      }
      when {
        branch 'main'
      }
      steps {
        container('skaffold') {
          sh "DOCKER_BUILDKIT=1 docker push ${DOCKER_DEFAULT_REPO}/liatrio-backstage:${DOCKER_TAG}"
        }
      }
    }

    stage("Deploy to Staging") {
      agent {
        label "lead-toolchain-skaffold"
      }
      when {
          branch 'main'
      }
      environment {
        ISTIO_DOMAIN = "${env.stagingDomain}"
        PRODUCT_NAME = "${env.product}"
        NAMESPACE   = "${env.stagingNamespace}"
        ENVIRONMENT = "staging"
      }
      steps {
        container('skaffold') {
          sh '''
            helm upgrade --install liatrio-backstage charts/backstage/ -n ${NAMESPACE} \
            --set image.repository=${DOCKER_DEFAULT_REPO}/liatrio-backstage \
            --set image.tag=${DOCKER_TAG} \
            --set istioDomain=${ISTIO_DOMAIN}
          '''
          stageMessage "Successfully deployed to staging!"
        }
      }
    }

    stage ('Manual Ready Check') {
      agent none
      when {
        branch 'master'
      }
      options {
        timeout(time: 30, unit: 'MINUTES')
      }
      input {
        message 'Deploy to Production?'
      }
      steps {
        echo "Deploying"
      }
    }

    stage("Deploy to Production") {
      agent {
        label "lead-toolchain-skaffold"
      }
      when {
          branch 'main'
      }
      environment {
        ISTIO_DOMAIN = "${env.productionDomain}"
        PRODUCT_NAME = "${env.product}"
        NAMESPACE   = "${env.productionNamespace}"
        ENVIRONMENT = "production"
      }
      steps {
        container('skaffold') {
          sh '''
            helm upgrade --install liatrio-backstage charts/backstage/ -n ${NAMESPACE} \
            --set image.repository=${DOCKER_DEFAULT_REPO}/liatrio-backstage \
            --set image.tag=${DOCKER_TAG} \
            --set istioDomain=${ISTIO_DOMAIN}
          '''
          stageMessage "Successfully deployed to production!"
        }
      }
    }
  }
}
