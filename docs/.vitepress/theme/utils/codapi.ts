const codapiURL = import.meta.env.CODAPI_URL || 'localhost:1313';

interface CodapiRequest {
  sandbox: 'cpp' | 'python' | 'javascript';
  command: 'run';
  files: {
    [filename: string]: string;
  };
}

/* 
id is the unique execution identifier.
ok is true if the code executed without errors, or false otherwise.
duration is the execution time in milliseconds.
stdout is what the code printed to the standard output.
stderr is what the code printed to the standard error, or a compiler/os error (if any).
*/

interface CodapiResponse {
  /**
   * The unique execution identifier.
   */
  id: string;

  /**
   * True if the code executed without errors, or false otherwise.
   */
  ok: boolean;

  /**
   * The execution time in milliseconds.
   */
  duration: number;

  /**
   * What the code printed to the standard output.
   */
  stdout: string;

  /**
   * What the code printed to the standard error, or a compiler/os error (if any).
   */
  stderr: string;
}

export async function codapi(code: string, lang: string): Promise<CodapiResponse> {
  const response = await fetch(`http://${codapiURL}/v1/exec`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sandbox: lang,
      command: 'run',
      files: {
        "": code
      }
    } as CodapiRequest),
  });

  if (!response.ok) {
    throw new Error(`Codapi request failed with status ${response.status}`);
  }

  const data = await response.json();
  return data;
}