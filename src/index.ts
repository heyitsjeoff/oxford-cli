import { Command } from '@oclif/command';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class OxfordCli extends Command {
  static args = [
    { name: 'word' },
  ];

  async run() {
    const { argv } = this.parse(OxfordCli);
    const word = argv[0];
    const environmentVariables = this.getEnvironmentVariables();
    const axiosInstance = this.createAxiosInstance(environmentVariables);
    const response = await axiosInstance.get(`/entries/en/${word}`);
    this.log(response.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]);
  }

  private getEnvironmentVariables(): EnvironmentVariables {
    const appId = process.env.OXFORD_CLI_APP_ID;
    if (!appId) {
      this.error('environment variable OXFORD_CLI_APP_ID must be set');
    }
    const appKey = process.env.OXFORD_CLI_APP_KEY;
    if (!appKey) {
      this.error('environment variable OXFORD_CLI_APP_KEY must be set');
    }
    // TODO: figure out why ! doesn't suppress string | undefined error
    return {
      appId,
      appKey,
    };
  }

  private createAxiosInstance(environmentVariables: EnvironmentVariables): AxiosInstance {
    const axiosRequestConfig: AxiosRequestConfig = {
      baseURL: 'https://od-api.oxforddictionaries.com/api/v1',
      headers: {
        app_id: environmentVariables.appId,
        app_key: environmentVariables.appKey,
      },
    };
    return axios.create(axiosRequestConfig);
  }
}

interface EnvironmentVariables {
  appId: string | undefined;
  appKey: string | undefined;
}

export = OxfordCli;
