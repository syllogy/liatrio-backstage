pipeline {
  agent { label "minimal" }

  environment {
    DOCKER_TAG  = "0.1.0-${GIT_COMMIT[0..7]}"
  }

  stages {
    /// [build]
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
    /// [build]

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

    /// [stage]
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
            --set image.tag=${DOCKER_TAG}
          '''
          stageMessage "Successfully deployed to staging!"
        }
      }
    }
    /// [stage]
  }
}
